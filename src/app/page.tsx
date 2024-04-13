export default function Home() {
  return (
    <main className="flex flex-col items-center p-10 text-center flex-grow justify-center dark:bg-gray-700">
      <h1 className="text-3xl font-bold md:text-4xl dark:text-white">
        Welcome to Noted, <br /> an innovative note-taking app.
      </h1>
      <p className="text-lg mt-4 md:text-xl dark:text-white">
        Noted is a note-taking app that is <em>innovative</em> and easy to use.
      </p>
      <button className="mt-8 bg-emerald-700 text-white rounded-lg px-4 py-2 hover:bg-emerald-800">
        Get started
      </button>
    </main>
  );
}
