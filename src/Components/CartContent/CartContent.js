import { useContext } from "react";
import { dataContext } from "../Context/DataContext";

import CartElements from "./CartElements";
import CartTotal from "./CartTotal";
import Navbar from "../Navbar/Navbar";

import "./CartContent.css";
import { Link } from "react-router-dom";

const CartContent = () => {
    const { cart } = useContext(dataContext);

    return (
        <>
            <Navbar />
            {cart.length > 0 ? (
                <>
                    <CartElements />
                    <CartTotal />

                    <button>
                        <Link className="home" to={"/"}>Home</Link>
                    </button>
                </>
            ) : (
                <h2 className='cart-message-center'>Your cart is empty</h2>
            )}
        </>
    );
};

export default CartContent;

