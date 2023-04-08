const Router = require('@koa/router');
const router = new Router();
const multer = require('@koa/multer');
const path = require('path');
const upload = multer({
    dest: path.resolve(__dirname, '../', 'storage')
})


const { myLogging } = require('./middleware/logging');
const { verify} = require('./middleware/auth');

const webController = require('./web/controller');
const apiUserController = require('./api/user/controller');
const apiFeedController = require('./api/feed/controller');
const apiCommentController = require('./api/comment/controller');
const subController = require('./api/sub/controller');

router.use(myLogging);

router.post('/file/upload', upload.single('file'), require('./api/file/controller').upload);
router.get('/file/:id', require('./api/file/controller').download);

router.post('/file/upload', upload.single('file'), require('./api/file/controller').upload);

router.get('/', webController.home);
router.get('/page/:page', webController.page);

router.post('/api/user/register', apiUserController.register);
router.post('/api/user/login', apiUserController.login);

router.use(verify);
router.get('/user/:id', apiUserController.info);

router.get('/api/feed', apiFeedController.index);
router.post('/api/feed', apiFeedController.store);
router.get('/api/feed/:id', apiFeedController.show);
router.put('/api/feed', apiFeedController.update);
router.delete('/api/feed/:id', apiFeedController.delete);

router.get('/api/comment', apiCommentController.index);
router.post('/api/comment', apiCommentController.store);
router.get('/api/comment/:feed_id', apiCommentController.show);
router.put('/api/comment', apiCommentController.update);
router.delete('/api/comment/:id', apiCommentController.delete);

router.post('/api/sub', subController.searchSub);
router.post('/api/sub/:id', subController.searchSub);

module.exports = router;