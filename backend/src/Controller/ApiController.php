<?php

namespace App\Controller;

use App\Entity\User;
use App\Repository\UserRepository;
use App\Entity\Exposition;
use App\Entity\Reservation;
use App\Repository\ExpositionRepository;
use App\Repository\ReservationRepository;
use Doctrine\ORM\EntityManagerInterface;
use Lexik\Bundle\JWTAuthenticationBundle\Encoder\JWTEncoderInterface;
use Lexik\Bundle\JWTAuthenticationBundle\Exception\JWTDecodeFailureException;
use Namshi\JOSE\JWT;
use Symfony\Component\HttpFoundation\JsonResponse;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\HttpKernel\Exception\UnauthorizedHttpException;
use Symfony\Component\Mailer\MailerInterface;
use Symfony\Component\Mime\Email;
use Symfony\Component\Security\Core\Exception\AuthenticationException;
use Symfony\Component\Security\Csrf\TokenStorage\TokenStorageInterface;
use Symfony\Component\Security\Http\Attribute\CurrentUsers;

use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Annotation\Route;

use function PHPUnit\Framework\returnValue;

class ApiController extends AbstractController
{

    private $manager;
    private $res;
    private $expo;
    private $jwtEncoder;
    private $email;
    private $user;

    public function __construct(EntityManagerInterface $manager, ReservationRepository $res, ExpositionRepository $expo, JWTEncoderInterface  $jwtEncoder, UserRepository $email)
    {
        $this->manager = $manager;
        $this->res = $res;
        $this->expo = $expo;
        $this->jwtEncoder = $jwtEncoder;
        $this->email = $email;
    }



    /**
     * @Route("/api/reservation", name="api_reservation", methods={"POST"})
     */
    public function reservation(Request $request, MailerInterface $mailer): Response
    {

        $data = json_decode($request->getContent(), true);

        $nom = $data['nom'] ?? null;
        $prenom = $data['prenom'] ?? null;
        $email = $data['email'] ?? null;
        $telephone = $data['telephone'] ?? null;
        $nombre_billet = $data['nombre_billet'] ?? null;
        $date_reservation = new \DateTimeImmutable($data['date_reservation']);
        $heure_reservation = \DateTimeImmutable::createFromFormat('H', $data['heure_reservation']);
        $id = $data['exposition_id'] ?? null;

        $exposition = $this->expo->find($id);

        if (!$exposition) {
            throw $this->createNotFoundException('L\'exposition correspondant à l\'ID ' . $id . ' n\'a pas été trouvée.');
        }


        // Create a new user object and set its properties
        $reservation = new Reservation();
        $reservation->setNom($nom);
        $reservation->setPrenom($prenom);
        $reservation->setEmail($email);
        $reservation->setTelephone($telephone);
        $reservation->setNombreBillet($nombre_billet);
        $reservation->setDateReservation($date_reservation);
        $reservation->setHeureReservation($heure_reservation);
        $reservation->setExposition($exposition);
        $reservation->setCreatedAt(new \DateTimeImmutable());

        // Persist the reservation object to the database
        $this->manager->persist($reservation);
        $this->manager->flush();


        // Récupérer l'objet de réservation correspondant
        // $reservationId = $reservation->getId();
        // $reservation = $this->res->find($reservationId);

        
        $emailSend = (new Email())
            ->from('contact@andelor.fr')
            ->to($email)

            ->subject('Confirmation de réservation pour l\'exposition Andelor!')

            ->html(
                '
                <h1>Bonjour ' . $nom . '!</h1>
                <p>Nous sommes ravis de vous confirmer votre réservation pour notre exposition Andelor ! Nous avons bien reçu votre demande et votre place est réservée pour la date et l\'heure choisies.</p>

                <p>Nous sommes impatients de vous faire découvrir notre univers coloré et de partager cette expérience unique avec vous. N\'hésitez pas à nous contacter si vous avez des questions ou des demandes particulières.</p>

                <p>Voici les informations de votre réservation :</p>

                <p>Nom : ' . $nom . '</p>
                <p>Prénom : ' . $prenom . '</p>
                <p>Email : ' . $email . '</p>
                <p>Téléphone : ' . $telephone . '</p>
                <p>Nombre de billet.s : ' . $nombre_billet . '</p>
                <p>Date de réservation : ' . $date_reservation->format('d/m/Y') . '</p>
                <p>Heure de réservation : ' . $heure_reservation->format('H') . 'h</p>


                <p>Si vous avez besoin de modifier ou d\'annuler votre réservation, n\'hésitez pas à nous contacter par téléphone ou par e-mail. Nous serons heureux de vous aider à tout moment.</p>

                <p>Vous pouvez retrouver toutes les informations sur notre exposition sur notre site internet : <a href="https://andelor.fr">www.andelor.fr</a></p>

                <p>Merci de votre confiance et à bientôt pour un moment de découverte et d\'émerveillement !</p>

                <p>L\'équipe Andelor</p>
                '
            );

        $mailer->send($emailSend);


        return $this->json($reservation);

    }



