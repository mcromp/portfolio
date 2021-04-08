import React, { Suspense } from "react";
import "./styles/styles.css";

const Email = React.lazy(() => import("./Email"));

const Contact = () => {
 const [showingEmail, setShowingEmail] = React.useState(false);

 let email = showingEmail ? (
  <Email />
 ) : (
  <button onClick={() => setShowingEmail(true)}>Click for e-mail</button>
 );
 return (
  <div id="contact" className="contact">
   <Suspense fallback={<>loading...</>}>{email}</Suspense>
  </div>
 );
};

export default Contact;
