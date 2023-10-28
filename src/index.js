import admin from 'routes/admin/index.js'
import hasRoleMiddleware from 'middleware/hasRole.js'
import express from 'express'

const app = express()

app.use(express.json())

app.use('/admin', hasRoleMiddleware(['ADMIN']), admin)

const PORT = 3001
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`)
})

export default app
