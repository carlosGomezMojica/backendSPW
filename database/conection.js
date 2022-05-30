const mongoose = require('mongoose')
mongoose.Promise = global.Promise
let isConnected
let options = {
  useNewUrlParser: true,
  useUnifiedTopology: true,

}
let url = 'mongodb+srv://gestorInventario:gestorInventario123@cluster0.smp6t.mongodb.net/gestorInventario?retryWrites=true&w=majority'
module.exports = connectToDatabase = () => {
  if (isConnected) {
        return Promise.resolve()
  }
    return mongoose.connect(url, options).then((db) => {
    isConnected = db.connections[0].readyState
  })
}
