const copyObject=function (obj) {
    const newObj={};
    for (const key in obj){
        newObj[key]=obj[key];
    }
    return newObj;
}

const kim = {nid: 3, nm: 'Hong', addr: 'Pusan'};
const newKim = copyObject(kim);
newKim.addr = 'Daegu';
console.log(kim);
console.log(newKim);