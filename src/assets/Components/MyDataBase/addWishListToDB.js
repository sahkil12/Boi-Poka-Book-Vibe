const getStoredWishList =()=>{
    const StoredWishListStr = localStorage.getItem('wish-list');
    if(StoredWishListStr){
        const storedWishList = JSON.parse(StoredWishListStr)
        return storedWishList;
    }
    else{
        return [];
    }
}

const addStoredWishList = (id) =>{
    const storedWishList = getStoredWishList();
    if(storedWishList.includes(id)){
        alert("This Wish List Item Already In Exist!")
        return;
    }
    else{
        storedWishList.push(id);
        const StoredWishListStr = JSON.stringify(storedWishList);
        localStorage.setItem('wish-list', StoredWishListStr);
    }
}

export { addStoredWishList }