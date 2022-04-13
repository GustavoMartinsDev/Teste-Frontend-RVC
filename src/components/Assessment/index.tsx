import React from 'react'
import styles from './assessment.module.scss'
import { BsChatLeftDotsFill } from 'react-icons/bs'

const Assessment = () => {
    return (
        <div className={styles.container}>
            <div className={styles.content}>
                <div className={styles.info}>Avaliação
                </div>
                <form className={styles.form}>
                    <div className={styles.primeirocampo}>
                        <label htmlFor='avaliador' className={styles.avaliadorprincipal}>Avaliador Pricipal</label><br />
                        <select name='avaliador' id='avaliador' className={styles.avaliador} placeholder="123">
                            <option value="avaliador01">Selecione</option>
                            <option value="avaliador01">Avaliador01</option>
                            <option value="avaliador02">Avaliador02</option>
                            <option value="avaliador02">Avaliador03</option>
                            <option value="avaliador02">Avaliador04</option>
                            <option value="avaliador02">Avaliador05</option>
                        </select>
                    </div>
                    <div className={styles.segundocampo}>
                        <label htmlFor='title' className={styles.tituloavaliacao}>Título da Avaliação</label><br />
                        <input type="text" name="title" id="title" className={styles.titulotext} placeholder='Digite o Título...'/>
                    </div>
                    <div className={styles.terceirocampo}>
                        <select className={styles.projetos}>
                            <option value="avaliador01">Selecionar Projetos</option>
                            <option value="avaliador01">Projeto01</option>
                            <option value="avaliador02">Projeto02</option>
                            <option value="avaliador02">Projeto03</option>
                            <option value="avaliador02">Projeto04</option>
                            <option value="avaliador02">Projeto05</option>
                        </select>
                    </div>
                        <button className={styles.cancel}>Cancelar</button>
                        <button className={styles.continue}>Continuar</button>
                </form>
                    <a href='/' className={styles.chat}>
                    <BsChatLeftDotsFill className={styles.chaticon} size='40'/>
                    </a>
            </div>
        </div>
    )
}

export default Assessment;