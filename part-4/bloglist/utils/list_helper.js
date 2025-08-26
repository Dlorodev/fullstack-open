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

const favoriteBlog = (blogs) => {

  if(blogs.length === 0){
    return {}
  }
  
  const likes = blogs.map(b => {
    return b.likes
  })
  const sortedLikes = likes.sort((a, b) => a - b)
  const mostLikes = sortedLikes[sortedLikes.length - 1]
  const indexOfFavorite = blogs.findIndex(blog => blog.likes === mostLikes)

  return blogs[indexOfFavorite]
}

module.exports = {
  dummy,
  totalLikes,
  favoriteBlog
}