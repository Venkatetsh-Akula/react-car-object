import './App.css'; 
import FirstPage from './FirstPage';
import FromTo from './FromTo';
import HomePage from './HomePage';
import SecondPage from './SecondPage';
import SignUpPage from './SignUpPage';
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
          </ul>
        </nav>

        <div className="content">
          <Routes>
            <Route path="/" element={<HomePage/>} />
            <Route path="/signup" element={<SignUpPage/>}/>
            <Route path="/first-page" element={<FirstPage />} />
            <Route path="/second-page" element={<SecondPage />} />
            <Route path="/third-page" element={<ThirdPage />} />
            <Route path="/from-to" element={<FromTo/>} />
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