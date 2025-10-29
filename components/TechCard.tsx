import { motion } from "motion/react";

function TechCard({ title, items }: { title: string; items: string[] }) {
    return (
        <motion.div
            initial={{ opacity: 0, y: 8 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.45 }}
            className="rounded-2xl border border-zinc-200/60 bg-zinc-50 p-5 dark:border-white/10 dark:bg-zinc-900"
        >
            <h3 className="text-base font-semibold">{title}</h3>
            <ul className="mt-3 space-y-1 text-sm text-zinc-600 dark:text-zinc-400">
                {items.map((it) => (
                    <li key={it} className="flex items-center gap-2">
                        <span className="h-1.5 w-1.5 rounded-full bg-zinc-400 dark:bg-zinc-600" />
                        {it}
                    </li>
                ))}
            </ul>
        </motion.div>
    );
}

export default TechCard