const { test, describe } = require('node:test')
const assert = require('node:assert')
const listHelper = require('../utils/list_helper')

const listWithOneBlog = [
    {
        _id: '5a422aa71b54a676234d17f8',
        title: 'Go To Statement Considered Harmful',
        author: 'Edsger W. Dijkstra',
        blogs: 8,
        url: 'https://homepages.cwi.nl/~storm/teaching/reader/Dijkstra68.pdf',
        likes: 5,
        __v: 0
    }
]

const blogs = [
    {
        _id: "5a422a851b54a676234d17f7",
        title: "React patterns",
        author: "Michael Chan",
        blogs: 12,
        url: "https://reactpatterns.com/",
        likes: 7,
        __v: 0
    },
    {
        _id: "5a422aa71b54a676234d17f8",
        title: "Go To Statement Considered Harmful",
        author: "Edsger W. Dijkstra",
        blogs: 18,
        url: "http://www.u.arizona.edu/~rubinson/copyright_violations/Go_To_Considered_Harmful.html",
        likes: 5,
        __v: 0
    },
    {
        _id: "5a422b3a1b54a676234d17f9",
        title: "Canonical string reduction",
        author: "Sam H. Altman",
        blogs: 6,
        url: "http://www.cs.utexas.edu/~EWD/transcriptions/EWD08xx/EWD808.html",
        likes: 12,
        __v: 0
    },
    {
        _id: "5a422b891b54a676234d17fa",
        title: "First class tests",
        author: "Robert C. Martin",
        blogs: 21,
        url: "http://blog.cleancoder.com/uncle-bob/2017/05/05/TestDefinitions.htmll",
        likes: 10,
        __v: 0
    },
    {
        _id: "5a422ba71b54a676234d17fb",
        title: "TDD harms architecture",
        author: "Howard D. Schmidt",
        blogs: 5,
        url: "http://blog.cleancoder.com/uncle-bob/2017/03/03/TDD-Harms-Architecture.html",
        likes: 0,
        __v: 0
    },
    {
        _id: "5a422bc61b54a676234d17fc",
        title: "Type wars",
        author: "James T. Stifler",
        blogs: 25,
        url: "http://blog.cleancoder.com/uncle-bob/2016/05/01/TypeWars.html",
        likes: 2,
        __v: 0
    }
]

const emptyList = []

describe('total likes', () => {

    test('of empty list is 0', () => {
        const result = listHelper.totalLikes(emptyList)
        console.log('total likes result for empty list', result)
        assert.strictEqual(result, 0)
    })

    test('when list has only one blog, equals the likes of that', () => {
        const result = listHelper.totalLikes(listWithOneBlog)
        console.log('total likes result for one item in list', result)
        assert.strictEqual(result, 5)
    })

    test('of a bigger list is calculated right', () => {
        const result = listHelper.totalLikes(blogs)
        console.log('total likes result for various items in list', result)
        assert.strictEqual(result, 36)
    })
})

describe('favorite blog', () => {

    test('returns the blog with most likes', () => {
        const result = listHelper.favoriteBlog(blogs)
        console.log('favorite blog result for most likes', result)
        assert.deepStrictEqual(result,
            {
                _id: "5a422b3a1b54a676234d17f9",
                title: "Canonical string reduction",
                author: "Sam H. Altman",
                blogs: 6,
                url: "http://www.cs.utexas.edu/~EWD/transcriptions/EWD08xx/EWD808.html",
                likes: 12,
                __v: 0
            }
        )
    })

    test('When the array is empty, return an empty object', () => {
        const result = listHelper.favoriteBlog(emptyList)
        console.log('favorite blog result for empty array', result)
        assert.deepStrictEqual(result, {})
    })

    test('returns the blog when there is only one in list', () => {
        const result = listHelper.favoriteBlog(listWithOneBlog)
        console.log('favorite blog result for one item array', result)
        assert.deepStrictEqual(result, listWithOneBlog[0])
    })
})

describe('most important blogger', () => {

    test('returns the author with most blogs', () => {
        const result = listHelper.mostBlogs(blogs)
        console.log('important blogger result for most blogs', result)
        assert.deepStrictEqual(result, { author: "James T. Stifler", blogs: 25, })
    })

    test('when the array has only one element, favorite blog is that element', () => {
        const result = listHelper.mostBlogs(listWithOneBlog)
        console.log('important blogger result for one element list', result)
        assert.deepStrictEqual(result, { author: 'Edsger W. Dijkstra', blogs: 8, })
    })

    test('When the array is empty, return an empty object', () => {
        const result = listHelper.mostBlogs(emptyList)
        console.log('important blogger result for empty list', result)
        assert.deepStrictEqual(result, {})
    })
})

