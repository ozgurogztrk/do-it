import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

const Index = () => {
  // Create a navigate variable using useNavigate hook to navigate between pages
  const navigate = useNavigate();

  // Navigate the user to the overview page when the component mounts
  useEffect(() => {
    navigate("/overview");
  }, []);

  return <></>;
};

export { Index };
