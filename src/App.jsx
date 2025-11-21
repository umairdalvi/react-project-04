import Header from "./components/Header"
import 'remixicon/fonts/remixicon.css';
import Navbar from "./components/Navbar";
import './App.css'

const App = () => {
  return (
    <div className="container mx-auto">
      <Header />
      <Navbar />
    </div>
  )
}

export default App