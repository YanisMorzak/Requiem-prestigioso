import { Outlet, createBrowserRouter } from "react-router-dom";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Home from "./components/pages/Home";

const Layout = () => {
  return (
    <div>
      <Header />
      <Outlet />
      <Footer />
    </div>
  );
};

const router = createBrowserRouter([
  {
    element: <Layout />,
    children: [
      { path: "/", element: <Home /> },
      { path: "/", element: <Home /> },
      { path: "/", element: <Home /> },
      { path: "/", element: <Home /> },
    ],
  },
]);

function App() {
  return <div className="font-bold underline">App</div>;
}

export default App;
