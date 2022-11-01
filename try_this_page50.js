const copyArrayAndObject=function (obj){
    let newObj;

    if(Array.isArray(obj)){
        newObj=[];
    }
    else{
        newObj={};
    }

    for (const key in obj){
        if(obj[key]!=null && typeof obj[key]==='object')
            newObj[key]=copyArrayAndObject(obj[key]);
        else
            newObj[key]=obj[key];
    }

    return newObj;
}

const kim = {
    nid: 3,
    arr: [1, 2, 3, { aid: 1 }, [10, 20]],
    oo: { id: 1, name: 'Hong', 
            addr: { city: 'Seoul' } },
    fn() { console.log('fn=', this.nid);  },
};

const newKim = copyArrayAndObject(kim);
newKim.oo.name = 'Kim';
newKim.arr[3].aid = 200;
console.log(kim);
console.log(newKim);

const kims = [ kim, newKim ];
const newKims = copyArrayAndObject(kims);
newKims[0].nid=80;
newKims[1].oo.id=50;
console.log(kims);
console.log(newKims);