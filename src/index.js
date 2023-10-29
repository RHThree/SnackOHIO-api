import hasRoleMiddleware from 'middleware/hasRole.js'
import express from 'express'
import cors from 'cors'

import admin from 'routes/admin/index.js'
import user from 'routes/user/index.js'

const app = express()

app.use(express.json())
app.use(cors())

app.use('/admin', hasRoleMiddleware(['ADMIN']), admin)

app.use('/', user)

app.get('/message', (req, res) => {
  res.json({ message: 'Hello from server!' })
})

const PORT = 3001
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`)
})

export default app
