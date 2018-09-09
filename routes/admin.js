const express = require('express'),
      router = express.Router();

router.get('/categories', (req, res, next) => {
    const category = {
        title: "Root",
        id: null
    };

    req.courseTypes.findByParent(null, (err, data) => {
        if (err) {
          console.error(err);
          return next(err);
        }
        console.log(data)
        res.render('admin/categories', { title: category.title || "Корень", id: category.id, description: category.description || "", data: data });
      });
    
});

router.get('/categories/:categoryId', function(req, res, next) {
        const categoryId = req.params.categoryId;

        req.courseTypes.findById(categoryId, (err, category) => {
          if (err) return next(err);
          
          if (!category) {
            return next({ message: `Course type ${ categoryId } not found.`, status: 404 });
          }
    
          req.courseTypes.findByParent(categoryId, (err, data) => {
            if (err) {
              return next(err);
            }
            
            res.render('admin/categories', { title: category.title || "Корень", id: category.id, description: category.description || "", data: data });
          });
    
        }); 
});

router.get('/add-category/:parentId?', (req, res, next) => {
    // get course by id and error if not found
    const parentId = req.params.parentId || null;

    req.courseTypes.getAll((err, categories) => {
        if (err) return next(err);
        
        categories.unshift({
                title: "Root",
                id: null
        });

        const parent = categories.find(x => x.id == parentId);
        
        if (!parent) {
          return next({ message: `Course type ${ parentId } not found.`, status: 404 });
        }

        res.render('admin/add-category', { title: "New category", parent, categories });
    });
});

// add category 
// @parentId optional parent id (category to add as subcategory to)
router.post('/add-category/:parentId?', (req, res, next) => {
    
    // TODO: validate model 
    
    req.courseTypes.findById(req.body.parentId || null, (err, parent) => {
        
        // if parent not found, throw 
        // TODO: "" >> null (SELECT doesn't give you null...)
        const category = req.body
        if (category.parentId == '') category.parentId = null;  

        req.courseTypes.add(category, (err, data) => {
            if (err) return next(err);
            
            res.redirect('../categories/' + (category.parentId || ""));
        });

    });

    
});

router.get('/edit-category/:categoryId', (req, res, next) => {
    // get course by id and error if not found
    const categoryId = req.params.categoryId || null;

    req.courseTypes.getAll((err, categories) => {
        if (err) return next(err);
        
        categories.unshift({
                title: "Root",
                id: null
        });

        const category = categories.find(x => x.id == categoryId);
        
        if (!category) {
          return next({ message: `Course type ${ categoryId } not found.`, status: 404 });
        }

        res.render('admin/edit-category', { title: "edit category", category, categories });
    });
});

// add category 
// @parentId optional parent id (category to add as subcategory to)
router.post('/edit-category/:categoryId', (req, res, next) => {
    
    // TODO: validate model 
    const categoryId = req.params.categoryId;

    req.courseTypes.findById(categoryId || null, (err, parent) => {
        if (err) return next(err);
        if (!parent)
            return next({ message: `Course type ${ categoryId } not found.`, status: 404 });

        let category = req.body;
        category.id = categoryId;
        // TODO: "" >> null (SELECT doesn't give you null...)
        if (category.parentId == '') category.parentId = null;  
        req.courseTypes.update(category, (err, data) => {
            if (err) return next(err);
    
            res.redirect('../categories/' + req.body.parentId);
        });
    });
});

router.get('/add-course/:categoryId', (req, res, next) => {
    // get course by id and error if not found
    const categoryId = req.params.categoryId || null;

    req.courseTypes.getAll((err, categories) => {
        if (err) return next(err);
        
        categories.unshift({
                title: "Root",
                id: null
        });

        const category = categories.find(x => x.id == categoryId);
        
        if (!category) {
          return next({ message: `Course type ${ categoryId } not found.`, status: 404 });
        }

        const course = {
            typeId: categoryId
        };

        res.render('admin/add-course', { title: "New category", course, categories });
    });
});

// add category 
// @parentId optional parent id (category to add as subcategory to)
router.post('/add-course/:categoryId', (req, res, next) => {
    
    // TODO: validate model 
    const course = req.body;

    // TODO: "" >> null (SELECT doesn't give you null...)
    if (course.typeId == '') course.typeId = null;
    req.courses.add(course, (err, data) => {
        if (err) return next(err);
        
        res.redirect('../categories/' + (course.typeId || ""));
    });
    
});

router.get('/edit-course/:courseId', (req, res, next) => {
    // get course by id and error if not found
    const courseId = req.params.courseId;

    req.courses.findById(courseId, (err, course) => {
        
        if (err) return next(err);
        
        if (!course)
            return next({ message: `Course ${ courseId } not found.`, status: 404 });
        
        req.courseTypes.getAll((err, categories) => {
            if (err) return next(err);
            
            categories.unshift({
                    title: "Root",
                    id: null
            });
    
            const category = categories.find(x => x.id == course.typeId);
            
            if (!category) {
              return next({ message: `Course type ${ course.typeId } not found.`, status: 404 });
            }
    
            res.render('admin/edit-course', { title: "New course", course, categories });
        });
    });

    
});

// add category 
// @parentId optional parent id (category to add as subcategory to)
router.post('/edit-course/:courseId', (req, res, next) => {
    
    // TODO: validate model 
    const course = req.body;
    course.id = req.params.courseId;
    // TODO: "" >> null (SELECT doesn't give you null...)
    if (course.typeId == '') course.typeId = null;


    req.courses.update(course, (err, data) => {
        if (err) return next(err);
        
        res.redirect('../categories/' + course.typeId);
    });
});


module.exports = router;