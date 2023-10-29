import prisma from 'db'

const list = async (req, res) => {
  try {
    console.log('running')
    const products = await prisma.product.findMany()

    res.json(products)
  } catch (e) {
    return res.status(500).send({ message: e.message })
  }
}

export default list
