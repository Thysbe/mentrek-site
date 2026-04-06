import Image from "next/image";
import {
  FaSoundcloud,
  FaInstagram,
  FaBandcamp,
  FaFacebook,
} from "react-icons/fa";

export default function Home() {
  return (
    <div className="min-h-screen bg-black">
      <HeroSection />
      <LatestReleaseSection />
      <MixSection />
      <NodeFlourishSection />
      <AboutSection />
      <ArtBanner />
      <CollaboratorsSection />
      <BookingSection />
      <SiteFooter />
    </div>
  );
}

const HeroSection = () => (
  <section className="relative flex flex-col justify-center items-center hero-scanlines overflow-hidden py-16 sm:py-24">
    <div className="absolute inset-0 z-0">
      <Image
        src="/art/helix2.png"
        alt=""
        fill
        className="object-cover opacity-[0.08]"
        sizes="100vw"
        priority
      />
    </div>

    <nav className="absolute top-0 left-0 right-0 flex justify-between items-center px-8 py-5 z-10">
      <span className="text-xs tracking-widest font-mono text-muted">
        mentrek.studio
      </span>
      <a
        href="mailto:mentrek.studio@gmail.com"
        className="text-xs tracking-widest font-mono text-muted hover:text-foreground transition-colors duration-300"
      >
        CONTACT
      </a>
    </nav>

    <div className="relative z-10 flex flex-col items-center px-8 mt-8">
      <div className="w-full max-w-4xl">
        <Image
          src="/art/logo.png"
          alt="MENTREK"
          width={900}
          height={200}
          priority
          className="w-full h-auto"
        />
      </div>
      <p className="mt-4 text-xs font-mono text-muted" style={{ letterSpacing: "0.35em" }}>
        MUSIC &middot; PRESS KIT
      </p>
    </div>
  </section>
);

const LatestReleaseSection = () => (
  <section className="py-12 px-8 border-t border-white/10">
    <div className="max-w-5xl mx-auto grid md:grid-cols-2 gap-10 items-start">
      <div>
        <p className="section-label">Latest Release</p>
        <h2 className="section-heading">INIT</h2>
        <p className="font-mono text-sm leading-relaxed mb-6 text-muted">
          The debut release from Mentrek — a collection of stripped-down,
          club-ready tracks forged from late-night studio sessions.
        </p>
        <iframe
          title="INIT by Mentrek — Bandcamp"
          style={{ border: 0, width: "100%", height: "120px" }}
          src="https://bandcamp.com/EmbeddedPlayer/album=2588640267/size=large/bgcol=000000/linkcol=1a1aff/tracklist=false/artwork=small/transparent=true/"
        />
      </div>

      <div className="relative aspect-square overflow-hidden">
        <Image
          src="/art/color_structure3.png"
          alt=""
          fill
          className="object-cover opacity-60"
          sizes="(max-width: 768px) 100vw, 50vw"
        />
      </div>
    </div>
  </section>
);

const MixSection = () => (
  <section className="py-12 px-8 border-t border-white/10">
    <div className="max-w-5xl mx-auto grid md:grid-cols-2 gap-10 items-center">
      {/* Art column */}
      <div className="relative aspect-square overflow-hidden">
        <Image
          src="/art/helix1.png"
          alt=""
          fill
          className="object-cover opacity-70"
          sizes="(max-width: 768px) 100vw, 50vw"
        />
      </div>

      {/* Embed column */}
      <div>
        <p className="section-label">Mix</p>
        <h2 className="section-heading">Chapter 1</h2>
        <iframe
          width="100%"
          height="166"
          scrolling="no"
          frameBorder="no"
          allow="autoplay"
          src="https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/soundcloud%253Atracks%253A2132150937&color=%23ff5500&auto_play=false&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true&visual=true"
        />
        <div style={{
          fontSize: "10px",
          color: "#666666",
          lineBreak: "anywhere",
          wordBreak: "normal",
          overflow: "hidden",
          whiteSpace: "nowrap",
          textOverflow: "ellipsis",
          fontFamily: "Interstate, Lucida Grande, Lucida Sans Unicode, Lucida Sans, Garuda, Verdana, Tahoma, sans-serif",
          fontWeight: 100,
          marginTop: "4px",
        }}>
          <a href="https://soundcloud.com/mentrek_studio" title="Mentrek" target="_blank" rel="noopener noreferrer" style={{ color: "#666666", textDecoration: "none" }}>Mentrek</a>
          {" · "}
          <a href="https://soundcloud.com/mentrek_studio/chapter-1" title="Chapter 1" target="_blank" rel="noopener noreferrer" style={{ color: "#666666", textDecoration: "none" }}>Chapter 1</a>
        </div>
      </div>
    </div>
  </section>
);

