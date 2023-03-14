import styles from './ProjectForm.module.css'

import Input from '../form/Input'
import Select from '../form/Select'
import SubmitButton from '../form/SubmitButton'

function ProjectForm({btnText}) {
    return (
        <form className={styles.form}>
            <Input type='text' text='Nome do Projeto' placeholder='Insira o nome do projeto' name='name'/>
            <Input type='number' text='Orçamento do Projeto' placeholder='Insira o orçamento' name='budget'/>
            <Select name='category_id' text='Selecione a categoria'/>
            <SubmitButton text={btnText}/>
        </form>
    )
}

export default ProjectForm