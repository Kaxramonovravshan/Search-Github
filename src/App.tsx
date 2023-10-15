import React from 'react';
import { Route, Routes} from "react-router-dom";
import HomePage from "./page/HomePage";
import FavouritePage from "./page/FavouritePage";
import Navigation from "./component/Navigation";

function App() {
  return (
     <>
         <Navigation/>
         <Routes>
             <Route path={"/"} element={<HomePage/>}/>
             <Route path={"/favourite-page"} element={<FavouritePage/>}/>
         </Routes>
     </>
  );
}

export default App;
