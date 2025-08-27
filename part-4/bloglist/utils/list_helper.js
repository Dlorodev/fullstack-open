const _ = require('lodash')

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

const mostBlogs = (blogsList) => {
  if(blogsList.length === 0){
    return {}
  }
  
  const maxBlog = _.maxBy(blogsList, blog => {
    const fav = blog.blogs;
    return fav;
  });
  const { author, blogs } = maxBlog;

  return {author, blogs}
};

module.exports = {
  dummy,
  totalLikes,
  favoriteBlog,
  mostBlogs
}