import { Routes, useLocation, Route } from "react-router-dom";
import { AnimatePresence } from "framer-motion";
import ProtectedRoute from "src/components/protected-route";
import DefaultLayout from "src/layouts/default-layout";
import Index from "src/pages";
import List from "src/pages/id";
import Favorites from "src/pages/favorites";
import SignIn from "src/pages/sign-in";
import SignUp from "src/pages/sign-up";

export default function AnimatedRoutes() {
  const location = useLocation();

  return (
    <>
      <AnimatePresence mode="wait">
        <Routes location={location} key={location.pathname}>
          <Route element={<ProtectedRoute />}>
            <Route element={<DefaultLayout />}>
              <Route path="/" element={<Index />} />
              <Route path=":id" element={<List />} />
              <Route path="favorites" element={<Favorites />} />
            </Route>
          </Route>

          <Route path="sign-in" element={<SignIn />} />
          <Route path="sign-up" element={<SignUp />} />
        </Routes>
      </AnimatePresence>
    </>
  );
}
