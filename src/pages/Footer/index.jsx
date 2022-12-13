import { Container } from "./styles";
import { FaWhatsapp } from 'react-icons/fa'
import { HiOutlineMail } from 'react-icons/hi'
import { GoLocation } from 'react-icons/go'
import { FaDev } from 'react-icons/fa'
import { FaInstagram } from 'react-icons/fa'
import img1 from "../../../img/Ativo1 1.png"

export function Footer() {

    return (
        <Container>
            <div className="box">

                <div className="c1">
                <img src={img1} alt="Logo"/>
                    <p>Sou especialista em make beauty e penteados para eventos e editoriais.</p>
                    <p> Trabalho com atendimentos personalizados para noivas, madrinhas, formandas, debutantes e
                        também assistência para modelos em editoriais.</p>

                    <a href="https://www.instagram.com/naomysoaresbeauty/" target="_blank"><FaInstagram /></a>
                </div>

                <div className="c2">
                    <h3>ENTRAR EM CONTATO</h3>

                    <p><FaWhatsapp /> <a href="https://wa.me/5575983592557" target="_blank"> (75) 9 8359-2557</a> </p>
                    <p><HiOutlineMail /><a href="mailto:naomysoares320@gmail.com"> naomysoares320@gmail.com</a></p>
                    <p><GoLocation />  Rua Barão do Rio Branco, Nº 1676, Centro, Feira de Santana - BA</p>
                </div>

                <div className="c3">
                    <h3>HORÁRIO DE ATENDIMENTO</h3>
                </div>

            </div>
              <h4> <a   href="https://www.instagram.com/filipetielson/" target="_blank"> Coded by Filipe Tielson <FaDev/> </a></h4> 
        </Container>
    )
}