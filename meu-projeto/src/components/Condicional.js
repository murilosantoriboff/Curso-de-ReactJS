import {useState} from 'react'

function Condicional() {
    
    const [email, setEmail] = useState()
    const [userEmail, setUserEmail] = useState()

    function enviarEmail(e) {
        e.preventDefault()
        setUserEmail(email)      
    }

    function limparEmail() {
        setUserEmail('')
    }
    
    return (
        <div>
            <h2>Cadastre seu email</h2>
            <form>
                <input placeholder='Digite seu email' type='email' onChange={(e) => setEmail(e.target.value)}/>
                <button type='submit' onClick={enviarEmail}>Enviar E-mail</button>
            </form>
            {userEmail && (
                <div>
                    E email está preenchido
                    <button onClick={limparEmail}>Limpar Email</button>
                </div>
            )}

        </div>
    )
}

export default Condicional