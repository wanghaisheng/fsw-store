
import Image from "next/image"
import Categories from "./components/categories"
import { prismaClient } from "@/lib/prisma"
import ProductList from "./components/product-list"

export default async function Home() {
  const offers = await prismaClient.product.findMany({
    where:  {
      discountPercentage: {
        gt: 0,
      },
    },
  })
  return (
    <div>
      <Image
        className="h-auto w-full px-5"
        sizes="100vw"
        src="/banner-home-01.png"
        alt="Até 55% de desconto só esse mês"
        width={0}
        height={0}
      />
    <div className="mt-8 px-5">
      <Categories />
    </div>

    <div className="mt-8">
      <ProductList products={offers} />
    </div>
    </div>
  )
}
