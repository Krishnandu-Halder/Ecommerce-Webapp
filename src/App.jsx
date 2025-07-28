import ShopCategory from './pages/ShopCategory.jsx'
import Navbar from './components/Navbar/Navbar.jsx'
import { BrowserRouter, Routes,Route } from 'react-router-dom'
import Shop from './pages/Shop.jsx'
import Product from './pages/Product.jsx'
import Cart from './pages/Cart.jsx'
import LoginSignUp from './pages/LoginSignUp.jsx'
import Footer from './components/Footer/Footer.jsx'
// import { useFonts, Poppins_400Regular, Poppins_600SemiBold } from '@expo-google-fonts/poppins';
import men_banner from './assets/banner_mens.png'
import women_banner from './assets/banner_women.png'
import kids_banner from './assets/banner_kids.png'




const App=()=> {
 
  
  

  return (
    <>
      <div >
        <BrowserRouter>
        <Navbar/>
        <Routes>
          <Route path='/' element={<Shop/>}/>
          <Route path='/mens' element={<ShopCategory banner={men_banner} category="men"/>}/>
          <Route path='/women' element={<ShopCategory banner={women_banner} category="women"/>}/>
          <Route path='/kids' element={<ShopCategory banner={kids_banner} category="kid"/>}/>
          <Route path='/Product' element={<Product/>}/>
          <Route path='/Product' element={<Product/>}>
              <Route path=':productId' element={<Product/>}/>
          </Route>
          <Route path='/cart' element={<Cart/>}/>
          <Route path='/login' element={<LoginSignUp/>}/>
        </Routes>
        </BrowserRouter>
        <Footer/>
      </div>
    </>
  )
}

export default App