const NODE_FLOURISH_VIDEO_ID = "8SFPiNc1S5s";

const NodeFlourishSection = () => (
  <section className="py-12 px-8 border-t border-white/10">
    <div className="max-w-5xl mx-auto">
      <p className="section-label">AV Performance</p>
      <h2 className="section-heading">Node Flourish</h2>
      <p className="font-mono text-sm leading-relaxed mb-6 text-muted">
        Live AV set performed at Node Flourish — a fusion of real-time
        visuals and hardware-driven electronics.
      </p>
      <div className="relative w-full overflow-hidden" style={{ paddingBottom: "56.25%" }}>
        <iframe
          className="absolute inset-0 w-full h-full"
          src={`https://www.youtube.com/embed/${NODE_FLOURISH_VIDEO_ID}`}
          title="Mentrek — Node Flourish AV Set"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        />
      </div>
    </div>
  </section>
);

const AboutSection = () => (
  <section className="py-12 px-8 border-t border-white/10">
    <div className="max-w-5xl mx-auto grid md:grid-cols-2 gap-12 items-start">
      <div className="flex flex-col justify-center">
        <p className="section-label">About</p>
        <h2 className="section-heading">The Project</h2>
        <div className="font-mono text-sm leading-relaxed space-y-4 text-foreground/75">
          <p>
            Mentrek evolved as a collaborative effort between the Hyper-Glitch
            aficianado Nuan Sonar and Thysbe. Starting in 2023, the duo met for
            a series of studio sessions, inviting other local producers and
            friends to jam on hardware and share techniques. Each session would
            have the goal of producing a singular, cohesive track, and would
            often last until 5 or 6 in the morning.
          </p>
          <p>
            Over the course of 2024, the Mentrek project started to take shape:
            a set of stripped down, club-ready tracks taking influences from
            techno, broken-beat, and deconstructed club music.
          </p>
        </div>
      </div>

      <div className="relative aspect-[3/4] overflow-hidden">
        <Image
          src="/art/structure4.png"
          alt=""
          fill
          className="object-cover"
          sizes="(max-width: 768px) 100vw, 50vw"
        />
      </div>
    </div>
  </section>
);

const ArtBanner = () => (
  <div className="relative w-full overflow-hidden border-t border-white/10" style={{ height: "220px" }}>
    <Image
      src="/art/helix4.png"
      alt=""
      fill
      className="object-cover object-center opacity-70"
      sizes="100vw"
    />
    <div className="absolute inset-0 bg-gradient-to-r from-black/60 via-transparent to-black/60" />
    <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-transparent to-black/40" />
    <div className="relative w-full h-full flex items-center justify-center z-10">
      <div className="relative aspect-square overflow-hidden opacity-60" style={{ width: "160px" }}>
        <Image
          src="/art/color_structure5.png"
          alt=""
          fill
          className="object-cover"
          sizes="160px"
        />
      </div>
    </div>
  </div>
);

const artists = [
  {
    name: "Deadscrolls",
    link: "https://soundcloud.com/deadscrolls",
    image: "https://i1.sndcdn.com/avatars-MyMNyzzG9pWolTJ2-6zsjHw-t200x200.jpg",
  },
  {
    name: "Chicon",
    link: "https://soundcloud.com/austinchicon",
    image: "https://i1.sndcdn.com/avatars-WqYEJuXYlWyk7Efv-PETuAA-t200x200.jpg",
  },
  {
    name: "Darkhurst",
    link: "https://soundcloud.com/darkhurst",
    image: "https://i1.sndcdn.com/avatars-alibXotWmy9FDwBU-nJTIEg-t200x200.jpg",
  },
  {
    name: "Dendroid",
    link: "https://soundcloud.com/dendroid_music",
    image: "https://i1.sndcdn.com/avatars-pIlaJjAcpUIiGzVf-pW91MQ-t500x500.jpg",
  },
  {
    name: "Sam Link",
    link: "https://soundcloud.com/sambot",
    image: "https://i1.sndcdn.com/avatars-9cRFnyBBhAmNTiwE-LjoMXg-t200x200.jpg",
  },
  {
    name: "Relativity Lounge",
    link: "https://soundcloud.com/relativitylounge",
    image: "https://i1.sndcdn.com/avatars-no0aPPY4Nwpteimu-8uMrqA-t500x500.jpg",
  },
  {
    name: "Metaprose",
    link: "https://soundcloud.com/metaprose",
    image: "https://i1.sndcdn.com/avatars-SJw37RtLQABbWViy-By7Giw-t200x200.jpg",
  },
  {
    name: "Wytai",
    link: "https://www.instagram.com/wytai.art/",
    image: "https://i1.sndcdn.com/avatars-tqqnzfg3j4gBvjto-dc6sSg-t200x200.jpg",
  },
  {
    name: "Oddlogic",
    link: "https://soundcloud.com/oddlogic",
    image: "https://i1.sndcdn.com/avatars-000127401225-hm72xl-t200x200.jpg",
  },
];

