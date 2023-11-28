import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import App from "../../App";
import { Recipespage } from "../../pages/Recipespage";
import { Heroespage } from "../../pages/Heroespage";
import { Startpage } from "../../pages/Startpage";
import { Guidespage } from "../../pages/Guidespage";
import { Heroinfo } from "../Heroinfo";

export const Root: React.FC = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="*" element={<p>Page not found</p>} />
        <Route path="/home" element={<Navigate to="/" />} />
        <Route path="/" element={<App />}>
          <Route index element={<Startpage />} />
          <Route path="recipes" element={<Recipespage />} />
          <Route path="guides" element={<Guidespage />} />
          <Route path="heroes">
            <Route index element={<Heroespage />} />
            <Route path=":heroname" element={<Heroinfo />} />
          </Route>
        </Route>
      </Routes>
    </BrowserRouter>
  );
};
