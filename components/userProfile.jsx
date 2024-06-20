import Link from 'next/link'
import styles from '../styles/userProfil.module.css'

export function UserProfile () {
    return(
        <div>
            <form className={styles.form} >
            <ul>
                <li> <Link href="/DashboardClient"> Mes formations</Link> </li>
                <li> <Link href="/">Mon profil</Link> </li>
                <li> <Link href="/">Se déconnecter</Link> </li>
            </ul>
            </form>
        </div>
    )
}