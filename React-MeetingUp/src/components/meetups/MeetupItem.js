import { useContext } from "react";
import classes from "./MeetupItem.module.css";
import Card from "../ui/Card";
import FavoritesContext from "../../store/favorites-context";

function MeetupItem(props) {
  // FavoritesContext에 접근할 수 있도록 함.
  const favoritesCtx = useContext(FavoritesContext);

  // props.id 가 즐겨찾기에 있는지 boolean타입으로 검사
  const itemIsFavorite = favoritesCtx.itemIsFavorite(props.id);

  function toggleFavoriteStatusHandler() {
    // 이미 즐겨찾기에 존재하는 경우 -> 즐겨찾기에서 삭제
    if (itemIsFavorite) {
      favoritesCtx.deleteFavorite(props.id);
    }
    // 즐겨찾기에 없는 경우 -> 즐겨찾기에 추가
    else {
      favoritesCtx.addFavorite({
        id: props.id,
        ...props,
      });
    }
  }

  return (
    <li key={props.id} className={classes.item}>
      <Card>
        <div className={classes.image}>
          <img src={props.image} alt={props.title} />
        </div>
        <div className={classes.content}>
          <h3>{props.title}</h3>
          <address>{props.title}</address>
          <p>{props.description}</p>
        </div>
        <div className={classes.actions}>
          <button onClick={toggleFavoriteStatusHandler}>
            {itemIsFavorite ? "Remove from Favorites" : "To Favorites"}
          </button>
        </div>
      </Card>
    </li>
  );
}

export default MeetupItem;
