import { Container } from "./styles";
import png4 from '../../../img/fotos/1.jpeg'
import png1 from '../../../img/fotos/2.jpeg'
import png2 from '../../../img/fotos/3.jpeg'
import png3 from '../../../img/fotos/9.jpeg'
import png10 from '../../../img/fotos/10.jpeg'
import png5 from '../../../img/fotos/6.jpeg'
import png6 from '../../../img/fotos/7.jpeg'
import png7 from '../../../img/fotos/5.jpeg'
import png8 from '../../../img/fotos/8.jpeg'










export function Portfolio() {
    return (
        <Container>
            <div className="box">

                <h2>GALERIA</h2>
                <h1>PORTFOLIO</h1>

                <div className="e1">
                    <div className="e2">
                        <img src={png4} alt="foto" />
                        <img src={png1} alt="foto" />
                        <img src={png2} alt="foto" />
                        <img src={png3} alt="foto" />
                        <img src={png10} alt="foto" />
                        <img src={png5} alt="foto" />
                        <img src={png6} alt="foto" />
                        <img src={png7} alt="foto" />
                        <img src={png8} alt="foto" />
                    </div>
                </div>
            </div>
        </Container>
    )
}