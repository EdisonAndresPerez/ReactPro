import andres from "../../img/andres.jpeg";
import DropInText from "../components/dropInText/DropInText";
import { Github, FileText } from 'lucide-react';

export const LazyPage1 = () => {
  return (
    <div className="lazypage1-content">
      <DropInText
        text="Edison Andres Perez Martinez"
        className="lazypage1-title"
        staggerMs={60}
      />

      <div className="lazypage1-img-container">
        <img
          className="lazypage1-img"
          src={andres}
          alt="Foto de Edison Andres Perez Martinez"
        />
      </div>

      <div className="lazypage1-buttons">
        <a
          className="btn btn--ghost"
          href="https://github.com/EdisonAndresPerez"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Github size={20} />
          <span>Link GitHub</span>
        </a>
        <a className="btn btn--primary" href="/analisis y desarrollo de software.pdf" download>
          <FileText size={20} />
          <span>Descargar CV</span>
        </a>
      </div>
    </div>
  );
};

export default LazyPage1;
