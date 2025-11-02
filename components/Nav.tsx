import { motion } from "framer-motion";
import handleScroll from "@/utils/handleScroll";
type NavItem = {
    label: string;
    href: string;
};
const NAV: NavItem[] = [
    { label: "Skills", href: "#skills" },
    { label: "Experience", href: "#experience" },
    { label: "Contact", href: "#contact" },
];
interface NavProps {
    active: string;
    setActive: (href: string) => void;
    setPendingTarget: (href: string | null) => void;
}
function Nav({ active, setActive, setPendingTarget }: NavProps) {
    return (
        <nav className="fixed inset-x-0 top-0 z-50 mx-auto mt-6 flex w-full max-w-full items-center justify-center px-4 overflow-x-hidden">
            <div className="relative flex w-full max-w-4xl items-center justify-between isolation-auto px-3 py-2 overflow-x-hidden">
                <div className="absolute inset-0 backdrop-blur-3xl bg-black/30" />
                <div className="relative z-10 flex w-full items-center justify-between overflow-x-hidden">
                    <div
                        className="flex h-9 w-9 items-center justify-center rounded-full bg-green-300 text-sm font-semibold text-black"
                        onClick={() => {
                            const id = "home";
                            const el =
                                typeof document !== "undefined"
                                    ? document.getElementById(id)
                                    : null;
                            if (el) {
                                setPendingTarget("#home");
                            }
                            setActive("#home");
                            handleScroll("#home");
                        }}
                    >
                        JK
                    </div>
                    <ul className="flex items-center justify-between gap-1 sm:w-auto">
                        {NAV.map((item) => (
                            <li key={item.href}>
                                <button
                                    className={
                                        "relative px-4 py-2 text-sm font-medium transition text-white"
                                    }
                                    onClick={() => {
                                        const id = item.href.replace("#", "");
                                        const el =
                                            typeof document !== "undefined"
                                                ? document.getElementById(id)
                                                : null;
                                        if (el) {
                                            setPendingTarget(item.href);
                                        }
                                        setActive(item.href);
                                        handleScroll(item.href);
                                    }}
                                >
                                    <span className="relative inline-block">
                                        {item.label}
                                        {active === item.href && (
                                            <motion.div
                                                className="absolute left-0 -bottom-2 h-0.5 w-full origin-left bg-green-300"
                                                initial={{ scaleX: 0 }}
                                                animate={{ scaleX: 1 }}
                                                transition={{ duration: 1.5, ease: "easeOut" }}
                                            />
                                        )}
                                    </span>
                                </button>
                            </li>
                        ))}
                    </ul>
                </div>
            </div>
        </nav>
    );
}
export default Nav;
