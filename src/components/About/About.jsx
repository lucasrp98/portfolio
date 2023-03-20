import "./About.css";
import ME from "../../../public/assets/about__image/foto-lucas.jpg";
import { FaAward } from "react-icons/fa";
import { FiUsers } from "react-icons/fi";
import { VscFolderLibrary } from "react-icons/vsc";

export const About = () => {
  return (
    <section id="about">
      <h2>Quem sou eu?</h2>

      <div className="container about__container">
        <div className="about__me">
          <div className="about__foto-lucas">
            <img src={ME} alt="Sobre Mim" />
          </div>
        </div>

        <div className="about__content">
          <div className="about__cards">
            <article className="about__card">
              <FaAward className="about__icon" />
              <h5>Graduação</h5>
              <small>Completa</small>
            </article>

            <article className="about__card">
              <VscFolderLibrary className="about__icon" />
              <h5>Projetos</h5>
              <small>9 Realizados</small>
            </article>
          </div>
          <p>
            Meu nome é Lucas Ribeiro Pacheco, sou de Camaquã-RS e graduado no curso de Tecnologia
            em Análise e Desenvolvimento de Sistemas pelo Instituto Federal de Educação,
            Ciência e Tecnologia Sul-rio-grandense (IFSul).
            <br />
          </p>
          <a href="#contact" className="btn btn-primary">
            Fale Comigo
          </a>
        </div>
      </div>
    </section>
  );
};
