import Header from "./components/Header";
import "remixicon/fonts/remixicon.css";
import Navbar from "./components/Navbar";
import "./App.css";
import ProductDetails from "./components/ProductDetails";

const App = () => {
    return (
        <div className="container mx-auto">
            <Header />
            <Navbar />
            <ProductDetails />
        </div>
    );
};

export default App;
