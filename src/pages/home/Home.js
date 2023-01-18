import React, { useEffect } from 'react'
// import { useLocation, useNavigate } from 'react-router'
import Banner from '../home/Banner'
import { motion } from 'framer-motion'

const Home = () => {
    // const location = useLocation()
    // const navigate = useNavigate()

    useEffect(() => {
       document.title = "Accueil" // Set the title of the page
    }, [])

    return (
        <>
            <motion.div className='wrapper-container' initial={{opacity: 0}} animate={{opacity:1}} exit={{opacity: 0}} >
                <div className='container'>
                    <Banner />
                    Yo man 
                </div>
            </motion.div>
        </>
    )
}

export default Home