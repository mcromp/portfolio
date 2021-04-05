import Obfuscate from "react-obfuscate";

const Email = () => {
 return (
  <Obfuscate
   email="mcromp.js@gmail.com"
   headers={{
    subject: "Hello!",
   }}
  />
 );
};

export default Email;
