const express = require('express'),
      router = express.Router(),
      vk = require('../services/vk');

const index = async (req, res, next) => {
    
    const courses = await req.courseTypes
        .findByParent(null);
    
    const latestPosts = await vk.getLatestPosts();

    res.render('index', { title: 'Нейрониум', courses, latestPosts });
};

const routerFactory = (app) => {
  
  const cache = app.get('redis-cache');
  //if (cache)
    //router.get('/', app.get('redis-cache').route(), index);
  //else 
  router.get('/', index);

  router.get('/about', function(req, res, next) {
      res.render('about', { title: "Обо мне" });
  });

  router.get('/contacts', function(req, res, next) {
      res.render('contacts', { title: "Контакты" });
  });

  router.get('/blog', function(req, res, next) {
      res.render('blog', { title: "Блог" });
  });

  return router;
};
  
module.exports = routerFactory;
