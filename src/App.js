
import './App.css';
import Layout from "./Component/layout";
import Home from "./Pages/home";
import Detail from "./Pages/Detail";
import {Routes,Route, BrowserRouter} from "react-router-dom";
// import Header from './Component/Header';



function App() {
   
  return (
  <BrowserRouter>
  <Routes>
    <Route path="/" element={<Layout/>}>
    <Route index element={<Home/>} />
    <Route path="/:slug" element={<Detail/>}/>

    </Route>
  </Routes>
  </BrowserRouter>
  );
}

export default App;
