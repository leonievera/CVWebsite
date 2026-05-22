import { BriefcaseBusiness, GraduationCap, MapPin } from "lucide-react";

type HistoryPlace = {
  city: string;
  years: string;
  icon: "study" | "work" | "home";
  details: string;
  items: string[];
};

type HistoryCardsProps = {
  places: HistoryPlace[];
};

const Icon = ({ icon }: { icon: HistoryPlace["icon"] }) => {
  if (icon === "study") return <GraduationCap size={18} aria-hidden="true" />;
  if (icon === "work") return <BriefcaseBusiness size={18} aria-hidden="true" />;
  return <MapPin size={18} aria-hidden="true" />;
};

export const HistoryCards = ({ places }: HistoryCardsProps) => {
  return (
    <div className="storyline" aria-label="CV storyline">
      {places.map((place) => (
        <article className="story-item" key={place.city}>
          <div className="story-heading">
            <Icon icon={place.icon} />
            <h2>{place.city}</h2>
            <span>{place.years}</span>
          </div>
          <p>{place.details}</p>
          <div className="history-card-list">
            {place.items.map((item) => (
              <div className="history-card" key={item}>
                {item}
              </div>
            ))}
          </div>
        </article>
      ))}
    </div>
  );
};
