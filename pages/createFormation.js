import Header from "@/components/Header";
import styles from "../styles/Formation.module.css";
import SearchBar from "@/components/SearchBar";
import { useState, useEffect } from "react";
import { Card } from "@/components/card";

export default function Formation() {
    const [result, setResult] = useState([]);
    const [cards, setCard] = useState([]);
    const [newFormation, setNewFormation] = useState({
        intitule: '',
        prerequis: '',
        prix: '',
        heure: '',
        delais: '',
        creePar: '',
        debut: '',
        duree: '',
        image: '',
        Forapport: '',
        section: ''
    });

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

    const handleChange = (e) => {
        setNewFormation({ ...newFormation, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const res = await fetch('/api/formation', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(newFormation)
            });
            if (res.ok) {
                const data = await res.json();
                setCard([...cards, data]);
                setNewFormation({
                    intitule: '',
                    prerequis: '',
                    prix: '',
                    heure: '',
                    delais: '',
                    creePar: '',
                    debut: '',
                    duree: '',
                    image: '',
                    Forapport: '',
                    section: ''
                });
            }
        } catch (error) {
            console.error('Failed to create formation:', error);
        }
    };

    return (
        <>
            <Header />
            <div className={styles.main}>
                <div className={styles.Form}>
                    <form onSubmit={handleSubmit}>
                        <h1>Nos formations</h1>
                        <p>Les catégories sur cette page ont pour objectif de faciliter et de clarifier la recherche. Choisis la thématique qui t'intéresse le plus et accède aux formations disponibles en un clic. Tu as le choix ! Alors 3, 2, 1 forme-toi !</p>
                        <SearchBar onSearch={handleSearch} />
                        <ul>
                            {result.map((result, index) => (
                                <li key={index}> {result} </li>
                            ))}
                        </ul>
                        <h2>Ajouter une nouvelle formation</h2>
                        <input type="text" name="intitule" value={newFormation.intitule} onChange={handleChange} placeholder="Intitulé" required />
                        <input type="text" name="prerequis" value={newFormation.prerequis} onChange={handleChange} placeholder="Prérequis" required />
                        <input type="number" name="prix" value={newFormation.prix} onChange={handleChange} placeholder="Prix" required />
                        <input type="text" name="heure" value={newFormation.heure} onChange={handleChange} placeholder="Heure" required />
                        <input type="text" name="delais" value={newFormation.delais} onChange={handleChange} placeholder="Délais" required />
                        <input type="text" name="creePar" value={newFormation.creePar} onChange={handleChange} placeholder="Créé par" required />
                        <input type="date" name="debut" value={newFormation.debut} onChange={handleChange} placeholder="Début" required />
                        <input type="text" name="duree" value={newFormation.duree} onChange={handleChange} placeholder="Durée" required />
                        <input type="text" name="image" value={newFormation.image} onChange={handleChange} placeholder="Image" required />
                        <input type="text" name="Forapport" value={newFormation.Forapport} onChange={handleChange} placeholder="Forapport" required />
                        <input type="text" name="section" value={newFormation.section} onChange={handleChange} placeholder="Section" required />
                        <button type="submit">Ajouter la formation</button>
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
