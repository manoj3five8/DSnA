/**
 * Created by manoj on 10/5/17.
 */

'use strict';

function QuickUnion() {
    this.id = [];
}
UnionFind.prototype.initArray = function (N) {
    for(var i=0;i<N;i++){
        this.id[i]=i;
    }
};

UnionFind.prototype.root = function (index) {

    while(this.id[index]!==index){
        index = this.id[index];
    }
    return index;
};

UnionFind.prototype.connected = function (p,q) {
    return this.root(p) === this.root(q);
};

UnionFind.prototype.union = function (p,q) {
    var rootOfP = this.root(p);
    var rootOfQ = this.root(q);

    this.id[rootOfP] = rootOfQ;
};

var check = new UnionFind();

check.initArray(10);

check.union(0,1);
check.union(1,2);
check.union(3,6);
check.union(7,8);

console.log(check.id);

var isConnected = check.connected(2,1);

console.log(isConnected);