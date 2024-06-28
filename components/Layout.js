import { Roboto } from "next/font/google";

const roboto = Roboto({
  subsets: ["latin"],
  variable: "--font-roboto",
  weight: ["100", "300", "400", "500", "700", "900"],
});

import Nav from "../components/Nav";

const Layout = ({ children }) => {
  return (
    <div
      className={`page bg-site bg-cover bg-center text-white ${roboto.variable} font-roboto relative`}
    >
      <Nav />
      {children}
    </div>
  );
};

export default Layout;
