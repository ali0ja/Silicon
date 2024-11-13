import "./App.css";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Hero from "./components/Hero";
import Features from "./components/Features";
import Brands from "./components/Brands";
import Transaction from "./components/Transaction";
import Transfer from "./components/Transfer";
import Clients from "./components/Clients";
import Faqs from "./components/Faqs";
import Subscribe from "./components/Subscribe";
function App() {
  return (
    <>
      <Header />
      <Hero />
      <Brands />
      <Features />
      <Transaction />
      <Transfer />
      <Clients />
      <Faqs />
      <Subscribe />
      <Footer />
    </>
  );
}

export default App;
