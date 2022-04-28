import React from "react";
import classes from "./Header.module.css";
import HeaderCartButton from "./HeaderCartButton";
function Header(props) {
    return (
        <header className={classes.header}>
            <h1>ReactShop</h1>
            <HeaderCartButton />
        </header>
    );
}

export default Header;