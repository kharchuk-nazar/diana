import React, {useState, useEffect} from 'react';
import {useNavigate} from 'react-router-dom';

const LoginPage = () => {

    const [form, setForm] = useState({
        email: '',
        password: ''
    })

    const [inputClass, setInputClass] = useState('validate');

    const navigate = useNavigate()

    useEffect(() => {

    }, [inputClass])

    const changeHandler = e => {
        setForm({ ...form, [e.target.name]: e.target.value })
    }
    const onLogin = async (e) => {
        e.preventDefault();

        try {
            const response = await fetch('/api/auth/login', {
                method: "POST",
                body: JSON.stringify(form),
                headers: new Headers(
                    {
                      "Content-Type": "application/json",
                      "Accept":"application/json"
                    }
                ),
            })

            const data = await response.json()

            if (!response.ok) {
                alert(data.message)
                setInputClass(inputClass + " invalid")
                return 
            }

        
            setInputClass("validate");
            localStorage.setItem("adminData", JSON.stringify(data))
            navigate('/');
    
        } catch (e) {
            console.error(e)
        }
    }

    const onCancel = () => {
        navigate('/');
    }


    return (
        <div className='my_login'>
            <div className="row login_content">
                <form className="col s6" >
                    <div className="row">
                        <div className="input-field col s12">
                        <input id="email" 
                               type="email" 
                               name="email"
                               className={inputClass}
                               onChange={changeHandler} 
                               value={form.email}/>
                        <label htmlFor="email">Email</label>
                        </div>
                    </div>
                    <div className="row">
                        <div className="input-field col s12">
                        <input id="password" 
                               type="password" 
                               name="password"
                               className={inputClass} 
                               onChange={changeHandler} 
                               value={form.password}/>
                        <label htmlFor="password">Password</label>
                        </div>
                    </div>
                    <button className="waves-effect waves-light btn"
                            onClick={onLogin}>Війти</button>
                    <button className="waves-effect waves-light btn red darken-3 my_cancel"
                            onClick={onCancel}>Повернутись</button>
                </form>
            </div>
        </div>
    ); 
}

export default LoginPage