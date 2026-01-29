import React from "react";

function Item({ item, onDeleteItem }) {
    return (
        <div>
            <li>
                <span
                    style={
                        item.packed ? { textDecoration: "line-through" } : {}
                    }
                >
                    {item.quantity} {item.description}
                </span>
                <button onClick={() => onDeleteItem(item.id)}>❌&times;</button>
            </li>
        </div>
    );
}

export default Item;
