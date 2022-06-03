const Blog = require('../model/Blog')

exports.getABout = (req, res) => {
    res.render('about');
}



exports.getAddNewpost = async (req, res) => {
    res.render('add_post')
}


exports.getEditPost = async (req, res) => {
    const post = await Blog.findById(req.params.id)
    res.render('edit', {
        post
    })
}



