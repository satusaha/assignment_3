const { client } = require("./dbconfig");

const moultipleInsertData = async()=>{

    try {

        const database = client.db("school");

        const students = database.collection("students");

        const docs = [

            { name: "sakkor", healthy: false },
      
            { name: "piash", healthy: true },
      
            { name: "satu saha", healthy: false }
      
          ];

          const result = await students.insertMany(docs);

          console.log(`${result.insertedCount} documents were inserted`);
        
    } catch (error) {

        console.log(error);
        
    }finally{

        await client.close();
    }
}

moultipleInsertData();