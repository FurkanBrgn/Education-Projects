export default (state,action)=>{
  switch(action.type){
    case "Add_Favorite":
      const {newFavorite}=action.payload;
      const isExisted=state.favorites.find((item)=>item.id===newFavorite.id);
      if(isExisted){
        return state;
      }
      else{
        return {...state,favorites:[...state.favorites,newFavorite]};
      }
    case "Remove_Favorite":
      const {removeFavoriteId}=action.payload;
      const newfavorites=state.favorites.filter((item)=>item.id !== removeFavoriteId);
      return {...state,favorites:[...newfavorites]};
    default:
      return state;
  }
}