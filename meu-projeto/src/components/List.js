import PropTypes from 'prop-types'

function List({marca, ano_lancamento}) {
    return (
        <>
            <ul>
                <li>{marca} - {ano_lancamento}</li>
            </ul>
        </>
    )
}

List.propTypes = {
    marca: PropTypes.string,
    ano_lancamento: PropTypes.number
}

List.defaultProps = {
    marca: 'Faltou marca',
    ano_lancamento: 0
}

export default List