import type { ReactNode } from "react";
import { Navbar } from "./Navbar";
import { Footer } from "./Footer";

interface IProps {
    children: ReactNode
}

const CommonLayout = ({ children }: IProps) => {
    return (
        <main >
            <div className="border">
                <Navbar />
            </div>
            {children}
            <Footer />
        </main>
    );
};

export default CommonLayout;