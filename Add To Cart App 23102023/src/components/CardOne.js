import React, { useState } from "react";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import Cardsdata from "./CardData";
import "./style.css";
import { useDispatch } from "react-redux";
import { ADD } from "../redux/actions/action";

function CardOne() {
  const [data, setData] = useState(Cardsdata);

  const dispatch = useDispatch();


  const send = (e)=>{
   dispatch(ADD(e));

  }

  //console.log(data);

  return (
    <div className="container mt-3 ">
      <h2 className="text-center">Add To Cart Projects</h2>

      <div className="row d-flex display-content-center align-item-center">
        {data.map((element, id) => {
          return (
            <>
              <Card
                style={{ width: "22rem", border: "none" }}
                className="mx-2, mt-4, card_style"
              >
                <Card.Img
                  variant="top"
                  src={element.imgdata}
                  style={{ height: "16rem" }}
                  className="mt-3"
                />
                <Card.Body>
                  <Card.Title>{element.rname}</Card.Title>
                  <Card.Text>price : Rs {element.price}</Card.Text>

                  <div className="button_div d-flex justify-content-center">
                    <Button
                      variant="primary"
                      className="col-sm-12 col-md-12 col-lg-12"
                      onClick={() => send(element)}
                    >
                      Add To Cart
                    </Button>
                  </div>
                </Card.Body>
              </Card>
            </>
          );
        })}
      </div>
    </div>
  );
}

export default CardOne;
