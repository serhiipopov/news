import { FC } from 'react';
import { Route, Routes } from 'react-router-dom';
import { Main, Profile, News } from './pages';

const App: FC = () => {
  return (
  <>
    <Routes>
      <Route path='/' element={<Main />} />
      <Route path='/news' element={<News />} />
      <Route path='/profile' element={<Profile />} />
    </Routes>
  </>
  );
}

export default App;
