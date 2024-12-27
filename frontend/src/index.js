import './styles.css';
import React from 'react';
import ReactDOM from 'react-dom/client';

import App from './App';

const root = ReactDOM.createRoot(document.getElementById('root'));

// // page elements 

// function Header() {
//   return <header className="header"> whether </header>
// }

// function NavigationBar() {
//   return  <nav> navigation bar </nav>
// }

// function Footer() {
//   return <footer className="footer"> footer </footer>
// }

// function Page() {
//   return (
//     <>
//       <Header />
//       <NavigationBar />
//       <GetDate />
//       <WeatherApp />
//       <ShowSuggestions/> 
//       <Footer/>
//     </>
//     )
// }
root.render(
  <App />
);


