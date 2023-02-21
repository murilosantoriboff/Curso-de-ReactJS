import { useState } from 'react'

function Form() {

    function cadastrarUser(e) {
        e.preventDefault()
        console.log(name)
        console.log(password)
    }

    const [name, setName] = useState()
    const [password, setPassword] = useState()

    return (
        <div>
            <h1>Cadastro Teste</h1>
            <form onSubmit={cadastrarUser}>
                <div>
                    <input type="text" id='name' name='name' placeholder="Digite seu nome" onChange={(e) => setName(e.target.value)}/>
                </div>
                <div>
                    <input type="password" id='password' name='password' placeholder="Digite sua senha" onChange={(e) => setPassword(e.target.value)}/>
                </div>
                <div>
                    <input type="submit" value="Salvar"/>
                </div>
            </form>
        </div>
    )
}

export default Form