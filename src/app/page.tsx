export default function Home() {
  return (
    <main className="min-h-screen flex flex-col items-center justify-center bg-zinc-50 text-zinc-900">
      <h1 className="text-4xl font-bold">Jacob Vazquez</h1>
      <p className="mt-3 text-lg text-zinc-600">Engineer • Builder • Tinkerer</p>

      <div className="mt-6 flex gap-4">
        <a
          href="mailto:hello@jacobvazquez.com"
          className="px-4 py-2 bg-black text-white rounded-lg"
        >
          Email
        </a>
        <a
          href="https://github.com/"
          target="_blank"
          className="px-4 py-2 border rounded-lg"
        >
          GitHub
        </a>
        <a
          href="https://www.linkedin.com/"
          target="_blank"
          className="px-4 py-2 border rounded-lg"
        >
          LinkedIn
        </a>
      </div>
    </main>
  );
}