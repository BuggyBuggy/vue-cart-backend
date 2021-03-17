const mysql = require('mysql')
let self = require('./personalSetting')

const pool = mysql.createPool({
  host: self.mysql.host,
  port: self.mysql.port,
  user: self.mysql.user,
  password: self.mysql.password,
  database: self.mysql.database,
  socketPath: self.mysql.socketPath,
  dateStrings: self.mysql.dateStrings
})

let query = function(sql, values) {
  return new Promise((resolve, reject) => {
    pool.getConnection(function(err, connection) {
      if (err) {
        reject(err)
      } else {
        connection.query(sql, values, (err, rows) => {
          if (err) {
            reject(err)
          } else {
            resolve(rows)
          }
          connection.release()
        })
      }
    })
  })
}

module.exports = query