import React, { useState } from "react";
import './styleRegister.css'
import { Link, useNavigate } from 'react-router-dom';


import man from '../../assets/man_computing.svg'
import { GoMarkGithub } from "react-icons/go";
import {FaReact} from 'react-icons/fa'
import useAuth from "../../hooks/useAuth";

export default function Register(){
    let navigate = useNavigate();
    const {signup} = useAuth();

    const [email, setEmail] = useState("");
    const [passwordConf, setPasswordConf] = useState("");
    const [password, setPassword] = useState("");
    const [error, setError] = useState("");

    const handleRegister = () => {
        if(!email | !passwordConf | !password){
            setError("Preencha tudo");
            return;
        } else if (password !== passwordConf) {
            setError("Senhas diferentes")
            return;
        }

        const res = signup(email, password);

        if(res) {
            setError(res);
            return;
        }

        alert("Usuário cadastrado!")
        navigate("/")
    }

    return(
        <div className="mainRegister">
            <div className="containerRegister">
                <div className="leftSideRegister">
                    <div>
                        <h2>Tela de Cadastro</h2>
                    </div>
                    <div>
                        <input type="text" placeholder="Username"/>
                        <input type="email" placeholder="Email" value={email} onChange={(e) => [setEmail(e.target.value), setError("")]}/>
                        <input type="password" placeholder="Password" value={password} onChange={(e) => [setPassword(e.target.value), setError("")]}/>
                        <input type="password" placeholder="Repeat Password" value={passwordConf} onChange={(e) => [setPasswordConf(e.target.value), setError("")]}/>
                    </div>
                    <p>{error}</p>
                    <div>
                        <button onClick={handleRegister}>
                            Cadastrar
                        </button>
                        <Link to="/">
                            <p>Já tem cadastro? Faça seu login</p>
                        </Link>
                    </div>
                </div>
                <div className="rightSideRegister">
                    <img src={man} alt='' />
                </div>
                
            </div>
            <div className="containerEndRegister">
                <p>Feito por Jose Freires</p>
                <div>
                    <GoMarkGithub size={20} />
                    <FaReact size={20} id="logo"/>
                </div>
                
            </div>
        </div>
    )
}