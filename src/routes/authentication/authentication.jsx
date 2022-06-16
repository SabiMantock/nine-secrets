import SignInForm from "../../components/sign-in-form/sign-in-form";
import SignUpForm from "../../components/sign-up-form/sign-up-form";
import { AuthenticationContainer } from "./authentication-style";

const Authentication = () => {
  return (
    <AuthenticationContainer className="authentication-container">
      <SignInForm />
      <SignUpForm />
    </AuthenticationContainer>
  );
};
export default Authentication;
