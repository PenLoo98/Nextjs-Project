import { useContext } from "react";
import FavoritesContext from "../../store/favorites-context";
import { Link } from "react-router-dom";
import classes from "./MainNav.module.css";

function MainNav() {
  // FavoritesContext를 사용하기 위해 useContext를 사용한다.
  const favoritesCtx = useContext(FavoritesContext);

  return (
    <header className={classes.header}>
      <div className={classes.logo}>React Meetups</div>
      <nav>
        <ul>
          <li>
            <Link to="/">All Meetups</Link>
          </li>
          <li>
            <Link to="/new-meetup">Add New Meetup</Link>
          </li>
          <li>
            <Link to="/favorites">
              My Favorites
              <span className={classes.badge}>
                {favoritesCtx.totalFavorites}
              </span>
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default MainNav;
