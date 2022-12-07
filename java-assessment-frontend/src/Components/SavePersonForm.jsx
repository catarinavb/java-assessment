import { Button, Grid, TextField } from "@mui/material";
import axios from "axios";
import { useState } from "react";

export default function SavePersonForm({setRows,setIsTableDisplayed}) {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [email, setEmail] = useState("");

  const [isFirstNameValidated, setIsFirstNameValidated] = useState(false);
  const [isLastNameValidated, setIsLastNameValidated] = useState(false);
  const [isPhoneNumberValidated, setIsPhoneNumberValidated] = useState(false);
  const [isEmailValidated, setIsEmailValidated] = useState(false);
  const handleSubmit = (event) => {
    event.preventDefault();

    const person = {
      firstName: firstName,
      lastName: lastName,
      phoneNumber: phoneNumber,
      email: email,
    };

    axios.post("http://localhost:8081/person/", person).then((response) => {
     axios.get("http://localhost:8081/person/").then((response)=>{
      setRows(response.data);
      setEmail("");
      setPhoneNumber("");
      setFirstName("");
      setLastName("");
     })
    });
  };
  function onlyNumbers(str) {
    return /^[0-9]+$/.test(str);
  }

  return (
    <>
      <Grid
        container
        mt={2}
        spacing={2}
        alignItems="center"
        justifyContent={"center"}
      >
        <Grid item>
          <TextField
            required
            id="outlined-basic"
            label="First Name"
            variant="outlined"
            value={firstName}
            onChange={(event) => {
              setFirstName(event.target.value);
              if (firstName != "") setIsFirstNameValidated(true);
              else setIsFirstNameValidated(false);
            }}
          />
        </Grid>
        <Grid item>
          <TextField
            required
            id="outlined-basic"
            label="Last Name"
            value={lastName}
            variant="outlined"
            onChange={(event) => {
              setLastName(event.target.value);
              if (lastName != "") setIsLastNameValidated(true);
              else setIsLastNameValidated(false);
            }}
          />
        </Grid>
        <Grid item>
          <TextField
            required
            id="outlined-basic"
            label="Phone Number"
            variant="outlined"
            value={phoneNumber}
            type="number"
            onChange={(event) => {
              setPhoneNumber(event.target.value);
              if (phoneNumber != "" )
                setIsPhoneNumberValidated(true);
              else setIsPhoneNumberValidated(false);
            }}
          />
        </Grid>
        <Grid item>
          <TextField
            required
            type={"email"}
            id="outlined-basic"
            label="Email"
            value={email}
            variant="outlined"
            onChange={(event) => {
              setEmail(event.target.value);
              if (email != "" ) 
              if(email.includes("@"))
              setIsEmailValidated(true);
              else setIsEmailValidated(false);
            }}
          />
        </Grid>
      </Grid>
      <Grid
        container
        mt={2}
        spacing={2}
        alignItems="center"
        justifyContent={"center"}
      >
        <Grid item>
          <Button
            variant="contained"
            sx={{ width: "120px" }}
            type="submit"
            disabled={
              !(
                isFirstNameValidated &&
                isLastNameValidated &&
                isEmailValidated &&
                isPhoneNumberValidated
              )
            }
            onClick={handleSubmit}
          >
            Save
          </Button>
        </Grid>
        <Grid item>
          <Button variant="contained" sx={{ width: "120px" }} onClick={()=>{setIsTableDisplayed(prev=>!prev)}}>
            {" "}
            Show List
          </Button>
        </Grid>
      </Grid>
    </>
  );
}
