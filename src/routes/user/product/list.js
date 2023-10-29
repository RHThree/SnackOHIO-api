import prisma from 'db'

const list = async (req, res) => {
  try {
    const products = await prisma.product.findMany()

    console.log(products)

    res.json(products)
  } catch (e) {
    return res.status(500).send({ message: e.message })
  }
}

export default list
