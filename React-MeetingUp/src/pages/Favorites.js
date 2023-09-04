import { useContext } from "react";
import FavoritesContext from "../store/favorites-context";
import MeetupList from "../components/meetups/MeetupList";

function FavoritesPage(props){
    const favoritesCtx = useContext(FavoritesContext);

    let content;

if(favoritesCtx.totalFavorites === 0){
    content = <p>즐겨찾기가 없습니다.</p>;
}
else{
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