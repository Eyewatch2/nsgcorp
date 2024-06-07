import React from "react";
import Container from "./ui/Container";
import AboutTexts from "./ui/AboutTexts";
import Approach from "./ui/Approach";
import HeadingTwo from "./ui/HeadingTwo";
import PresenceAndPerformance from "./ui/PresenceAndPerformance";
import Tag from "./ui/Tag";

const AboutSection = () => {
  return (
    <section id="nosotros" className="pt-20">
      <Container>
        <div className="flex flex-col gap-2 relative">
          <HeadingTwo top={"¿Quiénes"} bottom={"Somos?"} />
          <Tag text="Y qué hacemos" className="w-fit md:absolute md:top-1/3 md:right-0" />
        </div>
        <AboutTexts />
        <Approach />
        <PresenceAndPerformance />
      </Container>
    </section>
  );
};

export default AboutSection;
