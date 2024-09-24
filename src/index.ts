import express from 'express'
import path from 'path'
import { createRouter } from 'express-file-routing'
import { getDirname } from './utils.js'
const __dirname = getDirname(import.meta.url) // Call the utility function

const app = express()

// Specify the routes directory inside 'src'
await createRouter(app, {
  directory: path.join(__dirname, 'routes')
})

app.listen(3000, () => {
  console.log('Server is running on port 3000')
})

export default app
