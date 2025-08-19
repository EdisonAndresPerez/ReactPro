import EnhancedContainerCard from "../components/card/EnhancedContainerCard";
import ContainerCard from "../components/card/ContainerCard";
import DropInText from "../components/dropInText/DropInText";
import { projectsData } from "../../data/projects";

export const LazyPage2 = () => {
  return (
    <>
      <div>
        <DropInText
          text="Mis Proyectos"
          className="lazypage2-title"
          staggerMs={60}
        />
      </div>
      <div className="lazypage2-container">
        {/* Usando el HOC - con datos por defecto */}
        <EnhancedContainerCard />

        {/* Card premium */}
        <ContainerCard card={projectsData.project1} customClassName="premium-card" />
        <ContainerCard card={projectsData.project2} customClassName="premium-card" />
      </div>
    </>
  );
};

export default LazyPage2;
