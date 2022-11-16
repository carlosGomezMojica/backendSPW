const mongoose = require('mongoose')
mongoose.Promise = global.Promise
let isConnected
let options = {
  useNewUrlParser: true,
  useUnifiedTopology: true,

}
let url = 'mongodb+srv://carlosgomez:manuelito21@cluster0.lrn9hhn.mongodb.net/?retryWrites=true&w=majority'
module.exports = connectToDatabase = () => {
  if (isConnected) {
        return Promise.resolve()
  }
    return mongoose.connect(url, options).then((db) => {
    isConnected = db.connections[0].readyState
  })
}
