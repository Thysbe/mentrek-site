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
          <SoundcloudEmbed />
        </div>

        {/* Artist Intro */}
        <section className="w-full text-justified p-4 font-mono">
          <header className="text-xl font-semibold">About the Project</header>
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
        <section className="w-full text-justified p-4 font-mono">
          <header className="text-xl font-semibold">Collaborators</header>
          <CollaboratorLinks />
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

const CollaboratorLinks = () => {
  const artists = [
    {
      name: "Deadscrolls",
      link: "https://soundcloud.com/deadscrolls",
      image:
        "https://i1.sndcdn.com/avatars-MyMNyzzG9pWolTJ2-6zsjHw-t200x200.jpg",
    },
    {
      name: "Chicon",
      link: "https://soundcloud.com/austinchicon",
      image:
        "https://i1.sndcdn.com/avatars-WqYEJuXYlWyk7Efv-PETuAA-t200x200.jpg",
    },
    {
      name: "Darkhurst",
      link: "https://soundcloud.com/darkhurst",
      image:
        "https://i1.sndcdn.com/avatars-alibXotWmy9FDwBU-nJTIEg-t200x200.jpg",
    },
    {
      name: "Dendroid",
      link: "https://soundcloud.com/dendroid_music",
      image:
        "https://i1.sndcdn.com/avatars-bOLZ3zlsnFy3SdQp-VRvgCw-t200x200.jpg",
    },
    {
      name: "Sam Link",
      link: "https://soundcloud.com/sambot",
      image:
        "https://i1.sndcdn.com/avatars-9cRFnyBBhAmNTiwE-LjoMXg-t200x200.jpg",
    },
    {
      name: "Relativity Lounge",
      link: "https://soundcloud.com/relativitylounge",
      image:
        "https://i1.sndcdn.com/avatars-zWzQRiIUq16zNyJy-5ieW2Q-t200x200.jpg",
    },
    {
      name: "Metaprose",
      link: "https://soundcloud.com/metaprose",
      image:
        "https://i1.sndcdn.com/avatars-SJw37RtLQABbWViy-By7Giw-t200x200.jpg",
    },
    {
      name: "Wytai",
      link: "https://www.instagram.com/wytai.art/",
      image:
        "https://i1.sndcdn.com/avatars-tqqnzfg3j4gBvjto-dc6sSg-t200x200.jpg",
    },
  ];

  return (
    <ul className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 font-mono">
      {artists.map((artist, index) => (
        <li key={index} className="flex items-center space-x-4 p-2 w-full">
          <img
            src={artist.image}
            alt={artist.name}
            className="w-14 h-14 rounded-full object-cover"
          />
          <a
            href={artist.link}
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-600 hover:text-gray-800"
          >
            {artist.name}
          </a>
        </li>
      ))}
    </ul>
  );
};

const SoundcloudEmbed = () => {
  return (
    <div>
      <iframe
        width="100%"
        height="300"
        scrolling="no"
        frameBorder="no"
        allow="autoplay"
        src="https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/2028667856%3Fsecret_token%3Ds-LHhgz2MVvUs&color=%23000000&auto_play=false&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true&visual=true"
      ></iframe>
      <div
        style={{
          fontSize: "10px",
          color: "#cccccc",
          lineBreak: "anywhere",
          wordBreak: "normal",
          overflow: "hidden",
          whiteSpace: "nowrap",
          textOverflow: "ellipsis",
          fontFamily:
            "Interstate, Lucida Grande, Lucida Sans Unicode, Lucida Sans, Garuda, Verdana, Tahoma, sans-serif",
          fontWeight: 100,
        }}
      >
        <a
          href="https://soundcloud.com/mentrek_studio"
          title="mentrek"
          target="_blank"
          rel="noopener noreferrer"
          style={{ color: "#cccccc", textDecoration: "none" }}
        >
          mentrek
        </a>{" "}
        ·{" "}
        <a
          href="https://soundcloud.com/mentrek_studio/chapter-1/s-LHhgz2MVvUs"
          title="chapter 1"
          target="_blank"
          rel="noopener noreferrer"
          style={{ color: "#cccccc", textDecoration: "none" }}
        >
          chapter 1
        </a>
      </div>
    </div>
  );
};
