import { useLocation } from "react-router-dom";
import { Hero } from "../../data/interfaces";

export const Heroinfo: React.FC = () => {
  const hero: Hero = useLocation().state;

  console.log(hero.tier);

  return (
    <section className="heroinfo">
      <h1 className="herotitle">
        <img src={hero.element_icon} />
        {hero.heroname}
        <span className="hero-orientation">/{hero.orientation}</span>
      </h1>

      <div className="hero-box">
        <div>
          {/* <p className="hero-rating">{hero.tier.avg}</p> */}
          <img src={hero.avatarPath} className="hero-avatar" />
        </div>
        <div className="hero-skills">
          <div className="skillblock">
            <img
              src={hero.skill.slot2.skillPath}
              alt={hero.skill.slot2.skillname}
            />
            <div>
              <h2>{hero.skill.slot2.skillname}</h2>
              {hero.skill.slot2.skilldesc}
            </div>
          </div>
          <div className="skillblock">
            <img
              src={hero.skill.slot3.skillPath}
              alt={hero.skill.slot3.skillname}
            />
            <div>
              <h2>{hero.skill.slot3.skillname}</h2>
              {hero.skill.slot3.skilldesc}
            </div>
          </div>
          <div className="skillblock">
            <img
              src={hero.skill.slot4.skillPath}
              alt={hero.skill.slot4.skillname}
            />
            <div>
              <h2>{hero.skill.slot4.skillname}</h2>
              {hero.skill.slot4.skilldesc}
            </div>
          </div>
          {hero.captain_slot && (
            <div className="skillblock">
              <img src={hero.captain_slot_icon} alt="aura" />
              <div>
                <h2>Aura</h2>
                {hero.captain_slot}
              </div>
            </div>
          )}
        </div>
      </div>

      {Array.isArray(hero.story) && (
        <div className="hero-story">
         {hero.story.map(({ content, unlock_tip_type }, i) => (
          <p 
            key={unlock_tip_type + i}
            className="herostory"
          >
            {content}
          </p>
         ))}
        </div>
      )}
    </section>
  );
};
