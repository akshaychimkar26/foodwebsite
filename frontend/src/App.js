import Homepage from "./Pages/HomePage/Homepage";
import './style.css'
import FootSearch from "./Components/Footer Search/FootSearch";
import Footer from "./Components/Footer/Footer";
import NewNav from "./Components/NavBar/NewNav";

function App() {
  return (
    <>
    <NewNav/>
        
        <Homepage />

      <FootSearch/>
      <Footer/>
    </>
  );
}

export default App;