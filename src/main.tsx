import { StrictMode, useState, type CSSProperties } from "react";
import { createRoot } from "react-dom/client";
import { BriefcaseBusiness, GraduationCap, MapPin } from "lucide-react";
import { HistoryCards } from "./history_cards";
import { ProfileHighlights } from "./profile_highlights";
import mapIdenticalUrl from "../map-identical.svg";
import "./styles.css";

type Place = {
  id: string;
  city: string;
  label: string;
  years: string;
  x: number;
  y: number;
  icon: "study" | "work" | "home";
  details: string;
  entries: {
    title: string;
    organization: string;
    dateRange: string;
    tasks?: string[];
    applications?: string[];
  }[];
};

const places: Place[] = [
  {
    id: "sarnen",
    city: "Sarnen",
    label: "Roots",
    years: "Origin",
    x: 31.34,
    y: 84.75,
    icon: "home",
    details: "A calm place shaped by lake, mountains and a grounded way of thinking.",
    entries: [
      {
        title: "Apprenticeship Commercial Employee",
        organization: "Social Security",
        dateRange: "Aug 2016 - Jul 2019",
      },
      {
        title: "Vocational Baccalaureate",
        organization: "BWZ Obwalden",
        dateRange: "Aug 2019 - Jul 2020",
      },
      {
        title: "HR-Departement",
        organization: "Spitex Obwalden",
        dateRange: "Sep 2020 - Dec 2022",
        tasks: [
          "Payroll accounting",
          "Annual financial statements",
          "Social security",
          "Sickness benefit statement",
          "Accident insurance",
          "Maternity allowance",
          "Employee data maintenance",
          "Absence management",
        ],
        applications: ["Pebe Finance", "Perigon Root", "Consense Managementsystem"],
      },
    ],
  },
  {
    id: "rotkreuz",
    city: "Rotkreuz",
    label: "Learning",
    years: "Education",
    x: 47.63,
    y: 40.22,
    icon: "study",
    details: "A place for building skills, connecting ideas, and turning curiosity into craft.",
    entries: [
      {
        title: "BSc. Business Informatics",
        organization: "Hochschule Luzern",
        dateRange: "Sep 2022 - Jul 2026",
      },
    ],
  },
  {
    id: "adliswil",
    city: "Adliswil",
    label: "Work",
    years: "Experience",
    x: 55.34,
    y: 10.93,
    icon: "work",
    details: "A place for focused and collaborative work.",
    entries: [
      {
        title: "Student Assistant Marketing",
        organization: "beUnity AG",
        dateRange: "Nov 2023 - Jun 2026",
        tasks: ["Email processing", "Supporting sales process", "Data quality"],
        applications: ["Hubspot", "Miro", "Canva", "Google Workspace"],
      },
    ],
  },
];

const Icon = ({ icon }: { icon: Place["icon"] }) => {
  if (icon === "study") return <GraduationCap size={18} aria-hidden="true" />;
  if (icon === "work") return <BriefcaseBusiness size={18} aria-hidden="true" />;
  return <MapPin size={18} aria-hidden="true" />;
};

const App = () => {
  const [selectedPlaceId, setSelectedPlaceId] = useState<string | null>(null);
  const selectedPlace = places.find((place) => place.id === selectedPlaceId) ?? null;

  return (
    <main className="page-shell">
      <section className="intro">
        <h1>The story of Leonie Anderhalden</h1>
        <h2 className="intro-title">Geographic CV</h2>
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

          {places.map((place) => {
            const isSelected = place.id === selectedPlaceId;

            return (
              <button
                className={`place-card place-${place.id}${isSelected ? " is-selected" : ""}`}
                style={{ "--x": `${place.x}%`, "--y": `${place.y}%` } as CSSProperties}
                key={place.id}
                type="button"
                aria-pressed={isSelected}
                aria-controls="selected-place-details"
                onClick={() => setSelectedPlaceId(place.id)}
              >
                <span className="place-icon">
                  <Icon icon={place.icon} />
                </span>
                <span>
                  <span className="place-title">{place.city}</span>
                  <span className="place-label">{place.label}</span>
                </span>
              </button>
            );
          })}
        </div>

        <HistoryCards place={selectedPlace} />
      </section>

      <ProfileHighlights />
    </main>
  );
};

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <App />
  </StrictMode>,
);
