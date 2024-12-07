import { Link } from "react-router-dom";
import Footer from "./shared/Footer";
import Navbar from "./shared/Navbar";

type Props = {
    children: JSX.Element | JSX.Element[];
}

function FrontLayout({children}:Props) {
  return (
   
      <>
    <Navbar/>
     <div className="sm:pt-20 lg:pt-8">
     <Link to="/">Home</Link><br></br>
     <Link to="/about">About</Link>
        {children}
    </div>
    <Footer />
    </>
  )
}

export default FrontLayout
