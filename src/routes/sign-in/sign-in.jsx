// import { useEffect } from "react";
// import { getRedirectResult } from "firebase/auth";

import SignUpForm from "../../components/sign-up-form/sign-up-form";
import {
  // auth,
  signInWithGooglePopup,
  createUserDocumentFromAuth,
  // signInWithGoogleRedirect,
} from "../../utils/firebase/firebase";

const SignIn = () => {
  // const fetchGoogleRedirect = async () => {
  //   const response = await getRedirectResult(auth);
  //   if (response) {
  //     const userDocRef = await createUserDocumentFromAuth(response.user);
  //   }
  //   // console.log(response);
  // };
  // useEffect(() => {
  //   fetchGoogleRedirect();
  // }, []);

  const logGoogleUser = async () => {
    const { user } = await signInWithGooglePopup();
    const userDocRef = await createUserDocumentFromAuth(user);
  };
  // const logGoogleRedirectUser = async () => {
  //   const { user } = await signInWithGoogleRedirect();
  //   console.log({ user });
  // };

  return (
    <div>
      Sign In
      <button onClick={logGoogleUser}>Sign in</button>
      {/* <button onClick={logGoogleRedirectUser}>Redirect</button> */}
      <SignUpForm />
    </div>
  );
};
export default SignIn;
