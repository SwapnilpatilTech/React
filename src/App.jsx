import Header from './header';
import Content from './content';
import Footer from './footer';
import "./App.css"

function App() {
  return (
    <div className="container d-flex justify-content-center align-items-center min-vh-100 bg-light">
      <div className="card w-100" style={{ maxWidth: '600px' }}>
        <Header />
        <Content />
        <Footer />
      </div>
    </div>
  );
}

export default App;