    /**
     * @Route("/api/login", name="api_login", methods={"POST"})
     */
    public function login(Request $request): Response
    {
        $data = json_decode($request->getContent(), true);

        $email = $data['email'] ?? null;
        $password = $data['password'] ?? null;

        if (!$email || !$password) {
            return new Response('Email and password are required', Response::HTTP_BAD_REQUEST);
        }

        // Chargement de l'utilisateur avec son email depuis la base de donnée
        $email = $this->email->findOneBy(['email' => $email]);

        if (!$email || !password_verify($data['password'], $email->getPassword())) {
            return new JsonResponse(['message' => 'Invalid credentials'], Response::HTTP_UNAUTHORIZED);
        }

        // Génerer un JWT token
        $token = $this->jwtEncoder->encode([
            'email' => $email->getEmail(),
            'prenom' => $email->getPrenom(),
            'nom' => $email->getNom(),
            'telephone' => $email->getTelephone(),
            'roles' => $email->getRoles(),
            'exp' => time() + 10800 // Expires in 3 hour.
        ]);

        // Return the JWT token.
        return new JsonResponse(['token' => $token]);
    }

    /**
     * @Route("/api/register", name="api_register", methods={"POST"})
     */
    public function register(Request $request): Response
    {
        $data = json_decode($request->getContent(), true);

        $email = $data['email'] ?? null;
        $password = $data['password'] ?? null;
        $nom = $data['nom'] ?? null;
        $prenom = $data['prenom'] ?? null;
        $telephone = $data['telephone'] ?? null;


        if (!$email || !$password) {
            return new Response('Email and password are required', Response::HTTP_BAD_REQUEST);
        }

        // Check if the email is already registered
        $existingUser = $this->email->findOneBy(['email' => $email]);
        if ($existingUser) {
            return new JsonResponse(['message' => 'Email already registered'], Response::HTTP_CONFLICT);
        }

        // Hash the password
        $hashedPassword = password_hash($password, PASSWORD_DEFAULT);

        // Create a new user object and set its properties
        $user = new User();
        $user->setEmail($email);
        $user->setPassword($hashedPassword);
        $user->setPrenom($prenom);
        $user->setNom($nom);
        $user->setTelephone($telephone);
        $user->setCreatedAt(new \DateTimeImmutable());
        $user->setRoles(["ROLE_USER"]);

        // Persist the user object to the database
        $this->manager->persist($user);
        $this->manager->flush();

        // Generate JWT token
        $token = $this->jwtEncoder->encode([
            'email' => $user->getEmail(),
            'prenom' => $user->getPrenom(),
            'nom' => $user->getNom(),
            'roles' => $user->getRoles(),
            'exp' => time() + 10800 // Expires in 3 hour.
        ]);

        // Return the JWT token
        return new JsonResponse(['token' => $token]);
    }


    /**
     * @Route("/api/user-info", name="api_user-info", methods={"GET"})
     */
    public function getUserInfo(Request $request)
    {
        // Récupérer le token JWT depuis le header Authorization
        $authorizationHeader = $request->headers->get('Authorization');
        if (!$authorizationHeader) {
            return new JsonResponse(['message' => 'Missing Authorization header'], Response::HTTP_UNAUTHORIZED);
        }
        $token = str_replace('Bearer ', '', $authorizationHeader);

        // Décoder le token JWT pour récupérer les informations de l'utilisateur
        try {
            $decodedToken = $this->jwtEncoder->decode($token);
        } catch (JWTDecodeFailureException $e) {
            return new JsonResponse(['message' => 'Invalid token'], Response::HTTP_UNAUTHORIZED);
        }

        // Récupérer l'utilisateur correspondant à l'email du token
        $user = $this->email->findOneBy(['email' => $decodedToken['email']]);

        // Vérifier si l'utilisateur existe
        if (!$user) {
            return new JsonResponse(['message' => 'User not found'], Response::HTTP_NOT_FOUND);
        }

        // Retourner les informations personnelles de l'utilisateur
        return new JsonResponse([
            'email' => $user->getEmail(),
            'prenom' => $user->getPrenom(),
            'nom' => $user->getNom(),
            'telephone' => $user->getTelephone(),
        ]);
    }

    /**
     * @Route("/api/getusers", name="api_getusers", methods={"GET"})
     */
    public function getUsers(Request $request): JsonResponse
    {
        // Récupérer le token JWT depuis le header Authorization
        $authorizationHeader = $request->headers->get('Authorization');
        if (!$authorizationHeader) {
            return new JsonResponse(['message' => 'Missing Authorization header'], Response::HTTP_UNAUTHORIZED);
        }
        $token = str_replace('Bearer ', '', $authorizationHeader);

        // Décoder le token JWT pour récupérer les informations de l'utilisateur
        try {
            $decodedToken = $this->jwtEncoder->decode($token);
        } catch (JWTDecodeFailureException $e) {
            return new JsonResponse(['message' => 'Invalid token'], Response::HTTP_UNAUTHORIZED);
        }

        $users = $this->email->findAll();

        return $this->json($users);
    }


