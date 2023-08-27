import React from "react";  

const CartContext = React.createContext();

const CartProvider = ({ children }) => {
  const [cart, setCart] = React.useState([]);
  React.useEffect(()=>{
    let cartItem =localStorage.getItem('cart');
    if(cartItem) setCart(JSON.parse(cartItem));
  },[])
  return (
    <CartContext.Provider value={{cart,setCart}}>
      {children}
    </CartContext.Provider>
  );
};

const useCart = () => {
  return React.useContext(CartContext);
};

export { CartProvider, useCart};