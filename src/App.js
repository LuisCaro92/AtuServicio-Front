import './App.css';
import injectContext from './store/context';
import Nav from './components/Nav';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import Home from "./views/Home";
import Profile from "./views/Profile";
import Signup from "./views/Register-login";
import Service from "./views/Search-service";
import Detail from "./views/Service-creation";
import Footer from './components/Footer';
import Feeds from './views/Feeds';
import DetailFeed from './views/DetailFeed';
import EditDetailFeed from './views/EditDetailFeed';
import { useContext } from "react";
import { Context } from "./store/context";




function App() {
  const { store, actions } = useContext(Context);
  const autToken = !!store.token
  console.log(autToken)
  const user = autToken;
  return (
    <div>
      <BrowserRouter>
      <Nav user ={user}/>
      <Routes>
        <Route path = "/" element ={<Home />}/>

        <Route path = "/profile" element ={!!store.token ?  <Profile/> : <Navigate to = "/"/>  }
        />
        <Route path = "/signup" element ={<Signup/>}/>
        <Route path = "/service" element = {<Service/>}/>
        <Route path = "/detail" element = {<Detail/>}/>
        <Route path = "/feed" element = {<Feeds/>}/>
        <Route path="/detailfeed/:id" element={<DetailFeed/>} />
        <Route path="/editdetailfeed/:id" element={<EditDetailFeed/>} />
       
      </Routes>
      <Footer/>
      </BrowserRouter>
    </div>
  );
}

export default injectContext(App);