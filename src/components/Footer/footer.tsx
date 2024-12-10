import Image from "next/image"
import "./style.css"
export default function Footer() {
  return (
    <footer>
      <section className="faixa"></section>
      <section className="itens">
        <section className="principal">
          <Image src="proGirls2.svg" alt="Logo ProGirls" width={100} height={80} />
          <div className="logo">
            <h2>Estude com ProGirls</h2>
            <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Eaque vel sed debitis? Delectus odio veritatis neque rem ipsam qui soluta.</p>
          </div>
        </section>
        <article className="navegacao">
          <nav>
              <ul className="sobre">
                <li><a href=""><span>Sobre Nós</span> </a></li>
                <li>Comunidade</li>
                <li><a href="https://www.youtube.com/@progirls-c1y?si=rHNJ-0gUoSnzvvrY" target="_blank"></a>Tutoriais</li>
              </ul>
              <ul className="social">
                <li><span>Social</span> </li>
                <li><a href="https://www.instagram.com/comunidade_progirls/?igsh=MTJ5dmx4N3B3eTE2OA%3D%3D" target="_blank">Instagram</a></li>
                <li><a href="https://www.linkedin.com/groups/10008515" target="_blank">Linkedin</a></li>
              </ul>
          </nav>
        </article>
      </section>
      <section className="faixaPreta">
        <p>©2024 ProGirls Todos os Direitos Reservados.</p>
      </section>
    </footer>
  )
}