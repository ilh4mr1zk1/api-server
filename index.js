const express = require('express')
const app = express();
const PORT = 1002;

app.get('/', (request, response) => {
	console.log('get IP Local');
	response.send(`SERVER API IS RUNNING http://192.168.0.169:${PORT} 👍`);
});

app.listen(PORT, () => console.log(`Server running on port: http://192.168.0.169:${PORT}`));



