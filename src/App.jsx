import Header from "./components/Header";
import "remixicon/fonts/remixicon.css";
import Navbar from "./components/Navbar";
import "./App.css";
import ProductDetails from "./components/ProductDetails";
import ReviewSection from "./components/ReviewSection";

const App = () => {
    return (
        <div className="container p-5 mx-auto">
            <Header />
            <Navbar />
            <ProductDetails />
            <ReviewSection />
        </div>
    );
};

export default App;
