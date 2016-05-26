import express from 'express';
import webpack from 'webpack';
import webpackDevMiddleware from 'webpack-dev-middleware';
import webpackHotMiddleware from 'webpack-hot-middleware';
import path from 'path';
import webpackConfig from '../webpack/webpack.config'

const compiler = webpack(webpackConfig);

const devMiddleware = webpackDevMiddleware(compiler, {
	publicPath: webpackConfig.output.publicPath,
	noInfo: false,
	stats: {
		colors: true
	}
});
const hotMiddleware = webpackHotMiddleware(compiler);

const app = express();
app.use(devMiddleware);
app.use(hotMiddleware);

app.use('/', (req, res) => {
    res.sendFile(path.join(__dirname, '../index.html'))
});

app.listen(8080, () => {
    console.log('服务器启动成功！');
});