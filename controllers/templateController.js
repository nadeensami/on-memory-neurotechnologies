let dbName = "on-memory-neurotechnologies"
let collectionName = "readers"

const templateAction = async (req, res) => {
    try {
        await req.app.get('mongo_client').db(dbName).collection(collectionName).insertOne(req.body)
        return res.send(`Submission has been received.`);
    } catch (error) {
        console.log('error');
        console.log(error);
    }
};

module.exports = {
    templateAction: templateAction
};
