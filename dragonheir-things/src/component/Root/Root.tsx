import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import App from "../../App";
import { Startpage } from "../../pages/Startpage";

export const Root: React.FC = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="*" element={<Navigate to="/" />} />
        <Route path="/home" element={<Navigate to="/" />} />
        <Route path="/" element={<App />}>
          <Route index element={<Startpage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
};
