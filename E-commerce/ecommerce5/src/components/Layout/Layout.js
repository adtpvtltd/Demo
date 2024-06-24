import React from 'react';
import { Helmet } from 'react-helmet';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Footer from './Footer';
import Header from './Header';

const Layout = ({ children, title, description, keywords }) => {
    return (
        <div>
            <Helmet>
                <meta charSet="utf-8" />
                <div>
                    <meta name="description" content={description} />
                    <meta name="keywords" content={keywords} />
                </div>
                <title>{title}</title>
            </Helmet>
            <Header />
            <main style={{ minHeight: "70vh" }}>
                <ToastContainer />
                {children}
            </main>
            <Footer />
        </div>
    )
}
Layout.defaultProps = {
    title: "Online Store",
    description: "Ecommerce project",
    keywords: "react,node,mongodb",
};

export default Layout;