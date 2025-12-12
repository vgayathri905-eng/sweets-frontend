const express=require("express")
const cors=require("cors")
const jwt = require('jsonwebtoken');
const bcrypt = require('bcryptjs');

const port=7005
const app=express()

app.use(cors())
app.use(express.json())



const { MongoClient, ServerApiVersion } = require('mongodb');
const uri = "mongodb+srv://vgayathri905_db_user:test@cluster0.jqvjegh.mongodb.net/?appName=Cluster0";

// Create a MongoClient with a MongoClientOptions object to set the Stable API version
const client = new MongoClient(uri, {
  serverApi: {
    version: ServerApiVersion.v1,
    strict: true,
    deprecationErrors: true,
  }
});

async function run() {
  try {
    // Connect the client to the server	(optional starting in v4.7)
    await client.connect();


     const product=client.db("delicious").collection("sweet")
     const usersCollection=client.db("delicious").collection("sweets")

        
         app.post('/register', async (req, res) => {
      try {
        const { username, password } = req.body;
        const existingUser = await usersCollection.findOne({ username });
        if (existingUser) {
          return res.status(400).json({ message: "User already exists" });
        }
        const hashedPassword = await bcrypt.hash(password, 10);
        await usersCollection.insertOne({ username, password: hashedPassword });
        res.status(201).json({ message: "User registered successfully" });   
        console.log("User registered:", username);
      } catch (error) {
        res.status(500).json({ message: "Error registering user", error });
      }
    });

    app.post('/login', async (req, res) => {
        try {
          const { username, password } = req.body;
          const user = await usersCollection.findOne({ username });
          if (!user) {
            return res.status(401).json({ message: "User not found. Please register." });
          }
          const isValidPassword = await bcrypt.compare(password, user.password);
          if (!isValidPassword) {
            return res.status(401).json({ message: "Invalid password" });
          }
          const token = jwt.sign({ username }, secretKey, { expiresIn: '1h' });
          res.json({ token });
          console.log("User logged in:", username);
        } catch (error) {
          res.status(500).json({ message: "Error logging in", error });
        }
    });



     app.post('/verifyToken', (req, res) => {
        const token = req.headers.authorization?.split(' ')[1];
        
        if (!token) {
          return res.status(401).json({ valid: false, message: 'No token provided' });
        }

        jwt.verify(token, secretKey, (err, decoded) => {
          if (err) {
            return res.status(401).json({ valid: false, message: 'Invalid or expired token' });
          }
          res.json({ valid: true, username: decoded.username });
        });
});



    app.post("/post",async(req,res)=>{
        const data=req.body
        const result=await product.insertOne(data)
        res.send(result)
    }
    )
     app.get("/get",async(req,res)=>{
      const result=await product.find()
      const data=await result.toArray()
      res.send(data)
    })

    app.get("/getone/:id",async(req,res)=>{
      const id=await req.params.id;
      const newid={_id:new ObjectId(id)}
      const result=await product.findOne(newid)
      res.send(result)
    }
  )

   app.delete("/deleteone/:id",async(req,res)=>{
      const id=await req.params.id;
      const newid={_id:new ObjectId(id)}
      const result=await product.deleteOne(newid)
      res.send(result)
    }
  )
     
     app.patch("/edit/:id",async(req,res)=>{
      const id= await req.params.id;
      const newid={_id:new ObjectId(id)}
      const data=req.body
      const realdata={
        $set:{
          ...data
        }
      }
      const result=await product.updateOne(newid,realdata)
      res.send(result)

  })



    // Send a ping to confirm a successful connection
    await client.db("admin").command({ ping: 1 });
    console.log("Pinged your deployment. You successfully connected to MongoDB!");
  } finally {
    // Ensures that the client will close when you finish/error
    // await client.close();
  }
}
run().catch(console.dir);






app.listen(port,()=>{
    console.log("Listenting to port number",port)
}
)