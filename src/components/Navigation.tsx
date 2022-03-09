import './Components.css';
import {Navbar, Container, Nav, Dropdown} from 'react-bootstrap';


function Navigation() {
   return (
      <>
        <Navbar className="nav-list mb-5" expand="lg">
            <Container>
               <Navbar.Brand href="#home"><i className="fa fa-code"></i> SODA Developer</Navbar.Brand>
               <Navbar.Toggle aria-controls="basic-navbar-nav">
                  <span className="menu-bar"></span>
                  <span className="menu-bar my-1"></span>
                  <span className="menu-bar"></span>
               </Navbar.Toggle>
               <Navbar.Collapse id="basic-navbar-nav">
                  <Nav className="me-auto">                  
                  {/* App Developers */}
                  <Dropdown>
                     <Dropdown.Toggle className="nav-link" style={{boxShadow: 'none', background: 'transparent', border: 'none'}} id="dropdown-basic">
                        <i className="fa fa-fw fa-cogs"></i> App Developers
                     </Dropdown.Toggle>

                     <Dropdown.Menu>
                        <Dropdown.Item href="#/action-1">Action</Dropdown.Item>
                        <Dropdown.Item href="#/action-2">Another action</Dropdown.Item>
                        <Dropdown.Item href="#/action-3">Something else</Dropdown.Item>
                     </Dropdown.Menu>
                  </Dropdown>

                  {/* Data Publishers */}
                  <Dropdown>
                     <Dropdown.Toggle className="nav-link" style={{boxShadow: 'none', background: 'transparent', border: 'none'}} id="dropdown-basic">
                     <i className="fa fa-fw fa-cloud-upload"></i> Data Publishers
                     </Dropdown.Toggle>

                     <Dropdown.Menu>
                        <Dropdown.Item href="#/action-1">Action</Dropdown.Item>
                        <Dropdown.Item href="#/action-2">Another action</Dropdown.Item>
                        <Dropdown.Item href="#/action-3">Something else</Dropdown.Item>
                     </Dropdown.Menu>
                  </Dropdown>

                  {/* API Docs */}
                  <Dropdown>
                     <Dropdown.Toggle className="nav-link" style={{boxShadow: 'none', background: 'transparent', border: 'none'}} id="dropdown-basic">
                     <i className="fa fa-fw fa-book"></i> API Docs
                     </Dropdown.Toggle>

                     <Dropdown.Menu>
                        <Dropdown.Item href="#/action-1">Action</Dropdown.Item>
                        <Dropdown.Item href="#/action-2">Another action</Dropdown.Item>
                        <Dropdown.Item href="#/action-3">Something else</Dropdown.Item>
                     </Dropdown.Menu>
                  </Dropdown>

                  {/* Libraries & SDKs */}
                  <Nav.Link href="#link">Libraries & SDKs</Nav.Link>
                  </Nav>
                  <input type="search" className="form-control ms-md-auto" style={{height: '30px', width: '200px'}}  placeholder="Search" name="" id="" />

               </Navbar.Collapse>
            </Container>
         </Navbar>
      </>
   )
}

export default Navigation
