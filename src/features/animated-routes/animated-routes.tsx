import { Routes, useLocation, Route } from "react-router-dom";
import { routes } from "src/routes";
import { AnimatePresence } from "framer-motion";

export default function AnimatedRoutes() {
  const location = useLocation();

  return (
    <>
      <AnimatePresence mode="wait">
        <Routes location={location} key={location.pathname}>
          {routes.map(({ id, path, element }: any) => (
            <Route key={id} path={path} element={element} />
          ))}
        </Routes>
      </AnimatePresence>
    </>
  );
}
