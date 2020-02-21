const db = require('../../lib/db')

module.exports = async (req, res) => {
  const year = parseInt(req.query.year) || 2018
  const ndept = req.query.ndept

  console.log(`Selecting department ${ndept}...`)

  const entries = await db.query(`
    SELECT sum(value) as value, COMPTE_T
    FROM data
    WHERE exer = ${year}
    AND ndept = "${ndept}"
    GROUP BY COMPTE_T
    ORDER BY value DESC;`)
  
  console.log(`Selected ${entries.length} categories`)

  res.status(200).json(entries)
}