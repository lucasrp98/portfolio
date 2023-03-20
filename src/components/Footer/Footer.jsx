import "./Footer.css";
import {
  AiFillYoutube,
  AiFillLinkedin,
  AiOutlineInstagram,
  AiOutlineGithub,
} from "react-icons/ai";

export const Footer = () => {
  return (
    <footer>
      <a href="#" className="footer__logo">
        LUCASCODE
      </a>

      <ul className="permalinks">
        <li>
          <a href="#header">Início</a>
        </li>
        <li>
          <a href="#about">Sobre mim</a>
        </li>
        <li>
          <a href="#portfolio">Portfolio</a>
        </li>
        <li>
          <a href="#contact">Contate-me</a>
        </li>
      </ul>

      <div className="footer__socials">
        <a
          href="https://www.linkedin.com/in/lucas-ribeiro-582871169/"
          target="_blank"
        >
          <AiFillLinkedin />
        </a>
        <a href="https://github.com/lucasrp98" target="_blank">
          <AiOutlineGithub />
        </a>
        <a href="https://www.instagram.com/lucasribeiroo_98/" target="_blank">
          <AiOutlineInstagram />
        </a>
      </div>

      <div className="footer__copyright">
        <small>&copy; Todos os direitos reservados</small>
      </div>
    </footer>
  );
};
