import axios from 'axios'
import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { toast } from 'react-toastify'
import Layout from '../../components/Layout/Layout'
import '../../styles/AuthStyles.css'


const Login = () => {

    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")

    const navigate = useNavigate()

    const handleSubmit = async (e) => {
        e.preventDefault()
        try {
            const res = await axios.post('/api/v1/auth/login', { email, password, });
            if (
                res.data.success
            ) {
                toast.success(res.data.message)
                navigate("/")
            } else {
                toast.error(res.data && res.data.message)
            }

        } catch (error) {
            console.log(error);
            toast.error('Something went worng')
        }
    }
    return (
        <Layout title="Register">
            <div className='form-container'>

                <form onSubmit={handleSubmit}>
                    <h4 style={{
                        paddingLeft: "48px"
                    }}>LOGIN FORM</h4>

                    <div className="mb-3">

                        <input type="Email"
                            value={email}
                            onChange={(e) => {
                                setEmail(e.target.value)
                            }}
                            className="form-control" id="exampleInputEmail"
                            placeholder='Enter your Email'
                            required />

                    </div>
                    <div className="mb-3">

                        <input type="password"
                            value={password}
                            onChange={(e) => {
                                setPassword(e.target.value)
                            }}
                            className="form-control" id="exampleInputPassword1"
                            placeholder='Enter your Password'
                            required />
                    </div>


                    <button type="submit" className="btn btn-primary">LOGIN</button>
                </form>


            </div>
        </Layout>
    )
}

export default Login