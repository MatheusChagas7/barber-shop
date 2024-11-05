'use client';
import {useState} from "react";
import Image from "next/image";
import estilos from "./page.module.css";

import Logo from "/public/barbearia.png";
import { BsSun, BsMoon } from "react-icons/bs";


export default function Home() {

  const light = estilos.light;
  const dark = estilos.dark;

  const logo_light = estilos.logo_light;
  const logo_dark = estilos.logo_dark;

  const btn_tema_light = estilos.btn_tema_light;
  const btn_tema_dark = estilos.btn_tema_dark;

  const [tema, setTema] = useState(false);

  function trocaTema(){
    setTema(!tema);
  }

  return (
    <div className={tema ? light : dark}>
      <header className={estilos.header}>
        <Image src={Logo} className={tema ? logo_light : logo_dark} alt="Logo barber shop"></Image>
        <button onClick={trocaTema} className={tema ? btn_tema_dark : btn_tema_light}>{tema ? <BsSun/> : <BsMoon/>}</button>
      </header>
      <main className={estilos.main}>

        <section className={estilos.secao_capa}>
          
        </section>
        
        <div className={estilos.container_sobre}>
          <h1>Bem-Vindo a Barber Shop</h1>

          <p>
            Nossa barbearia sempre oferece profissionais de qualidade e estamos prontos para lidar com suas maiores expectativas.
          </p>

          <p>
            Nossos serviços são dedicados ao seu sucesso pessoal. Aqui temos uma equipe premiada que demonstrou o talento de mestres barbeiros em vários concursos de estilo. 
            Deixe nosso barbeiro ser seu estilista pessoal e você nunca ficará desapontado.
          </p>

          <p>
            S. Kelly
          </p>
        </div>

      </main>
    </div>
  );
}
