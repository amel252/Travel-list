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
    return (
        <div className="App">
            <Logo />
            <Form onAddItems={handleAddItems} />
            <PackingList items={items} />
            <Stats />
        </div>
    );
}

export default App;
