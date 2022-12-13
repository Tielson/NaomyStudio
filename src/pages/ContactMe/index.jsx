import { Container } from "./styles";
import { FaWhatsapp } from 'react-icons/fa'
import { HiOutlineMail } from 'react-icons/hi'
import { GoLocation } from 'react-icons/go'
import { FaMapMarkedAlt } from 'react-icons/fa'

export function ContactMe() {

    return (
        <Container>
            <div className="box">


                <div className="header">
                    <h2>LOCALIZAÇÃO</h2>
                    <h1>CONTATE-ME</h1>
                </div>
                <div>
                    <p>Olá, Eu sou Naomy Soares, uma Artista da Beleza</p>

                    <p><FaWhatsapp /> <a href="https://wa.me/5575983592557" target="_blank"> (75) 9 8359-2557</a></p>
                    <p><HiOutlineMail /> <a href="mailto:naomysoares320@gmail.com"> naomysoares320@gmail.com</a></p>
                    <p><GoLocation />  Rua Barão do Rio Branco, Nº 1676, Centro, Feira de Santana - BA</p>
                    <p><FaMapMarkedAlt /><a href="https://www.google.com/maps/place/Rebeka+Casaes+Est%C3%A9tica+Integrativa/@-12.2513054,-38.9606471,19z/data=!3m1!4b1!4m5!3m4!1s0x714378ef39b5a99:0xd7697d1b21121d55!8m2!3d-12.2513054!4d-38.9600986" target="_blank">Google Maps</a></p>

                </div>
            </div>
        </Container>
    )
}