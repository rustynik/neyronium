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
          next(err);
        }
        console.log(data)
        res.render('admin/categories', { title: category.title || "Корень", id: category.id, description: category.description || "", data: data });
      });
    
});

router.get('/categories/:categoryId', function(req, res, next) {
        const categoryId = req.params.categoryId;

        req.courseTypes.findById(categoryId, (err, category) => {
          if (err) next(err);
          
          if (!category) {
            next({ message: `Course type ${ categoryId } not found.`, status: 404 });
          }
    
          req.courseTypes.findByParent(categoryId, (err, data) => {
            if (err) {
              console.error(err);
              next(err);
            }
            console.log(data)
            res.render('admin/categories', { title: category.title || "Корень", id: category.id, description: category.description || "", data: data });
          });
    
        }); 
});

router.get('/categories/add/:parentId', (req, res, next) => {
    // get course by id and error if not found
    const parentId = req.params.parentId || null;

    req.courseTypes.getAll((err, categories) => {
        if (err) next(err);
        
        categories.unshift({
                title: "Root",
                id: null
        });

        const parent = categories.find(x => x.id == parentId);
        
        if (!parent) {
          next({ message: `Course type ${ parentId } not found.`, status: 404 });
        }

        res.render('admin/add-category', { title: "New category", parent, categories });
    });
});

// add category 
// @parentId optional parent id (category to add as subcategory to)
router.post('/categories/add/:parentId', (req, res, next) => {
    
    // TODO: validate model 
    
    req.courseTypes.findById(req.body.parentId || null, (err, parent) => {
        
        // if parent not found, throw 

        req.courseTypes.add(req.body, (err, data) => {
            if (err) next(err);
            
            res.redirect('../../categories/' + req.body.parentId);
        });

    });

    
});

router.get('/categories/edit/:categoryId', (req, res, next) => {
    // get course by id and error if not found
    const categoryId = req.params.categoryId || null;

    req.courseTypes.getAll((err, categories) => {
        if (err) next(err);
        
        categories.unshift({
                title: "Root",
                id: null
        });

        const category = categories.find(x => x.id == categoryId);
        
        if (!category) {
          next({ message: `Course type ${ categoryId } not found.`, status: 404 });
        }

        res.render('admin/edit-category', { title: "edit category", category, categories });
    });
});

// add category 
// @parentId optional parent id (category to add as subcategory to)
router.post('/categories/edit/:categoryId', (req, res, next) => {
    
    // TODO: validate model 
    const categoryId = req.params.categoryId;

    req.courseTypes.findById(categoryId || null, (err, parent) => {
        
        // if parent not found, throw 
        let category = req.body;
        category.id = categoryId;

        req.courseTypes.update(category, (err, data) => {
            if (err) next(err);
    
            res.redirect('../../categories/' + req.body.parentId);
        });
    });
});

router.get('/courses/add/:categoryId', (req, res, next) => {
    // get course by id and error if not found
    const categoryId = req.params.categoryId || null;

    req.courseTypes.getAll((err, categories) => {
        if (err) next(err);
        
        categories.unshift({
                title: "Root",
                id: null
        });

        const category = categories.find(x => x.id == categoryId);
        
        if (!category) {
          next({ message: `Course type ${ categoryId } not found.`, status: 404 });
        }

        const course = {
            typeId: categoryId
        };

        res.render('admin/add-course', { title: "New category", course, categories });
    });
});

// add category 
// @parentId optional parent id (category to add as subcategory to)
router.post('/courses/add/:categoryId', (req, res, next) => {
    
    // TODO: validate model 
    
    req.courses.add(req.body, (err, data) => {
        if (err) next(err);
        
        res.redirect('../../categories/' + req.body.typeId);
    });
    
});

router.get('/courses/edit/:courseId', (req, res, next) => {
    // get course by id and error if not found
    const courseId = req.params.courseId || null;

    req.courseTypes.getAll((err, categories) => {
        if (err) next(err);
        
        categories.unshift({
                title: "Root",
                id: null
        });

        const category = categories.find(x => x.id == course.typeId);
        
        if (!category) {
          next({ message: `Course type ${ courseId } not found.`, status: 404 });
        }

        res.render('admin/add-course', { title: "New course", course, categories });
    });
});

// add category 
// @parentId optional parent id (category to add as subcategory to)
router.post('/courses/add/:courseId', (req, res, next) => {
    
    // TODO: validate model 
    const course = req.body;
    course.id = req.params.courseId;

    req.courses.update(course, (err, data) => {
        if (err) next(err);
        
        res.redirect('../../categories/' + data.typeId);
    });
    
});


module.exports = router;