import {Link} from 'react-router-dom'

import './index.css'

const BlogItem = props => {
  const {blogData} = props

  const {id, title, imageUrl, avatarUrl, author, topic} = blogData

  return (
    <li className="blog-items">
      <Link to={`/blogs/${id}`} className="blog-item-link">
        <img src={imageUrl} alt={`blog${id}`} className="blog-image" />
        <div className="blog-item-container">
          <p className="blog-topic">{topic}</p>
          <h3 className="blog-title">{title}</h3>
          <div className="blog-author-details">
            <img src={avatarUrl} alt={`author${id}`} className="blog-avatar" />
            <p className="blog-author">{author}</p>
          </div>
        </div>
      </Link>
    </li>
  )
}

export default BlogItem
