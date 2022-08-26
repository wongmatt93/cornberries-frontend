import "./App.css";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";
import Header from "./components/Header";
import Homepage from "./components/Homepage";
import About from "./components/About";
import FindBlueberries from "./components/FindBlueberries";
import FindUnicorns from "./components/FindUnicorns";
import PersonalProfile from "./components/PersonalProfile";
import OtherUBUserProfile from "./components/OtherUBUserProfile";
import Footer from "./components/Footer";

function App() {
  return (
    <div className="App">
      <Router>
        <Header />
        <Routes>
          <Route path="/" element={<Homepage />} />
          <Route path="/about" element={<About />} />
          <Route path="/find-unicorns" element={<FindUnicorns />} />
          <Route path="/find-blueberries" element={<FindBlueberries />} />
          <Route path="/user/personal" element={<PersonalProfile />} />
          <Route path="/user/:uid" element={<OtherUBUserProfile />} />
          <Route path="*" element={<Navigate to="/" />} />
        </Routes>
        <Footer />
      </Router>
    </div>
  );
}

export default App;
