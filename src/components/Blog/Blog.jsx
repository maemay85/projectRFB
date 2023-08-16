import { PropTypes } from 'prop-types'
import PostCard from '../Blog/PostCard'
import Contact from '../Contact/Contact'

const posts =
  { english: [
    {
      date: '01 January, 2023',
    title: 'This is the Title of the Article',
    text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
    categories: ['category1', 'category2', 'category3'],
    imageUrl: 'https://raw.githubusercontent.com/maemay85/projectRFB/main/src/assets/Screenshot 2023-06-22 at 8.42.png'
    },
    {
      date: '01 January, 2023',
      title: 'This is the Title of the Article',
      text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
      categories: ['category1', 'category2', 'category3'],
      imageUrl: 'https://raw.githubusercontent.com/maemay85/projectRFB/main/src/assets/Screenshot 2023-06-22 at 8.43 2.png'
      },
      {
        date: '01 January, 2023',
        title: 'This is the Title of the Article',
        text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
        categories: ['category1', 'category2', 'category3'],
        imageUrl: 'https://raw.githubusercontent.com/maemay85/projectRFB/main/src/assets/Screenshot 2023-06-22 at 8.43 3.png'
        },
        {
          date: '01 January, 2023',
          title: 'This is the Title of the Article',
          text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
          categories: ['category1', 'category2', 'category3'],
          imageUrl: 'https://raw.githubusercontent.com/maemay85/projectRFB/main/src/assets/Screenshot 2023-06-22 at 8.43.png'
          },
  ],
  español: [
    {
      date: '01 January, 2023',
    title: 'This is the Title of the Article',
    text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
    categories: ['category1', 'category2', 'category3'],
    imageUrl: 'https://raw.githubusercontent.com/maemay85/projectRFB/main/src/assets/Screenshot 2023-06-22 at 8.42.png'
    },
    {
      date: '01 January, 2023',
      title: 'This is the Title of the Article',
      text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
      categories: ['category1', 'category2', 'category3'],
      imageUrl: 'https://raw.githubusercontent.com/maemay85/projectRFB/main/src/assets/Screenshot 2023-06-22 at 8.43 2.png'
      },
      {
        date: '01 January, 2023',
        title: 'This is the Title of the Article',
        text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
        categories: ['category1', 'category2', 'category3'],
        imageUrl: 'https://raw.githubusercontent.com/maemay85/projectRFB/main/src/assets/Screenshot 2023-06-22 at 8.43 3.png'
        },
        {
          date: '01 January, 2023',
          title: 'This is the Title of the Article',
          text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
          categories: ['category1', 'category2', 'category3'],
          imageUrl: 'https://raw.githubusercontent.com/maemay85/projectRFB/main/src/assets/Screenshot 2023-06-22 at 8.43.png'
          },
  ]
  }


function Blog(props) {
const language = props.language

  return (
    <>
      <div id="blog-page-container" className='column'>

      <div id="blog-heading-wrapper" className="column">
      <div id="blog-heading-background-image">
<img src="https://raw.githubusercontent.com/maemay85/projectRFB/main/src/assets/beautiful-view-city-buildings_duotone 1.png" /></div>

<div className="page-description-container column">
  <h2>Blog</h2>
  <p>Reuben writes profound, enlightening things and shares them with you, dear reader. </p>
</div>
<div id="blog-searchbar">
  <form>
    <input placeholder='Search...' />
    <img src="https://raw.githubusercontent.com/maemay85/projectRFB/main/src/assets/search.svg" />
  </form>
</div>
</div>

<div id="blog-grid-container">
{ language === 'english' ?
  posts.english.map((post)=>{
    return (
      <PostCard
        key={post.title}
        title={post.title}
        date={post.date}
        text={post.text}
        categories={post.categories}
        imageUrl={post.imageUrl}
      />
    )
  }) :
  posts.español.map((post)=>{
    return (
      <PostCard
        key={post.title}
        title={post.title}
        date={post.date}
        text={post.text}
        categories={post.categories}
        imageUrl={post.imageUrl}
      />
    )
  })

 }</div>


        </div>
        <Contact language={language} />
    </>
  )
}

Blog.propTypes = {
  language: PropTypes.string
}

export default Blog
