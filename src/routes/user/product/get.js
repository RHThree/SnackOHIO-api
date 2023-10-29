import prisma from 'db'

const get = async (req, res) => {
  const { id } = req.params

  try {
    const product = await prisma.product.findUnique({
      where: { id },
      include: {
        products: true,
      },
    })

    res.json(product)
  } catch (e) {
    return res.status(500).send({ message: e.message })
  }
}

export default get
