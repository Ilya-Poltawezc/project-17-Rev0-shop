import Footer from './components/Footer/Footer'
import Header from './components/Header/Header'
import BuildSection from './components/Sider/BuildSection/BuildSection'
import CatalogSection from './components/Sider/CatalogSection/CatalogSection'
import SectionGift from './components/Sider/SectionGift/SectionGift'
import SectionPromotion from './components/Sider/SectionPromotion/SectionPromotion'
import { CartContext } from './context/CardContext'
import { useState } from 'react';

function App() {
    const [cart, setCart] = useState([]);

    const addToCart = (product) => {
      setCart(prevCart => {
    const existing = prevCart.find(item => item.id === product.id)
    if (existing) {
      return prevCart.map(item =>
        item.id === product.id ? { ...item, quantity: item.quantity + 1 } : item
      )
    }
    return [...prevCart, { 
      id: product.id,
      image: product.img,        
      description: product.title,
      price: product.price,
      quantity: 1
      }]
     })
    }

    const removeFromCart = (id) => {
        setCart(prev => prev.filter(item => item.id !== id));
    };

    return (
        <CartContext.Provider value={{
            cart, 
            addToCart, 
            removeFromCart,   
            openCart: () => {setIsCartOpen(true)}, 
            closeCart: () => setIsCartOpen(false),
        }}>
        <Header />
        <main>
            <BuildSection />
            <CatalogSection />
            <SectionGift />
            <SectionPromotion />
        </main>
        <Footer />
        </CartContext.Provider>
    )
}
export default App
