const App = require('yeps');
const Router = require('yeps-router');
const server = require('yeps-server');
const error = require('yeps-error');

const app = new App();
const router = new Router();

router.get('/').then(async ctx => {
	ctx.res.writeHead(200);
	ctx.res.end('homepage');
});

app.all([,
	error(),
]).then(
	router.resolve()
);

server.createHttpServer(app);
