import './App.css';
import { Fragment } from 'react';
import { Home } from "./Components/Dashbord/home"
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Events from './Components/Events/events';
import Categories from './Components/Cathegorie/categories';
import Users from './Components/User/users';
import Footer from './Components/Dashbord/footer';
import Navbar from './Components/Dashbord/navbar';
import Details from './Components/Authentification/details';
import CreateUser from './Components/User/createUser';
import EditUser from './Components/User/editUser';
import DetailsCategorie from './Components/Cathegorie/detailsCategorie';
import CreateCategorie from './Components/Cathegorie/createCategorie';
import EditCategorie from './Components/Cathegorie/editCategorie';
import AddEvent from './Components/Events/AddEvent';
import CreateEvent from './Components/Events/createEvents';
import AfficheEvent from './Components/Events/AfficheEvent';
import ModifierEvent from './Components/Events/modifierEvent';
import Login from './Components/Authentification/login';
import Register from './Components/Authentification/register';
import DashboardOrganisateur from './Components/DashbordOrganizer/DashbordOrganisateur';
import CreateEventOrganisateur from './Components/DashbordOrganizer/createEventOrganisateur';
import AfficheEventOrganizer from './Components/DashbordOrganizer/AfficheEventsOrganizer';
import AfficheDetailsEventOrganizer from './Components/DashbordOrganizer/AfficheDetailsEventOrganizer';
import RegisterDetails from "./Components/User/DetailsUser"
import Logout from './Components/Authentification/Logout';
import UpDateProfile from './Components/Authentification/UpDateProfile';
import UpDateEventOrganizer from './Components/DashbordOrganizer/UpDateEventOrganiser';






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
          <Route path="/AfficheDetailsEventOrganizer/:id" element={<AfficheDetailsEventOrganizer />} />
          <Route path="/UpDateEventOrganiser/:id" element={<UpDateEventOrganizer />} />
          <Route path="/" element={<Register />} />

          <Route path="/events" element={<Events />} />
          <Route path="/categories" element={<Categories />} />
          <Route path="/users" element={<Users />} />
          <Route path="/footer" element={<Footer />} />
          <Route path="/navbar" element={<Navbar />} />
          <Route path="/details/:id" element={<RegisterDetails />} />
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
          <Route path="/registerDetails/:id" element={<RegisterDetails />} />
          <Route path="/logout" element={<Logout />} />
          <Route path="/UpDateProfile/:id" element={<UpDateProfile />} />




        </Routes>
      </Router>
    </Fragment>
  );
}

export default App;
