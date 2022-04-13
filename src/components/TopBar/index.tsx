import React from 'react'
import Logo from '../../assets/Rvc_Logo.png'
import styles from './topbar.module.scss'
import { MdOutlineEmail } from 'react-icons/md'
import { VscBellDot } from 'react-icons/vsc'


const Topbar = () => {
    return (
        <div className={styles.container}>
            <div className={styles.content}>
                <div>
            <a href='/'>
            <img src={Logo} alt="Rvc" className={styles.logo} />
            </a>
                </div>
                <div>
            <a href='mailto:nelson.proenca@rvc.law' className={styles.emailref}>
                <MdOutlineEmail className={styles.email} size='25'/>
            </a>
                </div>
                <div>
            <a href='/' className={styles.bellref}>
                <VscBellDot className={styles.bell}size='23'/>
            </a>
                </div>
            <div
             className={styles.user}>Olá, <span className={styles.strong}>$usuario$!</span>
            </div>
            </div>
        </div>
    )
}

export default Topbar;