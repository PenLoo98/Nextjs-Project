import { useContext } from "react";
import FavoritesContext from "../store/favorites-context";
import MeetupList from "../components/meetups/MeetupList";

function FavoritesPage(props) {
  // FavoritesContext에 접근할 객체를 생성
  const favoritesCtx = useContext(FavoritesContext);

  let content;

  // 즐겨찾기에 추가된 항목이 없을 경우
  if (favoritesCtx.totalFavorites === 0) {
    content = <p>즐겨찾기가 없습니다.</p>;
  }
  // 즐겨찾기에 추가된 항목이 있을 경우
  else {
    content = <MeetupList meetups={favoritesCtx.favorites} />;
  }

  return (
    <section>
      <h1>My Favorites</h1>
      {content}
    </section>
  );
}

export default FavoritesPage;
