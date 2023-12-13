import Express from 'express'
import routes from './routes'

import './database'
class App {
  constructor () {
    this.app = Express()

    this.middlewares()
    this.routes()
  }

  middlewares () {
    this.app.use(Express.json())
  }

  routes () {
    this.app.use(routes)
  }
}

module.exports = new App().app
