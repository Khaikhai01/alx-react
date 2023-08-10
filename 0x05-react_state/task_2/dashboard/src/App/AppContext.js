import React, { createContext } from 'react'

const defaultUser = {
    email: '',
    password: '',
    isLoggedIn: false,
};

//Defination of a logout function
const logOut = () => {
    defaultUser.isLoggedIn = false;
};

//creating React context containing user object and logout function
const userContext = createContext({
    defaultUser, defaultLogout,
})

export default{ logOut, defaultUser, userContext }