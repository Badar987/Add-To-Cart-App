import React, { useEffect, useState } from "react";
import Table from "react-bootstrap/Table";
import "./style.css";
import { useNavigate, useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { DEL, ADD, REMOVE } from "../redux/actions/action";

function CardsDetails() {
  const [data, setData] = useState([]);

  const dispatch = useDispatch();

  const { id } = useParams();

  const history = useNavigate();

  const getdata = useSelector((state) => state.cartreducer.carts);
  //  console.log(getdata);

  const Compare = () => {
    let Comparedata = getdata.filter((e) => {
      return e.id == id;
    });
    setData(Comparedata);
  };

  //Add Data

  const send = (e) => {
    dispatch(ADD(e));
  };

  const dlt = (id) => {
    dispatch(DEL(id));
    history("/");
  };

  //Remove one RMV_ONE

   const remove = (item) => {
     dispatch(REMOVE(item));
   };

  useEffect(() => {
    Compare();
  }, [id]);

  return (
    <>
      <div className="container mt-2 ">
        <h2 className="text-center"> Iteams Details Page</h2>
        <section className="container mt-3">
          <div className="iteamsdetails d-flex">
            {data.map((e) => {
              return (
                <>
                  <div className="items_img">
                    <img src={e.imgdata} alt="" />
                  </div>

                  <div className="details">
                    <Table>
                      <tr>
                        <td>
                          <p>
                            <strong>Resturant</strong> : {e.rname}
                          </p>
                          <p>
                            <strong>Price</strong> : {e.price}
                          </p>
                          <p>
                            <strong>Dishes</strong> : {e.address}
                          </p>
                          <p>
                            <strong>Total</strong> : {e.price * e.qnty}
                          </p>
                          <div
                            className="mt-4 d-flex justify-content-evenly align-items-center"
                            style={{
                              width: 100,
                              cursor: "pointer",
                              background: "#ddd",
                              color: "#111",
                            }}
                          >
                            <span
                              style={{ fontSize: 24 }}
                             onClick={e.qnty <=1 ? () => dlt(e.id) : () => remove(e)}
                            >
                              -
                            </span>
                            <span style={{ fontSize: 24 }}>{e.qnty}</span>
                            <span
                              style={{ fontSize: 24 }}
                              onClick={() => send(e)}
                            >
                              +
                            </span>
                          </div>
                        </td>
                        <td>
                          <p>
                            <strong>Rating : </strong>
                            <span
                              style={{
                                background: "green",
                                color: "#fff",
                                padding: "2px",
                              }}
                            >
                              {e.rating} ★
                            </span>
                          </p>
                          <p>
                            <strong>Order Review</strong>
                            <span> {e.somedata}</span>
                          </p>
                          <p>
                            <strong>Remove : </strong>
                            <span>
                              <i
                                className="fas fa-trash"
                                style={{
                                  color: "red",
                                  fontSize: "20px",
                                  cursor: "pointer",
                                }}
                                onClick={() => dlt(e.id)}
                              ></i>
                            </span>
                          </p>
                        </td>
                      </tr>
                    </Table>
                  </div>
                </>
              );
            })}
          </div>
        </section>
      </div>
    </>
  );
}

export default CardsDetails;
