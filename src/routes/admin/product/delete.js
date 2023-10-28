import prisma from 'db'

const deleteRoute = async (req, res) => {
  const { id } = req.params

  try {
    const product = await prisma.product.delete({
      where: { id },
    })

    res.json(product)
  } catch (e) {
    return res.status(500).send({ message: e.message })
  }
}

export default deleteRoute
