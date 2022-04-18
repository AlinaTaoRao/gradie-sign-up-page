import "./styles.css";
import { HeaderTitle } from "./login-form-container/header-title/HeaderTitle.jsx";
import { SubHeaderTitle } from "../components/login-form-container/sub-header-title/SubHeaderTitle.jsx";

export const LoginFormContainer = () => {
  return (
    <div className="login-form-container">
      <HeaderTitle />
      <SubHeaderTitle />
    </div>
  );
};
