import { PrismaClient } from "@prisma/client"

const prisma = new PrismaClient()

export default async function handler(req, res) {

  const categories = await prisma.category.findMany({
    include: {
      products: true
    }
  }  );
  res.status(200).json(categories)
}
