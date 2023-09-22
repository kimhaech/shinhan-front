import "./styles/reset.css";
import "./styles/global.css";
import TopNav from "./components/TopNav/TopNav";
import Home from "./pages/Home/Home";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import GlobalStock from "./pages/GlobalStock/GlobalStock";

function App() {
  return (
    <div className="layout">
      {/* <TopNav />
      <Home /> */}
        <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/global" element={<GlobalStock />} />
          <Route path="*" element={<div>페이지를 찾을 수 없습니다</div>} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
