import Head from 'next/head'
import Image from 'next/image'
import Layout from '../layout/Layout'

export default function Home() {
  return (
    <Layout>
      <h1>Index</h1>
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