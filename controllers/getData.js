var bodyParser = require('body-parser');
let dbName = "on-memory-neurotechnologies"
let collectionName = "readers"

const getData = async (req, res) => {
    try {
    client = req.app.get('mongo_client')
    const db = client.db(dbName);
    var submissionJSON = {};

    let request = Object.keys(req.body)[0]

    if ("request" == request) {
        var nameDict = {};
        console.log('loading existing ' + req.body.request + 's')

            await db.collection(collectionName).find().forEach(doc => nameDict[doc[req.body.request]] = doc[req.body.request]);

            if (Object.keys(nameDict).length != 0){
                res.send(nameDict)
            } else {
                res.send({'error':'no submissions yet'})
            }
        }
    else{
        var submissionJSON = {};
        var docArray = [];
        console.log('req.body: ' + req.body)

        await db.collection(collectionName).find({request: req.body[request]}).forEach(doc => {
            docArray.push(doc), submissionJSON[doc[request]] = doc
        });
    }
    } catch (error) {
        console.log('error');
        console.log(error);
    }
  };

module.exports = {
    getData: getData
};
