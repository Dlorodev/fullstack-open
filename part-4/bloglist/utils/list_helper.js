const dummy = (blogs) => {
  return 1
}

const totalLikes = (blogs) => {

    const reducer = (accum, actualBlog) => {
        const likes = actualBlog.likes
        return accum + likes
    }

    return blogs.reduce(reducer, 0)
}

module.exports = {
  dummy,
  totalLikes
}