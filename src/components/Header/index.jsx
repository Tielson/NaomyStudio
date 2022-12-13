import { Container } from "./styles";


export function Header(){
    return(
        <Container>
           <div >
            <a href="/#home">
            <img src="../../../img/Ativo1.png" alt="Logo"/>
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