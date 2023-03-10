import styles from './Home.module.css'
import savings from '../../img/savings.svg'
import LinkButton from '../layout/LinkButton'

function Home() {
    return (
        <div>
            <section className={styles.home_container}>
                <h1>Bem-vindo ao <span>Costs</span></h1>
                <p>Começe a gerenciar os seus projetos agora mesmo!</p>
                <LinkButton text='Criar Projetos' to='/newproject'/>
                <img src={savings} alt='Costs'/>
            </section>
        </div>
    )
}

export default Home