import React from 'react'
import { Routes, Route, useLocation } from 'react-router-dom'
import Home from '../pages/home/Home'
import Profile from '../pages/users/Profile'
import Login from '../pages/users/Login'
import Logout from '../pages/users/Logout'
import Register from '../pages/users/Register'
import { AnimatePresence } from 'framer-motion'


const AnimatedRoutes = () => {
    const location = useLocation()

    return (
        <AnimatePresence>
            <Routes location={location} key={location.pathname}>
                <Route exact path="/" element={<Home />} />
                <Route exact path="/commande" element="" />
                <Route exact path="/login" element={<Login />} />
                <Route exact path="/logout" element={<Logout />} />
                <Route exact path="/register" element={<Register />} />
                <Route exact path="/profile" element={<Profile />} />
                <Route exact path="/recap" element="" />
                <Route exact path="/administrateur" element="" />
                <Route exact path="/administrateur/clients" element="" />
                <Route exact path="/administrateur/comandes" element="" />
            </Routes>
        </AnimatePresence>
    )
}

export default AnimatedRoutes