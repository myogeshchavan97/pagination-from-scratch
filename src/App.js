import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Pagination from './components/Pagination';
import Users from './components/Users';
import { USERS_PER_PAGE } from './utils/constants';

const App = () => {
  const [users, setUsers] = useState([]);
  const [page, setPage] = useState(1);
  const [totalPages, setTotalPages] = useState(0);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    setIsLoading(true);
    axios
      .get('https://randomuser.me/api/?page=1&results=50&nat=us')
      .then(response => {
        const result = response.data.results;
        setUsers(result);
        setTotalPages(Math.ceil(result.length / USERS_PER_PAGE));
        setIsLoading(false);
      });
  }, []);

  const handleClick = number => {
    setPage(number);
  };

  return (
    <div>
      <h1>Pagination Demo</h1>
      {isLoading ? (
        <div className="loading">Loading...</div>
      ) : (
        <React.Fragment>
          <Users users={users} page={page} />
          <Pagination
            totalPages={totalPages}
            handleClick={handleClick}
            page={page}
          />
        </React.Fragment>
      )}
    </div>
  );
};

export default App;
