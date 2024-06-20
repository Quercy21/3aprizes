// import Header from "@/components/Header"
// import styles from "../styles/Formation.module.css"
// import SearchBar from "@/components/SearchBar"
// import { useState } from "react"
// import { cardData } from "@/data/cardData";
// import { Card } from "@/components/card";

// export default function Formation() {

//     const [result, setResult] = useState([]);
//     const [cards, setCard] = useState([cardData])
//     const handleSearch = async (query) => {
//         if (!query) {
//             setResult([]);
//             return;
//         }
//         const res = await fetch(`/api/search?query=${query}`);
//         const data = await res.json();
//         setResult(data.result);
//     }

//     return (
//         <>
//             <Header />
//             <div className={styles.main}>
//                 <div className={styles.Form}>
//                     <form >
//                         <h1>Nos formations</h1>
//                         <p>Les catégories sur cette page ont pour objectif de faciliter et de clarifier la recherche. Choisis la thématique qui t'intéresse le plus et accède aux formations disponibles en un clic. Tu as le choix ! Alors 3, 2, 1 forme-toi !</p>
//                         <SearchBar onSearch={handleSearch} />
//                         <ul>
//                             {result.map((result, index) => (
//                                 <li key={index}> {result} </li>
//                             ))}

//                         </ul>
//                     </form>
//                 </div>

//             </div>

//             <div className={styles.Carte}>
//                 {cardData.map((item) => 
//                     { return (
//                     <div key={item.id} >
//                      <Card description={item.description} image={item.image} title={item.title} />
//                     </div>
//                     )}
//                 )}
//             </div>
//         </>
//     )
// }

import Header from "@/components/Header";
import styles from "../styles/Formation.module.css";
import SearchBar from "@/components/SearchBar";
import { useState, useEffect } from "react";
import { Card } from "@/components/card";

export default function Formation() {
    const [result, setResult] = useState([]);
    const [cards, setCard] = useState([]);

    // Récupérer les formations depuis l'API
    useEffect(() => {
        const fetchFormations = async () => {
            const res = await fetch('/api/formation');
            const data = await res.json();
            setCard(data);
        };

        fetchFormations();
    }, []);

    const handleSearch = async (query) => {
        if (!query) {
            setResult([]);
            return;
        }
        const res = await fetch(`/api/search?query=${query}`);
        const data = await res.json();
        setResult(data.result);
    };

    return (
        <>
            <Header />
            <div className={styles.main}>
                <div className={styles.Form}>
                    <form >
                        <h1>Nos formations</h1>
                        <p>Les catégories sur cette page ont pour objectif de faciliter et de clarifier la recherche. Choisis la thématique qui t'intéresse le plus et accède aux formations disponibles en un clic. Tu as le choix ! Alors 3, 2, 1 forme-toi !</p>
                        <SearchBar onSearch={handleSearch} />
                        <ul>
                            {result.map((result, index) => (
                                <li key={index}> {result} </li>
                            ))}
                        </ul>
                    </form>
                </div>
            </div>
            <div className={styles.Carte}>
                {cards.map((item) => (
                    <div key={item.id}>
                        <Card description={item.description} image={item.image} title={item.title} />
                    </div>
                ))}
            </div>
        </>
    );
}
      