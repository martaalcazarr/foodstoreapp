import Head from 'next/head'
import Image from 'next/image'
import Layout from '../layout/Layout'
import useStore from '../hooks/useStore'
import Product from '../components/Product'

export default function Home() {

  const {actualCategory} = useStore()

  return (
    <Layout page={`${actualCategory && actualCategory.name} menu`}>
      <h1 className='text-4xl font-black'>{actualCategory && actualCategory.name}</h1>
      <p className='text-2xl my-10'>
        Choose your favorites to create your order
      </p>
      <div className='grid gap-4 grid-cols-1 md:grid-cols-2 xl:grid-cols-3 2xl:grid-cols-4'>
        {actualCategory?.products?.map(product =>(
          <Product key={product.id}  product={product}/>
        ))}
      </div>
      
    </Layout>
  )
}

// export const getServerSideProps = async () => {
//   const prisma = new PrismaClient()

//   const categories = await prisma.category.findMany()

//   return {
//     props: {
//       categories,
//     },
//   }
// }