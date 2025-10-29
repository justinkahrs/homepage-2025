import { useMemo } from "react";
import GitHubIcon from "./GitHubIcon";
import LinkedInIcon from "./LinkedInIcon";

function Footer() {
    const year = useMemo(() => new Date().getFullYear(), []);

    return (
        <footer className="border-t border-zinc-200/60 bg-white/60 py-10 backdrop-blur dark:border-white/10 dark:bg-zinc-950/60">
            <div className="mx-auto flex w-full max-w-4xl flex-col items-center justify-between gap-6 px-6 sm:flex-row">
                <p className="text-sm text-zinc-500 dark:text-zinc-400">
                    © {year} Justin Kahrs. All rights reserved.
                </p>
                <div className="flex items-center gap-4">
                    <a
                        href="https://github.com/justinkahrs"
                        aria-label="GitHub"
                        className="rounded-full p-2 hover:bg-zinc-200/60 dark:hover:bg-zinc-800/80"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        <GitHubIcon className="h-5 w-5" />
                    </a>
                    <a
                        href="https://www.linkedin.com/in/justin-kahrs"
                        aria-label="LinkedIn"
                        className="rounded-full p-2 hover:bg-zinc-200/60 dark:hover:bg-zinc-800/80"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        <LinkedInIcon className="h-5 w-5" />
                    </a>
                </div>
            </div>
        </footer>
    )
}
export default Footer