import Head from 'next/head'
import Image from 'next/image'
import Layout from '../layout/Layout'
import useStore from '../hooks/useStore'

export default function Home() {

  const {actualCategory} = useStore()

  return (
    <Layout page={`${actualCategory && actualCategory.name} menu`}>
      <h1 className='text-4xl font-black'>{actualCategory && actualCategory.name}</h1>
      <p className='text-2xl my-10'>
        Choose your favorites to create your order
      </p>
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