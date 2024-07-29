import axios from 'axios'
import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { toast } from 'react-toastify'
import Layout from '../../components/Layout/Layout'
import '../../styles/AuthStyles.css'
const Register = () => {
    const [name, setName] = useState("")
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const [phone, setPhone] = useState("")
    const [address, setAddress] = useState("")
    const navigate = useNavigate()

    const handleSubmit = async (e) => {
        e.preventDefault()
        try {
            const res = await axios.post('/api/v1/auth/register', { name, email, password, phone, address });
            if (
                res.data.success
            ) {
                toast.success(res.data.message)
                navigate('/Login')
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
                        paddingLeft: "30px"
                    }}>REGISTER FORM</h4>
                    <div className="mb-3">

                        <input type="Text"
                            value={name}
                            onChange={(e) => {
                                setName(e.target.value)
                            }}
                            className="form-control" id="exampleInputName"
                            placeholder='Enter your Name'
                            required
                        />

                    </div>
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
                    <div className="mb-3">

                        <input type="Text"
                            value={phone}
                            onChange={(e) => {
                                setPhone(e.target.value)
                            }}
                            className="form-control" id="exampleInputName"
                            placeholder='Enter your Phone no'
                            required
                        />

                    </div>
                    <div className="mb-3">

                        <input type="Text"
                            value={address}
                            onChange={(e) => {
                                setAddress(e.target.value)
                            }}
                            className="form-control" id="exampleInputName"
                            placeholder='Enter your Address'
                            required
                        />

                    </div>

                    <button type="submit" className="btn btn-primary">Submit</button>
                </form>


            </div>
        </Layout>
    )
}

export default Register