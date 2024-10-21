import Image from 'next/image'
import Link from 'next/link'


export default function ProductButton({ imageSrc, productName, href }){
    return (
      <Link href={href} className="group">
        <button className="relative w-48 h-48 rounded-lg shadow-md overflow-hidden transition-all duration-300 hover:shadow-lg hover:scale-105">
          <Image
            src={imageSrc}
            alt={productName}
            layout="fill"
            objectFit="cover"
            className="transition-all duration-300 group-hover:scale-110"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent opacity-70 group-hover:opacity-90 transition-opacity duration-300" />
          <div className="absolute bottom-0 left-0 right-0 p-4">
            <h3 className="text-lg font-semibold text-white text-center group-hover:text-primary-foreground transition-colors duration-300">
              {productName}
            </h3>
          </div>
        </button>
      </Link>
    )
  }