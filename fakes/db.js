module.exports = (data) => {
    
    const categories = {
        
        findById: (id, cb) => {
            cb(null, data.types.find(item => item.id == id));
        },

        findByParent: (parentId, cb) => {
            const result = { 
                subCategories: data.types
                    .filter(item => item.parentId == parentId)
                    .map(item => { item.courses = data.courses.filter(course => course.typeId == item.id ); return item; }),
                courses: data.courses.filter(course => course.typeId == parentId)
            };
            cb(null, result);
        }
    }
    
    const courses = {
        findByType: (type, cb) => {
            const result = data.courses.filter(course => course.typeId == type);
            cb(null, result);
        },
        findById: (id, cb) => {
            cb(null, data.courses.find(course => course.id == id));
        }
    };

    return {
        courses,
        courseTypes: categories
    };
}