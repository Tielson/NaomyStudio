import { Container } from "./styles";
import img1 from "../../../img/loogo.png"


export function Header() {
    return (
        <Container>
            <div className="box">
                
                <div >
                    <a href="/#home">
                        <img src={img1} alt="Logo" />
                    </a>
                </div>

                <div>
                    <a href="/#home">HOME</a>
                    <a href="/#portfolio">PORTFOLIO</a>
                    <a href="/#contactMe">CONTATO</a>
                </div>
            </div>
        </Container>
    )
}