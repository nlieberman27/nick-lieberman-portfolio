import { About, Leadership } from "./components/About";
import { Footer } from "./components/Footer";
import { Header } from "./components/Header";
import { Hero } from "./components/Hero";
import { SelectedWork } from "./components/SelectedWork";

function App() {
  return (
    <>
      <a className="skip-link" href="#main-content">
        Skip to content
      </a>
      <div id="top" className="page-shell">
        <Header />
        <main id="main-content">
          <Hero />
          <SelectedWork />
          <Leadership />
          <About />
        </main>
        <Footer />
      </div>
    </>
  );
}

export default App;
