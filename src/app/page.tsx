import { Image } from "@/components/Image";
import Link from "next/link";
import Card from "@/components/Card";

export default function Teste() {
  return (
    <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
      <h1 className="text-4xl font-bold">ProGirls</h1>

      <main className="flex flex-col gap-8 row-start-2 items-center sm:items-start">
        <Image
          className="dark:invert"
          src="/foto.png"
          alt="logo"
          width={180}
          height={38}
          priority
        />
        <Card
          name="Adriana Feijó"
          state="RJ"
          imageUrl="/path/to/image.jpg"
          description="Lorem ipsum dolor sit amet, consectetur adipiscing elit."
          linkedinUrl="https://www.linkedin.com/in/example"
          githubUrl="https://github.com/example"
          externalUrl="https://example.com"
        />
        <Card
          name="Adriana Feijó"
          state="RJ"
          imageUrl="/path/to/another-image.jpg"
          description="Lorem ipsum dolor sit amet, consectetur adipiscing elit."
          linkedinUrl="https://www.linkedin.com/in/example2"
          githubUrl="https://github.com/example2"
          externalUrl="https://example2.com"
        />
        <Link
          href="/teste"
          className="rounded-full border border-solid border-black/[.08] dark:border-white/[.145] transition-colors flex items-center justify-center hover:bg-[#f2f2f2] dark:hover:bg-[#1a1a1a] hover:border-transparent text-sm sm:text-base h-10 sm:h-12 px-4 sm:px-5 sm:min-w-44"
        >
          LINK PARA PAGINA TESTE
        </Link>

        <a
          className="rounded-full border border-solid border-black/[.08] dark:border-white/[.145] transition-colors flex items-center justify-center hover:bg-[#f2f2f2] dark:hover:bg-[#1a1a1a] hover:border-transparent text-sm sm:text-base h-10 sm:h-12 px-4 sm:px-5 sm:min-w-44"
          href="https://nextjs.org/docs?utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          Read our docs
        </a>
    </div>
      </main >
    </div >
  );
}