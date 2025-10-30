import { motion } from "motion/react";

function TechCard({ title, items }: { title: string; items: string[] }) {
    return (
        <motion.div
            initial={{ opacity: 0, y: 8 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.45 }}
        >
            <h3 className="text-base text-white font-bold uppercase tracking-wider">{title}</h3>
            <ul className="mt-3 space-y-1 text-sm text-gray-300">
                {items.map((it) => (
                    <li key={it} className="flex items-center gap-2">
                        <span className="h-1.5 w-1.5 rounded-full bg-zinc-400" />
                        {it}
                    </li>
                ))}
            </ul>
        </motion.div>
    );
}

export default TechCard