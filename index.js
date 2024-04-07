const app = require('./app.js')
const config = require('./confiq/confiq.js')
const PORT = config.app.port

app.listen(PORT, () => {
    console.log(`Server is running at http://localhost:${PORT}`);
})