import React, { createContext, useContext } from 'react'



const authContext = createContext({
	isAuth:null,
	currentUser:null,
	isLoggedIn:null,
	logOut: () => {},
});

export const useAuth = ()=> useContext(authContext)


const AuthContext = ({children}) => {

  return (
	<div>AuthContext</div>
  )
}

export default AuthContext