import React from "react";

const About = () => {
  return (
    <div name="about" className="w-full h-screen bg-[#0a192f] text-gray-300">
      <div className="flex flex-col justify-center items-center w-full h-full">
        <div className="max-w-[1000px] w-full grid grid-cols-2 gap-8">
          <div className="sm:text-right pb-8 pl-4">
            <p className="text-4xl font-bold inline border-b-4 border-pink-600">
              Sobre Mí
            </p>
          </div>
          <div></div>
        </div>
        <div className="max-w-[1000px] w-full grid sm:grid-cols-2 gap-8 px-4">
          <div className="sm:text-right text-4xl font-bold">
            <p>Porfavor mira a tu alrededor.</p>
          </div>
          <div>
            <p>
              Me apasiona crear software excelente que mejore la vida de quienes
              me rodean. Me gusta desarrollar pensando en el futuro como
              aprender algo nuevo todos los días. Me considero una persona
              proactiva con capacidad de trabajar en equipo organizadamente y
              estar orientado al logro de los objetivos,
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