    /**
     * @Route("/api/reservation", name="api_reservations", methods={"GET"})
     */
    public function getReservations(Request $request): JsonResponse
    {

        // Récupérer le token JWT depuis le header Authorization
        $authorizationHeader = $request->headers->get('Authorization');
        if (!$authorizationHeader) {
            return new JsonResponse(['message' => 'Missing Authorization header'], Response::HTTP_UNAUTHORIZED);
        }
        $token = str_replace('Bearer ', '', $authorizationHeader);

        // Décoder le token JWT pour récupérer les informations de l'utilisateur
        try {
            $decodedToken = $this->jwtEncoder->decode($token);
        } catch (JWTDecodeFailureException $e) {
            return new JsonResponse(['message' => 'Invalid token'], Response::HTTP_UNAUTHORIZED);
        }

        // Récupérer l'utilisateur correspondant à l'email du token
        $reservations = $this->res->findAll();

        // Vérifier si l'utilisateur existe
        if (!$reservations) {
            return new JsonResponse(['message' => 'Tableau introuvable'], Response::HTTP_NOT_FOUND);
        }

        $data = [];
        foreach ($reservations as $reservation) {
            $data[] = [
                'id' => $reservation->getId(),
                'nom' => $reservation->getNom(),
                'prenom' => $reservation->getPrenom(),
                'email' => $reservation->getEmail(),
                'telephone' => $reservation->getTelephone(),
                'date_reservation' => $reservation->getDateReservation(),
                'heure_reservation' => $reservation->getHeureReservation(),
                'nombre_billet' => $reservation->getNombreBillet(),
                // Ajouter les autres champs ici si nécessaire
            ];
        }

        return $this->json($data);
    }

    /**
     * @Route("/api/total-reservation", name="api_total-reservation", methods={"GET"})
     */

    public function getTotalReservations(Request $request): JsonResponse
    {
        // Récupérer le token JWT depuis le header Authorization
        $authorizationHeader = $request->headers->get('Authorization');
        if (!$authorizationHeader) {
            return new JsonResponse(['message' => 'Missing Authorization header'], Response::HTTP_UNAUTHORIZED);
        }
        $token = str_replace('Bearer ', '', $authorizationHeader);

        // Décoder le token JWT pour récupérer les informations de l'utilisateur
        try {
            $decodedToken = $this->jwtEncoder->decode($token);
        } catch (JWTDecodeFailureException $e) {
            return new JsonResponse(['message' => 'Invalid token'], Response::HTTP_UNAUTHORIZED);
        }


        $reservations = $this->res->findAll();

        if (!$reservations) {
            return new JsonResponse(['message' => 'Tableau introuvable'], Response::HTTP_NOT_FOUND);
        }


        // Sommes des billets vendus

        $total = 0;
        foreach ($reservations as $reservation) {
            $total += $reservation->getNombreBillet();
        }

        $data = [
            'total' => $total
        ];

        return $this->json($data);
    }


    /**
     * @Route("/api/last-reservation", name="api_last_reservations", methods={"GET"})
     */
    public function getLastReservations(Request $request): JsonResponse
    {

        // Récupérer le token JWT depuis le header Authorization
        $authorizationHeader = $request->headers->get('Authorization');
        if (!$authorizationHeader) {
            return new JsonResponse(['message' => 'Missing Authorization header'], Response::HTTP_UNAUTHORIZED);
        }
        $token = str_replace('Bearer ', '', $authorizationHeader);

        // Décoder le token JWT pour récupérer les informations de l'utilisateur
        try {
            $decodedToken = $this->jwtEncoder->decode($token);
        } catch (JWTDecodeFailureException $e) {
            return new JsonResponse(['message' => 'Invalid token'], Response::HTTP_UNAUTHORIZED);
        }

        $reservations = $this->res->findBy([], ['id' => 'DESC'], 3);

        if (!$reservations) {
            return new JsonResponse(['message' => 'Tableau introuvable'], Response::HTTP_NOT_FOUND);
        }

        $data = [];
        foreach ($reservations as $reservation) {
            $data[] = [
                'nom' => $reservation->getNom(),
                'date_reservation' => $reservation->getDateReservation(),
                'heure_reservation' => $reservation->getHeureReservation(),
                'nombre_billet' => $reservation->getNombreBillet(),
            ];
        }

        return $this->json($data);
    }

    // /**
    //  * @Route("/api/logout", name="api_logout")
    //  */
    // public function logout(TokenStorageInterface $tokenStorage): JsonResponse
    // {
    //     // Récupération du token de l'utilisateur connecté
    //     $token = $tokenStorage->getToken();

    //     // Si l'utilisateur est connecté
    //     if ($token instanceof TokenInterface) {
    //         // Déconnexion de l'utilisateur
    //         $tokenStorage->setToken(null);
    //     }

    //     // Création de la réponse JSON
    //     $response = new JsonResponse([
    //         'message' => 'Déconnexion réussite'
    //     ]);

    //     // Suppression du cookie de session
    //     $response->headers->clearCookie('PHPSESSID');

    //     return $response;
    // }

}
