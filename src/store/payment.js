import { useSelector } from "react-redux";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import {
    MDBCard,
    MDBCardBody,
    MDBCardHeader,
    MDBCol,
    MDBListGroup,
    MDBListGroupItem

} from "mdb-react-ui-kit";


export default function Payment() {
    const navigate = useNavigate()
    const cart = useSelector((state) => state.cartReducer)
    let sum = 0;
    {
        cart.forEach(element => {
            sum += (element.price * element.qtyInCart)
        })
    }
    return (<>
    <button onClick={() => navigate("/showCart")}>cart</button>
        {useEffect(() => { alert("are you sure you want to finish?") })}
        <center>
            <MDBCol md="4" className="mb-4">
                <MDBCard className="mb-4">
                    <MDBCardHeader className="py-3">
                        <h5 className="mb-0">Summary</h5>
                    </MDBCardHeader>
                    <MDBCardBody>
                        <MDBListGroup flush>
                            <MDBListGroupItem className="d-flex justify-content-between align-items-center border-0 px-0 pb-0">
                                Products
                                <span>$53.98</span>
                            </MDBListGroupItem>
                            <MDBListGroupItem className="d-flex justify-content-between align-items-center border-0 px-0 pb-0">
                                Shipping
                                <span>$0.00</span>
                            </MDBListGroupItem>
                            <hr className="my-2"></hr>
                            <MDBListGroupItem className="d-flex justify-content-between align-items-center border-0 px-0 pb-0">
                                <div>
                                    <strong>Total amount</strong>
                                    <strong>
                                        <p className="mb-0">(including VAT)</p>
                                    </strong>
                                </div>
                                <span>
                                    <strong>{sum}</strong>
                                </span>
                            </MDBListGroupItem>
                        </MDBListGroup>
                    </MDBCardBody>
                </MDBCard>
            </MDBCol>

        </center>
    </>)
}
