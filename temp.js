const express = require('express');
const middleware = require('webpack-dev-middleware');
const webpack = require('webpack');
const webpackConfig = require('./webpack.config');

const app = express();
const compiler = webpack(webpackConfig);
const port = 3003;

app.get('/api', (req, res) => res.send('API call'));

app.use(middleware(compiler, {
	index: './dist/index.html',
	logLevel:'trace',
	publicPath: '/'
}));


app.listen(port, () => console.log(`API listening on port ${port}`));
