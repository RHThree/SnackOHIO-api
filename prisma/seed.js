const { PrismaClient } = require('@prisma/client')

const prisma = new PrismaClient()

const main = async () => {
  await developmentSeed()
}

const developmentSeed = async () => {
  // Creates admin user
  const admin = await prisma.admin.create({
    data: {
      user: {
        create: {
          email: 'admin@verteo.com',
          name: 'Admin',
        },
      },
    },
    include: { user: true },
  })

  // Creates cholecap product
  const product = await prisma.product.create({
    data: {
      name: 'Cholecap',
      description: 'temp description',
    },
  })

  console.log(admin, product)
}

main()
  .catch((e) => {
    console.error(e)
    process.exit(1)
  })
  .finally(async () => {
    await prisma.$disconnect()
  })
