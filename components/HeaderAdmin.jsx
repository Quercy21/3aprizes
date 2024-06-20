import Image from "next/image"
import styles from "../styles/headerAdmin.module.css"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { useState } from 'react';
import SearchBar from "./SearchBar";
import { UserProfile } from "./userProfile";


export default function HeaderAdmin() {
    const [isOpen, setIsOpen] = useState(false);
    const [show, setShow] = useState(false)

    const toggleMenu = () => {
        setIsOpen(!isOpen);
    };
     const handleClick = () => {
        setShow(!show)
     }

    return (
        <>
        <nav className={styles.nav}>
            <Image
                className={styles.img}
                src="/1.png"
                alt="Logo"
                width={200}
                height={300}
            />
            <SearchBar className={styles.search} />
            <button className={styles.hamburger} onClick={toggleMenu}>
                ☰
            </button>
            <ul className={`${styles.menu} ${isOpen ? styles.menuOpen : ''}`}>
                <li><Link href="/">Accueil</Link></li>
                 <li className={styles.profile} onClick={() => handleClick()} >
                    <Image src="/R.jpg" width={50} height={50} className={styles.profileImage} /> 
                   

                 </li>
            </ul>
        </nav>
        <div className={styles.boxProfile}>
        {show && <UserProfile />}
        </div>
        </> 
    );
}
