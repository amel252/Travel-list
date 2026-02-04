import React, { useState } from "react";
import Item from "./Item";

function PackingList({ items, onDeleteItem, onToggleItem, onClearList }) {
    //  nous avons mis element par default(input)
    const [sortBy, setSortBy] = useState("input");
    // declare variable qui contiendra la liste triée, selon le choix de l’utilisateur.
    let sortedItems;
    //  si trié par input on trie rien
    if (sortBy === "input") sortedItems = items;
    //  si trié par ordre alphabetique
    if (sortBy === "description")
        sortedItems = items
            //  slice crée une copiedu tableau pour ne pas modif state original
            .slice()
            // sort trie , local compare 2 chaines (ordre alpha de A-Z)
            .sort((a, b) => a.description.localeCompare(b.description));
    if (sortBy === "packed")
        // packed est un booléen (true ou false)
        sortedItems = items
            .slice()
            // les objets non packed (false) viennent en premier, packed viennent aprés
            .sort((a, b) => Number(a.packed) - Number(b.packed));

    return (
        <div className="list">
            <ul>
                {sortedItems.map((item) => (
                    <Item
                        key={item.id}
                        onDeleteItem={onDeleteItem}
                        onToggleItem={onToggleItem}
                        item={item}
                    />
                ))}
            </ul>
            <div className="actions">
                <select
                    value={sortBy}
                    onChange={(e) => setSortBy(e.target.value)}
                >
                    <option value="input">Sort by input order</option>
                    <option value="description">Sort by description</option>
                    <option value="packed">Sort by packed status</option>
                </select>
                <button onClick={onClearList}>Clear list</button>
            </div>
        </div>
    );
}

export default PackingList;
