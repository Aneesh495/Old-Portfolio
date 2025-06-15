import { Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";

function Home() {
  return (
    <div className="p-8">
      <h1 className="text-4xl font-bold mb-4">Welcome to my Portfolio</h1>
      <p className="text-lg">
        This is the homepage. Let’s build something cool!
      </p>
    </div>
  );
}

function About() {
  return (
    <div className="p-8">
      <h1 className="text-4xl font-bold mb-4">About Me</h1>
      <p className="text-lg">Here’s a little bio about me...</p>
    </div>
  );
}

function Contact() {
  return (
    <div className="p-8">
      <h1 className="text-4xl font-bold mb-4">Contact</h1>
      <p className="text-lg">Get in touch!</p>
    </div>
  );
}

export default function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="about" element={<About />} />
        <Route path="contact" element={<Contact />} />
      </Routes>
    </>
  );
}
