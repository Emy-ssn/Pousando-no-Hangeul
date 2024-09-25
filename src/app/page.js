// Importações necessárias
// import Footer from '@/components/Footer'
import Head from 'next/head'

import Link from 'next/link'

import { cn } from '@/lib/utils'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { FaCircleCheck, FaCreativeCommonsZero } from 'react-icons/fa6'
import { MdContentCopy, MdGroupWork } from "react-icons/md"
import { PiChalkboardTeacherFill } from "react-icons/pi"
import Testimonial from '@/components/ui/testimonial'
import { FaSortAlphaDown, FaComments, FaBookOpen, FaBook, FaAlignJustify, FaLandmark, FaGraduationCap, } from 'react-icons/fa';
import { Culture, Hangul, Korea, Waver } from '@/icon'
import { VscSymbolKeyword } from "react-icons/vsc"
// Renomeando os ícones para os nomes usados no array
const MessageCircle = FaComments;
const BookOpenIcon = FaBookOpen;
const BookIcon = FaBook;
const GraduationCapIcon = FaGraduationCap;
import { FaListCheck } from "react-icons/fa6"
// Definição do array topicos
const topicos = [
  {
    id: 1,
    titulo: 'Alfabeto Coreano (한글)',
    descricao: 'Domine o alfabeto coreano, aprendendo a escrever e ler as 40 letras que formam a base do idioma.',
    icone: () => <Hangul className="w-16 h-16 mb-4 text-logo-primary" />,
  },
  {
    id: 2,
    titulo: 'Conversação Básica',
    descricao: 'Aprenda a estruturar frases de forma prática e eficiente, se preparando para interagir em situações cotidianas.',
    icone: () => <MessageCircle className="w-16 h-16 mb-4 text-logo-primary" />,
  },
  {
    id: 3,
    titulo: 'Gramática Essencial',
    descricao: 'Domine as principais regras gramaticais de forma clara, como o uso de partículas e a ordem das palavras.',
    icone: () => <BookOpenIcon className="w-16 h-16 mb-4 text-logo-primary" />,
  },
  {
    id: 4,
    titulo: 'Vocabulário Essencial',
    descricao: 'Expanda seu vocabulário com palavras e expressões do dia a dia, aprendendo sobre diversos temas cotidianos.',
    icone: () => <BookIcon className="w-16 h-16 mb-4 text-logo-primary" />,
  },
  {
    id: 5,
    titulo: 'Estrutura e Composição de Sílabas',
    descricao: 'Aprenda como formar sílabas em coreano, combinando consoantes e vogais corretamente.',
    icone: () => <VscSymbolKeyword className="w-16 h-16 mb-4 text-logo-primary" />,
  },
  {
    id: 6,
    titulo: 'História da Coreia',
    descricao: 'Explore a rica história da Coreia e como ela influenciou a formação do idioma e da cultura coreana moderna.',
    icone: () => <Culture className="w-16 h-16 mb-4 text-logo-primary" />,
  },
  {
    id: 7,
    titulo: 'Exercícios de Fixação',
    descricao: 'Teste seus conhecimentos com exercícios práticos para reforçar cada lição e garantir a fixação dos conteúdos.',
    icone: () => <FaListCheck className="w-16 h-16 mb-4 text-logo-primary" />,
  },
  {
    id: 8,
    titulo: 'Cultura Coreana',
    descricao: 'Imersão cultural através de costumes, tradições e expressões, enriquecendo seu aprendizado do coreano.',
    icone: () => <Korea className="w-16 h-16 mb-4 text-logo-primary" />,
  },
  {
    id: 9,
    titulo: 'Preparação para o Exame TOPIK',
    descricao: 'Base sólida e direcionada para quem deseja prestar o exame de proficiência TOPIK, com exercícios e dicas.',
    icone: () => <GraduationCapIcon className="w-16 h-16 mb-4 text-logo-primary" />,
  },
]


