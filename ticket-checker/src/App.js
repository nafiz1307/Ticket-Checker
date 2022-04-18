
import { Routes, Route } from "react-router-dom";
import { BrowserRouter } from "react-router-dom";
import HomePage from './pages/HomePage';
import TicketEnrollPage from "./pages/TicketEnrollPage";
import ResellPage from "./pages/ResellPage";
import InvalidatePage from "./pages/InvalidatePage";
import AllTicketPage from "./pages/AllTicketPage";


function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="enroll" element={<TicketEnrollPage />} />
        <Route path="resell" element={<ResellPage />} />
        <Route path="invalidate" element={<InvalidatePage />} />
        <Route path="view-all" element={<AllTicketPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
