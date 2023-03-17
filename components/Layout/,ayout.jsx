import Footer from "../Footer";
import Header from "../Header";
import { ReactNode } from "react";
import Head from "next/head";

// interface LayoutProps {
//     children: ReactNode
// }

export default function Layout({ children }) {
    // const { children } = props;
    return (
        <div>
            <Head>
                <link rel="icon" href="/Ambatukam2.png"></link>
            </Head>
            <Header />
            <div>{children}</div>
            <Footer />
        </div>
    )
}
