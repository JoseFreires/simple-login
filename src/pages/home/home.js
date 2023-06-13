import * as React from 'react';
import './styleHome.css'

import useAuth from '../../hooks/useAuth';
import { useNavigate} from 'react-router-dom';

export default function Home(){
    const { signout } = useAuth();
    let navigate = useNavigate();

    const [aleatory, setAleatory] = React.useState(0)
    const [max, setMax] = React.useState();
    const [nada, setNada] = React.useState();

    const handleLogOut = () => {
        signout();

        navigate('/')
    }

    const handleAleatory = () => {

        if(max > 0){
            setAleatory(parseInt(Math.random() * max))
        } else {
            setNada("Não foi colocado um máximo")
        }
        
    }

    return(
            <div className='mainHome'>
                <h2>Gerador de Número Aleatório</h2>
                <div className='local'>
                    <p>{aleatory}</p>
                    <input value={max} onChange={(e) => [setMax(e.target.value)]}/>
                </div>
                <p>{nada}</p>
                <div className='containerButtons'>
                    <button onClick={handleAleatory}>Gerar</button>
                    <button onClick={handleLogOut}>Sair</button>
                </div>
            </div>
    )
}