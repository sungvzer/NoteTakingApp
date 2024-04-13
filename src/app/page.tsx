export default function Home() {
  return (
    <main className="flex flex-col items-center p-10 text-center flex-grow justify-center">
      <h1 className="text-3xl font-bold md:text-4xl">
        Welcome to Noted, <br /> an innovative note-taking app.
      </h1>
      <p className="text-lg mt-4 md:text-xl">
        Noted is a note-taking app that is <em>innovative</em> and easy to use.
      </p>
      <button className="mt-8 bg-emerald-700 text-white rounded-lg px-4 py-2 hover:bg-emerald-800">
        Get started
      </button>
    </main>
  );
}
