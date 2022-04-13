import React from 'react'
import Topbar from '../TopBar';
import styles from './header.module.scss'
import { FiUserCheck, FiDollarSign } from 'react-icons/fi'
import { AiOutlineUnorderedList} from 'react-icons/ai'
import { MdOutlinePeople} from 'react-icons/md'
import { BiData, BiGridAlt} from 'react-icons/bi'
import { BsVolumeDown} from 'react-icons/bs'

const Header = () => {
    return (
        <>
            <Topbar />
            <div className={styles.container}>
                <div className={styles.content}>
                    <BiGridAlt className={styles.adm} size='20' />
                    <a href='/' className={styles.admtext}>Administrativo</a>
                    <hr/>
                    <FiUserCheck className={styles.user} size='20' />
                    <a href='/' className={styles.admtext}>Cadastro Gerais</a>
                    <hr/>
                    <FiDollarSign className={styles.financeiro} size='20' />
                    <a href='/' className={styles.financeirotext}>Financeiro</a>
                    <hr/>
                    <AiOutlineUnorderedList className={styles.links} size='20' />
                    <a href='/' className={styles.linkstext}>Links Externos</a>
                    <hr/>
                    <MdOutlinePeople className={styles.rh} size='24' />
                    <a href='/' className={styles.rhtext}>RH</a>
                    <hr/>
                    <BiData className={styles.ti} size='22' />
                    <a href='/' className={styles.titext}>TI</a>
                    <hr/>
                    <BsVolumeDown className={styles.treinamentos} size='24' />
                    <a href='/' className={styles.treinamentostext}>Treinamentos</a>
                </div>
            </div>
        </>
    )
}

export default Header;