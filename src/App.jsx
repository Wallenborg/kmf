// // src/App.jsx

// import React, { useState, useEffect } from "react";
// import "./App.css";

// import Cart from "./components/Cart";
// import Hero from "./components/Hero";
// import Navbar from "./components/Navbar";
// import ProductContainer from "./components/ProductContainer";
// import SubTitle from "./components/SubTitle";
// import TextBlock from "./components/TextBlock";
// import TwoProductRow from "./components/TwoProductRow";
// import products from "./data/products";
// import ThreeProductRow from "./components/ThreeProductRow";
// import SingleProductImage from "./components/SingelProductImage";
// import Footer from "./components/Footer";

// function App() {
//   // 1) Cart‐state, alltid en array
//   const [cartItems, setCartItems] = useState(() => {
//     const saved = localStorage.getItem("cartItems");
//     return saved ? JSON.parse(saved) : [];
//   });

//   // 2) Spara i localStorage när cartItems ändras
//   useEffect(() => {
//     localStorage.setItem("cartItems", JSON.stringify(cartItems));
//   }, [cartItems]);

//   // 3) Lägg till i cart
//   const handleAddToCart = (productId) => {
//     const prod = products.find((p) => p.id === productId);
//     if (!prod) return;

//     setCartItems((prev) => [
//       ...prev,
//       {
//         id: productId,
//         title: prod.title,
//         size: "",
//         quantity: 1,
//       },
//     ]);
//   };

//   // 4) Uppdatera size
//   const handleUpdateSize = (index, newSize) => {
//     setCartItems((prev) => {
//       const copy = [...prev];
//       copy[index].size = newSize;
//       return copy;
//     });
//   };

//   // 5) Ta bort rad
//   const handleRemoveFromCart = (indexToRemove) => {
//     setCartItems((prev) => prev.filter((_, i) => i !== indexToRemove));
//   };

//   // 6) Visa/dölj cart‐panel
//   const [showCart, setShowCart] = useState(false);
//   const toggleCart = () => setShowCart((prev) => !prev);

//   // 7) Räkna antal artiklar (vi räknar varje rad som 1; alternativt kan summera quantity)
//   //    Här räknar vi SUMMA av alla quantity:
//   const totalQuantity = cartItems.reduce((acc, item) => acc + item.quantity, 0);
//   //    Du kan också använda cartItems.length om du vill räkna varje rad som 1.

//   return (
//     <>
//       <Hero />
//       <SubTitle>- est. 2021 -</SubTitle>
//       <TextBlock>
//         <p>
//           Karl Marx Fashion makes only t-shirts—because a T-shirt is the best
//           political poster. Karl Marx argued that fashion is both a product of
//           and a driving force behind capitalism: it creates new needs, fuels
//           demand, and accelerates profit. At its core, fashion reflects class
//           structures—used by the ruling class to display power and status, while
//           the working class can subvert it to express identity and resistance.
//           In this sense, each tee becomes a poster for critique—wearable
//           commentary on how clothing can reinforce or challenge class divisions.
//           By focusing solely on T-shirts, K.M.F turns a simple garment into a
//           statement: the most accessible way to broadcast ideas. K.M.F is a
//           political fashion label created by the swedish artist Niklas
//           Wallenborg.
//         </p>
//       </TextBlock>
//       <Navbar cartCount={totalQuantity} onToggleCart={toggleCart} />
//       <SingleProductImage id="p3" />
//       <SubTitle>
//         Some Marxists have been notable fashionistas and others, distinctly
//         scruffy dressers.
//       </SubTitle>


//       <TwoProductRow id1="p1" id2="p2" onAddToCart={handleAddToCart} />
//       <SubTitle>
//       It takes a great dose of humor to appreciate capitalism
//       </SubTitle>
//       <ThreeProductRow
//         id1="p1"
//         id2="p2"
//         id3="p3"
//         onAddToCart={handleAddToCart}
//       />
     

    
    

     
//       <Cart
//         items={cartItems}
//         onRemoveItem={handleRemoveFromCart}
//         onUpdateSize={handleUpdateSize}
//         isOpen={showCart}
//         onClose={toggleCart}
//       />
//       <Footer/>
//     </>
//   );
// }

// export default App;

// src/App.jsx

// src/App.jsx

import React, { useState, useEffect } from "react";
import "./App.css";

import Cart from "./components/Cart";
import Hero from "./components/Hero";
import Navbar from "./components/Navbar";
import SubTitle from "./components/SubTitle";
import TextBlock from "./components/TextBlock";
import TwoProductRow from "./components/TwoProductRow";
import ThreeProductRow from "./components/ThreeProductRow";
import SingleProductImage from "./components/SingelProductImage";
import Footer from "./components/Footer";
import products from "./data/products";

