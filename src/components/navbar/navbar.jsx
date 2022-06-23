import React, { useState, useRef, useEffect } from "react";
import "./navbar.css";
import Container from "react-bootstrap/Container";
import OverlayTrigger from "react-bootstrap/OverlayTrigger";
import Nav from "react-bootstrap/Nav";
import Popover from "react-bootstrap/Popover";
import Navbar from "react-bootstrap/Navbar";
import { AiOutlineSearch } from "react-icons/ai";
import { useNavigate } from "react-router-dom";

const Navbarr = () => {
  const [keyword, setKeyword] = useState();
  let navigate = useNavigate();

  const submitHandler = (e) => {
    e.preventDefault();
    if (keyword.trim()) {
      navigate(`/search/${keyword}`);
    } else {
      navigate("/");
    }
  };

  return (
    <div className="navbar-outer-container">
      <Navbar collapseOnSelect expand="lg" className="navbar-container">
        <Container className="navbar-wrapper">
          <Navbar.Brand href="/">9jakids</Navbar.Brand>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="me-auto">
              <div></div>
            </Nav>
            <Nav className="nav-menus">
              <Nav.Link>Home</Nav.Link>
              <Nav.Link>About</Nav.Link>
              <Nav.Link>Games</Nav.Link>
              <Nav.Link>competition</Nav.Link>
              <button className="nav-btn">register</button>
              <div>
                {["bottom"].map((placement) => (
                  <OverlayTrigger
                    trigger="click"
                    key={placement}
                    placement={placement}
                    overlay={
                      <Popover id={`popover-positioned-${placement}`}>
                        <Popover.Body>
                          <input
                            type="search"
                            placeholder="search..."
                            name=""
                            onChange={(e) => setKeyword(e.target.value)}
                          />
                          <button
                            onClick={submitHandler}
                            style={{ backgroundColor: "white" }}
                          >
                            <AiOutlineSearch />
                          </button>
                        </Popover.Body>
                      </Popover>
                    }
                  >
                    <Nav.Link className="navbar-search">
                      <AiOutlineSearch />
                    </Nav.Link>
                  </OverlayTrigger>
                ))}
                <div className="kop">
                  <input
                    type="search"
                    placeholder="search..."
                    name=""
                    onChange={(e) => setKeyword(e.target.value)}
                  />
                  <button onClick={submitHandler}>
                    <AiOutlineSearch />
                  </button>
                </div>
              </div>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  );
};

export default Navbarr;
