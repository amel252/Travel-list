import React from "react";

function Item({ item }) {
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
                <button>❌&times;</button>
            </li>
        </div>
    );
}

export default Item;
