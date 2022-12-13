import { Container } from "./styles";
import {img1} from "../../../img/foto2.png"

export function About() {
    return (

        <Container>
            <div>
                <h2>SOBRE MIM</h2>
                <h1>Naomy Soares</h1>

                <p>Sou especialista em make beauty e penteados para eventos e editoriais.</p>

                <p> Trabalho com atendimentos personalizados para noivas, madrinhas, formandas, debutantes e<br />
                    também assistência para modelos em editoriais.</p>

            </div>

            <div>
                <img src={img1} alt="Foto Naomy" />
            </div>
        </Container>
    )
}