import { useState } from "react";
import "./App.css";


function App() {
  const [islogin, setIslogin] = useState(false);

    
  
  if (islogin == true) {
    return (
      <>
        <h1>کاربر لاگین هست</h1>
    
      </>
    );
   } else {
      return (
        <>
         <h1>کاربر لاگین نیست</h1>
        </>
      )
    }
  }


export default App;
