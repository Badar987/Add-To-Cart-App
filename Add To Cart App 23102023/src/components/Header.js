import React, { useEffect } from "react";
import {useState} from "react";
import Nav from "react-bootstrap/Nav";
import Table from "react-bootstrap/Table";
import Container from "react-bootstrap/Container";
import Navbar from "react-bootstrap/Navbar";
import Badge from "@mui/material/Badge";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import { NavLink } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { DEL } from "../redux/actions/action";


function Header() {


  const [price, setPrice] = useState(0);

    const getdata = useSelector((state) => state.cartreducer.carts);
    

      const dispatch = useDispatch();

  const [anchorEl, setAnchorEl] = useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

   const dlt = (id) => {
     dispatch(DEL(id));
   };

   //For Price sum

   const TotalPrice = () =>{
    let price = 0;
    getdata.map((e,k)=>{
      price = e.price * e.qnty + price;
    })
    setPrice(price);
   }


   useEffect(()=>{
    TotalPrice();
   },[TotalPrice])


  return (
    <Navbar expand="lg" className="bg-body-tertiary" style={{ height: "60px" }}>
      <Container>
        <NavLink to="/" className={"text-decoration-none text-black mx-3"}>
          Add To Cart
        </NavLink>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <NavLink to="/" className={"text-decoration-none text-black"}>
              Home
            </NavLink>
          </Nav>
          <Badge badgeContent={getdata.length} color="secondary">
            <i
              class="fa-solid fa-cart-shopping"
              style={{ fontSize: 25, cursor: "pointer" }}
              id="basic-button"
              aria-controls={open ? "basic-menu" : undefined}
              aria-haspopup="true"
              aria-expanded={open ? "true" : undefined}
              onClick={handleClick}
            ></i>
          </Badge>
        </Navbar.Collapse>
      </Container>
      <Menu
        id="basic-menu"
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        MenuListProps={{
          "aria-labelledby": "basic-button",
        }}
      >
        {getdata.length ? (
          <div className="card_details" style={{ width: "20rem" }}>
            <Table>
              <thead>
                <tr>
                  <th>Photo</th>
                  <th>Resturant Name</th>
                </tr>
              </thead>
              <tbody>
                {getdata.map((e) => {
                  return (
                    <>
                      <tr>
                        <td>
                          <NavLink to={`/cart/${e.id}`} onClick={handleClose}>
                            <img
                              src={e.imgdata}
                              style={{ width: "5rem", height: "5rem" }}
                              alt=""
                            />
                          </NavLink>
                        </td>
                        <td>
                          <p>{e.rname}</p>
                          <p>Price :Rs{e.price}</p>
                          <p>Quentity :{e.qnty}</p>
                          <p
                            style={{
                              color: "red",
                              fontSize: "20",
                              cursor: "pointer",
                            }}
                            onClick={() => dlt(e.id)}
                          >
                            <i className="fas fa-trash smalltrash"></i>
                          </p>
                        </td>
                        <td
                          style={{
                            color: "red",
                            fontSize: "20",
                            cursor: "pointer",
                          }}
                          onClick={() => dlt(e.id)}
                        >
                          <i className="fas fa-trash largetrash"></i>
                        </td>
                      </tr>
                    </>
                  );
                })}
                <p className="text-center"> Total : Rs{price}</p>
              </tbody>
            </Table>
          </div>
        ) : (
          <div
            className="card_details d-flex justify-content-center align-items-center"
            style={{ width: "24rem", padding: 10, position: "relative" }}
          >
            <i
              onClick={handleClose}
              className="fas fa-close smallclose"
              style={{
                position: "absolute",
                top: "2px",
                right: "10px",
                fontSize: "23px",
                cursor: "pointer",
              }}
            ></i>
            <p style={{ fontSize: 23 }}>Your Cart is Empty</p>
            <img
              src="/cart.gif"
              className="Emptycart_img"
              style={{ width: "5rem", padding: 10 }}
            ></img>
          </div>
        )}
      </Menu>
    </Navbar>
  );
}

export default Header;
