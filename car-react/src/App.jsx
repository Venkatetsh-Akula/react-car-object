import './App.css'; // We'll modify this CSS file to apply luxury styles
import FirstPage from './FirstPage';
import SecondPage from './SecondPage';
import ThirdPage from './ThirdPage';
import { BrowserRouter as Router, Route, Routes, Link } from "react-router-dom";

function App() {
  return (
    <Router>
      <div className="app-container">
        <nav className="navbar">
          <ul className="nav-list">
            <li>
              <Link to="/" className="nav-link">Home</Link>
            </li>
            <li>
              <Link to="/first-page" className="nav-link">First Page</Link>
            </li>
            <li>
              <Link to="/second-page" className="nav-link">Second Page</Link>
            </li>
            <li>
              <Link to="/third-page" className="nav-link">Third Page</Link>
            </li>
          </ul>
        </nav>

        <div className="content">
          <Routes>
            <Route path="/first-page" element={<FirstPage />} />
            <Route path="/second-page" element={<SecondPage />} />
            <Route path="/third-page" element={<ThirdPage />} />
          </Routes>
        </div>
      </div>
    </Router>
  );
}

export default App;
































// import './App.css';
// import FirstPage from './FirstPage';
// import SecondPage from './SecondPage';
// import ThirdPage from './ThirdPage';
// import { BrowserRouter as Router, Route, Routes, Link } from "react-router-dom";

// function App() {
//   return (
//     <Router>
//       <div>
//         <nav>
//           <ul>
//             <li>
//               <Link to="/first-page">First Page</Link>
//             </li>
//             <li>
//               <Link to="/second-page">Second Page</Link>
//             </li>
//             <li>
//               <Link to="/third-page">Third Page</Link>
//             </li>
//           </ul>
//         </nav>

//         <Routes>
//           <Route path="/first-page" element={<FirstPage />} />
//           <Route path="/second-page" element={<SecondPage />} />
//           <Route path="/third-page" element={<ThirdPage/>}/>
//         </Routes>
//       </div>
//     </Router>
//   );
// }

// export default App;