import DebitCard from "./components/DebitCard";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Hero from "./components/Hero";
import PerfectCard from "./components/PerfectCard";
import Vision from "./components/Vision";

const App = () => {
  return (
    <main className="bg-[#1A1E1C] bg-[url(/bg.png)] bg-no-repeat bg-cover pb-[569px]">
      <div className="w-full max-w-[1440px] px-24 mx-auto">
        <Header />

        <div className="my-16  space-y-20">
          <Hero />
          <Vision />
          <DebitCard />
          <PerfectCard />
        </div>

        <Footer />
      </div>
    </main>
  );
};

export default App;
