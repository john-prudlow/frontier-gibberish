import { Link } from "react-router";
import Navigation from "./Navigation";

export default function Header() {
  return (
    <>
    <header>
        <h1><Link to="/">Frontier Gibberish</Link></h1>
        {/* <img src="images/logo.png" alt="Logo" /> */}
        <Navigation />
    </header>
    
    </>
  );
}