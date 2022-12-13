import { Container, Content } from "./styles"
import { Header } from "../../components/Header"
import { About } from "../About"

export function Home(){

    return(
        
        <Container>
            <Content>
                <div>
                    <img src="../../../img/foto1.png" alt="" />
                </div>
                <div>
                    <img src="../../../img/Ativo3.png" alt="" />
                </div>
            </Content>
            
        </Container>
    )
}