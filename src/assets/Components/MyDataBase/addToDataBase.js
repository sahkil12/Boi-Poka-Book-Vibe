import { toast } from "react-toastify";

const getStoredReadList = ()=>{
    const storedListStr = localStorage.getItem('read-item') || '[]';
    if(storedListStr){
        const storedList = JSON.parse(storedListStr);
        return storedList;
      }
    else{
        return [];
    }
}
const addStoredReadList = (id)=>{
    const storedList = getStoredReadList();
    if(storedList.includes(id)){
        toast.warn("Already Exist In List!")
        
    }
    else{
        storedList.push(id);
        const storedListStr = JSON.stringify(storedList);
        localStorage.setItem("read-item", storedListStr);
        toast.success("This Book IS Added Your Read Book List")
    }
}

export { addStoredReadList , getStoredReadList}