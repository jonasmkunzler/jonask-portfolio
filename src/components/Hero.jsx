import { motion } from "framer-motion";
import me from "../images/dev.jpg";
import { styles } from "../styles";
import {
  FaYoutube,
  FaTwitter,
  FaGithub,
  FaLinkedin,
  FaInstagram,
} from "react-icons/fa";

const Hero = () => {
  return (
    <section className={`relative w-full h-screen mx-auto`}>
      <div
        className={`absolute inset-0 top-[120px]  max-w-7xl mx-auto ${styles.paddingX}
        xs:flex items-start gap-5 justify-center`}
      >
        <div className="flex flex-col mt-5 w-auto justify-center items-center">
          <div className="w-5 h-5 rounded-full bg-[#915EFF]" />
          <div className="w-1 sm:h-80 h-40 violet-gradient" />
        </div>

        <div className="w-1/2 justify-center items-center">
          <h1 className={`${styles.heroHeadText} text-white`}>
            Hello, I'm <span className="text-[#915EFF]">Jonas</span>
          </h1>
          <p className={`${styles.heroSubText} mt-2 text-white-100`}>
            A Full Stack web developer
            <br className="sm:block hidden" />
            from Brazil to the World!
          </p>
          <div className="hero-socials flex flex-row gap-2 mt-8">
            <a
              href="https://github.com/jonasmkunzler"
              target="_blank"
              className="w-1/4"
            >
              <FaGithub size={40} />
            </a>
            <a
              href="https://twitter.com/kunzler_jonas"
              target="_blank"
              className="w-1/4"
            >
              <FaTwitter size={40} />
            </a>
            <a
              href="https://www.linkedin.com/in/jonas-kunzler-81003333/"
              target="_blank"
              className="w-1/4"
            >
              <FaLinkedin size={40} />
            </a>
            <a
              href="https://www.instagram.com/kunzlerjonas/"
              target="_blank"
              className="w-1/4"
            >
              <FaInstagram size={40} />
            </a>
          </div>
        </div>
        <div className="w-1/2">
          <img
            src={me}
            alt="Portfolio photo of Jonas Kunzler"
            className="rounded-full border-4 shadow-2xl w-2/3"
          />
        </div>
      </div>

      <div className="absolute xs:bottom-10 bottom-12 w-full flex justify-center items-center">
        <a href="#about">
          <div className="w-[35px] h-[64px] rounded-3xl border-4 border-secondary flex justify-center items-start p-2">
            <motion.div
              animate={{
                y: [0, 24, 0],
              }}
              transition={{
                duration: 1.5,
                repeat: Infinity,
                repeatType: "loop",
              }}
              className="w-3 h-3 rounded-full bg-secondary mb-1"
            />
          </div>
        </a>
      </div>
    </section>
  );
};

export default Hero;
