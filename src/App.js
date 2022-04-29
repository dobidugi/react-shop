import Cart from "components/Cart/Cart";
import ItemList from "components/Items/ItemList";
import React from "react";
import Header from "./components/Layout/Header/Header";

function App() {
    return (
        <React.Fragment>
            <Cart />
            <Header />
            <ItemList />
        </React.Fragment>
    );
}

export default App;
