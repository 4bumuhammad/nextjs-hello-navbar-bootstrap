import { Navbar, Nav, NavDropdown, Container } from 'react-bootstrap';
import React, { useState, useEffect } from "react";
import Link from 'next/link';
import { useRouter } from 'next/router';

function Header() {
  const [selectedItem, setSelectedItem] = useState("Select an option");
  const [activeItem, setActiveItem] = useState("");
  const router = useRouter();
  const [activePath, setActivePath] = useState(router.asPath);

  const handleNavLinkClick = (event) => {
    event.preventDefault();
    const href = event.currentTarget.getAttribute('href');
    if (router.asPath !== href) {
      router.push(href);
    }
    setActivePath(event.target.getAttribute("href"));
  }  

  useEffect(() => {
    setActivePath(router.asPath);
  }, [router.asPath]);

  const handleSelect = (eventKey, event) => {
    setSelectedItem(eventKey);
    setActiveItem(eventKey);
    switch (eventKey) {
      case "Option 1":
        router.push("/Options/pageoption1");
        break;
      case "Option 2":
        router.push("/Options/pageoption2");
        break;
      case "Option 3":
        router.push("/Options/pageoption3");
        break;
      default:
        break;
    }
    console.log("activeItem: ", activeItem);
  };

  useEffect(() => {
    const path = router.asPath;
    switch (path) {
      case "/Options/pageoption1":
        setSelectedItem("Option 1");
        setActiveItem("Option 1");
        break;
      case "/Options/pageoption2":
        setSelectedItem("Option 2");
        setActiveItem("Option 2");
        break;
      case "/Options/pageoption3":
        setSelectedItem("Option 3");
        setActiveItem("Option 3");
        break;
      default:
        setSelectedItem("Select an option");
        setActiveItem("");
        break;
    }
  }, [router.asPath]);

  return (
    <Navbar bg="primary" variant="dark" expand="lg">
      <Container>
        <Navbar.Brand href="#app">My App</Navbar.Brand>
        <Navbar.Toggle aria-controls="navbar-nav" />
        <Navbar.Collapse id="navbar-nav">
          <Nav className="mr-auto" defaultActiveKey="/" >
            <Nav.Link href="/"  active={activePath === '/'} passHref>Home</Nav.Link>
            <Link href="/About/about" as="/about" legacyBehavior>
              <Nav.Link href="/about" 
                active={activePath === '/about'}
              >About</Nav.Link>
            </Link>
            <Link href="/Contact/slug" as="/Contact/example-slug" legacyBehavior>
              <Nav.Link href="/Contact/example-slug" 
                onClick={handleNavLinkClick} 
                active={activePath === '/Contact/example-slug'} 
              >Contact</Nav.Link>
            </Link>            
            <NavDropdown
                title={selectedItem}
                onSelect={handleSelect}
                active={activeItem}
                >
                <NavDropdown.Item
                  eventKey="Option 1"
                  active={activeItem === "Option 1"}
                >Option 1</NavDropdown.Item>
                <NavDropdown.Item
                  eventKey="Option 2"
                  active={activeItem === "Option 2"}
                >Option 2</NavDropdown.Item>
                <NavDropdown.Item
                  eventKey="Option 3"
                  active={activeItem === "Option 3"}
                >Option 3</NavDropdown.Item>
              </NavDropdown>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default Header;
