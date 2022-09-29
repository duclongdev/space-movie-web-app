import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { publicRoutes } from "./routers";

function App() {
  return (
    <Router>
      <Routes>
        {publicRoutes.map((router, index) => {
          const Page = router.component;
          return <Route key={index} path={router.path} element={<Page />} />;
        })}
      </Routes>
    </Router>
  );
}

export default App;
