import React, { Suspense } from "react";
const Email = React.lazy(() => import("./Email"));

const Contact = () => {
 const [showingEmail, setShowingEmail] = React.useState(false);

 let email = showingEmail ? (
  <Email />
 ) : (
  <button onClick={() => setShowingEmail(true)}>Click for e-mail</button>
 );
 return (
  <div id="contact">
   Email:
   <Suspense fallback={<div>loading...</div>}>
    <div>{email}</div>
   </Suspense>
   <div style={{ margin: "50em 0" }} />
  </div>
 );
};

export default Contact;
