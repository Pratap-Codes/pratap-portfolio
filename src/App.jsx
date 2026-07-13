import { lazy, useState } from "react";
import ThemeToggle from "./Components/ThemeToggle";
import { Navbar, Hero, About, Skill, Contact, Footer, Project } from "./index";
import Loader from "./Components/loader/Loader";
import { LoadingProvider, useLoading } from "./context/LoadingContext";

function AppContent(){
  const {loading, setLoading} = useLoading();
  return (
    <>
      {loading && <Loader onComplete={() => setLoading(false)} />}

      <div className="bg-[#f8f9fa] dark:bg-[#0b0b0a]">
        <Navbar loading={loading} />
        <Hero />
        <ThemeToggle />
        <About />
        <Skill />
        <Project />
        <Contact />
        <Footer />
      </div>
    </>
  );
}
function App() {
  return(
    <LoadingProvider>
      <AppContent />
    </LoadingProvider>
  )
}

export default App;
