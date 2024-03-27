import { Link } from 'react-router-dom';

export const TopPage = () => {
  return (
    <>
      <h1>Top Page</h1>
      <Link to="/counter">Go To Counter Page</Link>
    </>
  );
};
