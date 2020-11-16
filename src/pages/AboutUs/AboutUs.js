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
          <h3>title section</h3>
          <p>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Maxime
            magni veritatis exercitationem accusamus facere, obcaecati
            consectetur ipsa quis ipsum quo iste consequatur sit voluptatibus et
            quia aliquam perspiciatis incidunt, dolores labore earum numquam!
            Porro libero inventore nulla, doloremque accusamus autem dolorem.
            Vel, reprehenderit esse numquam nesciunt nam dolorem est quia?
          </p>
        </div>
        <div className="container-section list">
          <h3>Title section</h3>
          <ul>
            <li>
              <p>- sdddsadasd</p>
            </li>
            <li>
              <p>- sdddsadasd</p>
            </li>
            <li>
              <p>- sdddsadasd</p>
            </li>
            <li>
              <p>- sdddsadasd</p>
            </li>
            <li>
              <p>- sdddsadasd</p>
            </li>
            <li>
              <p>- sdddsadasd</p>
            </li>
            <li>
              <p>- sdddsadasd</p>
            </li>
          </ul>
        </div>
        <div className="container-section ">
          <h3>Section title</h3>
          <p>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Maxime
            magni veritatis exercitationem accusamus facere, obcaecati
            consectetur ipsa quis ipsum quo iste consequatur sit voluptatibus et
            quia aliquam perspiciatis incidunt,
          </p>
        </div>
      </div>
    </Wrapper>
  );
};

export default AboutUs;
