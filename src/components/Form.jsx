import React, { useState } from "react";

function Form({ onAddItems }) {
    const [description, setDescription] = useState("");
    const [quantity, setQuantity] = useState(1);

    //  fonction de submit formulaire
    const submitHandler = (e) => {
        e.preventDefault();
        // si pas de item on return rien
        if (!description) return;

        // creer nouveau item contient desc, quan, packed,
        const newItem = {
            description,
            quantity,
            packed: false,
            id: Date.now(),
        };
        onAddItems(newItem);

        //  aprés envoyé les donné on remet la desc et quantity a l'état initial
        setDescription("");
        setQuantity(1);
    };
    return (
        <form className="add-form" onSubmit={submitHandler}>
            <h3>What do you need for your 😍 trip ?</h3>
            <select
                value={quantity}
                // convertir en nombre
                onChange={(e) => setQuantity(Number(e.target.value))}
            >
                {Array.from({ length: 20 }, (_, i) => i + 1).map((num) => (
                    <option value={num} key={num}>
                        {num}
                    </option>
                ))}
            </select>
            <input
                type="text"
                placeholder="Item ... "
                value={description}
                onChange={(e) =>
                    // console.log(e.target.value);
                    setDescription(e.target.value)
                }
            />
            <button>Add</button>
        </form>
    );
}

export default Form;
