const Database = require('sqlite-async');

exports.query = async query => {
  try {
    const db = await Database.open('/home/alexis/datafin_2/coolectivites-territoriales-backend/departements.db')

    const results = await db.all(query);

    await db.close()
    return results
  } catch (error) {
    console.log(error)
    return { error }
  }
}