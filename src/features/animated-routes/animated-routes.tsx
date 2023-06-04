import { Routes, useLocation, Route } from "react-router-dom";
import { AnimatePresence } from "framer-motion";
import ProtectedRoute from "src/components/protected-route";
import DefaultLayout from "src/layouts/default-layout";
import Index from "src/pages";
import Tasks from "src/pages/tasks";
import ListPage from "src/pages/list-page";
import Favorites from "src/pages/favorites";
import SettingsPage from "src/pages/settings-page";
import SignIn from "src/pages/sign-in";
import SignUp from "src/pages/sign-up";
import Error from "src/pages/error";

export default function AnimatedRoutes() {
  // Create a location variable that will allow users to navigate between pages without any problem
  const location = useLocation();

  return (
    <>
      <AnimatePresence mode="wait">
        <Routes location={location} key={location.pathname}>
          <Route element={<ProtectedRoute />}>
            <Route element={<DefaultLayout />}>
              <Route path="/" element={<Index />} />
              <Route path="tasks" element={<Tasks />} />
              <Route path="favorites" element={<Favorites />} />
              <Route path="list-page/:id" element={<ListPage />} />
              <Route path="settings" element={<SettingsPage />} />
            </Route>
          </Route>

          <Route path="sign-in" element={<SignIn />} />
          <Route path="sign-up" element={<SignUp />} />
          <Route path="*" element={<Error />} />
        </Routes>
      </AnimatePresence>
    </>
  );
}
