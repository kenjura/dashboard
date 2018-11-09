require('dotenv').load({ path:'.env.local' });

require('./version-check');

const api = require('./controllers');
const express = require('express');
const fallback = require('express-history-api-fallback')
const path = require('path');

const app = express();
const port = 3003;
const fileRoot = process.env.STATICFILE_ROOT || path.resolve(__dirname, '../../dist');


app.use('/api', api);


// if (!process.env.STATICFILE_INDEX) {
//   process.env.STATICFILE_INDEX = './index.html'
// }

console.log(`fileRoot=${fileRoot}`)

app.use(express.static(fileRoot));
app.use(fallback('index.html', { root:fileRoot }))

app.listen(port, () => console.log(`API listening on port ${port}`));

