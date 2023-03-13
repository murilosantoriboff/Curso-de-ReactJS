function ProjectForm() {
    return (
        <form>
            <div>
                <input placeholder='Insira um nome para o projeto' type='text'/>
            </div>
            <div>
                <input placeholder='Insira o orçamento total' type='number'/>
            </div>
            <div>
                <select name='category_id'>
                    <option disabled>Selecione a categoria</option>
                </select>
            </div>
            <div>
                <input type='submit' value='Criar projeto'/>
            </div>
        </form>
    )
}

export default ProjectForm