import "./Header.css";

import {
  AiFillLinkedin,
  AiFillGithub,
  AiFillInstagram,
} from "react-icons/ai";

export const HeaderSocials = () => {
  return (
    <div className="header__socials">
      <a href="https://www.linkedin.com/in/lucas-ribeiro-582871169/" target="_blank">
        <AiFillLinkedin />
      </a>
      <a href="https://github.com/lucasrp98" target="_blank">
        <AiFillGithub />
      </a>
      <a href="https://www.instagram.com/lucasribeiroo_98/" target="_blank">
        <AiFillInstagram />
      </a>
    </div>
  );
};
