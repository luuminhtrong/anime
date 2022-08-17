import Footer from "./Footer";
import Header from "./Header";
import TestAxios from "./TestAxios";


const Layout = ({children}) => {
    return ( 
        <div className='content'>
            <Header />
                {children}
            {/* <Footer /> */}
            <TestAxios />
        </div>
     );
}
 
export default Layout;