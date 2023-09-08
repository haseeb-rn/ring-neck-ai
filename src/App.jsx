import GlobalStyle from "./globalStyles";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Home, LastComp } from "./pages";

function App() {
  return (
    <>
      <div>
        <Router>
          <GlobalStyle />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/last-comp" element={<LastComp />} />
          </Routes>
        </Router>
      </div>
    </>
  );
}

export default App;
