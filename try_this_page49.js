const copyObjectDeep=function (obj) {
    if(Array.isArray(obj)){
        return copyArray(obj);
    } 
    else{
        const newObj={};
        for (const key in obj){
            if(obj[key]!=null && typeof obj[key]==='object'){
                if(Array.isArray(obj[key])){
                    newObj[key]=copyArrayDeep(obj[key]);
                }
                else{
                    newObj[key]=copyObjectDeep(obj[key]);
                }
            }
            else{
                newObj[key]=obj[key];
            }
        }
        //const newObj=JSON.parse(JSON.stringify(obj));
        return newObj;
    }
}

const copyArrayDeep=function (arr) {
    if(Array.isArray(arr)){        
        const newArr=[];
        for (const key in arr){
            if(arr[key]!=null && typeof arr[key]==='object'){
                if(Array.isArray(arr[key])){
                    newArr[key]=copyArrayDeep(arr[key]);
                }
                else{
                    newArr[key]=copyObjectDeep(arr[key]);
                }
            }
            else{
                newArr[key]=arr[key];
            }
        }
        return newArr;
    } 
    else{
        return copyObjectDeep(obj);
    }
}

const kim = {
    nid: 3,
    addr: 'Pusan',
    arr: [1, 2, 3, { aid: 1 }, [10, 20]],
    oo: { id: 1, name: 'Hong', 
          addr: { city: 'Seoul' } },
};
  
const newKim = copyObjectDeep(kim);
newKim.addr = 'Daegu';
newKim.oo.name = 'Kim';
newKim.arr[0] = 100;
newKim.arr[3].aid = 200;
newKim.arr[4][1] = 300;
newKim.oo.addr.city = 'Daejeon';
console.log(kim);
console.log(newKim);