import { Routes, Route, Navigate } from "react-router-dom";
import { Faq, Gallery, Home } from "./pages";

export function AppRoutes(): JSX.Element {
  return (
    <>
      <Routes>
        <Route path={"/"} element={<Home />} />
        <Route path={"/faq"} element={<Faq />} />
        <Route path={"/gallery"} element={<Gallery />} />
        //TODO: Add 404 page
        <Route path={"*"} element={<Navigate to={"/"} replace />} />
      </Routes>
    </>
  );
}
