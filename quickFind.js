/**
 * Created by manoj on 9/5/17.
 */

'use strict';

function UnionFind() {
    this.id = [];
}
UnionFind.prototype.quickFind = function (N) {
    for(var i=0;i<N;i++){
        this.id[i]=i;
    }
};

UnionFind.prototype.connected = function (p,q) {
    return this.id[p]===this.id[q];
};


UnionFind.prototype.union = function (p,q) {
  var idOfP = this.id[p];
  var idOfQ = this.id[q];

    for(var i=0;i<this.id.length;i++){
        if(this.id[i]==idOfP){
            this.id[i]=idOfQ;
        }
    }

};

var check = new UnionFind();

check.quickFind(10);

check.union(3,6);
check.union(1,2);
check.union(9,4);
// console.log(check.id);


var isConnected = check.connected(2,1);

// console.log(isConnected);