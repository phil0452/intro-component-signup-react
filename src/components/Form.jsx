 import { useState } from 'react';
import './form_styling.css'

import errorIcon from './icon-error.png'
//Quality component for the insure-landing-page
function Form() {
    const [firstName, setFirstName] = useState("");
    const [lastName, setLastName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [iconCSS, setIconCSS] = useState("icon");
    const [isValid, setIsvalid] = useState(false);

    function handleFirstNameChange(e){
        setFirstName(e.target.value);
    }

    function handleLastNameChange(e){
        setLastName(e.target.value);
    }

    function handleEmailChange(e){
        setEmail(e.target.value);
    }

    function handlePasswordChange(e){
        setPassword(e.target.value);
    }

    function Validate(e) {
        e.preventDefault();

        //each form that is valid
        //	-	green input with green border
        //for an ivalid entry
        //	-	red input with red border
        //whether first is completed or not
        //	-	show a message?

        if (firstName == ""){
          ShowResults('firstName-image', 'firstName-message', "firstName", true);
        }
        else{
          ShowResults('firstName-image', 'firstName-message', "firstName", false);
        }

        if (lastName == ""){
          ShowResults('lastName-image', 'lastName-message', "lastName", true);
        }
        else{
          ShowResults('lastName-image', 'lastName-message', "lastName", false);
        }

        if (email == ""){
          document.getElementById('email-message').innerHTML = "<em>Email cannot be empty</em>";
          ShowResults('email-image', 'email-message', "email", true);
        }
        else{
          if (/^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/.test(email) === false) {
            document.getElementById('email-message').innerHTML = "<em>Looks like this input is not an email.</em>";
            ShowResults('email-image', 'email-message', "email", true);
          }
          else{
          ShowResults('email-image', 'email-message', "email", false);
          }		
	      }
	
        if (password == ""){
          ShowResults('password-image', 'password-message', "password", true);
        }
        else{
          ShowResults('password-image', 'password-message', "password", false);
        }	
    }

     
  function ShowResults(imageID, messageID, inputID, errorFound){	
    if (errorFound){
      document.getElementById(imageID).classList.remove("icon");
      document.getElementById(messageID).classList.remove("error-message");
      document.getElementById(inputID).classList.remove("success");
      document.getElementById(inputID).classList.add("error-border");
    }
    else{
      document.getElementById(inputID).classList.remove("error-border");
      document.getElementById(inputID).classList.add("success");
      document.getElementById(imageID).classList.add("icon");
      document.getElementById(messageID).classList.add("error-message");		
    }
    
  }

  return (
    <>
      <form id="form" className="corners" onSubmit={Validate}>
        <div id="form-controls">
            <input type="text" className="data corners input-border" placeholder="First Name" 
            value={firstName} onChange={handleFirstNameChange} id="firstName" />
            <img src={errorIcon} alt="error icon" className="icon" id="firstName-image" />
            <p id="firstName-message" className="error-message"><em>First Name cannot be empty</em></p>
            
            <input type="text" className="data corners input-border" placeholder="Last Name"
            value={lastName} onChange={handleLastNameChange} id="lastName" />
            <img src={errorIcon} alt="error icon" className="icon" id="lastName-image" />
            <p id="lastName-message" className="error-message"><em>Last Name cannot be empty</em></p>
            
            <input type="text" className="data corners input-border" placeholder="Email Address"
            value={email} onChange={handleEmailChange} id="email" />
            <img src={errorIcon} alt="error icon" className="icon" id="email-image" />
            <p id="email-message" className="error-message"><em>Email cannot be empty</em></p>
            
            <input type="text" className="data corners input-border" placeholder="Password"
           value={password} onChange={handlePasswordChange} id="password" />
            <img src={errorIcon} alt="error icon" className="icon" id="password-image" />
            <p id="password-message" className="error-message"><em>Password cannot be empty</em></p>
            
            <input type="submit" className="whitetext corners" value="Claim your free trial" />					
        </div>
        
        <p className="corners" id="agree-messge">
            By clicking the button, you are agreeing to our <strong>Terms and Services</strong>
        </p>
    </form>
    </>
  );
}


export default Form;
