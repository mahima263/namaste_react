
//header--> logo -> nav bar-->cart
        //body  --> search bar and restaurant -->reastaurn card --Image 
        //--name
        //--rating
        //--cusine
        //footer
        import React from "react";
        import ReactDOM, { createRoot } from "react-dom/client";
        
        const Title = () => (
            <a href="/">
            <img  className="logo" alt="foodvilla" src="https://via.placeholder.com/300" />
            </a>
          );
          
          const burgerKing ={
            name: "Burger King",
            image: "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_1024/79bc8ac9ee01ea541d07fda3db03aa58",
            cusine: ["Burger","American"],
            rating: "4.2"
          }
          const RestrauntCart =()=>{
            return(
                <div className="card">
                <img className="cardimg" src={burgerKing.image}></img>
                <h2>{burgerKing.name}</h2>
                <h3>{burgerKing.cusine.join(",")}</h3>
                <h4>{burgerKing.rating}stars</h4>
                </div>
            )
          }
          const Body =()=>{
            return(
                <div className="rescard">
                <RestrauntCart/>
                <RestrauntCart/>
                <RestrauntCart/>
                <RestrauntCart/>
                <RestrauntCart/>
                <RestrauntCart/>
                <RestrauntCart/>
                <RestrauntCart/>
                <RestrauntCart/>
                <RestrauntCart/>
                <RestrauntCart/>
                <RestrauntCart/>
                <RestrauntCart/>

                </div>
            )
          }
          const Footer =()=>{
            return(
                <h4>
                    Footer
                </h4>
            )
          }
          
        const AppLayout = () => {
          return (
            <>
            <HeaderComponent/>
            <Body/>
            <Footer/>
            </>

          );
        };
        
        const HeaderComponent = () => {
          return (
            <div className="header">
              <Title />
              <div className="nav-items">
              <ul>
                <li>
                    Home
                </li>
                <li>
                    About
                </li>
                <li>
                    Contact
                </li>
                <li>
                    Cart
                </li>
              </ul>

              </div>
            </div>
          );
        };
        
        const root = ReactDOM.createRoot(document.getElementById("root"));
        root.render(<AppLayout />);
        