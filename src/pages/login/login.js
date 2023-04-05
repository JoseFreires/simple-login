import React, { useState } from "react";
import { useNavigate, Link } from 'react-router-dom';
import useAuth from "../../hooks/useAuth";
import './styleLogin.css'

import man from '../../assets/man_computing.svg'
import { GoMarkGithub } from "react-icons/go";
import {FaReact} from 'react-icons/fa'

export default function Login(){
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [error, setError] = useState("");

    const { signin } = useAuth();
    let navigate = useNavigate();

    const handleLogin = () => {
        if (!email | !password) {
            setError("Preencha todos os campos")
            return;
        }

        const res = signin(email, password);

        if (res) {
            setError(res);
            return;
        }

        navigate("/home")
    };

    return(
        <div className="mainLogin">
            <div className="containerLogin">
                <div className="leftSide">
                    <div>
                        <h2>Tela de Login</h2>
                    </div>
                    <div>
                        <input 
                            type="email" 
                            placeholder="Seu email" 
                            value={email} 
                            onChange={(e) => [setEmail(e.target.value), setError("")]}
                        />
                        <input
                            type="password"
                            placeholder="Sua senha" 
                            value={password} 
                            onChange={(e) => [setPassword(e.target.value), setError("")]}
                        />
                        <p>{error}</p>
                    </div>
                    <div>
                        <button onClick={handleLogin}>
                            Entrar
                        </button>
                        <Link to="/register">
                            <p> Não tem cadastro? Cadastra-se </p>
                        </Link>
                    </div>
                </div>
                <div className="rightSide">
                    <img src={man} alt='' />
                </div>
                
            </div>
            <div className="containerEnd">
                <p>Feito por Jose Freires</p>
                <div>
                    <GoMarkGithub size={20} />
                    <FaReact size={20} id="logo"/>
                </div>   
            </div>
        </div>
    )
}