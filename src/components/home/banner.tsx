import React from "react";
import { motion } from "framer-motion";
import mulherRaioX from "../../assets/imgs/mulher_raiox1.png";

export const Banner = () => {
  return (
    <div
      className="mx-auto flex justify-between bg-linear-30 from-gradient-brightblue to-gradient-darkblue rounded-xl
    items-center relative overflow-visible"
    >
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.4 }}
        className="h-full w-full flex items-center 
        2xl:px-10 2xl:p-3 2xl:w-[1000px] 2xl:h-[275px]
        xl:px-8 xl:p-3 xl:w-[700px] xl:h-[225px]
        lg:px-8 lg:p-3 lg:w-[500px] lg:h-[150px]
        "
      >
        <div className="text-white text-left flex flex-col xl:gap-3 lg:gap-2">
          <div className="font-inter font-medium 2xl:text-4xl xl:text-3xl lg:text-xl">
            Exames inteligentes, <br />
            diagnósticos instantâneos
          </div>
          <h1 className="xl:text-sm 2xl:text-lg lg:text-xs">O futuro do diagnóstico por imagem começa aqui.</h1>
        </div>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5 }}
        className="h-full w-full flex justify-end items-end absolute z-20"
      >
        <img
          className="max-h-[110%] 2xl:pr-20 xl:pr-10 lg:pr-5"
          src={mulherRaioX}
          alt="raio-x"
        />
      </motion.div>

      <div className="h-full w-full flex justify-end absolute overflow-hidden rounded-2xl">
        <div className=" bg-grayish-blue rounded-full z-10
        2xl:h-[325px] 2xl:mr-12 mt-[8%]
        xl:h-[250px] xl:w-[250px] xl:mr-[-25px]
        lg:h-[175px] lg:w-[175px] lg:mr-[-8px]
        "></div>
      </div>
    </div>
  );
};
