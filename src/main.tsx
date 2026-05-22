import { StrictMode, type CSSProperties } from "react";
import { createRoot } from "react-dom/client";
import { BriefcaseBusiness, GraduationCap, MapPin, Sparkles } from "lucide-react";
import "./styles.css";

type Place = {
  city: string;
  label: string;
  years: string;
  x: number;
  y: number;
  icon: "study" | "work" | "home";
  details: string;
};

const places: Place[] = [
  {
    city: "Sarnen",
    label: "Roots & perspective",
    years: "Origin",
    x: 32,
    y: 72,
    icon: "home",
    details: "A calm starting point shaped by lake, mountains, and a grounded way of thinking.",
  },
  {
    city: "Rotkreuz",
    label: "Learning & momentum",
    years: "Education",
    x: 52,
    y: 48,
    icon: "study",
    details: "A place for building skills, connecting ideas, and turning curiosity into craft.",
  },
  {
    city: "Adliswil",
    label: "Work & direction",
    years: "Experience",
    x: 72,
    y: 30,
    icon: "work",
    details: "Close to Zurich energy: focused, collaborative, and ready for the next professional chapter.",
  },
];

const Icon = ({ icon }: { icon: Place["icon"] }) => {
  if (icon === "study") return <GraduationCap size={18} aria-hidden="true" />;
  if (icon === "work") return <BriefcaseBusiness size={18} aria-hidden="true" />;
  return <MapPin size={18} aria-hidden="true" />;
};

const App = () => {
  return (
    <main className="page-shell">
      <section className="intro">
        <p className="eyebrow">
          <Sparkles size={16} aria-hidden="true" />
          Creative CV
        </p>
        <h1>Lele's journey, mapped through places that shaped the story.</h1>
        <p className="intro-copy">
          A geographic CV concept connecting Sarnen, Rotkreuz, and Adliswil through origin,
          learning, and professional direction.
        </p>
      </section>

      <section className="map-stage" aria-label="Geographical CV map">
        <div className="map-panel">
          <svg className="map-art" viewBox="0 0 100 100" role="img" aria-label="Stylized map of central Switzerland">
            <defs>
              <linearGradient id="water" x1="0" x2="1" y1="0" y2="1">
                <stop offset="0%" stopColor="#d7f1f4" />
                <stop offset="100%" stopColor="#9ed3dc" />
              </linearGradient>
              <linearGradient id="land" x1="0" x2="1" y1="0" y2="1">
                <stop offset="0%" stopColor="#f5ead7" />
                <stop offset="56%" stopColor="#d7e2c5" />
                <stop offset="100%" stopColor="#b4c9ab" />
              </linearGradient>
              <filter id="softShadow" x="-20%" y="-20%" width="140%" height="140%">
                <feDropShadow dx="0" dy="3" stdDeviation="3" floodOpacity="0.18" />
              </filter>
            </defs>
            <rect width="100" height="100" rx="3" fill="url(#land)" />
            <path d="M-2 68 C16 60 18 83 34 75 C48 67 50 48 66 54 C80 60 82 38 104 42 L104 104 L-2 104 Z" fill="#94b988" opacity="0.55" />
            <path d="M8 20 C18 10 31 16 37 28 C44 42 34 48 25 48 C12 47 1 34 8 20 Z" fill="url(#water)" opacity="0.84" />
            <path d="M42 55 C52 48 62 54 62 65 C61 76 49 80 40 73 C32 66 34 60 42 55 Z" fill="url(#water)" opacity="0.78" />
            <path d="M69 18 C75 9 90 13 93 25 C96 38 83 44 75 38 C66 31 64 25 69 18 Z" fill="url(#water)" opacity="0.76" />
            <path className="route" d="M32 72 C39 59 44 53 52 48 C61 42 66 36 72 30" fill="none" />
            <path d="M11 85 L24 68 L31 86 Z M58 85 L72 62 L86 86 Z M70 59 L80 42 L92 59 Z" fill="#ffffff" opacity="0.68" />
            {places.map((place) => (
              <g key={place.city} className="map-marker" transform={`translate(${place.x} ${place.y})`}>
                <circle r="4.6" fill="#1d4f60" filter="url(#softShadow)" />
                <circle r="2" fill="#f8d568" />
              </g>
            ))}
          </svg>

          {places.map((place) => (
            <article
              className={`place-card place-${place.city.toLowerCase()}`}
              style={{ "--x": `${place.x}%`, "--y": `${place.y}%` } as CSSProperties}
              key={place.city}
            >
              <div className="place-icon">
                <Icon icon={place.icon} />
              </div>
              <div>
                <span>{place.years}</span>
                <h2>{place.city}</h2>
                <p>{place.label}</p>
              </div>
            </article>
          ))}
        </div>

        <div className="storyline" aria-label="CV storyline">
          {places.map((place) => (
            <article className="story-item" key={place.city}>
              <div className="story-heading">
                <Icon icon={place.icon} />
                <h2>{place.city}</h2>
                <span>{place.years}</span>
              </div>
              <p>{place.details}</p>
            </article>
          ))}
        </div>
      </section>
    </main>
  );
};

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <App />
  </StrictMode>,
);
