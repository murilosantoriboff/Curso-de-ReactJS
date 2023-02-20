function Form() {

    function cadastrarUser(e) {
        e.preventDefault()
        console.log('Cadastrou')
    }

    return (
        <div>
            <h1>Cadastro Teste</h1>
            <form onSubmit={cadastrarUser}>
                <div>
                    <input type="text" placeholder="Digite Seu nome"/>
                </div>
                <div>
                    <input type="submit" value="Salvar"/>
                </div>
            </form>
        </div>
    )
}

export default Form