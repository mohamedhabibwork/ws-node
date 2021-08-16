const {login, users, userStore} = require("../app/http/controllers/auth-controller");

const {router} = require("./router");
const {auth} = require("../app/http/middlewares/auth");


router.post('/api/login', login);

router.post('/api/users', userStore);

router.get('/api/users', auth, users);

module.exports = router;