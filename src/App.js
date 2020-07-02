import React, { useState } from "react";
import { HashRouter, Route, Link } from "react-router-dom";
import { Navbar, Nav, Form, Carousel } from "react-bootstrap";
function App() {
  return (
    <HashRouter basename="/">
      <div className="App container-fluid">
        <div className="row d-none d-md-block">
          <div className="col p-0">
            <CustomNavbar />
          </div>
        </div>

        <div>
          <Route exact path={["/", "/about"]}>
            <div className="row">
              <div className="col">
                <h1>About Us</h1>
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Adipisci velit impedit placeat recusandae ex aspernatur cum
                  earum deleniti dolores voluptatibus sequi soluta, et,
                  necessitatibus officia tempore rem maiores a hic. Lorem ipsum
                  dolor sit, amet consectetur adipisicing elit. Delectus placeat
                  eligendi ad, ab consectetur nesciunt possimus dicta hic soluta
                  repellendus nemo numquam assumenda, ipsum quam temporibus!
                  Accusamus cumque odio est. Lorem, ipsum dolor sit amet
                  consectetur adipisicing elit. Enim nesciunt consectetur quod
                  sit, consequuntur aut placeat! Repellat doloribus asperiores
                  voluptatem nobis beatae quam, fugiat sed eos quod quas commodi
                  libero est repudiandae aliquam quo assumenda consequatur
                  maxime deleniti dolorum voluptatibus debitis similique sequi
                  exercitationem! Tempore repellat vitae ipsa itaque rem placeat
                  earum ipsum, veniam fugit deserunt nostrum quasi et dolore
                  blanditiis deleniti eum id molestias, doloribus officiis
                  officia animi voluptates voluptas ratione aspernatur!
                  Temporibus itaque quia veritatis esse ducimus cum maiores iste
                  repellendus iure unde libero nisi numquam, dolores atque
                  commodi, voluptatem aperiam odio voluptates sunt neque hic
                  voluptate vero amet consequuntur! Doloribus esse
                  exercitationem alias voluptatum atque qui sunt eligendi libero
                  id similique ipsa inventore laboriosam asperiores, repellat
                  unde maxime! Distinctio, illum facere nostrum esse dicta
                  soluta qui possimus, velit commodi ad odit veritatis inventore
                  eligendi, tenetur placeat consequatur at vero ab alias. Velit
                  impedit nisi labore animi officia quasi, placeat quis adipisci
                  magnam, ex rem fuga laborum minima rerum, possimus temporibus
                  pariatur mollitia? Non, veniam officiis commodi perspiciatis
                  accusamus minus earum adipisci nam impedit sapiente ea
                  consequuntur iste obcaecati architecto quisquam optio rerum
                  sequi? Maxime mollitia iure animi expedita unde corrupti
                  dolores aperiam sapiente asperiores harum, ea magni
                  necessitatibus accusantium quo deserunt. Veniam, ullam quos?
                  Rem, culpa! Id eligendi aut fugit officiis pariatur sit, non,
                  iure cupiditate dolorem similique iste dolor ipsa tenetur.
                  Inventore, officiis voluptatum nemo nihil magnam eius, esse
                  eligendi reiciendis sapiente nesciunt obcaecati. Ipsum debitis
                  beatae, quasi nisi quis ab quos eum necessitatibus error
                  corrupti pariatur? Debitis inventore eos eius ut suscipit
                  quisquam veniam sint ratione tenetur aperiam? Reprehenderit
                  porro, esse eligendi facilis beatae culpa. Repellendus amet
                  voluptas reiciendis exercitationem, dignissimos doloribus
                  maiores eveniet debitis impedit non sunt, quidem velit quia
                  placeat voluptate enim doloremque, officiis necessitatibus
                  aperiam eaque pariatur ratione rerum illo consectetur. Eos
                  mollitia quibusdam nemo dolorum est aliquid. At nemo impedit
                  iure cumque! Distinctio aut mollitia quidem ducimus rem
                  quibusdam repellat dicta laboriosam officiis. Deserunt
                  accusamus deleniti dicta ea laboriosam nisi enim assumenda
                  itaque, saepe vel magnam nesciunt nihil blanditiis sit fuga,
                  qui aliquid soluta cupiditate esse repellendus dolores?
                  Dolores esse libero, hic provident ea numquam, quae fuga iure
                  voluptatum quisquam adipisci. Omnis sed inventore, voluptas
                  voluptatem excepturi, tempora amet eos optio iste beatae quod
                  ipsum placeat aliquid, repellendus quas aut asperiores dolorem
                  assumenda autem maxime nihil maiores cupiditate. Accusantium
                  ipsum odit, impedit et tempore optio dolore dignissimos
                  inventore similique molestias deserunt eum provident, numquam
                  totam iste vitae animi sunt, dolorum saepe? Voluptas eveniet
                  ea laboriosam, officia consequatur voluptates unde reiciendis
                  molestias minima quia, quaerat rerum pariatur in
                  necessitatibus nihil magni dolore suscipit praesentium
                  sapiente nesciunt! Quos id dolore a quod perferendis porro
                  accusamus esse eveniet officia animi, ab odio voluptates velit
                  fugit dolor numquam soluta eius possimus! Ad aperiam, adipisci
                  sint libero at qui dolor, dolore similique hic dicta incidunt,
                  iure doloremque vitae quaerat vel ipsum eligendi voluptatum
                  iste fugit minus sit ex? A neque quae mollitia, voluptatibus
                  quo aperiam quia voluptas dolor aut possimus quis, cumque
                  explicabo, placeat voluptatum quibusdam.
                </p>
              </div>
            </div>
          </Route>
          <Route exact path="/portfolio" component={ControlledCarousel}></Route>
          <Route exact path="/contact" component={MyForm}>
            <MyForm />
          </Route>
        </div>
        <div className="row d-block d-md-none fixed-bottom">
          <div className="col p-0">
            <CustomNavbar />
          </div>
        </div>
      </div>
    </HashRouter>
  );
}
const CustomNavbar = () => {
  return (
    <Navbar collapseOnSelect bg="dark" expand="lg" variant="dark">
      <Navbar.Brand className="p-3" href="#home">
        Caledonia Tile & Flooring Co.
      </Navbar.Brand>
      <Navbar.Toggle as="button" aria-controls="basic-navbar-nav" />
      <Navbar.Collapse
        className="d-flex flex-md-row justify-content-end"
        id="basic-navbar-nav"
      >
        <Nav className="d-flex flex-md-row">
          <Nav.Link className="" href="/about">
            <Link
              className="p-3 text-center"
              style={{ color: "white" }}
              to="/about"
            >
              <h5>About</h5>
            </Link>
          </Nav.Link>
          <Nav.Link className="" href="/portfolio">
            <Link
              className="p-3 text-center"
              style={{ color: "white" }}
              to="/portfolio"
            >
              <h5>Portfolio</h5>
            </Link>
          </Nav.Link>
          <Nav.Link className="" href="/contact">
            <Link
              className="p-3 text-center"
              style={{ color: "white" }}
              to="/contact"
            >
              <h5>Contact</h5>
            </Link>
          </Nav.Link>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
};
const ControlledCarousel = () => {
  const [index, setIndex] = useState(0);

  const handleSelect = (selectedIndex, e) => {
    setIndex(selectedIndex);
  };

  return (
    <div className="row">
      <div className="col p-0">
        <Carousel activeIndex={index} onSelect={handleSelect}>
          <Carousel.Item>
            <img
              className="d-block w-100"
              src="https://via.placeholder.com/200"
              alt="First slide"
            />
            <Carousel.Caption>
              <h3>First slide label</h3>
              <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
            <img
              className="d-block w-100"
              src="https://via.placeholder.com/200"
              alt="Second slide"
            />

            <Carousel.Caption>
              <h3>Second slide label</h3>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
            <img
              className="d-block w-100"
              src="https://via.placeholder.com/200"
              alt="Third slide"
            />

            <Carousel.Caption>
              <h3>Third slide label</h3>
              <p>
                Praesent commodo cursus magna, vel scelerisque nisl consectetur.
              </p>
            </Carousel.Caption>
          </Carousel.Item>
        </Carousel>
      </div>
    </div>
  );
};

const MyForm = () => {
  return (
    <div className="row">
      <div className="col p-0">
        <Form>
          <Form.Group controlId="formGroupName">
            <Form.Label className="p-3">Name</Form.Label>
            <Form.Control
              className="p-3"
              type="text"
              placeholder="Logan Miner"
            />
          </Form.Group>
          <Form.Group controlId="formGroupEmail">
            <Form.Label className="p-3">Email</Form.Label>
            <Form.Control
              className="p-3"
              type="email"
              placeholder="loganminer@loganminer.com"
            />
          </Form.Group>
          <Form.Group controlId="formGroupPhone">
            <Form.Label className="p-3">Phone</Form.Label>
            <Form.Control
              className="p-3"
              type="phone"
              placeholder="616-648-7908"
            />
          </Form.Group>
        </Form>
      </div>
    </div>
  );
};

export default App;
