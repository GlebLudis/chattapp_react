import React, { useState } from "react";
import { Button, TextField } from "@mui/material";
import { createUserWithEmailAndPassword, updateProfile } from "firebase/auth";
import { auth, db, storage } from "../firebase";
import { ref, uploadBytesResumable, getDownloadURL } from "firebase/storage";
import { doc, setDoc } from "firebase/firestore";

const Register = () => {
  const [err, setErr] = useState(false);
  const handleSubmit = async (e) => {
    e.preventDefault();
    const displayName = e.target[0].value;
    const email = e.target[1].value;
    const password = e.target[2].value;
    const file = e.target[3].files[0];

    try {
      const response = await createUserWithEmailAndPassword(
        auth,
        email,
        password
      );

      const storageRef = ref(storage, displayName);
      const uploadTask = uploadBytesResumable(storageRef, file);

      uploadTask.on(
        (error) => {
          setErr(true);
        },
        () => {
          getDownloadURL(uploadTask.snapshot.ref).then(async (downloadURL) => {
            await updateProfile(response.user, {
              displayName,
              photoURL: downloadURL,
            });
            await setDoc(doc(db, "users"), response.user.uid),
              {
                uid: response.user.uid,
                displayName,
                email,
                photoURL: downloadURL,
              };
          });
        }
      );
    } catch (err) {
      setErr(true);
    }
  };

  return (
    <div className="formContainer">
      <div className="formWrapper">
        <span className="logo">CHATAPP</span>
        <form onSubmit={handleSubmit}>
          <TextField id="standard-basic" label="Nickname" variant="standard" />
          <TextField id="standard-basic" label="E-mail" variant="standard" />
          <TextField id="standard-basic" label="Password" variant="standard" />
          <Button
            className="avatarButton"
            variant="contained"
            component="label"
          >
            Upload Avatar
            <input hidden accept="image/*" multiple type="file" />
          </Button>
          <Button variant="contained" type="submit">
            Sign Up
          </Button>
          {err && <span>Something went wrong</span>}
        </form>
        <p>You do have an account? Login</p>
      </div>
    </div>
  );
};

export default Register;
