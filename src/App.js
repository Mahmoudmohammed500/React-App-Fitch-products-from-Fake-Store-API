// App2 =>
           //Fetch Products data from Fake Store API
          // Set Filter in products using api fetch method
         //Routing pages using React Router Dom
        // Using Bootstrab In Styling


import Productslist from './Components/Products/Productslist';
import Productdetails from './Components/Products/Productdetails';
import { Routes,Route } from "react-router-dom";
function App() {
  return (
<Routes>
  <Route path="/" element={ <Productslist/>}/>
  <Route path="/product/:productid" element={ <Productdetails/>}/>
</Routes>
  );
}

export default App;