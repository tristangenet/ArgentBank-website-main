import "./App.scss";
import Features from "./components/Features";
import Hero from "./components/Hero";
import Footer from "./layout/Footer";
import Header from "./layout/Header";
import { featuresList } from "./services/datas/featuresList";

function App() {
  return (
    <div className="body">
      <Header />
      <main>
        <Hero />
        <Features list={featuresList} />
      </main>
      <Footer />
    </div>
  );
}

export default App;
