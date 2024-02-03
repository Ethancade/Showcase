import LineGradient from "../components/LineGradient";
import useMediaQuery from "../hooks/useMediaQuery";
import { motion } from "framer-motion";

const MySkills = () => {
  const isAboveLarge = useMediaQuery("(min-width: 1060px)");
  return (
    <section id="skills" className="pt-10 pb-24">
      {/* HEADER AND IMAGE SECTION */}
      <div className="md:flex md:justify-between md:gap-16 mt-32">
        <motion.div
          className="md:w-1/3"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.5 }}
          variants={{
            hidden: { opacity: 0, x: -50 },
            visible: { opacity: 1, x: 0 },
          }}
        >
          <p className="font-playfair font-semibold text-4xl mb-5">
            MY <span className="text">SKILLS</span>
          </p>
          <LineGradient width="w-1/3" />
          <p className="mt-10 mb-7">
          Display of technical skills and professional capabilities. Skills have been steadily developed through years of experience and education. Through the utilization of both technical and soft skills I am able to deliver key information in appropriate formats that drive solutions. 
          </p>
        </motion.div>

        <div className="mt-16 md:mt-0">
          {isAboveLarge ? (
            <div
              className="relative z-0 ml-20 before:absolute before:-top-10 before:-left-10
              before:w-full before:h-full before:border-2 before:border-grey-blue before:z-[-1]"
            >
              <img
                alt="skills"
                className="z-10"
                src="assets/skills-image.jpg"
              />
            </div>
          ) : (
            <img alt="skills" className="z-10" src="assets/skills-image.jpg" />
          )}
        </div>
      </div>

      {/* SKILLS */}
      <div className="md:flex md:justify-between mt-16 gap-32">
        {/* EXPERIENCE */}
        <motion.div
          className="md:w-1/3 mt-10"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.5 }}
          variants={{
            hidden: { opacity: 0, y: 50 },
            visible: { opacity: 1, y: 0 },
          }}
        >
          <div className="relative h-32">
            <div className="z-10">
              <p className="font-playfair font-semibold text-5xl">01</p>
              <p className="font-playfair font-semibold text-3xl mt-3">
                Technical Skills
              </p>
            </div>
            <div className="w-1/2 md:w-3/4 h-32 bg-grey-blue absolute right-0 top-0 z-[-1]" />
          </div>
          <p className="mt-5">
          Experienced Data Analyst trained in R, Python, SQL, Excel and Tableau. Capable of utilizing approaches such as Data Exploration, Manipulation, Visualization, Data Validation, Machine Learning, APIs, and statistical models. Proven record of extracting key insights from complex dirty data sets, developing models and algorithms, and creating visualizations and reports that support decision making.  
          </p>
        </motion.div>

        {/* INNOVATIVE */}
        <motion.div
          className="md:w-1/3 mt-10"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
          transition={{ delay: 0.2, duration: 0.5 }}
          variants={{
            hidden: { opacity: 0, y: 50 },
            visible: { opacity: 1, y: 0 },
          }}
        >
          <div className="relative h-32">
            <div className="z-10">
              <p className="font-playfair font-semibold text-5xl">02</p>
              <p className="font-playfair font-semibold text-3xl mt-3">
                Education
              </p>
            </div>
            <div className="w-1/2 md:w-3/4 h-32 bg-blue5 absolute right-0 top-0 z-[-1]" />
          </div>
          <p className="mt-5">
          M.S in Data Analytics and Computational Social Science from the University of Massachusetts with a 3.87 GPA. B.S in Business Administration from the University of Charleston, WV.  
          </p>
        </motion.div>
        {/* IMAGINATIVE */}
        <motion.div
          className="md:w-1/3 mt-10"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
          transition={{ delay: 0.4, duration: 0.5 }}
          variants={{
            hidden: { opacity: 0, y: 50 },
            visible: { opacity: 1, y: 0 },
          }}
        >
          <div className="relative h-32">
            <div className="z-10">
              <p className="font-playfair font-semibold text-5xl">03</p>
              <p className="font-playfair font-semibold text-3xl mt-3">
                Soft Skills
              </p>
            </div>
            <div className="w-1/2 md:w-3/4 h-32 bg-blue4 absolute right-0 top-0 z-[-1]" />
          </div>
          <p className="mt-5">
          To support technical abilities, I possess strong soft skills, including critical thinking, problem-solving, communication, collaboration, efficient information extraction. I am detail-oriented, self-motivated, and can work independently or within a team. I also have the ability to manage my time effectively to meet tight deadlines. 
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default MySkills;
