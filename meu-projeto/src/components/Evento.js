function Evento() {

    function meu_evento() {
        console.log('Fui Ativado')
    }

    return (
        <div>
            <p>Clique para disparar um evento</p>
            <button onClick={meu_evento}>Ativar</button>
        </div>
    )
}

export default Evento