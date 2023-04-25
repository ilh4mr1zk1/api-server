const express = require('express')
const app = express();
const PORT = 1002;

app.get('/', (request, response) => {
	response.send(`Hello World, I'm Here`);
});

app.listen(PORT, () => console.log(`Server running on port: http://192.168.0.169:${PORT}`));



