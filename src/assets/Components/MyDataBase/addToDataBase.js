const getStoredReadList = ()=>{
    const storedListStr = localStorage.getItem('read-item');
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
        alert("Already Exist In List!")
        return;
    }
    else{
        storedList.push(id);
        const storedListStr = JSON.stringify(storedList);
        localStorage.setItem("read-item", storedListStr);
    }
}

export { addStoredReadList }