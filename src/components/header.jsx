import React from "react";
import { Button } from "reactstrap";
import { Nav } from "react-bootstrap";

export default function Header() {
 
  return (
  
    <nav>
      <div className="logo">NaTa.</div>
      <ul>
        <Button>
          <Nav.Link href="/crud-app">Admin</Nav.Link>
        </Button>

        <Button>
          <Nav.Link href="/catalog">
            <i class="fa-solid fa-box-open"></i>Catalog
          </Nav.Link>
        </Button>

        <Button>Logout</Button>
        <Button>About Us</Button>
      </ul>
      <div className="search">
        <i className="fa fa-search"></i>
        <i className="fa fa-shopping-basket"></i>
      </div>
    </nav>
  );
}

