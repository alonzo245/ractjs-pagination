import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Posts from './components/Posts';
import Pagination from './components/Pagination';

function App() {
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);
  const [postsPerPage, setPostsPerPage] = useState(10);

  useEffect(() => {
    const fetchPosts = async () => {
      setLoading(true);
      const res = await axios.get('https://jsonplaceholder.typicode.com/posts')
      setPosts(res.data);
      setLoading(false);
    }
    fetchPosts();
  }, [])

  const paginate = pageNumber => setCurrentPage(pageNumber);

  //get current post
  const indexOfLastPage = currentPage * postsPerPage
  const indexOfFirstPost = indexOfLastPage - postsPerPage
  const currentPosts = posts.slice(indexOfFirstPost, indexOfLastPage)


  return (
    <div className="container mt-5">
      <h1 className="text-primary mb-3">My Posts </h1>
      <Posts posts={currentPosts} loading={loading} />
      <Pagination postPerPage={postsPerPage} totalPosts={posts.length}
        paginate={paginate} />
    </div>
  );
}

export default App;
