import logo from './logo.svg';
import './App.css';
import {BrowserRouter as Router, Route,Link} from 'react-router-dom';
import Home from './Components/Home';
import RestaurentCreate from './Components/RestaurentCreate';
import RestaurentDetails from './Components/RestaurentDetails';
import RestaurentUpdate from './Components/RestaurentUpdate';
import RestaurentList from './Components/RestaurentList';
import RestaurentSearch from './Components/RestaurentSearch';
import { Navbar,Nav } from "react-bootstrap";


function App() {
  return (
    <div className="App">
     <Router>
     <Navbar bg="light" expand="lg">
  <Navbar.Brand href="#home">Restaurent Application</Navbar.Brand>
  <Navbar.Toggle aria-controls="basic-navbar-nav" />
  <Navbar.Collapse id="basic-navbar-nav">
    <Nav className="mr-auto">
      <Nav.Link href="#home"><Link to="/">Home</Link></Nav.Link>
      <Nav.Link href="#list"><Link to="/list">List</Link></Nav.Link>
      <Nav.Link href="#create"><Link to="/create">Create</Link></Nav.Link>
      <Nav.Link href="#search"><Link to="/search">Search</Link></Nav.Link>
      <Nav.Link href="#details"><Link to="/details">Details</Link></Nav.Link>
      <Nav.Link href="#update"><Link to="/update">Update</Link></Nav.Link>
    </Nav>
    
  </Navbar.Collapse>
</Navbar>
     
      <Route path="/list" component={RestaurentList} />
      <Route path="/create" component={RestaurentCreate} />
      <Route path="/search" component={RestaurentSearch} />
      <Route path="/details" component={RestaurentDetails} />
      <Route path="/update/:id"  render={props=>(
        <RestaurentUpdate {...props} />
      )}  />
      <Route exact path="/" component={Home} />


      
     </Router>

     

     
    </div>
  );
}

export default App;
