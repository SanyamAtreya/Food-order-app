import CartIcon from "../Cart/CartIcon";
import classes from './HeaderCartButton.module.css'

const HeaderCartButton = props => {
    return(
        <div>
            <button className={classes.button}>
                <span className={classes.icon}>
                    <CartIcon />
                </span>
                <span>
                    Your cart
                </span>
                <span className={classes.badge}>
                    3
                </span>
            </button>
        </div>
    )
};

export default HeaderCartButton;