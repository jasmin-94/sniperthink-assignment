import Navbar from "./components/Navbar";
import StrategyFlow from "./components/StrategyFlow";
import FeaturesSection from "./components/FeaturesSection";

function App() {
return ( <div> <Navbar />

  {/* HERO SECTION */}
  <div
    style={{
      background: "linear-gradient(135deg,#020617,#312e81)",
      padding: "150px 20px",
      textAlign: "center"
    }}
  >
    <h1
      style={{
        fontSize: "54px",
        color: "white"
      }}
    >
      Turn Data Into Smarter Decisions
    </h1>

    <p
      style={{
        marginTop: "20px",
        fontSize: "18px",
        color: "#cbd5f5",
        maxWidth: "700px",
        marginLeft: "auto",
        marginRight: "auto"
      }}
    >
      SniperThink helps businesses transform data into powerful strategies
      using analytics, automation and AI insights.
    </p>
  </div>

  <StrategyFlow />

  <FeaturesSection />
</div>

);
}

export default App;
