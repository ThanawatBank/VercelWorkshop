const { MongoClient } = require('mongodb')

const   db_protocol     = `mongodb+srv://`,
db_path         = `/?retryWrites=true&w=majority`,
db_host         = `cluster0.3lsbtj1.mongodb.net`,  
db_port         = ``,    
db_url          = db_protocol+db_host+db_port+db_path


let authuser = {
    username: `BT_ToT`, 
    password: `mixplay098`
}

let options = {            
    auth: authuser ,
authMechanism: `SCRAM-SHA-1`
}

//---------------------------------------------------------------------

async function runMongo( db_url, options )
{
  const dbconn = await MongoClient.connect(db_url, options);
  const db = dbconn.db('testDB')
 
  console.log('Connected to MongoDB')

  const collection = db.collection('testdoc')

  const insertResult = await collection.insertMany([{ a: 1 }, { a: 2 }, { a: 3 }])
  console.log( insertResult )

  const findResult = await collection.find({})
  for await (const doc of findResult) {
    console.log(doc);
  }
  await dbconn.close()
}

runMongo(db_url , options)


