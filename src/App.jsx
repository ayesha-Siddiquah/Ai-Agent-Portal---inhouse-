
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import AgentOnboardingPanel from "./pages/AgentOnboardingPanel";
import NoAgentPanel from "./pages/NoAgentPanel";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/agent-onboarding" element={<AgentOnboardingPanel />} />
          <Route path="/no-agents" element={<NoAgentPanel />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
















// import Home from "./pages/Home";

// function App() {
//   return <Home />;
// }

// export default App;