function App() {
  // 1) Cart‐state, alltid en array
  const [cartItems, setCartItems] = useState(() => {
    const saved = localStorage.getItem("cartItems");
    return saved ? JSON.parse(saved) : [];
  });

  // 2) Spara i localStorage när cartItems ändras
  useEffect(() => {
    localStorage.setItem("cartItems", JSON.stringify(cartItems));
  }, [cartItems]);

  // 3) Lägg till i cart
  const handleAddToCart = (productId) => {
    const prod = products.find((p) => p.id === productId);
    if (!prod) return;

    setCartItems((prev) => [
      ...prev,
      {
        id: productId,
        title: prod.title,
        size: "",
        quantity: 1,
      },
    ]);
  };

  // 4) Uppdatera size
  const handleUpdateSize = (index, newSize) => {
    setCartItems((prev) => {
      const copy = [...prev];
      copy[index].size = newSize;
      return copy;
    });
  };

  // 5) Ta bort en rad från kundvagnen
  const handleRemoveFromCart = (indexToRemove) => {
    setCartItems((prev) => prev.filter((_, i) => i !== indexToRemove));
  };

  // 6) Töm hela kundvagnen (kommer att skickas ner till Cart-komponenten)
  const handleClearCart = () => {
    setCartItems([]);
  };

  // 7) Visa/dölj cart‐panel
  const [showCart, setShowCart] = useState(false);
  const toggleCart = () => setShowCart((prev) => !prev);

  // 8) Räkna totalt antal artiklar (summerar quantity från varje rad)
  const totalQuantity = cartItems.reduce((acc, item) => acc + item.quantity, 0);

  return (
    <>
      <Hero />

      <SubTitle>- est. 2021 -</SubTitle>

      <TextBlock>
        <p>
          Karl Marx Fashion makes only t-shirts—because a T-shirt is the best
          political poster. Karl Marx argued that fashion is both a product of
          and a driving force behind capitalism: it creates new needs, fuels
          demand, and accelerates profit. At its core, fashion reflects class
          structures—used by the ruling class to display power och status, while
          the working class can subvert it to express identity and resistance.
          In this sense, each tee becomes a poster for critique—wearable
          commentary on how clothing can reinforce or challenge class divisions.
          By focusing solely på T-shirts, K.M.F turns en simple garment into en
          statement: den mest accessible way to broadcast ideas. K.M.F is a
          political fashion label skapad by den svenska artisten Niklas
          Wallenborg.
        </p>
      </TextBlock>

      <Navbar cartCount={totalQuantity} onToggleCart={toggleCart} />

      <SingleProductImage id="p3" />

      <SubTitle>
        Some Marxists have been notable fashionistas and others, distinctly
        scruffy dressers.
      </SubTitle>

      <TwoProductRow id1="p1" id2="p2" onAddToCart={handleAddToCart} />

      <SubTitle color="#cc0000">
        It takes a great dose of humor to appreciate capitalism
      </SubTitle>

      <ThreeProductRow
        id1="p7"
        id2="p17"
        id3="p11"
        onAddToCart={handleAddToCart}
      />
        <SubTitle>
        Dream to riot, oh you should try it!
      </SubTitle>

      <ThreeProductRow
        id1="p9"
        id2="p12"
        id3="p14"
        onAddToCart={handleAddToCart}
      />
       <SubTitle>
       Unraveling Capitalist Couture
      </SubTitle>

      <TwoProductRow id1="p3" id2="p10" onAddToCart={handleAddToCart} />
      <SubTitle color="#cc0000">
      The T-shirt is the best
      political poster !
      </SubTitle>

      <TwoProductRow id1="p13" id2="p8" onAddToCart={handleAddToCart} />
      <SubTitle>
      SUMMER SEASON
      </SubTitle>
      <SubTitle>
      We're on a road to nowher...
      </SubTitle>

      <ThreeProductRow
        id1="p4"
        id2="p5"
        id3="p6"
        onAddToCart={handleAddToCart}
      />
      <SubTitle color="#cc0000">
      BEAUTIFUL WORLD
      </SubTitle>

      <TwoProductRow id1="p15" id2="p16" onAddToCart={handleAddToCart} />
      


     
      <Cart
        items={cartItems}
        onRemoveItem={handleRemoveFromCart}
        onUpdateSize={handleUpdateSize}
        isOpen={showCart}
        onClose={toggleCart}
        onClearCart={handleClearCart}
      />

      <Footer />
    </>
  );
}

export default App;


