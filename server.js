const
  express = require('express')
, port    = process.env.PORT || 2000
, app     = express()

app
.use(express.static(__dirname))
.listen(port, () => console.log(`piano listening on ${port}`))
