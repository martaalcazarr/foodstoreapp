import { PrismaClient} from "@prisma/client"

export default async function handler(req, res) {

    const prisma = new PrismaClient()

    const orders = await prisma.order.findMany({
        where: {
            status: {
                equals: false
            }
        }
    })
    res.status(200).json(orders)

    if(req.method === "POST"){

        const order = await prisma.order.create({
            data: {
                name: req.body.name,
                total: req.body.total,
                ordered : req.body.order,
                date: req.body.date,
            }
        })

        res.status(200).json(order)
    }
}