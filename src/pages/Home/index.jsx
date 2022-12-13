import { Container, Content } from "./styles"
import { Header } from "../../components/Header"
import { About } from "../About"
import { img1 } from "../../../img/foto1.png"
import { img2 } from "../../../img/Ativo3.png"

export function Home() {

    return (

        <Container>
            <Content>
                <div>
                    <img src={ img1} alt="foto" />
                </div>
                <div>
                    <img src={ img2} alt="foto" />
                </div>
            </Content>

        </Container>
    )
}