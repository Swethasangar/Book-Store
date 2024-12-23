import express from "express";
import cors from "cors";
import { MongoClient, ServerApiVersion, ObjectId } from "mongodb";
const app = express();
const port = 5000;

// db-password: ImdEGJXqvUjXA02n

// middleware
app.use(cors());
app.use(express.json());

// Testing API
app.get("/", (req, res) => {
  res.send("Hi Server");
});

// MongoDB Connection Code

// const { MongoClient, ServerApiVersion } = require('mongodb');
const uri =
  "mongodb+srv://Book-store:ImdEGJXqvUjXA02n@book-cluster.acdvo.mongodb.net/?retryWrites=true&w=majority&appName=Book-Cluster";

// Create a MongoClient with a MongoClientOptions object to set the Stable API version
const client = new MongoClient(uri, {
  serverApi: {
    version: ServerApiVersion.v1,
    strict: true,
    deprecationErrors: true,
  },
});

async function run() {
  try {
    // Connect the client to the server	(optional starting in v4.7)
    await client.connect();

    // create a collection of documents
    const bookCollections = client.db("BookNest").collection("BookShelf");

    // Insert Data
    app.post("/upload-book", async (req, res) => {
      try {
        const data = req.body;
        const result = await bookCollections.insertOne(data);

        res.status(201).send({
          success: true,
          message: "Book Upload Successfully",
          data: result,
        });
      } catch (error) {
        console.error("Error inserting book data:", error);

        res.status(500).send({
          success: false,
          message: "Failed to upload book",
          error: error.message,
        });
      }
    });

    // get all the books from the database
    // app.get("/all-books", async (req, res) => {
    //   try {
    //     const books = bookCollections.find();
    //     const result = await books.toArray();
    //     res.send(result);
    //   } catch (error) {
    //     console.error("Error inserting book data:", error);

    //     res.status(500).send({
    //       success: false,
    //       message: "Failed to upload book",
    //       error: error.message,
    //     });
    //   }
    // });

    // update a book data
    // Patch is used for partial update
    app.patch("/book/:id", async (req, res) => {
      try {
        const id = req.params.id;

        // Check if the ID is valid (basic validation)
        if (!ObjectId.isValid(id)) {
          return res.status(400).send({ message: "Invalid ID format" });
        }

        //  The data sent from the client to update the document with specified fields.
        const updateFields = req.body;

        // _id:Converts the id string (passed in the URL) into a MongoDB ObjectId format.
        const filter = { _id: new ObjectId(id) };

        // $set like a update operator to update the specified fields.Spread operator expands the obj into another obj.Here it works like it update the specified fields in the document and expand the updated document into original document.
        const updateDoc = {
          $set: {
            ...updateFields,
          },
        };

        // If the document with the specified _id does not exist, MongoDB will create a new document using the provided data.If the document exists, it will simply update the specified fields.
        const options = { upsert: true };

        // Update
        const result = await bookCollections.updateOne(
          filter,
          updateDoc,
          options
        );
        res.status(200).send({
          message: "Document updated successfully",
          result: result,
        });
      } catch (error) {
        console.error("Error inserting book data:", error);

        res.status(500).send({
          success: false,
          message: "Failed to update book",
          error: error.message,
        });
      }
    });

    // delete a book data
    app.delete("/book/:id", async (req, res) => {
      try {
        const id = req.params.id;
        const filter = { _id: new ObjectId(id) };
        const result = await bookCollections.deleteOne(filter);
        if (result.deletedCount === 1) {
          res
            .status(200)
            .json({ success: true, message: "Book deleted successfully." });
        } else {
          res.status(404).json({ success: false, message: "Book not found" });
        }
        res.send(result);
      } catch (error) {
        console.error("Error inserting book data:", error);
        res.status(500).send({
          success: false,
          message: "Internal server error",
          error: error.message,
        });
      }
    });

    // get all books from the database by their category
    app.get("/all-books", async (req, res) => {
      try {
        // It fetches all documents from the collection.
        let query = {};

        if (req.query?.category) {
          query = { category: req.query.category };
        }

        // Search by keyword in bookTitle if provided
        if (req.query?.keyword) {
          query.bookTitle = {
            $regex: req.query.keyword,
            $options: "i",
          };
        }
        const result = await bookCollections.find(query).toArray();
        res.status(200).json({
          success: true,
          message: "Books fetched successfully.",
          data: result,
        });
      } catch (error) {
        res.status(500).json({
          success: false,
          message: "Failed to fetch books.",
          error: error.message,
        });
      }
    });

    // get a single book data
    app.get("/book/:id", async (req, res) => {
      try {
        const id = req.params.id;
        const filter = { _id: new ObjectId(id) };
        const result = await bookCollections.findOne(filter);
        res.status(200).json({
          success: true,
          message: "Books fetched successfully.",
          data: result,
        });
      } catch (error) {
        res.status(500).json({
          success: false,
          message: "Failed to fetch books.",
          error: error.message,
        });
      }
    });

    // Send a ping to confirm a successful connection
    await client.db("admin").command({ ping: 1 });
    console.log(
      "Pinged your deployment. You successfully connected to MongoDB!"
    );
  } finally {
    // Ensures that the client will close when you finish/error
    // await client.close();
  }
}
run().catch(console.dir);

app.listen(port, () => {
  console.log(`Server Started on ${port}`);
});
