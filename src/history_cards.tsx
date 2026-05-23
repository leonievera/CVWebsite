import { BriefcaseBusiness, Building2, CalendarDays, GraduationCap, MapPin } from "lucide-react";

type HistoryPlace = {
  city: string;
  years: string;
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

type HistoryCardsProps = {
  place: HistoryPlace | null;
};

const Icon = ({ icon }: { icon: HistoryPlace["icon"] }) => {
  if (icon === "study") return <GraduationCap size={18} aria-hidden="true" />;
  if (icon === "work") return <BriefcaseBusiness size={18} aria-hidden="true" />;
  return <MapPin size={18} aria-hidden="true" />;
};

export const HistoryCards = ({ place }: HistoryCardsProps) => {
  if (!place) {
    return (
      <aside
        className="storyline storyline-empty"
        id="selected-place-details"
        aria-live="polite"
        aria-label="Selected CV place"
      >
        <div className="story-empty-card">
          <MapPin size={24} aria-hidden="true" />
          <h2>Choose a place on the map</h2>
          <p>
            Select Sarnen, Rotkreuz, or Adliswil to open the CV steps connected to that place.
          </p>
        </div>
      </aside>
    );
  }

  return (
    <aside
      className="storyline"
      id="selected-place-details"
      aria-live="polite"
      aria-label={`${place.city} CV details`}
    >
      <article className="story-item">
        <div className="story-heading">
          <Icon icon={place.icon} />
          <h2>{place.city}</h2>
          <span>{place.years}</span>
        </div>
        <p>{place.details}</p>

        <div className="cv-entry-list">
          {place.entries.map((entry) => (
            <article className="cv-entry" key={`${entry.title}-${entry.dateRange}`}>
              <div className="cv-entry-marker" aria-hidden="true" />
              <div className="cv-entry-content">
                <div className="cv-entry-meta">
                  <span>
                    <CalendarDays size={14} aria-hidden="true" />
                    {entry.dateRange}
                  </span>
                  <span>
                    <Building2 size={14} aria-hidden="true" />
                    {entry.organization}
                  </span>
                </div>
                <h3>{entry.title}</h3>

                {entry.tasks ? (
                  <div className="cv-detail-group">
                    <h4>Tasks</h4>
                    <div className="cv-chip-row">
                      {entry.tasks.map((task) => (
                        <span className="cv-chip" key={task}>
                          {task}
                        </span>
                      ))}
                    </div>
                  </div>
                ) : null}

                {entry.applications ? (
                  <div className="cv-detail-group">
                    <h4>Applications</h4>
                    <div className="cv-chip-row">
                      {entry.applications.map((application) => (
                        <span className="cv-chip cv-chip-tool" key={application}>
                          {application}
                        </span>
                      ))}
                    </div>
                  </div>
                ) : null}
              </div>
            </article>
          ))}
        </div>
      </article>
    </aside>
  );
};
