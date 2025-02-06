import { FaSoundcloud, FaInstagram, FaBandcamp } from "react-icons/fa";

export default function Home() {
  return (
    <div className="grid grid-rows-[auto_1fr_auto] items-center justify-items-center min-h-screen p-8 pb-20 sm:p-20 gap-0 font-[family-name:var(--font-geist-sans)]">
      {/* Header */}
      <header className="w-full flex justify-center items-center relative text-2xl font-bold p-1 font-mono">
        mentrek.studio
        <a
          href="mailto:mentrek.studio@gmail.com"
          className="absolute right-4 text-sm font-normal hover:underline"
        >
          Contact
        </a>
      </header>

      {/* Main Content */}
      <main className="flex flex-col gap-0 row-start-2 items-center sm:items-start w-full max-w-4xl">
        {/* Hero Image */}
        <div className="w-full p-4">
          <img
            src="/test.png"
            alt="wytai_art"
            className="w-full rounded-lg shadow-lg"
          />
        </div>

        {/* SoundCloud Embed */}
        <div className="w-full">
          <iframe
            width="100%"
            height="166"
            scrolling="no"
            frameBorder="no"
            allow="autoplay"
            src="https://w.soundcloud.com/player/?url=https%3A//soundcloud.com/thysbe-official/helionomadic-mix&color=%23000000&auto_play=false&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true&visual=true"
          ></iframe>
        </div>

        {/* Artist Intro */}
        <section className="w-full text-justified p-4 font-mono">
          <h2 className="text-xl font-semibold">About the Project</h2>
          <p className="text-gray-600">
            Mentrek evolved as a collaborative effort between the Hyper-Glitch
            aficianado Nuan Sonar and Thysbe. Starting in 2023, the duo met for
            a series of studio sessions, inviting other local producers and
            friends to jam on hardware and share techniques. Each session would
            have the goal of producing a singular, cohesive track, and would
            often last until 5 or 6 in the morning.
            <br></br>
            <br></br>
            Over the course of 2024, the Mentrek project started to take shape:
            a set of stripped down, club-ready tracks taking influences from
            techno, broken-beat, and deconstructed club music.
          </p>
        </section>

        {/* Collaborators */}
        <section className="w-full text-center p-4 font-mono">
          <h2 className="text-xl font-semibold">Collaborators</h2>
          <ul className="list-none p-0 font-mono">
            <li className="text-gray-600">Sam Link</li>
            <li className="text-gray-600">Relativity Lounge</li>
            <li className="text-gray-600">Chicon</li>
            <li className="text-gray-600">Darkhurst</li>
            <li className="text-gray-600">Deadscrolls</li>
            <li className="text-gray-600">Dendroid</li>
            <li className="text-gray-600">Wytai</li>
          </ul>
        </section>
      </main>

      {/* Footer */}
      <footer className="row-start-3 flex gap-6 flex-wrap items-center justify-center w-full p-4 font-mono">
        <p>&copy; 2025 mentrek.studio</p>
        <div className="flex gap-4">
          <a
            href="https://soundcloud.com/mentrek_studio"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaSoundcloud className="text-xl hover:text-orange-500 transition-colors" />
          </a>
          <a
            href="https://instagram.com/mentrek.studio"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaInstagram className="text-xl hover:text-pink-500 transition-colors" />
          </a>
          <a
            href="https://mentrek.bandcamp.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaBandcamp className="text-xl hover:text-blue-500 transition-colors" />
          </a>
        </div>
      </footer>
    </div>
  );
}
