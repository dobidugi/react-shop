import Cart from "components/Cart/Cart";
import ItemList from "components/Items/ItemList";
import React, { useState } from "react";
import Header from "./components/Layout/Header/Header";

function App() {
    const [cartIsShown, setCartIsShown] = useState(false);
    
    const onShowCart = () => {
        setCartIsShown(true);
    };

    const onCloseCart = () => {
        setCartIsShown(false);
    };
    return (
        <React.Fragment>
            {cartIsShown && <Cart onClose={onCloseCart}/>}
            <Header onShowCart={onShowCart}/>
            <ItemList />
        </React.Fragment>
    );
}

export default App;
