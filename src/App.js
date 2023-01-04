import React from "react";
import { Routes, Route } from "react-router-dom";
import { Navbar } from "./components/navbar/Navbar";
import { Home } from "./routes/home/Home";
import Sales from "./routes/sales/Sales";
import Automotivetint from "./routes/autotint/Automotivetint";
import AboutUs from "./routes/about/AboutUs";
import Careers from "./routes/careers/Careers";
import ContactUs from "./routes/contact/ContactUs";
import Services from "./routes/services/Services";
import RemoteStart from "./routes/remotestart/RemoteStart";
import { Simulator } from "./components/simulator/simulator";

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Navbar />}>
        <Route index element={<Home />} />
        <Route path="sales" element={<Sales />} />
        <Route path="about" element={<AboutUs />} />
        <Route path="services" element={<Services />} />
        <Route path="services/window-tint" element={<Automotivetint />} />
        <Route path="careers" element={<Careers />} />
        <Route path="contact" element={<ContactUs />} />
        <Route path="simulator" element={<Simulator />} />
        <Route path="services/remote-start" element={<RemoteStart />} />
      </Route>
    </Routes>
  );
};

export default App;
