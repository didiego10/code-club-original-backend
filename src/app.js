import Express from 'express'
import routes from './routes'
import { resolve } from 'path'

import './database'
class App {
  constructor () {
    this.app = Express()

    this.middlewares()
    this.routes()
  }

  middlewares () {
    this.app.use(Express.json())
    this.app.use('/product/file',
      Express.static(resolve(__dirname, '..', 'uploads'))
    )
  }

  routes () {
    this.app.use(routes)
  }
}

module.exports = new App().app
