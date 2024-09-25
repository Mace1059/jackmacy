import { Outlet } from 'react-router-dom';
import NavBar from '../components/navbar';
import Footer from '../components/footer';

function Template() {
  return (
    <div>
      <NavBar/>
      <Outlet />
      <Footer/>
    </div>
  );
}

export default Template