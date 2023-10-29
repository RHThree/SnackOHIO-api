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
          role: 'ADMIN',
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
      imageUrl:
        'https://images.unsplash.com/photo-1546768292-fb12f6c92568?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80',
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
