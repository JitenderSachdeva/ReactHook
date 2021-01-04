import React from "react";
import "bootswatch/dist/materia/bootstrap.min.css";
import Navbar from "./Components/Navbar";
import ContactDataProvider from "./Context/ContactData";
import ContactFrom from "./Components/ContactForm";
import Contact from "./Components/Contact";

const App = () => {
  return (
    <>
      <Navbar />
      <div className="container mt-5">
        <ContactDataProvider>
          <ContactFrom />
          <Contact />
        </ContactDataProvider>
      </div>
    </>
  );
};

export default App;
