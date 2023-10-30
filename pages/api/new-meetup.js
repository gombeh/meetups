import { MongoClient } from "mongodb";
//POST  /api/new-meetup

const hanler = async (req, res) => {
  if (req.method === "POST") {
    const body = req.body;

    const client = await MongoClient.connect(
      "mongodb+srv://rasoul:0Q55Nb2iFlrpF32d@cluster0.dbfjx.mongodb.net/meetups?retryWrites=true&w=majority"
    );
    const db = client.db();

    const meetupsCollection = db.collection("meetups");
    const result = await meetupsCollection.insertOne(body);

    console.log(result);

    client.close();

    res.status(201).json({ message: "Meetup inserted!" });
  }
};

export default hanler;
