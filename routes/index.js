const express = require('express'),
      router = express.Router(),
      vk = require('../services/vk');

  router.get('/', async function(req, res, next) {
    
    const courses = await req.courseTypes
        .findByParent(null);
    
    const latestPosts = await vk.getLatestPosts();

    res.render('index', { title: 'Нейрониум', courses, latestPosts });
  });

  router.get('/about', function(req, res, next) {
      res.render('about', { title: "Обо мне" });
  });

  router.get('/contacts', function(req, res, next) {
      res.render('contacts', { title: "Контакты" });
  });

  router.get('/blog', function(req, res, next) {
      res.render('blog', { title: "Блог" });
  });

  
module.exports = router;
