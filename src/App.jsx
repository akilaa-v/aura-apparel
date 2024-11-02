import './App.css'
import Footer from './components/footer/Footer'
import NavigationBar from './components/header/NavigationBar'
import ProductList from './components/products/ProductList'

function App() {

  return (
    <div className="container">
     <NavigationBar/>
     <ProductList/>
     <Footer/>
    </div>
  )
}

export default App
