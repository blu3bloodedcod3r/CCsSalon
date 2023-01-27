


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
        return <AdminAdd />;
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