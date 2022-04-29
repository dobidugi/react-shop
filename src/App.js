import Cart from "components/Cart/Cart";
import ItemList from "components/Items/ItemList";
import React, { useState } from "react";
import Header from "./components/Layout/Header/Header";
import CartContextProvider from "./store/CartContextProvider";

function App() {
    const [cartIsShown, setCartIsShown] = useState(false);
    
    const onShowCart = () => {
        setCartIsShown(true);
    };

    const onCloseCart = () => {
        setCartIsShown(false);
    };
    return (
        <CartContextProvider>
            {cartIsShown && <Cart onClose={onCloseCart}/>}
            <Header onShowCart={onShowCart}/>
            <ItemList />
        </CartContextProvider>
    );
}

export default App;
