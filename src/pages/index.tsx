import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

export default function Index() {
  // Create a navigate variable using useNavigate hook to navigate between pages
  const navigate = useNavigate();

  useEffect(() => {
    navigate("/tasks");
  }, []);

  return <></>;
}
