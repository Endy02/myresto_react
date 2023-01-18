import React, { useState } from 'react'
import { Navigate } from 'react-router-dom';
// import axiosProvider from '../../core/axios';
import { motion } from 'framer-motion'

// const REGISTER_URL = 'user/register/'

const Register = () => {
    // const userRef = useRef();
    // const errRef = useRef();

    // const [user, setUser] = useState('');
    // const [email, setEmail] = useState('')
    // const [pwd, setPwd] = useState('');
    // const [confirmPwd, setConfirmPwd] = useState('');
    // const [errMsg, setErrMsg] = useState('');
    const [success, setSuccess] = useState(false);

    // useEffect(() => {
    //     userRef.current.focus();
    // }, [])

    // useEffect(() => {
    //     setErrMsg('')
    // }, [user, pwd])

    // const handleSubmit = async (e) => {
    //     e.preventDefault();

    //     try {
    //         const response = await axiosProvider.post(REGISTER_URL,
    //             JSON.stringify({
    //                 username: user,
    //                 email: email,
    //                 password: pwd
    //             }),{
    //                 xsrfHeaderName: 'X-CSRFTOKEN',
    //                 xsrfCookieName: 'csrftoken',
    //             })
    //         setUser('')
    //         setEmail('')
    //         setPwd('')
    //         setConfirmPwd('')
    //         setSucces(true);
    //     } catch (err) {
    //         if (!err?.response) {
    //             setErrMsg('No Server Response')
    //         } else if (err.response?.status === 400) {
    //             setErrMsg('Missing username or Password');
    //         } else if (err.response?.status === 401) {
    //             setErrMsg('Unauthorized')
    //         } else {
    //             setErrMsg('Login Failed')
    //         }
    //     }
    // }

    const handleSuccess = () => {
        setSuccess(!success)
    }
    return (
        <>
            {success ? (
                <>
                    <motion.div initial={{opacity: 0}} animate={{opacity:1}} exit={{opacity: 0}} className='container-log'>
                        <div className='container-full-width flex-col-center full-height'>
                            <div className='log-wrapper'>
                                <Navigate to={"/login"} />
                            </div>
                        </div>
                    </motion.div>
                </>
            ) : (
                <motion.div initial={{opacity: 0}} animate={{opacity:1}} exit={{opacity: 0}} className='container-log'>
                    <div onClick={handleSuccess}>

                    </div>
                </motion.div>
            )}
        </>
    )
}

export default Register