import { useContext } from "react";
import CartContext from "../../store/cart-context";
import CartIcon from "../Cart/CartIcon";
import classes from './HeaderCartButton.module.css'

const HeaderCartButton = props => {

    const CartCtx = useContext(CartContext);

    const numOfCartItems = CartCtx.items.reduce((curNumber, item) => {
        return curNumber + item.amount;
    },0);


    return(
        <div>
            <button className={classes.button} onClick={props.onClick}>
                <span className={classes.icon}>
                    <CartIcon />
                </span>
                <span>
                    Your cart
                </span>
                <span className={classes.badge}>
                    {numOfCartItems}
                </span>
            </button>
        </div>
    )
};

export default HeaderCartButton;