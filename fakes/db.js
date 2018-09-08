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
        },
        
        getAll: (cb) => {
            cb(null, data.types.slice());
        },

        add: (category, cb) => {
            data.types.push(category);

            cb(null, category);
        },

        update: (newValue, cb) => {
            const old = data.types.find(x => x.id == newValue.id);
            if (!old) cb(new Error("object not found")); 
            else {
                Object.assign(old, newValue);
            }
            cb(null, old);
        }
    }
    
    const courses = {
        findByType: (type, cb) => {
            const result = data.courses.filter(course => course.typeId == type);
            cb(null, result);
        },
        findById: (id, cb) => {
            cb(null, data.courses.find(course => course.id == id));
        },
        add: (course, cb) => {
            data.courses.push(course);
            cb(null, course);
        },
        update: (course, cb) => {
            const old = data.courses.find(x => x.id == course.id);
            if (!old) cb(new Error("object not found")); 
            else {
                Object.assign(old, course);
            }
            cb(null, old);
        }
    };

    return {
        courses,
        courseTypes: categories
    };
}