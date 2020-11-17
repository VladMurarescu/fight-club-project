import React from "react";
import "./AboutUs.css";
import Wrapper from "../../components/Wrapper/Wrapper";
import Title from "../../components/Title/Title";

const AboutUs = () => {
  return (
    <Wrapper>
      <Title title="un proiect de viitor" />
      <div className="about-us-container">
        <div className="container-section">
          <h3>Onoare, disciplină și respect</h3>
          <p>
            Muri Fight Academy pleacă de la un concept prin care poţi obţine
            deconectare de la stresul zilnic, atât prin exerciţii, o nutriţie
            adecvată dar şi o socializare mai puternică. Fie că aveţi nevoie
            pentru a pierde în greutate, modelare sau remodelare a masei
            musculare, reducerea stresului, îmbunatăţirea performanţei sportive
            Clubul Sportiv Ciprian Sora este locul in care vă puteţi atinge
            obiectivul!
          </p>
        </div>
        <div className="container-section list">
          <h3>Principiile academiei noastre</h3>
          <ul>
            <li>
              <p>- Profesionalism</p>
            </li>
            <li>
              <p>- Seriozitate</p>
            </li>
            <li>
              <p>- Muncă</p>
            </li>
            <li>
              <p>- Suport</p>
            </li>
            <li>
              <p>- Ambiție</p>
            </li>
            <li>
              <p>- Sacrificiu</p>
            </li>
            <li>
              <p>- Dăruire</p>
            </li>
          </ul>
        </div>
        <div className="container-section ">
          <h3>Vârsta nu a fost, nu este și nu va fi niciodată un impediment</h3>
          <p>
            SPORTUL NU ARE VÂRSTĂ! TOT CE AI NEVOIE PENTRU A-ŢI IMBUNĂTĂŢI
            CALITATEA VIEŢII SE AFLĂ AICI! HAIDEŢI SĂ FACEM SPORT IMPREUNĂ!
          </p>
        </div>
      </div>
    </Wrapper>
  );
};

export default AboutUs;
