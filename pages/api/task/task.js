import { PrismaClient } from '@prisma/client'
const prisma = new PrismaClient()

export default async function test_task(req, res) {
    console.log(req.method)
    console.log(req.body)
    await prisma.Task.create({
        data: {
            userId: req.body.userId,
            name: 'test',
            deadline: new Date('2022-10-04')
        }
    })
    res.status(200).json({ test:"OK" })
}

/*

*/