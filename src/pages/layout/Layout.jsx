import Footer from "@components/Footer";
import Header from "@components/header";

export default function Layout({children}) {
    return (
        <>
            <Header />
            <div className="main-container">
            {children}
            </div>
            <Footer />
        </>
    );
}