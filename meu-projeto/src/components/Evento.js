import Button from "./Button"

function Evento() {

    function meu_evento() {
        console.log('Fui Ativado')
    }

    return (
        <div>
            <p>Clique para disparar um evento</p>
            <Button event={meu_evento} text='Primeiro evento'/>
        </div>
    )
}

export default Evento