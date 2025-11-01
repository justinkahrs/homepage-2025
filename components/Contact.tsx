import { motion } from "motion/react";
import ContactForm from "./ContactForm";
import { Gloock } from "next/font/google";
const gloock = Gloock({ subsets: ["latin"], weight: "400" });
function Contact() {
    return (
        <section id="contact" className="scroll-mt-28">
            <div className="border-4 border-green-300 p-8 mt-11 py-40 bg-transparent">
                <div className="mb-20">
                    <motion.h2
                        initial={{ opacity: 0, y: 10 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true, amount: 0.4 }}
                        transition={{ duration: 0.5 }}
                        className={`${gloock.className} tracking-wider text-5xl font-semibold text-center text-green-300 uppercase`}

                    >
                        Contact
                    </motion.h2>
                    <motion.h2
                        initial={{ opacity: 0, y: 10 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true, amount: 0.4 }}
                        transition={{ duration: 0.5 }}
                        className="text-4xl text-center text-gray-300 italic tracking-tight uppercase"

                    >
                        & Collaborate
                    </motion.h2>
                </div>
                <ContactForm />
            </div>
        </section>
    );
}
export default Contact;
