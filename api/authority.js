const db = require('../lib/db')

module.exports = async (req, res) => {
  const ndept = req.query.ndept
  const year = parseInt(req.query.year)

  console.log(`Selecting authority ${ndept}...`)

  let entries = []
  if(year) {
    entries = await db.query(`
      SELECT sum(value) as value, "COMPTE_T"
      FROM data
      WHERE ndept = '${ndept}'
      AND exer = ${year}
      GROUP BY "COMPTE_T"
      ORDER BY value DESC;`)
  } else {
    entries = await db.query(`
      SELECT sum(value) as value, exer as year, "COMPTE_T"
      FROM data
      WHERE ndept = '${ndept}'
      GROUP BY exer, "COMPTE_T"
      ORDER BY value DESC;`)
  }

  res.status(200).json(entries)
  console.log(`Returned ${entries.length} categories`)
  return entries
}