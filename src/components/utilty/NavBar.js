import { Container, Form, Nav, NavDropdown, Navbar } from "react-bootstrap";
import logo from "../../images/logo.png";
import login from "../../images/login.png";
import cartim from "../../images/cart.png";
import SearchProductHook from "../../logic/product/SearchProductHook";
import NavBarHook from "../../logic/utilty/NavBarHook";
import { Link } from "react-router-dom";
function Navbars() {
  const [, , changeSearch] = SearchProductHook();
  const [user, logout, cart, Loading] = NavBarHook();
  return (
    <Navbar bg="dark" expand="lg" variant="dark">
      <Container fluid>
        <Navbar.Brand>
          <Link to="/">
            <img src={logo} alt="" className="img-handelr" />
          </Link>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          <Form className="d-flex w-100 justify-content-center">
            <Form.Control
              value={localStorage.getItem("search")}
              type="search"
              placeholder="البحث"
              className="w-75"
              aria-label="Search"
              onChange={(e) => changeSearch(e)}
            />
          </Form>
          <Nav
            className="my-2 my-lg-0"
            style={{ maxHeight: "100px" }}
            navbarScroll
          >
            <div className="d-flex m-2 justify-content-between">
              {Loading === true ? (
                <div className="nav-con text-light text-center fs-1 ms-4">
                  ...
                </div>
              ) : user?.data ? (
                <div className="nav-con ms-4">
                  <NavDropdown title={user?.data?.name} id="basic-nav-dropdown">
                    {user?.data?.role === "admin" ? (
                      <NavDropdown.Item
                        href="/admin/allProducts"
                        className="text-end pe-1 py-2"
                      >
                        لوحة التحكم
                      </NavDropdown.Item>
                    ) : (
                      <NavDropdown.Item
                        href="/user/profile"
                        className="text-end pe-1 py-2"
                      >
                        {" "}
                        الصفحة الشخصية
                      </NavDropdown.Item>
                    )}
                    <NavDropdown.Divider className="m-0" />
                    <NavDropdown.Item
                      className="text-end pe-1 py-2"
                      onClick={logout}
                    >
                      تسجيل الخروج
                    </NavDropdown.Item>
                  </NavDropdown>
                </div>
              ) : (
                <Link
                  to="/login"
                  className="ms-3 d-flex flex-row-reverse align-items-center text-decoration-none text-white"
                >
                  <p className="mb-0 me-1">دخول</p>{" "}
                  <img src={login} alt="login" />
                </Link>
              )}
              <Link
                to="/Cart"
                className="ms-3 d-flex flex-row-reverse align-items-center position-relative text-decoration-none text-white"
              >
                <p className="mb-0 me-1">
                  العربة
                  <span className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger mt-1">
                    {cart >= 99 ? +99 : cart}
                  </span>
                </p>{" "}
                <img src={cartim} alt="cart" />
              </Link>
            </div>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default Navbars;
