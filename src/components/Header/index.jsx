import { Container } from "./styles";
import {img1} from "../../../img/Ativo1.png"


export function Header(){
    return(
        <Container>
           <div >
            <a href="/#home">
            <img src={img1} alt="Logo"/>
            </a>
            </div> 

            <div>
                <a href="/#home">HOME</a>
                <a href="/#portfolio">PORTFOLIO</a>
                <a href="/#contactMe">CONTATO</a>
            </div>
                
        </Container>
    )
}