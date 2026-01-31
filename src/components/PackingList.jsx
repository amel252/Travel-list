import React from "react";
import Item from "./Item";

function PackingList({ items, onDeleteItem, onToggleItem }) {
    return (
        <div className="list">
            <ul>
                {items.map((item) => (
                    <Item
                        key={item.id}
                        onDeleteItem={onDeleteItem}
                        onToggleItem={onToggleItem}
                        item={item}
                    />
                ))}
            </ul>
        </div>
    );
}

export default PackingList;
