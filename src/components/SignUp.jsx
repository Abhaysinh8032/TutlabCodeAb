// SignUp.js
import {useState  } from "react";
import { getAuth ,createUserWithEmailAndPassword } from "firebase/auth";
import {useNavigate } from "react-router-dom";
import app from "./FbConfig";


const SignUp = () => {
  const nav = useNavigate();
  const [email, setEmail] = useState('');
  const [pw1 ,setPw1] = useState("");
  const [pw2 ,setPw2] = useState("");
  // const[ans ,setAns] = useState("");

  const hEmail = (event) => {setEmail(event.target.value);}
  const hPw2 = (event) => {setPw2(event.target.value);}
  const [isValid, setIsValid] = useState(false);
  const hSignIn = (event) => {nav("/SignIn")}
  const hPw1 = (event) => {
    setPw1(event.target.value);
 

    // Perform password validation
    const hasNumber = /\d/.test(pw1);
    const hasAlphabet = /[a-zA-Z]/.test(pw1);
    const hasSpecialChar = /[!@#$%^&*(),.?":{}|<>]/.test(pw1);

    setIsValid(hasNumber && hasAlphabet && hasSpecialChar);
  };

  const save = (event) => {
    event.preventDefault();
    if((email ==="")||(email.trim() ==="")||(!email.match(/^\S+@\S+\.\S+$/))){
        alert("empty or invalid eamil");
        setEmail("");
    }
    else if ((pw1==="")||(pw2==="")||(pw1.trim() ==="")||(pw2.trim() ==="")){
        alert("password empty");
       
       }
    // else if (!pw1.match(/^\S+[!@#$%^&*(),.?":{}|<>]+$/)){
    //     alert("password should contain special symbol");
       
    //     setPw1("");}
    else if (pw1.length<=7){
        alert("password min 8 length ");
        setPw1("");
        setPw2("");}
    else if (isValid===false){
        alert("password should have 1Capital,1specialSymbol and 1number");
        setPw1("");
        setPw2("");}
       
    else if((pw1 === pw2)){
        const auth = getAuth();
        createUserWithEmailAndPassword(auth,email , pw1)
        .then(
          res =>nav("/SignIn"),
          alert("successfully signup"),
        console.log(email+"successfully signup")
          )
      
        .catch(err =>alert(" "+ err));
    }
    else {
        alert("password not match");
    }

    }


  
  
  // const handleSignUp = async () => {
  //   try {
  //     const userCredential = await auth.createUserWithEmailAndPassword(email, password);
  //     console.log('User registered:', userCredential.user);
  //   } catch (error) {
  //     console.error('Error signing up:', error.message);
  //   }
  // };

  return (
    <div>
      <center>
      <h2>Sign Up</h2>
      <input type="email" placeholder="Email" onChange={hEmail} />
      <br /><br/>
      <input type="password" placeholder="Password1" onChange={hPw1} />
      <br /><br/>
      <input type="password" placeholder="Password2" onChange={hPw2} />
      <br /><br/>
      <button onClick={save}>Sign Up</button>
      <br/><br/>
      <button onClick={hSignIn}>Sign In</button>
      </center>
    </div>
  );




};

export default SignUp;
