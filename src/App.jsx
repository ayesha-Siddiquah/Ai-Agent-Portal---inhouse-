
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import AgentOnboardingPanel from "./pages/AgentOnboardingPanel";
// import NoAgentPanel from "./pages/NoAgentPanel";
import MainLayout from "./layouts/MainLayout";
import Agents from "./pages/Agents";

function App() {
  return (
    <BrowserRouter>
      <Routes>


        <Route path="/" element={<Home />} />
        <Route path="/agent-onboarding" element={<AgentOnboardingPanel />} />
          {/* <Route path="/no-agents" element={<NoAgentPanel />} /> */}

          {/* Routes WITH sidebar (layout) */}
        <Route element={<MainLayout />}>
          <Route path="/agents" element={<Agents />} />
        </Route>
          
      </Routes>
    </BrowserRouter>
  );
}

export default App;















