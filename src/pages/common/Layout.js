import Header from "./Header";
import Sidebar from "./Sidebar";
import Footer from "./Footer";
import {Outlet} from "react-router-dom";
import {useEffect} from "react";
import M from "materialize-css/dist/js/materialize.min.js";

export default function Layout() {

  useEffect(() => {
    M.AutoInit();
  }, [])

  return (
      <>
        <Header />
        <Sidebar />
        <main className="container">
          <Outlet />
        </main>
        <Footer />
      </>
  )
}