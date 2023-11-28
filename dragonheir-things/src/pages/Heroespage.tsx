import { heroes } from "../data/heroes";
import { Hero } from "../data/interfaces";
import { useEffect, useState } from "react";
import { Herocard } from "../component/Herocard";
import { FilterButton } from "../component/FilterButton";

export const Heroespage: React.FC = () => {
  const [heroeslist, setHeroeslist] = useState<Hero[]>([]);
  const [searchValue, setSearchValue] = useState("");
  const [lega, setLega] = useState(false);
  const [epic, setEpic] = useState(false);
  const [rare, setRare] = useState(false);
  const [common, setCommon] = useState(false);
  const [fire, setFire] = useState(false);
  const [ice, setIce] = useState(false);
  const [lightning, setLightning] = useState(false);
  const [necro, setNecro] = useState(false);
  const [poison, setPoison] = useState(false);
  const [radiance, setRadiance] = useState(false);

  useEffect(() => {
    const heroRarityCheck = (srt: string) => {
      if (!lega && !epic && !rare && !common) {
        return true;
      }
      if (lega && srt === "Legendary") {
        return true;
      }
      if (epic && srt === "Epic") {
        return true;
      }
      if (rare && srt === "Rare") {
        return true;
      }
      if (common && srt === "Common") {
        return true;
      }
      return false;
    };

    const heroElementCheck = (str: string) => {
      if (!fire && !ice && !radiance && !poison && !necro && !lightning) {
        return true;
      }
      if (fire && str === "Fire") {
        return true;
      }
      if (ice && str === "Ice") {
        return true;
      }
      if (radiance && str === "Radiance") {
        return true;
      }
      if (poison && str === "Poison") {
        return true;
      }
      if (necro && str === "Necrosis") {
        return true;
      }
      if (lightning && str === "Lightning") {
        return true;
      }
      return false;
    };

    const filterHeroes = (arr: Hero[], str: string) => {
      const res = arr.filter(({ heroname, rarity, element }) => {
        
        const name = heroname.toLocaleLowerCase();
        const search = str.toLocaleLowerCase();
        if (!heroRarityCheck(rarity)) {
          return false;
        }
        if (!heroElementCheck(element)) {
          return false;
        }

        return name.includes(search);
      });

      setHeroeslist(res);
    };

    filterHeroes(heroes, searchValue);
  }, [
    common,
    epic,
    fire,
    ice,
    lega,
    lightning,
    necro,
    poison,
    radiance,
    rare,
    searchValue,
  ]);

  return (
    <section className="herosection">
      <form className="heroesForm">
        <input
          className="herosearch"
          type="search"
          name="herosearch"
          id="herosearch"
          value={searchValue}
          placeholder="hero name..."
          onChange={(e) => setSearchValue(e.target.value.trim())}
        />
        <div className="filterbutton-box">
        <FilterButton
          style="herotypebutton-legendary"
          state={{ check: lega, setCheck: setLega }}
        />
        <FilterButton
          style="herotypebutton-epic"
          state={{ check: epic, setCheck: setEpic }}
        />
        <FilterButton
          style="herotypebutton-rare"
          state={{ check: rare, setCheck: setRare }}
        />
        <FilterButton
          style="herotypebutton-common"
          state={{ check: common, setCheck: setCommon }}
        />
        <FilterButton style="fire" state={{ check: fire, setCheck: setFire }} />
        <FilterButton style="ice" state={{ check: ice, setCheck: setIce }} />
        <FilterButton
          style="lightning"
          state={{ check: lightning, setCheck: setLightning }}
        />
        <FilterButton
          style="necro"
          state={{ check: necro, setCheck: setNecro }}
        />
        <FilterButton
          style="poison"
          state={{ check: poison, setCheck: setPoison }}
        />
        <FilterButton
          style="radiance"
          state={{ check: radiance, setCheck: setRadiance }}
        />
        </div>
      </form>
      <div className="heroeslist">
        {heroeslist.map((hero) => (
          <Herocard hero={hero} key={hero.id} />
        ))}
      </div>
    </section>
  );
};
