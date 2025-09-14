import { toast } from "react-toastify";

const getStoredWishList =()=>{
    const StoredWishListStr = localStorage.getItem('wish-list') || "[]";
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
        toast.warn("This Wish List Item Already In Exist!")
    }
    else{
        storedWishList.push(id);
        const StoredWishListStr = JSON.stringify(storedWishList);
        localStorage.setItem('wish-list', StoredWishListStr);
        toast.success("This Book IS Added Your Wish List")
    }
}

export { addStoredWishList,  getStoredWishList}