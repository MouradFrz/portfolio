import React, { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import quotes from "./quotes";
function randomQuote() {
  return quotes[Math.floor(Math.random() * quotes.length)];
}
function AboutMe(props) {
  const [showMessage, setShowMessage] = useState(true);
  const [message, setMessage] = useState(randomQuote);
  useEffect(() => {
    const inter = setInterval(() => {
      setShowMessage((prev) => false);
      setTimeout(() => {
        setMessage(randomQuote);
        setShowMessage((prev) => true);
      }, 1200);
    }, 5000);
    return () => {
      clearTimeout(inter);
    };
  }, []);
  return (
    <div className="mb-10" id="about-me">
      <h2 className="font-semibold text-[3rem]">A propos de moi</h2>
      <span className="w-full h-[2px] rounded-2xl bg-secondary block mb-10"></span>
      <div
        initial={{ opacity: 0 }}
        whileinview={{ opacity: 1 }}
        className="flex flex-col md:flex-row"
      >
        <div className="flex items-center md:w-[48%] w-full mb-10 md:mb-0 min-h-[100px]">
          <AnimatePresence>
            {showMessage && (
              <motion.p
                initial={{ clipPath: "polygon(0 0, 0 0, 0 100%, 0% 100%)" }}
                animate={{
                  clipPath: "polygon(0 0, 100% 0, 100% 100%, 0 100%)",
                }}
                exit={{ opacity: 0 }}
                transition={{ duration: 1 }}
                className="text-center w-full sec-font text-2xl px-5 origin-left "
              >
                {message}
              </motion.p>
            )}
          </AnimatePresence>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="md:w-[50%] w-full leading-8"
        >
          Je suis un <span className="text-secondary">ingénieur logiciel</span>{" "}
          spécialisé en développement web Full Stack.
          <br />
          J’ai découvert le développement web à l’université, où je suis
          rapidement devenu passionné par la conception de systèmes logiciels
          robustes et bien architecturés.
          <br />
          Titulaire d’un{" "}
          <span className="text-secondary">
            Master 2 en informatique à l’UPEC
          </span>
          , j’ai construit mon parcours à travers une formation académique
          solide, un stage, une alternance, une expérience en CDI et des
          missions freelance.
          <br />
          Après avoir débuté avec une stack{" "}
          <span className="text-secondary">(PHP, Laravel, React, MySQL)</span>,
          j’ai évolué vers des architectures modernes basées sur{" "}
          <span className="text-secondary">TypeScript, NestJS et React</span>.
          <br />
          Je porte une attention particulière au{" "}
          <span className="text-secondary">system design</span>, aux{" "}
          <span className="text-secondary">design patterns</span> et à la
          qualité globale du code, afin de concevoir des applications
          maintenables et évolutives.
          <br />
          Je m’intéresse également aux pratiques{" "}
          <span className="text-secondary">DevOps et SRE</span> :
          automatisation, CI/CD, observabilité, fiabilité des systèmes et mise
          en production, avec pour objectif de livrer des solutions{" "}
          <span className="text-secondary">
            performantes, robustes et fiables.
          </span>
        </motion.div>
      </div>
    </div>
  );
}

export default AboutMe;
