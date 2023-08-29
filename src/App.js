import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.scss";

import LandingPage from "./pages/LandingPage.js";
import NewsPage from "./pages/News.js";
import AboutUS from "./pages/AboutUS";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" Component={LandingPage}></Route>
          <Route path="/news" Component={NewsPage}></Route>
          <Route path="/about" Component={AboutUS}></Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
