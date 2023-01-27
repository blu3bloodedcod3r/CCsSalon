import Header from './header';
import Admin from '../pages/admin';
import Book from '../pages/book';
import Home from '../pages/home';
import Login from '../pages/login';
import ModifyServices from '../pages/modifyServices';
import SignUp from '../pages/signup';
import User from '../pages/user';


export default function Container() {
    const [currentPage, setCurrentPage] = useState('About');
  
    const renderPage = () => {
      if (currentPage === 'Home') {
        return <Home />;
      }
      if (currentPage === 'Login') {
        return <Login />;
      }
      if (currentPage === 'SignUp') {
        return <SignUp />;
      }
      if (currentPage === 'Book') {
        return <Book />;
      }
      if (currentPage === 'Admin') {
        return <Admin />;
      }
      if (currentPage === 'AdminAdd') {
        return <ModifyServices />;
      }
      return <User />;
    };
  
    const handlePageChange = (page) => setCurrentPage(page);
  
    return (
      <div>
       
        <Header />
        
        <Nav currentPage={currentPage} handlePageChange={handlePageChange} />
       
        {renderPage()}
       
      </div>
    );
  }