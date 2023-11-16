import "./App.css";
import { SelectBuff } from "./component/SelectBuff";
import { recipes } from "./data";
import { useState } from "react";
import { checkItemBuff } from "./utility";
import { RecipesTable } from "./component/RecipesTable";

export type State = Record<string, boolean>;

function App() {
  const [buffSelected, setBuffSelected] = useState("");
  const filteredRecipes = recipes.filter((item) =>
    checkItemBuff(buffSelected, item)
  );

  return (
    <section>
      <h1 className="recipes-title">Reciples list</h1>
      <SelectBuff buff={buffSelected} setBuff={setBuffSelected} />
      <RecipesTable list={filteredRecipes} />
    </section>
  );
}

export default App;
