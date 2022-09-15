import { useEffect } from "react";
import { Route, Routes, useLocation } from "react-router-dom";
import Error from "./components/Error";
import Categories from "./views/Categories";
import Filter from "./views/Filter";
import Home from "./views/Home";
import SearchResults from "./views/SearchResults";
import Watch from "./views/Watch";

function App() {
  const location = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location.search, location.pathname]);

  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/watch/:type/:id" element={<Watch />} />
      <Route path="/search" element={<SearchResults />} />
      <Route path="/categories/:id/:name" element={<Categories />} />
      <Route path="/filter" element={<Filter />} />
      <Route path="*" element={<Error />} />
    </Routes>
  );
}

export default App;
