import UserInfo from '../UserInfo'

import './index.css'
import BlogList from '../BlogList'

const Home = () => (
  <div className="home-container">
    <UserInfo />
    <BlogList />
    Render UserInfo and BlogList
  </div>
)

export default Home
