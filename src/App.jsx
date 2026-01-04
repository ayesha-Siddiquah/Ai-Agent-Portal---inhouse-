import { BrowserRouter, Routes, Route } from "react-router-dom";

import Home from "./pages/Home";
import AgentOnboardingPanel from "./pages/AgentOnboardingPanel";
import Agents from "./pages/Agents";
import Notifications from "./pages/Notifications";
import Dashboard from "./pages/Dashboard";
import MainLayout from "./layouts/MainLayout";



function App() {
  return (
    <BrowserRouter>
      <Routes>

        {/* PUBLIC / NO SIDEBAR */}
        <Route path="/" element={<Home />} />
        <Route path="/agent-onboarding" element={<AgentOnboardingPanel />} />

        {/* APP / WITH SIDEBAR */}
       <Route path="/app" element={<MainLayout />}>
  <Route index element={<Dashboard />} />
  <Route path="dashboard" element={<Dashboard />} />
  <Route path="agents" element={<Agents />} />
  <Route path="notifications" element={<Notifications />} />
</Route>

      </Routes>
    </BrowserRouter>
  );
}

export default App;





// import { BrowserRouter, Routes, Route } from "react-router-dom";

// import Home from "./pages/Home";
// import AgentOnboardingPanel from "./pages/AgentOnboardingPanel";
// import Agents from "./pages/Agents";
// import MainLayout from "./layouts/MainLayout";

// function App() {
//   return (
//     <BrowserRouter>
//       <Routes>

//         {/* Routes WITHOUT sidebar */}
//         <Route path="/" element={<Home />} />
//         <Route
//           path="/agent-onboarding"
//           element={<AgentOnboardingPanel />}
//         />

//         {/* Routes WITH sidebar (layout) */}
//         <Route element={<MainLayout />}>
//           <Route path="/agents" element={<Agents />} />
//         </Route>

//       </Routes>
//     </BrowserRouter>
//   );
// }

// export default App;















