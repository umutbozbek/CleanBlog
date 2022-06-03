const Blog = require('../model/Blog')

exports.getAllBlog = async (req, res) => {
    const posts = await Blog.find({})
    res.render('index', {
        posts
    })
}

exports.getBlog = async (req, res) => {
    const post = await Blog.findById(req.params.id)
    res.render('post', {
        post
    })
}


exports.getCreatepost=async(req,res)=>{
    Blog.create(req.body)
    res.redirect('/')
  }


  exports.deletePost=async (req,res) =>{
  
    await Blog.findByIdAndRemove(req.params.id)
    res.redirect('/')
  
  }

exports.updatePost=async(req,res)=>{
    const post=await Blog.findOne({_id:req.params.id})
    post.title=req.body.title
    post.detail=req.body.detail
    post.save()
      
  res.redirect(`/posts/${req.params.id}`)
    }