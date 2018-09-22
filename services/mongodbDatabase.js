const Client = require('mongodb').MongoClient;

module.exports = function dbFactory({ connectionString, dbName = 'test' }) {

    if (!connectionString) throw new Error('No mongo connection string');
    
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
        findById1: async (id) => {
            
            const client = await Client.connect(connectionString);
            const db = client.db(dbName);
            const course = await db.collection("courses").findOne({ id });
            client.close();
            
            return course;
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
                    .update({ id : course.id }, course, cb);
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
        findById1: async (id) => {
            
            const client = await Client.connect(connectionString);
            const db = client.db(dbName);
            const result = await db.collection("categories").findOne({ id });
            client.close();
            
            return result;
        },
    
        findByParent: async function(parentId, cb) {
            console.log("trying to find by id " + (parentId === null ? "NULL" : parentId));
            
            const client = await Client.connect(connectionString);
            const db = client.db(dbName);
            const subCategories = await db.collection("categories").find({ parentId: parentId }).toArray();
            const courses = await db.collection("courses").find({ typeId: parentId }).toArray();
            
            client.close();
    
            return {
                subCategories,
                courses
            };
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
                    .update({ id: item.id }, item, cb);
            }, cb);
        }
    }
    
    return {
        courses: coursesApi,
        courseTypes: courseTypesApi
    };
};





