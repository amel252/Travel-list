import "./index.css";
import Form from "./components/Form";
import Logo from "./components/Logo";
import PackingList from "./components/PackingList";
import Stats from "./components/Stats";
import { useState } from "react";

function App() {
    //  pour utiliser items je l'ai mis la niveau parent de tout
    const [items, setItems] = useState([]);
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
    return (
        <div className="App">
            <Logo />
            <Form onAddItems={handleAddItems} />
            <PackingList
                items={items}
                onDeleteItem={handleDeleteItem}
                onToggleItem={handleToggleItem}
            />
            <Stats />
        </div>
    );
}

export default App;
