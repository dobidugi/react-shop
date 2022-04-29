import Card from "components/UI/Card";
import React from "react";
import Item from "./Item";
import classes from "./ItemList.module.css";
function ItemList() {
    const DUMMY_ITEM = [
        {
            id: "m1",
            name: "Sushi",
            description: "Finest fish and veggies",
            price: 22.99,
        },
        {
            id: "m2",
            name: "Schnitzel",
            description: "A german specialty!",
            price: 16.5,
        },
        {
            id: "m3",
            name: "Barbecue Burger",
            description: "American, raw, meaty",
            price: 12.99,
        },
        {
            id: "m4",
            name: "Green Bowl",
            description: "Healthy...and green...",
            price: 18.99,
        },
    ];
    
    const newList = DUMMY_ITEM.map(
        item => <Item 
            key={item.id}
            id={item.id}
            name={item.name}
            description={item.description}
            price={item.price}
        />
    );
    return (
        <section className={classes.list}>
            <Card>
                <ul>{newList}</ul>
            </Card>
        </section>
    );
}

export default ItemList;