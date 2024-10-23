import aboutImg from "../assets/about.jpg"
import { ABOUT_TEXT } from "../constants";
import { motion } from "framer-motion";
const About = () => {
    return (

        <div className="border-b border-neutral-900 pb-4">
            <motion.h2
                whileHover={{ scale: 1.2 }}
                whileTap={{ scale: 1.1 }}
                drag="x"
                dragConstraints={{ left: -100, right: 100 }}
                className="my-20 text-center text-4xl">About
                <span className="text-neutral-500"> Me</span>
            </motion.h2>
            <div className="flex flex-wrap">
                <motion.div
                    whileInView={{ opacity: 1, x: 0 }}
                    initial={{ opacity: 0, x: -100 }}
                    transition={{ duration: 1.5 }}
                    className="w-full lg:w-[40%] lg:p-8">
                    <div className="flex items-center justify-center">
                        <img className="rounded-2xl" src={aboutImg} alt="about" />
                    </div>
                </motion.div>


                <motion.div
                    whileInView={{ opacity: 1, x: 0 }}
                    initial={{ opacity: 0, x: 100 }}
                    transition={{ duration: 1, delay: 2 }}
                    className="w-full mt-10 lg:w-1/2">
                    <div className="flex justify-end text-xl lg:justify-end text-right">
                        <p className="my-2 max-w-xl py-6">{ABOUT_TEXT}</p>
                    </div>
                </motion.div>
            </div>
        </div>
    );
};

export default About