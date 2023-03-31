import React from 'react';
import { Button } from '../components/button/Button';
import { Helmet } from 'react-helmet';

export const MentionLegales = () => {
  return (
    <div className='mx-auto h-full max-w-xl m-8 pt-6 p-4'>
    <Helmet>
      <meta name="description" content="Mentions Légales | Andelor" />
    </Helmet>
      <div className='mb-8'>
        <h1 className='text-center'>Mentions légales</h1>
        <p className='text-base '>Bienvenue sur la page des mentions légales de l'exposition Andelor. Vous y trouverez toutes les informations nécessaires concernant l'utilisation de ce site et de ses services.</p>
      </div>
      <div className='mb-8'>
        <h2>Editeur :</h2>
        <p className='text-base '>Andelor est une exposition organisée par l'équipe Andelor, 5 étudiants en 2ème année de BUT Métiers du Multimédia et de l'Internet à l'IUT de Champs-sur-Marne.</p>
      </div>
      <div className='mb-8'>
        <h2>Conception du site :</h2>
        <p className='text-base '>Webmaster : Yacine Samba</p>
      </div>
      <div className='mb-8'>
        <h2>Hébergeur :</h2>
        <p className='text-base '>Le site de l'exposition Andelor est hébergé par O2SWITCH.</p>
      </div>

      <div className='mb-8'>
        <h2>Propriété intellectuelle :</h2>
        <p className='text-base '>Le contenu de ce site, incluant mais non limité aux textes, graphismes, images, sons et vidéos, est la propriété exclusive de l'équipe Andelor ou de ses partenaires. Toute reproduction, distribution, modification ou utilisation de ce contenu sans autorisation préalable est strictement interdite.</p>
      </div>

      <div className='mb-8'>
        <h2>Responsabilité :</h2>
        <p className='text-base '>L'équipe Andelor s'efforce de garantir l'exactitude et la mise à jour des informations présentes sur ce site, mais ne peut être tenue responsable des erreurs, omissions ou imprécisions qui pourraient s'y trouver. L'utilisateur est donc invité à vérifier les informations auprès de sources officielles.</p>
      </div>

      <div className='mb-8'>
        <h2>Liens externes :</h2>
        <p className='text-base '>Le site de l'exposition Andelor peut contenir des liens vers des sites externes. L'équipe Andelor ne peut être tenue responsable du contenu de ces sites, ni des éventuels préjudices qui pourraient en découler.</p>
      </div>

      <div className='mb-8'>
        <h2>Données personnelles :</h2>
        <p className='text-base '>Les informations personnelles collectées lors de l'achat de billets ou de la création d'un compte utilisateur sont utilisées uniquement dans le cadre de l'exposition Andelor et ne sont pas transmises à des tiers. L'utilisateur dispose d'un droit d'accès, de rectification et de suppression de ses données personnelles.</p>
      </div>

      <div className='mb-8'>
        <h2>Cookies :</h2>
        <p className='text-base '>Le site de l'exposition Andelor utilise des cookies pour améliorer l'expérience utilisateur et collecter des statistiques d'utilisation. L'utilisateur peut à tout moment désactiver l'utilisation des cookies dans les paramètres de son navigateur.</p>
      </div>

      <div className='mb-8'>
        <h2>Modification des mentions légales :</h2>
        <p className='text-base '>L'équipe Andelor se réserve le droit de modifier les présentes mentions légales à tout moment. Les utilisateurs sont invités à consulter cette page régulièrement pour prendre connaissance des éventuelles mises à jour.</p>
      </div>

      <p className='text-base '>Nous espérons que cette page des mentions légales répond à vos interrogations. Si vous avez des questions supplémentaires, n'hésitez pas à nous contacter par mail : webstoryagency@gmail.com.</p>

        <Button path={'/'} margin='my-4 mx-auto'>Retour à l'accueil</Button>
    </div>
  );
}

export default MentionLegales;