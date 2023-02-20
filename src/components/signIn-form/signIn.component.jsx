import { useState } from "react";
import { useDispatch } from "react-redux";
import {
  googlePopSignIn,
  signInWithEmailAndPasswordStart,
} from "../../store/user/user.action";
import { Input, LinkS, SignInContainer, UserIcon } from "./signIn.styles";
const defaultFormField = { email: "", password: "" };
const SignInForm = () => {
  const [formField, setFormFiled] = useState(defaultFormField);
  const dispatch = useDispatch();
  const { email, password } = formField;
  const resetFormFields = () => {
    setFormFiled(defaultFormField);
  };
  const onSubmitHandler = async (e) => {
    e.preventDefault();

    if (!email || !password) return;

    try {
      dispatch(signInWithEmailAndPasswordStart(email, password));
      resetFormFields();
    } catch (error) {
      alert(error);
    }
  };

  const onChangeHandler = (e) => {
    const { name, value } = e.target;
    setFormFiled({ ...formField, [name]: value });
  };

  const googleSignIn = () => {
    dispatch(googlePopSignIn());
  };
  return (
    <SignInContainer>
      <form onSubmit={onSubmitHandler}>
        <h1>Login Form</h1>
        <label>Username :</label>
        <Input
          onChange={onChangeHandler}
          type="email"
          placeholder="Enter Your Email :"
          required
          name="email"
          value={email}
        />
        <label>Password :</label>
        <Input
          onChange={onChangeHandler}
          type="password"
          placeholder="Enter Your Password :"
          required
          name="password"
          value={password}
        />
        <div className="buttons">
          <button type="submit">Login</button>
          <button type="button" onClick={googleSignIn}>
            Sign in With Google
          </button>
        </div>
        <LinkS to="signup">Sign Up!</LinkS>
      </form>
    </SignInContainer>
  );
};
export default SignInForm;
