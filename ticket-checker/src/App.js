
import { Routes, Route, Link } from "react-router-dom";
import { BrowserRouter } from "react-router-dom";
import HomePage from './pages/HomePage';
import TicketEnrollPage from "./pages/TicketEnrollPage";


function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="enroll" element={<TicketEnrollPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
