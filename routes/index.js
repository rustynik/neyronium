const vk = require('../services/vk');

const routes = {
    
    'index': async (req, res, next) => {    
    
        const data = {
            title: "Нейрониум",
            courses: await req.courseTypes.findByParent(null),
            latestPosts: await vk.getLatestPosts()
        };
        
        res.locals.options.homePage = true;
        
        res.render('index', data);
    },

    courses: async (req, res, next) => {
        
        const data = await req.courseTypes.findByParent(req.courseType.id).catch(next);

        res.render('courses', 
        { 
            title: req.courseType.title, 
            parents: req.courseType.parents || [],
            description: req.courseType.description || "", 
            contents: req.courseType.contents || "",
            data: data 
        });
    },

    'about': (req, res, next) => res.render('about', { title: "Обо мне" }),

    'contacts': (req, res, next) => res.render('contacts', { title: "Контакты" }),

    'blog': (req, res, next) => res.render('blog', { title: "Блог" })
}

const addCache = (app, router) => {
    
    const cache = useCache = app.get('app-settings').useCache;
    if (useCache) {
        const cache = app.get('services').cache;
        router.use(cache.route());
    };

    router.param('courseTypeId', async (req, res, next, id) => {
        console.log('hello')
        req.courseType = await req.courseTypes.findById1(id).catch(next);
        
        return req.courseType ? next() : next({ message: `Course type ${ id } not found.`, status: 404 })
    })

    return (app, router);
}

const routerFactory = (app, router) => {
    
    addCache(app, router);

    router.get('/', routes.index);

    router.get('/courses/:courseTypeId', routes.courses);

    router.get('/about', routes.about);

    router.get('/contacts', routes.contacts);

    router.get('/blog', routes.blog);

    return router;
};
  
module.exports = routerFactory;