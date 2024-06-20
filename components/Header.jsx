import Image from "next/image"
import styles from "../styles/header.module.css"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { useState } from 'react';
import DarkMode from "./DarkMode";

export default function Header() {
    const [isOpen, setIsOpen] = useState(false);

    const toggleMenu = () => {
        setIsOpen(!isOpen);
    };

    return (
        <nav className={styles.nav}>
            <Image
                className={styles.img}
                src="/1.png"
                alt="Logo"
                width={200}
                height={300}
            />
            <button className={styles.hamburger} onClick={toggleMenu}>
                ☰
            </button>
            <ul className={`${styles.menu} ${isOpen ? styles.menuOpen : ''}`}>
                <li><Link href="/">Accueil</Link></li>
                <li><Link href="/">Nos services</Link></li>
                <li><Link href="/Connexion">Nos compétences</Link></li>
                <li><Link href="/Formation">Nos Formations</Link></li>
                <li><Button className={styles.ghost1} variant="secondary"><a href="/Connexion">Se connecter</a></Button></li>
                <li><Button className={styles.ghost2} variant="ghost"><a href="/Inscription">S'inscrire</a></Button></li>
                 <DarkMode/> 
            </ul>
                
        </nav>
    );
}
