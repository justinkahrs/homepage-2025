import { motion } from "motion/react"
import ContactForm from "./ContactForm"
function Contact() {
    return (
        <section id="contact" className="scroll-mt-28">
            <div className="rounded-3xl border border-zinc-200/60 bg-white p-8 dark:border-white/10 dark:bg-zinc-950">
                <motion.h2
                    initial={{ opacity: 0, y: 10 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, amount: 0.4 }}
                    transition={{ duration: 0.5 }}
                    className="text-2xl font-semibold"
                >
                    Contact
                </motion.h2>
                <ContactForm />
            </div>
        </section>
    )
}
export default Contact