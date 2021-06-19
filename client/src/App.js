import "./App.css";
import Navbar from "./components/Navbar/NavbarContainer/NavbarContainer";
import Search from "./pages/Search";
import Saved from "./pages/Saved";
import { BrowserRouter as Router, Route } from "react-router-dom";

function App() {
    return (
    <Router>
        <div className="App">
            <Navbar/>
            <Route exact path="/" component={ Search } />
            <Route exact path="/saved" component={ Saved } />
        </div>
    </Router>
    );
};

export default App;
