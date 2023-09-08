import { createContext, useState } from "react";

/** 컴포넌트가 공유할 수 있는 데이터를 저장하는 객체 */ 
const FavoritesContext = createContext({
  // 초기값
  favorites: [],
  totalFavorites: 0, 
  // 호출할 함수 자동완성 기능
  addFavorite: (favoriteMeetup) => {},
  deleteFavorite: (favoriteId) => {},
  itemIsFavorite: (meetupId) => {}
});

// 외부객체와 상호작용하기 위해 export
export function FavoritesContextProvider(props) {
  const [userFavorites, setUserFavorites] = useState([]);

  function addFavoriteHandler(favoriteMeetup) {
    // favoriteMeetup: 즐겨찾기에 추가할 meetup
    // concat: favoriteMeetup를 추가하며 새로운 배열을 반환한다.
    // useState는 상태처리를 일정에 따라 처리한다.
    // 즉 일정에 상관없이 항상 최신의 state를 받고 싶다면
    // 기존 state를 호출하여 state를 업데이트하는 방식이 권장함

    setUserFavorites((prevUserFavorites) => {
      return prevUserFavorites.concat(favoriteMeetup);
    });
  }

  function deleteFavoriteHandler(favoriteId) {
    // favoriteId: 즐겨찾기에서 제거할 meetup의 id
    // filter: true인 요소만 남기고 false인 요소를 제거된 배열을 반환한다.
    // favoriteId === meetup.id인 요소를 제거하고 싶으므로
    // favoriteId !== meetup.id만 true가 되도록 한다.
    // meetup은 prevUserFavorites 요소 중 하나

    // prevUserFavorites는 setUserFavorites로 호출되기전의 userFavorites
    setUserFavorites((prevUserFavorites) => {
      return prevUserFavorites.filter((meetup) => meetup.id !== favoriteId);
    });
  }

  function itemIsFavoriteHandler(meetupId) {
    // meetupId: 즐겨찾기에 추가되어 있는지 확인할 meetup의 id
    // some: meetupId가 prevUserFavorites에 포함된 요소 중 하나인가?
    // some 요소 중 하나라도 함수 실행결과가 true or false가 나오면 
    // some 전체가 true false 결과를 반환한다. 
    // some를 통해 meetupId가 prevUserFavorites에 포함된 요소 중 하나인지 확인한다.
    return userFavorites.some((meetup) => meetup.id === meetupId);
  }

  const context = {
    favorites: userFavorites,
    totalFavorites: userFavorites.length,
    addFavorite: addFavoriteHandler, // 함수를 가리키는 포인터
    deleteFavorite: deleteFavoriteHandler,
    itemIsFavorite: itemIsFavoriteHandler,

  };

  // context값이 변화할 때마다 컴포넌트 모두가 업데이트 된다.
  return (
    <FavoritesContext.Provider value={context}>
      {props.children}
    </FavoritesContext.Provider>
  );
}

export default FavoritesContext;
