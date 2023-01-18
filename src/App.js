import React from 'react'
import { BrowserRouter as Router } from 'react-router-dom'
import Header from './layers/Header'
import Footer from './layers/Footer'
import AnimatedRoutes from './core/AnimatedRoutes'



const App = () => {

    // const [token, setToken] = useState('')

    // const handleToken = (token) => {
    //     setToken(token)
    // }

    return (
        <>
            <Router>
                <Header />
                <AnimatedRoutes />
                <Footer />
            </Router>
        </>
    )
}

export default App;