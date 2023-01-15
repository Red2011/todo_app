import '../styles/globals.css'
import type { AppProps } from 'next/app'
import Layout from "../components/layout";
import {Slide, ToastContainer} from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';

export default function App({ Component, pageProps }: AppProps) {
  return (
      <Layout>
        <Component {...pageProps} />
        <ToastContainer autoClose={1500} transition={Slide}/>
      </Layout>
  )
};