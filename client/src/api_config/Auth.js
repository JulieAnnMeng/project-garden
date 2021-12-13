import React, {useState} from 'react';
import {Switch, Route} from 'react-router-dom';

  export const logIn = (data) => {
    // fetch('/login',{
    //   method: "POST",
    //   headers: {
    //     'Content-Type': 'application/json'
    //     },
    //   body: JSON.stringify(data)
    // })
    // .then((r) => {
    //   if (r.ok) {
    //     r.json().then((data) => {
    //       setUser(data);
    //     });
    //   } 
    //   else {
    //     r.json().then((err) => setErrors(err.errors));
    //   }
    // })
    // .catch(error => console.log("Log in incorrect: ", error))
  }

//   export const logOut = () => {
// 		fetch("/logout", {
// 			method: "DELETE",
// 		}).then(() => {
//       navigate("/");
// 			setUser(null);
// 		});
// 	}

//   export const signUp = (data) => {
//     fetch('/signup',{
//       method: "POST",
//       headers: {
//         'Content-Type': 'application/json'
//         },
//       body: JSON.stringify(data)
//     })
//     .then((r) => {
//       if (r.ok) {
//         r.json().then((data) => {
//           setUser(data);
//         });
//       } 
//       else {
//         r.json().then((err) => setErrors(err.errors));
//       }
//     })
//     .catch(error => console.log("Log in incorrect: ", error))
//   }
