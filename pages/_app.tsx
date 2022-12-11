import '../styles/globals.css'
import type {AppProps} from 'next/app'
import LayoutHOC from "../components/layout/LayoutHOC";
import Head from "next/head";

export default function App({Component, pageProps}: AppProps) {
    return (
        <>
            <Head>
                <link rel='shortcut icon' href='/img.png'/>
                <title>مارکتر | کارگزاری توانا</title>
            </Head>
            <LayoutHOC>
                <Component {...pageProps} />
            </LayoutHOC>
        </>
    )
}
