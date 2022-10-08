import Footer from "./Footer";
import Header from "./Header";

import { ScrollTop } from "primereact/scrolltop";
import { ScrollPanel } from "primereact/scrollpanel";

const Layout = ({ children }) => {
  return (
    <div className="content">
      <ScrollPanel style={{ width: "100%", height: "100vh" }}>
        <Header />
        {children}
        <ScrollTop
          target="parent"
          threshold={100}
          className="custom-scrolltop"
          icon="pi pi-arrow-up"
        />
      </ScrollPanel>
    </div>
  );
};

export default Layout;
