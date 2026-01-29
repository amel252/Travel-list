import React from "react";
import Item from "./Item";

function PackingList({ items, onDeleteItem }) {
    return (
        <div className="list">
            <ul>
                {items.map((item) => (
                    <Item
                        key={item.id}
                        onDeleteItem={onDeleteItem}
                        item={item}
                    />
                ))}
            </ul>
        </div>
    );
}

export default PackingList;
