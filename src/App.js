import DefaultLayout from "./layouts/DefaultLayout/DefaultLayout.js";
import {BrowserRouter, Routes, Route} from 'react-router-dom';
import { publicRoutes } from "./routes/routes.js";

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Routes>
          {publicRoutes.map((route, index) =>{
            const Layout = route.layout || DefaultLayout ;
            return <Route key={index} path={route.path} 
            element=
            {
              <Layout>
                <route.component/>
              </Layout>
            } />;
          })}
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;