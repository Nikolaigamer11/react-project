import { createUserWithEmailAndPassword ,signInWithEmailAndPassword as SignIn} from "firebase/auth";
import React, { useState } from "react";
import { auth, db } from "../firebaseConfig";
import { setDoc, doc } from "firebase/firestore";

const SignUp = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [fname, setFname] = useState("");
  const [lname, setLname] = useState("");
  const [address, setAddress] = useState("");
  const [pnum, setPnum] = useState("");
  const [isSignUpActive, setIsSignUpActive] = useState(true);

  const MethodChange = () => {
    setIsSignUpActive(!isSignUpActive);
  };


  const handleSignIn = async (e) => {
    e.preventDefault();
    switch(true){
      case email.length === 0:
        alert("Email field cannot be empty.");
        break;
      case password.length < 6:
        alert("Password is too short.");
        break;
        default:
          try {
            await SignIn(auth, email, password)
            .then((uCred)=>{
              const user=uCred.user;
              console.log("logged In",user,"succesfully");
            });

          } catch (error) {
            alert(error.code)
          }
    }
  }


  const handleSignUp = async (e) => {
    e.preventDefault();
    // Add your registration logic here
    switch (true) {
      case fname.length === 0:
        alert("First name field cannot be empty.");
        break;
      case lname.length === 0:
        alert("Last name field cannot be empty.");
        break;
      case toString(pnum.length) === 10:
        alert("Phone number does not contain 10 digits.");
        break;
      case address.length === 0:
        alert("Address field cannot be empty.");
        break;
      case email.length === 0:
        alert("Email field cannot be empty.");
        break;
      case password.length < 6:
        alert("Password is too short.");
        break;
      default:
        try {
          await createUserWithEmailAndPassword(auth, email, password);
          const user = auth.currentUser;
          if (user) {
            await setDoc(doc(db, "User", user.uid), {
              email: user.email,
              firstName: fname,
              lastName: lname,
              phoneNumber: pnum,
              address: address,
            });
          }
          alert("user registered", user.uid, "and name of", fname);



        } catch (error) {
          alert(error.code)
          if ((error = "Firebase: Error (auth/email-already-in-use).")) {
            const targetDiv = document.querySelector(".exist");
            targetDiv.innerHTML = "Email already exist";
          }
        }
    }
  };






  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <div className="bg-white p-6 rounded-lg shadow-md w-full max-w-md">
        <form>
          {isSignUpActive && (
            <legend className="text-2xl font-bold mb-6 text-center">
              Register
            </legend>
          )}
          {!isSignUpActive && (
            <legend className="text-2xl font-bold mb-6 text-center">
              Log In
            </legend>
          )}
          <fieldset>
            {isSignUpActive && (
              <div className="mb-4">
                <label
                  htmlFor="fname"
                  className="block text-sm font-medium text-gray-700"
                >
                  First Name
                </label>
                <input
                  type="text"
                  id="fname"
                  className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                  value={fname}
                  onChange={(e) => setFname(e.target.value)}
                />
              </div>
            )}
            {isSignUpActive && (
              <div className="mb-4">
                <label
                  htmlFor="lname"
                  className="block text-sm font-medium text-gray-700"
                >
                  Last Name
                </label>
                <input
                  type="text"
                  id="lname"
                  className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                  value={lname}
                  onChange={(e) => setLname(e.target.value)}
                />
              </div>
            )}
            {isSignUpActive && (
              <div className="mb-6">
                <label
                  htmlFor="pnum"
                  className="block text-sm font-medium text-gray-700"
                >
                  Phone Number
                </label>
                <input
                  type="number"
                  id="pnum"
                  className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                  value={pnum}
                  onChange={(e) => setPnum(e.target.value)}
                />
              </div>
            )}

            <div className="exist font-semibold text-red-600">
              <p></p>
            </div>
            {isSignUpActive && (
              <div className="mb-4">
                <label
                  htmlFor="address"
                  className="block text-sm font-medium text-gray-700"
                >
                  Address
                </label>
                <input
                  type="text"
                  id="address"
                  className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                  value={address}
                  onChange={(e) => setAddress(e.target.value)}
                />
              </div>
            )}

            <div className="mb-4">
              <label
                htmlFor="email"
                className="block text-sm font-medium text-gray-700"
              >
                Email
              </label>
              <input
                type="email"
                id="email"
                className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>
            <div className="mb-4">
              <label
                htmlFor="password"
                className="block text-sm font-medium text-gray-700"
              >
                Password
              </label>
              <input
                type="password"
                id="password"
                className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
            </div>
            {isSignUpActive && (
              <button
                onClick={handleSignUp}
                type="button"
                className="w-full py-2 px-4 bg-indigo-600 text-white font-bold rounded-md hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
              >
                Register
              </button>
            )}

            {!isSignUpActive && (
              <button
              onClick={ handleSignIn}
                type="button"
                className="w-full py-2 px-4 bg-indigo-600 text-white font-bold rounded-md hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
              >
                Log In
              </button>
            )}
          </fieldset>
          {isSignUpActive && <a onClick={MethodChange}>Log In</a>}
          {!isSignUpActive && <a onClick={MethodChange}>Create an account</a>}
        </form>
      </div>
    </div>
  );
};

export default SignUp;
