
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
   
        {children}
    </div>
    <Footer />
    </>
  )
}

export default FrontLayout
