import Image from "next/image"
import styles from "../styles/card.module.css"

export const Card = ( {image, description, title}) => {
    return(
        <div className={styles.cardBox}>
          <div className={styles.cardImage}>
            <Image src={image} alt={title} className={styles.img} width={274} height={200} />
          </div>
           <div className={styles.cardText}>
           <h2>{title}</h2>
           <p className={styles.cardParaf}>
            {description}
           </p>
           <button className={styles.cardBtn}> <a href="/Agenda">voir plus</a> </button>
           </div>
        </div>
    )
}