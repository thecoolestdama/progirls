import Image from 'next/image';
import './style.css';
import Link from "next/link"; 
import Button from "../Button/button"


export default function header(){
    return(
        <header>
            <div className="destaque">
             </div>
            <section className="navegacao">
                <div>
                    <a href="/">
                    <Image src="proGirls.svg" alt="Logo ProGirls" width={200} height={100} className="filter dark:invert"/>
                    </a>
                </div>
                <nav className="paginas">
                    <ul>
                        <li><Link href="/home">Home</Link></li>
                        <li><Link href="/comunidade">Comunidade</Link></li>
                        <li><Link href="/sobre">Sobre Nós</Link></li>
                    </ul>
                </nav>
                <div>
                   <Button/>
                </div>
            </section>
        </header>
    )
}