import { StrictMode, type CSSProperties } from "react";
import { createRoot } from "react-dom/client";
import { BriefcaseBusiness, GraduationCap, MapPin } from "lucide-react";
import { HistoryCards } from "./history_cards";
import mapIdenticalUrl from "../map-identical.svg";
import "./styles.css";

type Place = {
  city: string;
  label: string;
  years: string;
  x: number;
  y: number;
  icon: "study" | "work" | "home";
  details: string;
  items: string[];
};

const places: Place[] = [
  {
    city: "Sarnen",
    label: "Roots",
    years: "Origin",
    x: 31.34,
    y: 84.75,
    icon: "home",
    details: "A calm place shaped by lake, mountains and a grounded way of thinking.",
    items: [
      "Commercial apprenticeship",
      "Vocational Baccalaureate (University Entrance Qualification)",
      "HR-Departement",
    ],
  },
  {
    city: "Rotkreuz",
    label: "Learning",
    years: "Education",
    x: 47.63,
    y: 40.22,
    icon: "study",
    details: "A place for building skills, connecting ideas, and turning curiosity into craft.",
    items: ["BSC. Business Informatics"],
  },
  {
    city: "Adliswil",
    label: "Work",
    years: "Experience",
    x: 55.34,
    y: 10.93,
    icon: "work",
    details: "A place for focused and collaborative work.",
    items: ["Student Assistent Marketing"],
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
        <h1>The story of Leonie Anderhalden</h1>
        <p className="intro-copy">
          A geographic CV connecting the origin, the education and the work experience.
        </p>
      </section>

      <section className="map-stage" aria-label="Geographical CV map">
        <div className="map-panel">
          <img
            className="map-art"
            src={mapIdenticalUrl}
            alt="Map of the Sarnen, Rotkreuz, and Adliswil region"
          />

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
                <h2>{place.city}</h2>
                <p>{place.label}</p>
              </div>
            </article>
          ))}
        </div>

        <HistoryCards places={places} />
      </section>
    </main>
  );
};

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <App />
  </StrictMode>,
);
