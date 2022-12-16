import { Container, Content } from "./styles"
import  img1  from "../../../img/foto1.png"
import  img2  from "../../../img/loogo.png"

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