import { Link } from "react-router-dom";
import { Hero } from "../../data/interfaces";
import { checkHeroRarity } from "../../utility";

type Props = {
  hero: Hero;
};

export const Herocard: React.FC<Props> = ({ hero }) => {
  return (
    <Link to={`./${hero.heroname}`} className="herocards" state={hero}>
      <img src={hero.avatarPath} className="heroavatar" />
      <p className={checkHeroRarity(hero.rarity)}>{hero.heroname}</p>
      <img src={hero.element_icon} className="elementicon" />
    </Link>
  );
};
