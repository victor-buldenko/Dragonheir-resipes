import { useEffect, useState } from "react";
import { Dna } from "react-loader-spinner";
import { SelectBuff } from "../component/SelectBuff";
import { recipes } from "../data/data";
import { checkItemBuff } from "../utility";
import { RecipesTable } from "../component/RecipesTable";
import { Recipes } from "../data/interfaces";

export type State = Record<string, boolean>;

export const Recipespage: React.FC = () => {
  const [buffSelected, setBuffSelected] = useState("");
  const [loadingData, setLoadingData] = useState(true);
  const [recipesList, setRecipesList] = useState<Recipes[]>([]);
  const filteredRecipes = recipesList.filter((item) =>
    checkItemBuff(buffSelected, item)
  );

  useEffect(() => {
    fetch("https://65590a4fe93ca47020aa0572.mockapi.io/list")
      .then((res) => {
        if (!res.ok) {
          throw new Error(`mockapi.io response was not ok: ${res.status}`);
        }
        return res.json();
      })
      .then((data) => setRecipesList(data))
      .catch((err) => {
        console.error("Error fetching data:", err);
        setRecipesList(recipes);
      })
      .finally(() => setLoadingData(false));
  }, []);

  return (
    <section>
      <SelectBuff buff={buffSelected} setBuff={setBuffSelected} />
      {loadingData ? (
        <Dna
          visible={true}
          height="80"
          width="80"
          ariaLabel="dna-loading"
          wrapperClass="dna-wrapper"
          wrapperStyle={{ display: "block", margin: "0 auto" }}
        />
      ) : (
        <RecipesTable list={filteredRecipes} />
      )}
    </section>
  );
};
