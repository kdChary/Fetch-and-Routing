import {Component} from 'react'

import Loader from 'react-loader-spinner'
import 'react-loader-spinner/dist/loader/css/react-spinner-loader.css'

import './index.css'
import BlogItem from '../BlogItem'

class BlogList extends Component {
  state = {isLoading: true, blogsData: []}

  componentDidMount() {
    this.getBlogsData()
  }

  getBlogsData = async () => {
    const response = await fetch('https://apis.ccbp.in/blogs')
    // const statusCode = await response.status
    // console.log(statusCode)
    const data = await response.json()

    const formattedData = data.map(eachObj => ({
      id: eachObj.id,
      title: eachObj.title,
      imageUrl: eachObj.image_url,
      avatarUrl: eachObj.avatar_url,
      author: eachObj.author,
      topic: eachObj.topic,
    }))

    this.setState({isLoading: false, blogsData: formattedData})
  }

  render() {
    const {blogsData, isLoading} = this.state
    return (
      <ul className="blogs-list">
        {isLoading ? (
          <div data-testid="loader">
            <Loader type="TailSpin" color="#00BFFF" height={50} width={50} />
          </div>
        ) : (
          blogsData.map(eachBlog => (
            <BlogItem key={eachBlog.id} blogData={eachBlog} />
          ))
        )}
      </ul>
    )
  }
}

export default BlogList
