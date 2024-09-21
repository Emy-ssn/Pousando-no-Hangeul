"use client"

import React, { useEffect, useState } from 'react'
import { Card, CardContent } from "@/components/ui/card"
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel"
import Autoplay from "embla-carousel-autoplay"
const depoimentos =  [
    {
        id: 4,
        nome: 'Jaina Pizzani',
        cidade: 'Bahia',
        texto: 'Eu gostei muito do livro por ele ter imagens, bastante exemplos e atividades (adorooo atividades). Ele não é pesado, é fácil de manusear e a cor rosa dele deixa ele adorável! Em relação ao conteúdo, estou muito satisfeita pois é tudo explicadinho e não deixa dúvidas.'
      },
      {
        id: 5,
        nome: 'Munira Rodrigues',
        cidade: 'Belo Horizonte, MG',
        texto: 'O livro é totalmente incrível! Ele é extremamente didático, com explicações claras e bem detalhadas, o que facilita muito o entendimento para iniciantes como eu. Além disso, o vocabulário é muito bem selecionado, abrangendo uma boa quantidade de frases úteis para o dia a dia. As curiosidades sobre a Coreia tornam o material ainda mais completo e enriquecedor.'
      },
      {
        id: 6,
        nome: 'Lucas Ernanes',
        cidade: 'Recife, PE',
        texto: 'Recomendo muito! O Livro de Coreano A1 da Emy쌤 trás uma didática muito eficiente, e recomendo a todos que estão iniciando o aprendizado no idioma coreano! Ilustrações e exercícios facilitam muito o processo de aprendizado, e as curiosidades sobre a Cultura Coreana são maravilhosas.'
      },
    {
        id: 3,
        nome: 'Cristian Alves',
        cidade: 'Recife, PE',
        texto: 'O livro é excelente. Aborda os assuntos de forma clara e muito bem explicada, com exemplos e exercícios para fixação dos temas. Cor e diagramação agradável, que não cansa os olhos e vocabulário extenso para aprimorar nosso estudo.'
      },
    {
      id: 1,
      nome: 'Dannyelly Lima',
      cidade: 'Tocantins',
      texto: 'O livro é maravilhoso!!! Muito didático, bem ilustrado e super fácil de entender. Muito completo e de fácil compreensão.'
    },
    {
      id: 2,
      nome: 'Kemelly Sophya',
      cidade: 'Iturama, Minas Gerais',
      texto: 'O Livro é ótimo!! Muito bem elaborado, com bastante explicação, bem ilustrado que fica fácil de aprender, e tem bastante frases e vocabulários que nos ajudam a aprender a ler.'
    },
  
    
    {
      id: 7,
      nome: 'Carine',
      cidade: 'Rio de Janeiro, RJ',
      texto: 'Livro muito didático e fácil, completíssimo e bem amplo. A estética do livro é extremamente agradável, fora a dedicação da Emy para fazer o Livro de uma forma fácil que todos entendam.'
    },
    {
      id: 8,
      nome: 'Gilvânia Silva',
      cidade: 'Caucaia, CE',
      texto: 'O livro é bem didático, cheio de exercícios de fixação, vocabulários, ilustrações lindas e ainda com curiosidades sobre a cultura da Coreia do Sul. Engloba bastante conteúdo pra quem é iniciante. Simplesmente amei!'
    },
    {
      id: 9,
      nome: 'Rosana Paula',
      cidade: 'Salvador, BA',
      texto: 'O livro é perfeito, bem didático e as explicações são claras, de fácil compreensão. Estou esperando ansiosamente o B2.'
    },
    {
      id: 10,
      nome: 'Josebel Lima',
      cidade: 'Iturama, Minas Gerais',
      texto: 'O livro é excelente, muito bem explicado, fácil de entender e aprender. Os vocabulários ajudam muito e é muito bem elaborado. Aprendi muito com esse livro, recomendo!'
    },
    {
      id: 11,
      nome: 'Andressa',
      cidade: 'São Paulo',
      texto: 'O livro é perfeito! Super completo, didático, bem diagramado e com imagens que ajudam a memorizar e aprender com facilidade. Letras grandes, espaço para escrever, e as atividades são bem pensadas. A abordagem cultural da Coreia é excelente. Recomendo demais!'
    }
  ]

export default function Testimonial() {
  const [api, setApi] = useState(null)
  const [current, setCurrent] = useState(0)
  const [count, setCount] = useState(0)

  const plugin = React.useRef(
    Autoplay({ delay: 2000, stopOnInteraction: true })
  )

  useEffect(() => {
    if (!api) {
      return
    }

    setCount(depoimentos.length)
    setCurrent(api.selectedScrollSnap() + 1)

    api.on("select", () => {
      setCurrent(api.selectedScrollSnap() + 1)
    })
  }, [api])

//   useEffect(() => {
//     const interval = setInterval(() => {
//       api?.next()
//     }, 5000)

//     return () => clearInterval(interval)
//   }, [api])

  return (
    <div className="w-full max-w-6xl mx-auto px-4 py-12">   
      <Carousel 
      plugins={[plugin.current]}
      setApi={setApi} 
      onMouseEnter={plugin.current.stop}
      onMouseLeave={plugin.current.reset}
      className="w-full max-w-4xl mx-auto">
        <CarouselContent>
          {depoimentos.map((depoimento) => (
            <CarouselItem key={depoimento.id} className="md:basis-1/2 lg:basis-1/3">
              <Card className="flex py-2">
                <CardContent className="flex flex-col justify-between h-full p-6">
                  <p className="text-gray-600 mb-4">{depoimento.texto}</p>
                  <div>
                    <h3 className="text-lg font-semibold text-gray-800">{depoimento.nome}</h3>
                    <p className="text-sm text-gray-500">{depoimento.cidade}</p>
                  </div>
                </CardContent>
              </Card>
            </CarouselItem>
          ))}
        </CarouselContent>
        <CarouselPrevious className={'bg-white'}/>
        <CarouselNext className={'bg-white'}/>
      </Carousel>
      <div className="hidden md:block py-2 text-center text-sm text-muted-foreground">
        Depoimento {current+2} de {count}
      </div>
      <div className="md:hidden  block py-2 text-center text-sm text-muted-foreground">
        Depoimento {current} de {count}
      </div>
    </div>
  )
}