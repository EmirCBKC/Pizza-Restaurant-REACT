import React from 'react';
import ReactDOM from 'react-dom/client';
import "./index.css";

const pizzaData = [
    {
        name: "Focaccia",
        ingredients: "Bread with italian olive oil and rosemary",
        price: 6,
        photoName: "pizzas/focaccia.jpg",
        soldOut: false,
    },
    {
        name: "Pizza Margherita",
        ingredients: "Tomato and mozarella",
        price: 10,
        photoName: "pizzas/margherita.jpg",
        soldOut: false,
    },
    {
        name: "Pizza Spinaci",
        ingredients: "Tomato, mozarella, spinach, and ricotta cheese",
        price: 12,
        photoName: "pizzas/spinaci.jpg",
        soldOut: false,
    },
    {
        name: "Pizza Funghi",
        ingredients: "Tomato, mozarella, mushrooms, and onion",
        price: 12,
        photoName: "pizzas/funghi.jpg",
        soldOut: false,
    },
    {
        name: "Pizza Salamino",
        ingredients: "Tomato, mozarella, and pepperoni",
        price: 15,
        photoName: "pizzas/salamino.jpg",
        soldOut: true,
    },
    {
        name: "Pizza Prosciutto",
        ingredients: "Tomato, mozarella, ham, aragula, and burrata cheese",
        price: 18,
        photoName: "pizzas/prosciutto.jpg",
        soldOut: false,
    },
];

function Header() {

    return (
        <>
            <header className='header'>
                <h1>Fast React Pizza Co.</h1>
            </header>
        </>
    )
}

function Pizza({ pizzaObj }) {

    // if (pizzaObj.soldOut) return null;

    return (
        <>
            <div className={`pizza ${pizzaObj.soldOut ? 'sold-out' : ""}`}>
                <img src={pizzaObj.photoName} alt={pizzaObj.name}></img>
                <li>
                    <h3>{pizzaObj.name}</h3>
                    <p>{pizzaObj.ingredients}</p>

                    {/* {pizzaObj.soldOut ?
                        (<span>Sold out</span>) :
                        (<span>{pizzaObj.price}</span>)} */}

                    <span>{pizzaObj.soldOut ? "Sold out" : pizzaObj.price}</span>
                </li>
            </div>
        </>
    )
}

function Menu() {

    const pizzas = pizzaData;
    const numPizzas = pizzas.length;

    return (
        <>
            <main className='menu'>
                <h2>Our menu</h2>
                {numPizzas > 0 ? (
                    <>
                        <p>
                            Authentic Italian cuisine. 6 creative dishes to choose form. All from
                            our stone oven, all organic, all delicious.
                        </p>
                        <ul className='pizzas'>
                            {pizzas.map((element, index) => (
                                <Pizza key={index} pizzaObj={element}
                                />
                            ))}
                        </ul>
                    </>
                ) : <p>We're still working on our menu. Please come back later :)</p>}
            </main>
        </>
    )
}

function Footer() {

    const hour = new Date().getHours();
    const openHour = 12;
    const closeHour = 22;
    const isOpen = hour >= openHour && hour <= closeHour;
    console.log(isOpen)

    // if(hour>=openHour && hour<=closeHour) alert("We're currently open!");
    // else alert("Sorry we're closed.");

    return (
        <>
            <footer className='footer'>
                {isOpen ? (<Order closehours={closeHour} openhours={openHour} />) : <p>We're happy to welcome you between {openHour}:00-{closeHour}:00.</p>}
            </footer>
        </>
    )
}

function Order({ closehours, openhours }) {
    return (
        <div className='order'>
            <p>We're open from {openhours}:00 to {closehours}:00. Come visit us or order online.</p>
            <button className='btn'>Order</button>
        </div>
    )
}

function App() {
    return (
        <>
            <div className='container'>
                <Header />
                <Menu />
                <Footer />
            </div>
        </>
    )
}

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
    <React.StrictMode>
        <App />
    </React.StrictMode>
);

export default App;