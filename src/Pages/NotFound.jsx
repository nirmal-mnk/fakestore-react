import { useNavigate } from "react-router-dom";

export default function NotFound() {
  const navigated = useNavigate();
  setTimeout(() => {
    navigated("/");
  }, 5000);
  return (
    <div className="errorPage">
      <img src="Images/404ErrorPagenotFound.svg" alt="" />
    </div>
  );
}
