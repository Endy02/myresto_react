import React from 'react'
// import { Link, Navigate, useNavigate, useLocation } from 'react-router-dom';
// import axiosProvider from '../../core/axios';
import { motion } from 'framer-motion';

// const LOGIN_URL = 'user/login/';

const Login = () => {
    // const userRef = useRef();
    // const errRef = useRef();
    // const navigate = useNavigate()
    // const location = useLocation()

    // const [user, setUser] = useState('');
    // const [pwd, setPwd] = useState('');
    // const [errMsg, setErrMsg] = useState('');
    // const [success, setSucces] = useState(false);

    // useEffect(() => {
    //     userRef.current.focus();
    // }, [])

    // useEffect(() => {
    //     setErrMsg('')
    // }, [user, pwd])

    // const handleSubmit = async (e) => {
    //     e.preventDefault();

    //     try {
    //         const response = await axiosProvider.post(LOGIN_URL,
    //             JSON.stringify({
    //                 email: user,
    //                 password: pwd
    //             }),{
    //                 xsrfHeaderName: 'X-CSRFTOKEN',
    //                 xsrfCookieName: 'csrftoken',
    //             })
    //         localStorage.setItem("access_token", response.data.access)
    //         localStorage.setItem("refresh_token", response.data.refresh)
    //         axiosProvider.defaults.headers['Authorization'] = 'JWT ' + localStorage.getItem("access_token")

    //         setUser('')
    //         setPwd('')
    //         setSucces(true);
    //         navigate('/', {state:{prevUrl: location.pathname}})
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
    //         errRef.current.focus();
    //     }
    // }

    return (
        <>
            <motion.div className='container-log'>
                
            </motion.div>
        </>
    )
}

export default Login