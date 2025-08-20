const app = require('./app')
const logger = require('./utils/logger')
const config = require('./utils/config')
const blogsRouter = require('./controllers/blogs')

app.listen(config.PORT, () => {
    logger.info(`Server running on port ${config.PORT}`)
})