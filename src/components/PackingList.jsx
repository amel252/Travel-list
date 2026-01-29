import React from "react";
import Item from "./Item";
const initialItems = [
    { id: 1, description: "Passports", quantity: 2, packed: false },
    { id: 2, description: "Socks", quantity: 12, packed: false },
    { id: 3, description: "Chargeur", quantity: 1, packed: true },
    // { id: 4, description: "Socks", quantity: 12, packed: false },
];
function PackingList({ items }) {
    return (
        <div className="list">
            <ul>
                {items.map((item) => (
                    <Item key={item.id} item={item} />
                ))}
            </ul>
        </div>
    );
}

export default PackingList;
