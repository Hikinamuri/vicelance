import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Provider } from 'react-redux'; // Импортируйте Provider из react-redux
import store from './store'; // Импортируйте ваш redux store

import { Layout } from "./Layout.tsx";
import { Authorization } from './pages/auth';
import { Reg } from './pages/reg';
import { Home } from './pages/home';
import { Works } from './pages/works';
import { Profile } from './pages/profile';
import { Freelancers } from './pages/freelancers';
import { Competitions} from './pages/competitions';


import './App.css';

function App() {
  return (
    <Provider store={store}>
      <Router>
        <Routes>
          <Route path="/auth" element={<Authorization />} />
          <Route path="/reg" element={<Reg />} />

          <Route path="/" element={<Layout />}>  
            <Route path="home" element={<Home />} />
            <Route path="works" element={<Works />} />
            <Route path="freelancers" element={<Freelancers />} />
            <Route path="competitions" element={<Competitions />} />
            <Route path="profile" element={<Profile />} />
          </Route>
        </Routes>
      </Router>
    </Provider>
  );
}

export default App;
