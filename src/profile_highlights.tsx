import {
  BookOpen,
  Bike,
  BriefcaseBusiness,
  ChefHat,
  Code2,
  Database,
  Mountain,
  Scissors,
  Snowflake,
  Workflow,
} from "lucide-react";
import cookingImage from "./assets/interests/cooking.jpg";
import cyclingImage from "./assets/interests/cycling.jpg";
import hikingImage from "./assets/interests/hiking.jpg";
import readingImage from "./assets/interests/reading.jpg";
import sewingImage from "./assets/interests/sewing.jpg";
import skiingImage from "./assets/interests/skiing.jpg";

type SkillGroup = {
  title: string;
  icon: "data" | "programming" | "modeling" | "delivery";
  skills: string[];
};

type Language = {
  language: string;
  level: string;
  flag: "switzerland" | "great-britain" | "france";
  strength: "native" | "advanced" | "intermediate";
};

type Interest = {
  label: string;
  icon: "cooking" | "hiking" | "skiing" | "sewing" | "reading" | "cycling";
  image: string;
};

const skillGroups: SkillGroup[] = [
  {
    title: "Data",
    icon: "data",
    skills: ["Datamanagement", "RDBMS", "PostgreSQL", "REST API"],
  },
  {
    title: "Languages",
    icon: "programming",
    skills: ["Java", "Python", "R"],
  },
  {
    title: "Modeling",
    icon: "modeling",
    skills: ["UML", "BPMN 2.0", "Business processes"],
  },
  {
    title: "Delivery",
    icon: "delivery",
    skills: ["Projectmanagement"],
  },
];

const languages: Language[] = [
  {
    language: "German",
    level: "First language",
    flag: "switzerland",
    strength: "native",
  },
  {
    language: "English",
    level: "BEC Vantage B2",
    flag: "great-britain",
    strength: "advanced",
  },
  {
    language: "French",
    level: "DFP B1",
    flag: "france",
    strength: "intermediate",
  },
];

const interests: Interest[] = [
  { label: "Cooking", icon: "cooking", image: cookingImage },
  { label: "Hiking", icon: "hiking", image: hikingImage },
  { label: "Skiing", icon: "skiing", image: skiingImage },
  { label: "Sewing", icon: "sewing", image: sewingImage },
  { label: "Reading", icon: "reading", image: readingImage },
  { label: "Cycling", icon: "cycling", image: cyclingImage },
];

const SkillIcon = ({ icon }: { icon: SkillGroup["icon"] }) => {
  if (icon === "data") return <Database size={20} aria-hidden="true" />;
  if (icon === "programming") return <Code2 size={20} aria-hidden="true" />;
  if (icon === "modeling") return <Workflow size={20} aria-hidden="true" />;
  return <BriefcaseBusiness size={20} aria-hidden="true" />;
};

const InterestIcon = ({ icon }: { icon: Interest["icon"] }) => {
  if (icon === "cooking") return <ChefHat size={22} aria-hidden="true" />;
  if (icon === "hiking") return <Mountain size={22} aria-hidden="true" />;
  if (icon === "skiing") return <Snowflake size={22} aria-hidden="true" />;
  if (icon === "sewing") return <Scissors size={22} aria-hidden="true" />;
  if (icon === "cycling") return <Bike size={22} aria-hidden="true" />;
  return <BookOpen size={22} aria-hidden="true" />;
};

export const ProfileHighlights = () => {
  return (
    <section className="profile-highlights" aria-label="Profile highlights">
      <section className="profile-section" aria-labelledby="skills-title">
        <h2 className="profile-section-title" id="skills-title">
          Skills
        </h2>

        <section className="profile-module skills-module" aria-label="Skills">
          <div className="skill-board">
            {skillGroups.map((group) => (
              <article className="skill-group" key={group.title}>
                <div className="skill-group-heading">
                  <span className="skill-group-icon">
                    <SkillIcon icon={group.icon} />
                  </span>
                  <h4>{group.title}</h4>
                </div>
                <div className="skill-chip-row" aria-label={`${group.title} skills`}>
                  {group.skills.map((skill) => (
                    <span className="skill-chip" key={skill}>
                      {skill}
                    </span>
                  ))}
                </div>
              </article>
            ))}
          </div>
        </section>
      </section>

      <section className="profile-section" aria-labelledby="languages-title">
        <h2 className="profile-section-title" id="languages-title">
          Languages
        </h2>

        <section className="profile-module languages-module" aria-label="Languages">
          <div className="language-stamps">
            {languages.map((language) => (
              <article
                className={`language-stamp language-${language.strength}`}
                key={language.language}
              >
                <div className="language-info-row">
                  <span
                    className={`language-flag flag-${language.flag}`}
                    aria-label={`${language.language} flag`}
                  />
                  <div className="language-text">
                    <h4>{language.language}</h4>
                    <span className="stamp-level">{language.level}</span>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </section>
      </section>

      <section className="profile-section" aria-labelledby="interests-title">
        <h2 className="profile-section-title" id="interests-title">
          Off-screen energy
        </h2>

        <section className="profile-module interests-module" aria-label="Off-screen energy">
          <div className="interest-compass" aria-label="Off-screen energy">
            {interests.map((interest) => (
              <article className="interest-tile" key={interest.label}>
                <img className="interest-photo" src={interest.image} alt="" aria-hidden="true" />
                <span className="interest-icon">
                  <InterestIcon icon={interest.icon} />
                </span>
                <h4>{interest.label}</h4>
              </article>
            ))}
          </div>
        </section>
      </section>
    </section>
  );
};
