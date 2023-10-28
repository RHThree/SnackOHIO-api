const express = require('express')
const app = express()

app.use('/admin', admin)

const PORT = 3001
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`)
})

export default app
