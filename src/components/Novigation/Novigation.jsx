// import { NavLink } from 'react-router-dom';

// const getActiveClassName = ({ isActive }) => {
//   return isActive ? 'btn nav-btn btn-light active' : 'btn nav-btn btn-light';
// };

// const Navigation = () => {
//   return (
//     <div className="d-flex flex-column justify-content-between h-100">
     
//         <NavLink to="/" className={getActiveClassName}>
//           Home
//         </NavLink>

//         <NavLink to="/movies" className={getActiveClassName}>
//           Movies
//         </NavLink>
//     </div>
//   );
// };


// import { Suspense } from "react";
// import { Outlet } from "react-router-dom";
import { Container, Header,  Link } from '../Novigation/Novigation.styled';

 const Navigation = () => {
  return (
    <Container>
      <Header>
        
        <nav>
          <Link to="/" end>
            Home
          </Link>
          <Link to="/movies">Movies</Link>
          
        </nav>
      </Header>
      {/* <Suspense fallback={<div>Loading page...</div>}>
        <Outlet />
      </Suspense> */}
    </Container>
  );
};
export default  Navigation