export default async function Home({ params: { lng } }) {
  // const { t } = await translation(lng, 'mentoring')

  return (
    <div className="  overflow-hidden">
      {/* Cabeçalho e metadados */}
      <Head>
        <title>Coreano Básico Nível A1 - Pousando no Hangeul</title>
        <meta name="description" content="Aprenda coreano de forma rápida e divertida com o ebook Pousando no Hangeul." />
        <link rel="icon" href="/logo-a1.ico" />
      
      </Head>
      {/* Plano de fundo */}
      <div className={cn("absolute -z-10 inset-0 bg-cover bg-no-repeat md:bg-[url('/background-desktop.webp')] bg-[url('/background-01-mobile.webp')]")} />
      {/* Seção Hero */}
      <section id='hero' className="  md:mt-0 mt-72 max-w-7xl m-auto h-screen px-4 bg-cover  bg-no-repeat">
        <div className="lg:grid grid-flow-row sm:grid-flow-col grid-rows-2 md:grid-rows-1 sm:grid-cols-2 gap-8 py-8 sm:py-16 relative" >
          <div className=' flex flex-col  row-start-1 '>
            <img src={'/logo-ebook.png'} alt="Logo" className="h-auto lg:mt-16 mt-40 w-60 md:self-start drop-shadow-lg self-center pb-8" />
            <h1 className="text-4xl text-center  lg:w-5/6 lg:text-left text-black lg:text-5xl  font-bold mb-4 drop-shadow-lg">
              Pouse no <a className='text-logo-primary'>Universo</a> <a className='text-logo-secondary'>Coreano</a> e Aprenda de Forma Simples!
            </h1>
            <h2 className="mt-2 text-xl text-logo-secondary">
              Coreano Básico Nível A1 - Pousando no Hangeul
            </h2>
            <p className="mt-4 text-xl text-darkText pb-8">
              Você já imaginou aprender coreano de forma rápida e divertida, mesmo começando do zero? Agora é possível!
            </p>
            <Link legacyBehavior href={'#buying'} className="w-4/5">
              <a className="text-white  flex text-center items-center justify-center lg:self-start self-center z-10 relative px-8 border-2 h-14  bg-logo-primary  drop-shadow-lg rounded-lg font-bold text-lg hover:bg-opacity-50 transition duration-1000">
                QUERO COMEÇAR AGORA!
              </a>
            </Link>
          </div>
        </div>
      </section>

      {/* Destaques */}
      <section className="bg-pastelBlue py-4 md:-mt-8 mt-32">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-wrap justify-around text-darkText text-sm">
            <span className='flex font-medium uppercase'>
              <FaCreativeCommonsZero className="  w-5 h-5 mr-2" />
              Aprenda do zero
            </span>
            <span className='flex font-medium uppercase'>
              <MdContentCopy className="  w-5 h-5 mr-2" />
              Material exclusivo</span>
            <span className='flex font-medium uppercase'>
              <PiChalkboardTeacherFill className="  w-5 h-5 mr-2" />
              Suporte da professora</span>
            <span className='flex font-medium uppercase'>
              <MdGroupWork className="  w-5 h-5 mr-2" />
              Grupo de estudos</span>
          </div>
        </div>
      </section>

      <div className=' '>
        <div className={` bg-cover bg-[url('/background-2.webp')] py-16 `}>
          {/* Aprenda Coreano do Zero */}
          <section className={`max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:px-8 text-darkText `}>
            <div className="flex flex-col md:flex-row items-center ">
              <div className="md:w-2/4 mb-6 md:mb-0">
                <img
                  src="/Ebook-2.png"
                  alt="Aprenda Coreano"
                  className=" mx-auto"
                />
              </div>
              <div className="md:w-1/3">
                <h2 className="text-3xl font-bold mb-4">
                  Domine o Coreano de Forma Simples e Eficaz!
                </h2>
                <p className="mb-4 leading-relaxed">
                  <strong>Pousando no Hangeul</strong> é o guia completo para quem deseja aprender coreano do básico, especialmente desenvolvido para brasileiros. Com ele, você terá o suporte necessário para dar seus primeiros passos no idioma, dominando o alfabeto 한글 (Hangeul) e se preparando para realizar a primeira nota no exame de proficiência TOPIK.
                </p>
                <Link legacyBehavior href={'#buying'} className="w-4/5">
                  <a className="text-white  flex text-center items-center justify-center lg:self-start self-center z-10 relative px-8 border-2 h-14  bg-logo-primary  drop-shadow-lg rounded-lg font-bold text-lg hover:bg-opacity-50 transition duration-1000">
                    QUERO MEU EBOOK AGORA!
                  </a>
                </Link>
              </div>
            </div>
          </section>
        </div>
      </div>

      {/* Por que Este Ebook é Perfeito para Você? */}
      <div className='bg-white md:pb-0 pb-16'>
        <div className={`bg-cover bg-[url('/background-3.webp')] h-screen`}>
          <div className={`max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:px-8 text-darkText `}>
            <div className="lg:grid grid-flow-row sm:grid-flow-col grid-rows-2 md:grid-rows-1 sm:grid-cols-2 gap-8 py-8 sm:py-8 relative" >
              <div>
                <h2 className="md:text-5xl text-3xl font-bold mb-4 text-logo-primary">
                  Por que Este Livro digital é Perfeito para Você?
                </h2>
                <ul className=" text-xl space-y-8 mt-12 mb-4">
                  <li>
                    <strong>Desenvolvido por uma professora experiente e apaixonada:</strong> Emylle Oliveira compartilha sua jornada de aprendizado e ensino, trazendo um material prático e adaptado para a realidade de quem está começando a estudar coreano.
                  </li>
                  <li>
                    <strong>Material exclusivo e testado:</strong> Criado e testado ao longo de dois anos com alunos brasileiros, garantindo que você aprenda da forma mais simples e eficaz.
                  </li>
                  <li>
                    <strong>Focado em resultados:</strong> Cada lição foi desenhada para que você, ao final do curso, consiga se comunicar em coreano e compreender o básico para realizar a primeira etapa do TOPIK.
                  </li>
                </ul>
                <Link legacyBehavior href={'#buying'} className="">
                  <a className="text-white md:w-2/3  mt-8 flex text-center items-center justify-center lg:self-start self-center z-10 relative px-8 border-2 h-14  bg-logo-primary  drop-shadow-lg rounded-lg font-bold md:text-lg hover:bg-opacity-50 transition duration-1000">
                    QUERO MEU LIVRO DIGITAL AGORA!
                  </a>
                </Link>
              </div>
              <div/>
            </div>
          </div>
        </div>
      </div>
      {/* O Que Você Vai Aprender? */}
      <div className="bg-gradient-to-r from-pink-100 to-blue-100  ">
        <div className="w-full max-w-7xl mx-auto px-4 py-16">
          <h2 className="text-4xl font-bold text-center mb-12 text-gray-800">O Que Você Vai Aprender?</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {topicos.map((topico) => (
              <Card key={topico.id} className="bg-white bg-opacity-80 backdrop-blur-sm hover:shadow-lg transition-shadow duration-300">
                <CardContent className="flex flex-col items-center justify-between h-full p-6">
                  {topico.icone()}
                  <h3 className="text-xl font-semibold text-gray-800 mb-2 text-center">{topico.titulo}</h3>
                  <p className="text-sm text-gray-600 text-center">{topico.descricao}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>

      <div className='bg-pastelPink'>

      <div className={`bg-cover bg-[url('/flower.webp')] `}>
        {/* Linhas crusadas */}
        <div className="relative h-24  w-screen">
          <div className="absolute overflow-hidden inset-0 bg-gradient-to-b from-pink-300/60 via-pink-300/20 to-transparent transform -rotate-3 scale-110"></div>
          <div className="absolute overflow-hidden inset-0 bg-gradient-to-b from-pink-200/60 via-pink-200/20 to-transparent transform rotate-3 scale-110"></div>
        </div>


          {/* Depoimentos*/}
          <section className="max-w-7xl m-auto text-center text-gray-800 md:pt-0 pt-72">
            <h2 className="text-3xl font-bold ">
              Depoimentos de Quem Já Está Vencendo a Barreira do Idioma
            </h2>
            <div className="space-y-6">
              <Testimonial />
            </div>
          </section>

        <div className="relative h-24 w-screen">
          <div className="absolute overflow-hidden inset-0 bg-gradient-to-t from-pink-100/60 via-pink-300/20 to-transparente transform -rotate-3 scale-110"></div>
          <div className="absolute overflow-hidden inset-0 bg-gradient-to-t from-pink-100/60 via-pink-200/20 to-transparente transform rotate-3 scale-110"></div>
        </div>
        </div>

      </div>

      {/* Bônus Exclusivo
        <section className="mb-12 bg-pastelBlue text-darkText p-8 rounded-lg">
          <h2 className="text-3xl font-bold mb-4">Bônus Exclusivo</h2>
          <p className="mb-4">
            Comprando agora, você receberá acesso a um grupo exclusivo de estudo, onde poderá tirar suas dúvidas diretamente com a professora Emylle e outros estudantes como você!
          </p>
          <Link legacyBehavior href={'#buying'}>
            <a className="mt-6 bg-pastelGreen  text-darkText font-semibold px-6 py-3 rounded-lg">
              QUERO MEU EBOOK AGORA!
            </a>
          </Link>
        </section> */}

      {/* Seção de Compra */}
      <div className='bg-white'>
        <div className={`bg-cover bg-[url('/background-5.webp')] h-screen`}>

          <section id="buying" className='max-w-7xl m-auto text-center p-4'>
            <div className="flex flex-col px-1 mt-16 md:text-3xl text-2xl text-center items-center justify-center font-bold mb-4 text-logo-primary">
              <span>
                Garanta o Seu Livro Agora e Comece
              </span>
              a Aprender Coreano Hoje Mesmo!
            </div>

            <div className="flex flex-col lg:flex-row justify-center space-y-4 lg:space-y-0  mb-16">
              <div className="md:px-16 px-6 py-8 bg-white rounded-lg shadow-lg">
                <div className="flex flex-col text-center items-center  ">
                  <img src={'/logo-ebook.png'} alt="Logo" className="h-auto  w-60  drop-shadow-lg self-center pb-4" />

                  <h2 className="text-5xl font-bold text-darkText  ">R$69,90</h2>
                </div>
                <ul className="  space-y-4">
                  <li className="flex md:text-md text-sm items-center text-gray-700">
                    <FaCircleCheck className="text-green-500 w-5 h-5 mr-2" />
                    Mais de 160 páginas de conteúdo
                  </li>
                  <li className="md:text-md text-sm flex items-center text-gray-700">
                    <FaCircleCheck className="text-green-500 w-5 h-5 mr-2" />
                    Exercícios práticos
                  </li>
                  <li className="md:text-md text-sm flex items-center text-gray-700">
                    <FaCircleCheck className="text-green-500 w-5 h-5 mr-2" />
                    Dicas exclusivas
                  </li>
                  <li className="md:text-md text-sm flex items-center text-gray-700">
                    <FaCircleCheck className="text-green-500 w-5 h-5 mr-2" />
                    Acesso ao grupo de estudos
                  </li>
                </ul>
                <div className="mt-10 text-center">
                  <Link legacyBehavior href={'https://pay.hotmart.com/T90814944T'}>
                    <a className=" flex text-center items-center justify-center text-white z-10 relative px-8 border-2 h-14 bg-logo-light  drop-shadow-lg rounded-lg font-bold   transition duration-1000">
                      COMPRAR AGORA
                    </a>
                  </Link>
                </div>
              </div>
            </div>
          </section>
        </div>
      </div>

      
      {/* mentora */}
      <section className='flex z-50 bg-gradient-to-r -mt-1  bg-logo-secondary text-white py-4 px-4 justify-center items-center'>
        <div className='max-w-7xl m-auto justify-center items-center grid grid-cols-1 lg:grid-cols-2'>
          <img src='/emy.jpeg' className='w-full lg:w-auto lg:max-w-md object-cover rounded-xl' />
          <div className='  sm:row-start-1'>
            <p className='mt-8 text-xl   uppercase'>Quem é a escritora desse livro</p>
            <h3 className="text-3xl font-bold mb-8"> Emylle Oliveira</h3>
            <p className="font-thin pr-8">
              Emylle Oliveira, mais conhecida como Emy쌤, é a criadora e mentora do curso de coreano Pousando no Hangeul. Aos 21 anos, ela deu o primeiro passo para transformar sua paixão em profissão ao fundar seu próprio curso, e com apenas 22 anos, publicou seu primeiro livro, Coreano Básico A1, que é focado no ensino do idioma para brasileiros.
              <br></br>
              <br></br>
              Apaixonada pela Coreia do Sul desde 2015, Emy começou a estudar o idioma coreano em 2019 e, em menos de 5 meses, obteve sua primeira certificação no exame de proficiência TOPIK. Essa conquista não só demonstrou sua dedicação, como também a inspirou a ensinar e compartilhar seu conhecimento com outros alunos.
              <br></br>
              <br></br>
              Ao longo de sua jornada, Emy conquistou a confiança de professores e colegas, se tornando representante de classe e ajudando alunos novatos a se adaptarem ao aprendizado do coreano. Foi a partir dessas experiências que ela descobriu sua verdadeira vocação: ensinar.
              <br></br>
              <br></br>
              Com uma abordagem envolvente, prática e voltada para o aluno, Emy criou um curso que torna o aprendizado do coreano acessível e divertido. Seu compromisso com a excelência no ensino e sua dedicação aos alunos a tornam uma professora querida e cada vez mais uma referência no ensino do coreano para Brasileiros.
            </p>
          </div>
        </div>
      </section>


      {/* Footer */}

      <footer className="bg-logo-primary text-white  py-4">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center text-sm">
          <p>© 2024 Pousando no Hangeul. Todos os direitos reservados.</p>
        </div>
      </footer>

    </div>
  )
}
