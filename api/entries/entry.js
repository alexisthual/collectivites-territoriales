const db = require('../../lib/db')

module.exports = async (req, res) => {
  const entries = await db.query(`
    SELECT *
    FROM data
    WHERE exer = ${req.query.year}
    AND ndept = ${req.query.ndept}
    AND COMPTE = ${req.query.COMPTE}
  `)

  res.status(200).json({ entries })
}