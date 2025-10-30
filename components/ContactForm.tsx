function ContactForm() {
    function onSubmit(e: React.FormEvent<HTMLFormElement>) {
        e.preventDefault();
        const data = new FormData(e.currentTarget);
        const name = encodeURIComponent(String(data.get("name") || ""));
        const email = encodeURIComponent(String(data.get("email") || ""));
        const message = encodeURIComponent(String(data.get("message") || ""));
        const subject = `Portfolio contact from ${name}`;
        const body = `Name: ${decodeURIComponent(name)}%0AEmail: ${decodeURIComponent(email)}%0A%0A${decodeURIComponent(message)}`;
        window.location.href = `mailto:hello@justinkahrs.com?subject=${subject}&body=${body}`;
    }
    return (
        <form
            onSubmit={onSubmit}
            className="mt-4 grid grid-cols-1 gap-4 sm:grid-cols-2"
        >
            <div className="sm:col-span-1">
                <label
                    htmlFor="name"
                    className="block text-sm font-medium text-zinc-700 dark:text-zinc-300"
                >
                    Name
                </label>
                <input
                    id="name"
                    name="name"
                    required
                    autoComplete="name"
                    className="mt-2 w-full rounded-xl border border-zinc-300 bg-white px-3 py-2 text-sm outline-none ring-0 transition focus:border-zinc-500 dark:border-zinc-700 dark:bg-zinc-900"
                    placeholder="Your name"
                />
            </div>
            <div className="sm:col-span-1">
                <label
                    htmlFor="email"
                    className="block text-sm font-medium text-zinc-700 dark:text-zinc-300"
                >
                    Email
                </label>
                <input
                    id="email"
                    name="email"
                    type="email"
                    required
                    autoComplete="email"
                    className="mt-2 w-full rounded-xl border border-zinc-300 bg-white px-3 py-2 text-sm outline-none ring-0 transition focus:border-zinc-500 dark:border-zinc-700 dark:bg-zinc-900"
                    placeholder="you@example.com"
                />
            </div>
            <div className="sm:col-span-2">
                <label
                    htmlFor="message"
                    className="block text-sm font-medium text-zinc-700 dark:text-zinc-300"
                >
                    Message
                </label>
                <textarea
                    id="message"
                    name="message"
                    rows={5}
                    required
                    className="mt-2 w-full rounded-xl border border-zinc-300 bg-white px-3 py-2 text-sm outline-none ring-0 transition focus:border-zinc-500 dark:border-zinc-700 dark:bg-zinc-900"
                    placeholder="Tell me about your project..."
                />
            </div>
            <div className="sm:col-span-2">
                <button
                    type="button"
                    className="w-full rounded-full bg-zinc-900 px-4 py-3 text-sm font-medium text-white transition hover:bg-zinc-800 dark:bg-zinc-100  dark:hover:bg-zinc-200"
                >
                    Send Email
                </button>
            </div>
        </form>
    );
}

export default ContactForm