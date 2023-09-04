import { Route, Routes } from "react-router-dom";

import AllMeetupsPage from "./pages/AllMeetups";
import NewMeetupPage from "./pages/NewMeetup";
import FavoritesPage from "./pages/Favorites";
import Layout from "./components/layout/Layout";
import { FavoritesContextProvider } from "./store/favorites-context";

function App() {
  return (
    // FavoritesContextProvider 컴포넌트로 감싸서 모든 컴포넌트에서 FavoritesContext를 사용할 수 있도록 한다.
    <FavoritesContextProvider>
      <Layout>
        <Routes>
          <Route path="/" element={<AllMeetupsPage />} />
          <Route path="/new-meetup" element={<NewMeetupPage />} />
          <Route path="/favorites" element={<FavoritesPage />} />
        </Routes>
      </Layout>
    </FavoritesContextProvider>
  );
}

export default App;
