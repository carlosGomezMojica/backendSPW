const authServicess = require('./services')

exports.login = async (req, res) => {
    console.log('controller.auth.login')
    await authServicess.login(req, function (err, result) {
      if (err) {
        return res.status(400).json({
          success: false,
          body: err,
        })
      }
      return res.status(200).json({
        success: true,
        body: result,
      })
    })
  }