const CollaboratorsSection = () => (
  <section className="py-12 px-8 border-t border-white/10">
    <div className="max-w-5xl mx-auto">
      <p className="section-label">Collaborators</p>
      <h2 className="section-heading">The Network</h2>
    </div>

    <div className="max-w-5xl mx-auto">
      <ul className="grid grid-cols-3 sm:grid-cols-3 lg:grid-cols-3 gap-px bg-white/10">
        {artists.map((artist, index) => (
          <li key={index}>
            <a
              href={artist.link}
              target="_blank"
              rel="noopener noreferrer"
              className="group relative block aspect-square overflow-hidden bg-black"
            >
              <img
                src={artist.image}
                alt={artist.name}
                className="w-full h-full object-cover grayscale group-hover:grayscale-0 scale-105 group-hover:scale-100 transition-all duration-500"
              />
              <div className="absolute inset-0 bg-black/50 group-hover:bg-black/10 transition-colors duration-500" />
              <div className="absolute bottom-0 left-0 right-0 p-3 bg-gradient-to-t from-black via-black/60 to-transparent">
                <p className="text-xs font-mono tracking-widest uppercase text-white/60 group-hover:text-white transition-colors duration-300">
                  {artist.name}
                </p>
              </div>
            </a>
          </li>
        ))}
      </ul>
    </div>
  </section>
);

const BookingSection = () => (
  <section className="py-12 px-8 border-t border-white/10">
    <div className="max-w-5xl mx-auto flex flex-col sm:flex-row sm:items-end justify-between gap-6">
      <div>
        <p className="section-label">Booking</p>
        <h2 className="section-heading">Get in Touch</h2>
        <div className="font-mono text-sm text-muted leading-relaxed max-w-md space-y-3">
          <p>Based in Chicago. Open to DJ bookings and AV performances locally and beyond.</p>
        </div>
      </div>
      <a
        href="mailto:mentrek.studio@gmail.com"
        className="font-mono text-sm tracking-widest uppercase border-b border-muted pb-px text-foreground hover:border-foreground transition-colors duration-300 whitespace-nowrap"
      >
        mentrek.studio@gmail.com
      </a>
    </div>
  </section>
);

const SiteFooter = () => (
  <footer className="border-t border-white/10 py-8 px-8">
    <div className="max-w-5xl mx-auto flex flex-col sm:flex-row justify-between items-center gap-4">
      <p className="text-xs font-mono tracking-widest text-muted">
        &copy; 2025 mentrek.studio
      </p>

      <div className="flex gap-6">
        <a
          href="https://soundcloud.com/mentrek_studio"
          target="_blank"
          rel="noopener noreferrer"
          className="text-muted hover:text-foreground transition-colors duration-300"
        >
          <FaSoundcloud className="text-xl" />
        </a>
        <a
          href="https://instagram.com/mentrek.studio"
          target="_blank"
          rel="noopener noreferrer"
          className="text-muted hover:text-foreground transition-colors duration-300"
        >
          <FaInstagram className="text-xl" />
        </a>
        <a
          href="https://mentrek.bandcamp.com"
          target="_blank"
          rel="noopener noreferrer"
          className="text-muted hover:text-foreground transition-colors duration-300"
        >
          <FaBandcamp className="text-xl" />
        </a>
        <a
          href="https://www.facebook.com/profile.php?id=61572547575293"
          target="_blank"
          rel="noopener noreferrer"
          className="text-muted hover:text-foreground transition-colors duration-300"
        >
          <FaFacebook className="text-xl" />
        </a>
      </div>
    </div>
  </footer>
);
