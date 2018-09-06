module.exports = (data) => {
    
    const courseTypes = {
        findById: (id, cb) => {
        cb(null, data.types.find(item => item.id == id));
        },

        findAll: (cb) => {
            cb(null, data.types)
        }
    }
    
    const courses = {
        findByType: (type, cb) => {
            console.log(type);
            const result = data.courses.filter(course => course.typeId == type);
            console.log(result);
            cb(null, result);
        },
        findById: (id, cb) => {
            cb(null, data.courses.find(course => course.id == id));
        }
    };

    return {
        courses,
        courseTypes
    };
}