import { Header } from "../../components/Header";
import { Portfolio } from "../Portfolio";
import { ContactMe } from "../ContactMe";
import { Container } from "./styles";
import { Footer } from "../Footer";
import { About } from "../About";
import { Home } from "../Home";


export function Complete() {
    return (
        <Container>
            <Header />
            <div id="home">
                <Home />
                <About />
            </div>
           
            <div id="portfolio">
                <Portfolio />
            </div>
            <div id="contactMe">
                <ContactMe />
                <Footer />
            </div>

        </Container>
    )
}