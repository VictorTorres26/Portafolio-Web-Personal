import express from 'express'
import { dirname, join } from 'path'
import { fileURLToPath } from 'url'

import indexRouters from './routes/index.js'

const app = express();

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

app.set('views', join(__dirname, 'views'))
app.set('view engine', 'ejs')

app.use(indexRouters)


app.use(express.static(join(__dirname, 'public')))

app.listen(3000, () => {
  console.log('server listening on port 3000!')
})

