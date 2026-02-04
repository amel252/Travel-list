import "./index.css";
import Form from "./components/Form";
import Logo from "./components/Logo";
import PackingList from "./components/PackingList";
import Stats from "./components/Stats";
import { useState, useEffect } from "react";

function App() {
    //  pour utiliser items je l'ai mis au niveau parent de tout, pour que liste se sauvegarde au rafrichement de la page
    const [items, setItems] = useState(() => {
        const savedItems = localStorage.getItem("items");
        return savedItems ? JSON.parse(savedItems) : [];
    });
    //À chaque changement de items, la liste est sauvegardée.
    useEffect(() => {
        localStorage.setItem("items", JSON.stringify(items));
    }, [items]);

    //  fonction d'affichage, on fait une copie array et on rajout l'élement en +
    function handleAddItems(item) {
        setItems((items) => [...items, item]);
    }
    //  fonction deleteItem
    function handleDeleteItem(id) {
        setItems((items) => items.filter((item) => item.id !== id));
    }
    //  fonction de cocher l'element packed
    function handleToggleItem(id) {
        setItems(
            // on va parcourir les élement , vérif que l'id choisi est identique avec id chercher
            items.map((item) =>
                item.id === id ? { ...item, packed: !item.packed } : item
            )
        );
    }
    //  fonction de suppression de la liste
    function handelClearList() {
        setItems([]);
    }
    return (
        <div className="App">
            <Logo />
            <Form onAddItems={handleAddItems} />
            <PackingList
                items={items}
                onDeleteItem={handleDeleteItem}
                onToggleItem={handleToggleItem}
                onClearList={handelClearList}
            />
            <Stats items={items} />
        </div>
    );
}

export default App;
