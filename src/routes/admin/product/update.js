import prisma from 'db'

const update = async (req, res) => {
  const { id } = req.params
  const { name, description } = req.body

  try {
    const product = await prisma.product.update({
      where: { id },
      data: {
        name,
        description,
      },
    })

    res.json(product)
  } catch (e) {
    return res.status(500).send({ message: e.message })
  }
}

export default update
