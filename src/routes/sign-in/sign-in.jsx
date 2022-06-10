import { signInWithGooglePopup } from "../../utils/firebase/firebase";

const SignIn = () => {
  const logGoogleUser = async () => {
    const response = await signInWithGooglePopup();
    console.log(response);
  };

  return (
    <div>
      Sign In
      <button onClick={logGoogleUser}>Sign in</button>
    </div>
  );
};
export default SignIn;
