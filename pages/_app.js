import "primereact/resources/themes/lara-light-indigo/theme.css";  //theme
import "primereact/resources/primereact.min.css";                  //core css
import "primeflex/primeflex.css";
import 'primeicons/primeicons.css'; 

import '../styles/globals.css';

import Layout from '../Components/Layout'

function MyApp({ Component, pageProps }) {
  return <Layout>
    <Component {...pageProps} />
  </Layout>
}

export default MyApp
