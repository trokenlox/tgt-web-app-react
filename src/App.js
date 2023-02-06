import './App.css';
import {useEffect} from "react";
import {useTelegram} from "./hooks/useTelegram";
import Header from "./components/Header/Header";
import {Route, Routes} from "react-router-dom";
import ProductList from "./ProductList/ProductList";

function App() {
    const {onToggleButton, tg} = useTelegram();

    useEffect(() => {
        tg.ready();

    }, [])


  return (
    <div className="App">
        <Header />
        <Routes>
            <Route index element={<ProductList/>}/>
        </Routes>
    </div>
  );
}

export default App;
