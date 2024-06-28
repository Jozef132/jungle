import "../styles/globals.css";
import Layout from "../components/Layout";
import Cursor from "../components/Cursor";

function MyApp({ Component, pageProps }) {
  return (
    <Layout>
      <Cursor />
      <Component {...pageProps} />
    </Layout>
  );
}

export default MyApp;
