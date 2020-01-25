const db = require('../../lib/db')
const escape = require('sql-template-strings')

module.exports = async (req, res) => {
  const entries = await db.query(escape`
    SELECT *
    FROM data
    WHERE ndept = ${req.query.ndept}
  `)

  res.status(200).json({ entries })
}