import { Outlet} from "react-router-dom";
import '../index.css';
import Header from "../components/Header";
import Footer from "../components/Footer";

function Layout() {
    return(
        <div>
            <Header />
                <Outlet />
            <Footer />
        </div>
    );
}
export default Layout;