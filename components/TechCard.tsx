import { motion } from "motion/react";
function TechCard({ title, items }: { title: string; items: string[] }) {
    return (
        <motion.div
            initial={{ opacity: 0, y: 8 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.45 }}
            className="relative text-gray-300"
        >
            <div className="absolute left-0 top-0.1 z-20 flex h-8 w-40 items-center rounded-tl-xl rounded-br-lg border border-green-300 border-t-0 border-l-0 bg-transparent px-1 text-[18px] font-extrabold uppercase tracking-wider text-white">
                {title}
            </div>
            <div
                className={`
          relative px-4 pb-4 pt-5 bg-transparent/40
          [clip-path:polygon(0_0,10rem_0,7rem_2rem,0_2rem,0_100%,100%_100%,100%_0)]
          before:content-['']
          before:absolute before:inset-0 before:z-10 before:pointer-events-none
          before:border before:rounded-r-lg before:rounded-l-lg before:border-green-300 before:bg-transparent
          before:[clip-path:polygon(0_0,7rem_0,7rem_2rem,0_2rem,0_100%,100%_100%,100%_0)]
        `}
            >
                <ul className="mt-5.5 space-y-1 py-3">
                    {items.map((it) => (
                        <li key={it} className="flex items-center gap-2 text-[20px]">
                            <span className="h-1.5 w-1.5 rounded-full bg-green-300" />
                            {it}
                        </li>
                    ))}
                </ul>
            </div>
        </motion.div>
    );
}
export default TechCard;
