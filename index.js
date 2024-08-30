function getRandCompChoice(){
    let a=Math.random();
    let p="rock";
    let q="paper"
    let r="scissors"

    a=a*9;
    if(a<3){
        return p;
    }
    if(a>3 && a<6){
        return q;

    }
    if(a>6){
        return r
    }

}
console.log(getRandCompChoice());