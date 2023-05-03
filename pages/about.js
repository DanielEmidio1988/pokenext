import Image from "next/image"
import styles from "../styles/About.module.css"

export default function About(){
    return(
        <main className={styles.about}>
            <h1>Sobre este <span>Projeto</span></h1>
            <p>Este projeto foi construido com base nas aulas de Matheus Battisti para estudo em desenvolvimento de aplicações web utilizando NextJs.</p>
            <Image src="/images/charizard.png" width="300" height="300" alt="Charizard"/>
        </main>
    )
}