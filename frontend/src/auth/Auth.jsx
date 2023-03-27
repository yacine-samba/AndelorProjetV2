import React from 'react'
import Login from '../public/components/context/login/Login';

export const Auth = () => {
  return (
    <div className="h-full m8 pt-6 p-4">
        <Login path={"/tickets"} />

    </div>
  )
}

export default Auth;