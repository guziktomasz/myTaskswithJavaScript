const A = "A";
let F;
function doStuff(B){
    console.log(B);
    var C = "C";
    let H = "H";
    if(1+1 === 3){
        var D = "D";
        H = "something else";
    }
    console.log(D);
    console.log(H);
    F="F";
}
let E = 0;
while(E<3){
    E++;
    console.log(A)
    var G = "G";
}
console.log(E);
console.log(G);
doStuff("B")
//console.log(B);
//console.log(C);
console.log(F);


