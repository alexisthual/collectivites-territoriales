const db = require('../lib/db')
const escape = require('sql-template-strings')

// import db from '../../lib/db'
// import escape from 'sql-template-strings'

module.exports = async (req, res) => {
  const year = parseInt(req.query.year) || 2018

  console.log(`Selecting authorities...`)

  const entries = await db.query(`SELECT ndept FROM data WHERE exer=${year} GROUP BY ndept;`)

  console.log(`Returned ${entries.length} authorities`)

  res.status(200).json(entries)
}