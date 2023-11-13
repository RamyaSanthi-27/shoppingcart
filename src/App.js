import './App.css';
import Navbar from './Navbar';
import Header from './Header1';
import Footer from './Footer';
import Product from './Product';
import { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.css';

function App() {
  const [cart, setCart]= useState([])
  const [total,setTotal]=useState(0)
  let handleAddItem =(details)=>{
    setCart([...cart,details])
    setTotal(total + details.newprice)
    
  }

  let handleRemoveItem = (item) =>{
      let itemIndex = cart.findIndex(obj => obj.title=== item.title)
      cart.splice(itemIndex,1)
      setCart([...cart])
      setTotal(total - item.newprice)
  }
  const productDetails=[
      {
        img: "https://picsum.photos/200/300",
        title: "Fancy Product",
        oldprice: 80.00,
        newprice: 40.00,
        rating: false
        
      },
      {
        img: "https://picsum.photos/200/300",
        title: "Special Item",
        oldprice: 20.00,
        newprice: 18.00,
        sale: "Sale",
        rating: true
        
      },
      {
        img: "https://picsum.photos/200/300",
        title: "Sale Item",
        oldprice: 50.00,
        newprice: 25.00,
        sale: "Sale",
        rating: false
        
      },
      {
        img: "https://picsum.photos/200/300",
        title: "Popular Item",
        newprice: 40,       
        rating: true

      },
      {
        img: "https://picsum.photos/200/300",
        title: "Sale Item",
        oldprice: 50.00,
        newprice: 20.00,
        sale: "Sale",
        rating: false
        
      },
      {
        img: "https://picsum.photos/200/300",
        title: "Fancy Product",
        oldprice: 280.00,
        newprice: 120.00,  
        rating: false
        
      },
      {
        img: "https://picsum.photos/200/300",
        title: "Special Item",
        oldprice: 20.00,
        newprice: 18.00,
        sale: "Sale",
        rating: true
        
      },
      {
        img: "https://picsum.photos/200/300",
        title: "Popular Item",
        newprice:40.00,
        rating: true

      }
  ]
  return (
    <div className="App">
      <Navbar total={total}  handleAddItem={handleAddItem} cart={cart} handleRemoveItem={handleRemoveItem}></Navbar>
      <Header></Header>

      <section class="py-5">
            <div class="container px-4 px-lg-5 mt-5">
                <div class="row gx-4 gx-lg-5 row-cols-2 row-cols-md-3 row-cols-xl-4 justify-content-center">
                  {
                        productDetails.map((detail) => {
                          return <Product details={detail} handleAddItem={handleAddItem} ></Product>
                        })
                  }
                </div>
            </div>
        </section>
        <Footer></Footer>
    </div>
  );
}

export default App;
