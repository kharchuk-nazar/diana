import React from "react";
import Navbar from "./components/navbar";
import { Routes, Route, useLocation} from "react-router-dom"
import Header from "./components/header";
import AboutPage from "./pages/about";
import StudentsPage from "./pages/students";
import ParentsPage from "./pages/parents";
import SchoolLifePage from "./pages/school-life";
import DocsPage from "./pages/docs";
import ProgressPage from "./pages/progress";
import LoginPage from "./pages/login";
import Footer from "./components/footer";


function App() {

  const location = useLocation()

  if (location.pathname === '/login') {
    return (
      <Routes>
        <Route path="/login" element={<LoginPage />} />
      </Routes>
    )
  }
  return (
    <div className="App">
      <Header />
      <Navbar />
      <div className="">
        <Routes>
          <Route path="/" element={<AboutPage />} />
          <Route path="/students" element={<StudentsPage />} />
          <Route path="/parents" element={<ParentsPage />} />
          <Route path="/school-life" element={<SchoolLifePage />} />
          <Route path="/docs" element={<DocsPage />} />
          <Route path="/progress" element={<ProgressPage />} />
        </Routes>
      </div>
      <Footer />
    </div>
  );
}

export default App;
