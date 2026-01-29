import React, { useState } from "react";

function Form() {
    const [description, setDescription] = useState("");
    const [quantity, setQuantity] = useState(1);
    const submitHandler = (e) => {
        e.preventDefault();
        // si pas de item on return rien
        if (!description)
            // console.log("veuillez mettre le item");
            return;
        const newItem = {
            description,
            quantity,
            packed: false,
            id: Date.now(),
        };
        console.log(newItem);
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
