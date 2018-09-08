const Client = require('mongodb').MongoClient;

const connectionString = 
"mongodb+srv://andrei:pGMuBxVg1OkojeCm@cluster0-jya34.mongodb.net/test?retryWrites=true";

//"mongodb://andrei:Maureau_2018@cluster0-shard-00-00-jya34.mongodb.net:27017,cluster0-shard-00-01-jya34.mongodb.net:27017,cluster0-shard-00-02-jya34.mongodb.net:27017/test?ssl=true&replicaSet=Cluster0-shard-0&authSource=admin&retryWrites=true";

const dbName = 'neyronium';

function handleRequest(func, cb) {
    Client.connect(connectionString, (err, client) => {
        
        if (err) {
            console.log(err);
            cb(err);
        } else {
        
            console.log("client ok");
            

            const db = client.db(dbName);
            console.log(db);

            func(db, (err, result) => {
                
                client.close();

                cb(err, result);
            });
        }
    });    
}

const coursesApi = {
    findByType: (type, cb) => {
        handleRequest((db, cb) => {
            
            db.collection("courses")
                .find({ typeId: type })
                .toArray(cb);
        }, cb);
    },
    findById: (id, cb) => {
        handleRequest((db, cb) => {
            
            db.collection("courses")
                .findOne({ id: id }, null, cb);
        }, cb);
    },
    add: (course, cb) => {
        handleRequest((db, cb) => {
            course._id = course.id;

            db.collection("courses")
                .insertOne(course, cb);

        }, cb);
    },
    update: (course, cb) => {
        handleRequest((db, cb) => {
            course._id = course.id;

            db.collection("courses")
                .update(course, cb);
        }, cb);
    }
};

const courseTypesApi = {
    findById: (id, cb) => {
        handleRequest((db, cb) => {
            
            db.collection("categories")
                .findOne({ id: id }, null, cb);
        }, cb);
    },

    findByParent: (parentId, cb) => {
        console.log("trying to find by id " + (parentId === null ? "NULL" : parentId));
        handleRequest((db, cb) => {
            console.log(db);
            db.collection("categories").find({ parentId: parentId }).toArray((err, subCategories) => {
                if (err) cb(err);
                console.log('found subcategories ', subCategories );
                db.collection("courses").find({ typeId: parentId }).toArray((err, courses) => {
                    if (err) cb(err);
                    console.log('found courses ', courses );
                    cb(null, {
                        subCategories,
                        courses
                    });
                })

            })
        }, cb);
    },
    
    getAll: (cb) => {
        handleRequest((db, cb) => {
            db.collection("categories").find({}).toArray(cb);
        }, cb);
    },

    add: (item, cb) => {
        handleRequest((db, cb) => {
            item._id = item.id;

            db.collection("categories")
                .insertOne(item, cb);
        }, cb);
    },

    update: (item, cb) => {
        handleRequest((db, cb) => {
            item._id = item.id;

            db.collection("categories")
                .findOneAndUpdate({ _id: item.id }, item, { upsert: true }, cb);
        });
    }
}



module.exports = {
    courses: coursesApi,
    courseTypes: courseTypesApi
};