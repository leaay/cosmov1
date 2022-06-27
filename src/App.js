import { Route, Routes } from "react-router-dom";
import Header from "./componets/Header";
import Destination from "./pages/Destination";
import Home from "./pages/Home";
import Crew from "./pages/Crew";
import { HOME ,DESTINATION, CREW ,TECHNOLOGY } from "./routes";
import Technology from "./pages/Technology";


function App() {

  


  return (
    <div className="App">
    
        <Header/>
        <Routes>
          <Route path={HOME} element={<Home />}/>
          <Route path={DESTINATION} element={<Destination />} />
          <Route path={CREW} element={<Crew />} />
          <Route path={TECHNOLOGY} element={<Technology />} />
        </Routes>

    
    </div>
  );
}

export default App;


