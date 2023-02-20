import { useState } from "react";
import { useDispatch } from "react-redux";
import { signUpStart } from "../../store/user/user.action";
import {
  createAuthUserWithEmailAndPassword,
  creatingUserDocForm,
  signInWithEmailAndPasswords,
} from "../../utils/firebase/firebase.utils";
import { Input, SignUpContainer } from "./signUp.styles";

const defaultformfields = {
  displayName: "",
  email: "",
  password: "",
  confirmPassword: "",
};
export const SignUpForm = () => {
  const [formFields, setFormFields] = useState(defaultformfields);
  const dispatch = useDispatch();
  const { displayName, email, password, confirmPassword } = formFields;
  const resetFormFields = () => setFormFields(defaultformfields);
  const onChangeHandler = (e) => {
    const { name, value } = e.target;

    setFormFields({ ...formFields, [name]: value });
  };

  const onSubmitHandler = async (e) => {
    e.preventDefault();

    if (confirmPassword !== password) {
      alert("password dos not match");
      return;
    }
    try {
      dispatch(signUpStart(displayName, email, password));
      resetFormFields();
    } catch (error) {
      if (error.code === "auth/email-already-in-use") {
        alert("Cannot create user, email already in use");
      } else {
        console.log("user creation encountered an error", error);
      }
    }
  };

  return (
    <SignUpContainer>
      <form onSubmit={onSubmitHandler}>
        <h1>sign Up Form</h1>
        <label>displayName :</label>
        <Input
          onChange={onChangeHandler}
          type="text"
          placeholder="Enter Your Name"
          required
          name="displayName"
          value={displayName}
        />

        <label>Email :</label>
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
          placeholder="Enter Your Password"
          required
          name="password"
          value={password}
        />
        <label>ConfirmPassword :</label>
        <Input
          onChange={onChangeHandler}
          type="password"
          placeholder="ConfirmPassword Your Password"
          required
          name="confirmPassword"
          value={confirmPassword}
        />
        <button type="submit">sign Up</button>
      </form>
    </SignUpContainer>
  );
};
export default SignUpForm;
