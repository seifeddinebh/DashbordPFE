import './App.css';
import { Fragment } from 'react';
import { Home } from "./home"
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Events from './events';
import Categories from './categories';
import Users from './users';
import Footer from './footer';
import Navbar from './navbar';
import Details from './details';
import CreateUser from './createUser';
import EditUser from './editUser';
import DetailsCategorie from './detailsCategorie';
import CreateCategorie from './createCategorie';
import EditCategorie from './editCategorie';
import AddEvent from './AddEvent';
import CreateEvent from './createEvents';
import AfficheEvent from './AfficheEvent';
import ModifierEvent from './modifierEvent';
import Login from './login';
import Register from './register';
import DashboardOrganisateur from './DashbordOrganisateur';
import CreateEventOrganisateur from './createEventOrganisateur';
import AfficheEventOrganizer from './AfficheEventsOrganizer';
import AfficheDetailsEventOrganizer from './AfficheDetailsEventOrganizer';






function App() {



  return (

    <Fragment>
      <Router>
        <Routes>
          <Route path="/" element={<Login />} />
          {/* <Route path="/" element={<Home />} /> */}
          {/* <Route path="/contact" element={<Contact />} />
       
         
          */}
          <Route path="/home" element={<Home />} />
          <Route path="/Dashbodorganisateur" element={<DashboardOrganisateur />} />
          <Route path="/cerateEventOrganisateur" element={<CreateEventOrganisateur />} />
          <Route path="/AfficheEventOrganizer" element={<AfficheEventOrganizer />} />
          *<Route path="/AfficheDetailsEventOrganizer" element={<AfficheDetailsEventOrganizer />} />

          <Route path="/events" element={<Events />} />
          <Route path="/categories" element={<Categories />} />
          <Route path="/users" element={<Users />} />
          <Route path="/footer" element={<Footer />} />
          <Route path="/navbar" element={<Navbar />} />
          <Route path="/details/:id" element={<Details />} />
          <Route path="/createUser" element={<CreateUser />} />
          <Route path="/editUser/:id" element={<EditUser />} />
          <Route path="/detailsCategorie/:id" element={<DetailsCategorie />} />
          <Route path="/createCategorie" element={<CreateCategorie />} />
          <Route path="/editCategorie/:id" element={<EditCategorie />} />
          <Route path="/AddEvent" element={<AddEvent />} />
          <Route path="/createEvent" element={<CreateEvent />} />
          <Route path="/afficheEvent/:id" element={<AfficheEvent />} />
          <Route path="/modifierEvent/:id" element={<ModifierEvent />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />




        </Routes>
      </Router>
    </Fragment>
  );
}

export default App;
