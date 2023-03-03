
// import { Suspense } from "react";
// import { Outlet } from "react-router-dom";
import { Container, Header, Link} from '../Novigation/Novigation.styled.js';
import React from 'react';
import { NavLink } from 'react-router-dom';

 const Navigation = () => {
  return (
    <Container>
      <Header>
        
        <div>
          <Link to="/goit-react-hw-05-movies" end>Home</Link>
          <Link to="/goit-react-hw-05-movies/movies">Movies</Link>
          
        </div>
      </Header>
      {/* <Suspense fallback={<div>Loading page...</div>}>
        <Outlet />
      </Suspense> */}
    </Container>
  );
};
export default  Navigation