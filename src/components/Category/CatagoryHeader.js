import React from "react";
import { Container, Navbar, Nav } from "react-bootstrap";
import SubTitleHook from "../../logic/product/SubTitleHook";
import { Link } from "react-router-dom";
function CatagoryHeader() {
  const [cateegorys, , , , ,] = SubTitleHook();
  return (
    <Navbar className="bg-white w-100">
      <Container>
        <Nav className="d-flex flex-wrap">
          {cateegorys?.length ? (
            cateegorys.map((e) => (
              <Link className="text-decoration-none text-dark mx-2" to={`/Category/${e._id}`}>
                {e.name}
              </Link>
            ))
          ) : (
            <h5>لا توجد تصنيفات</h5>
          )}
        </Nav>
      </Container>
    </Navbar>
  );
}

export default CatagoryHeader;
