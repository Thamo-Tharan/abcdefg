// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-ignore
import { Model, Server } from 'miragejs'

import StocksRoute from './routes/StocksRoute'

function MockServer() {
  return new Server({
    logging: true,
    models: {
      stock: Model,
    },

    routes() {
      StocksRoute(this)
    },
    // seeds(server) {
    //   server.db.loadData({
    //     stocks: stocks,
    //   })
    // },
  })
}

export default MockServer
