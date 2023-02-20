import Home from "./pages/Home/Home";
import Layout from "./components/Layout/Layout";
import Crypto from "./pages/crypto/Crypto";
import News from "./pages/news/News";
import Detail from "./pages/cryptoDetails/Detail";
import { Link, BrowserRouter, Routes, Route } from "react-router-dom";
import Error from "./components/Error/Error";
function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Layout>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/crypto" element={<Crypto simplified={false} />} />
            <Route path="/news" element={<News simplified={false} />} />
            <Route path="/detail/:id" element={<Detail />} />
            <Route
              path="*"
              element={
                <>
                  <div>404 Not Found</div> <br />
                  <Link to="/">
                    {" "}
                    <button color="primary"> go to home </button>
                  </Link>
                </>
              }
            />
          </Routes>
        </Layout>
      </BrowserRouter>
    </div>
  );
}

export default App;
