Array.prototype.find = function(isAMatch) {
    var matches = [];
    for (i = 0; i < this.length; i++) {
        if (isAMatch(this[i])) {
            matches.push(this[i]);
        }
    }
    return matches;
}

Array.prototype.max = function(){
    return Math.max.apply( Math, this );
};

Array.prototype.map = function(mapFunc) {
    if (this.isEmpty()) {
        return this;
    }
    else {
        return [mapFunc(this.first())].concat(
                this.rest().map(mapFunc));
    }
}

Array.prototype.first = function() {
    return this[0];
}

Array.prototype.rest = function() {
    return this.slice(1);
}

Array.prototype.isEmpty = function() {
    return this.length == 0;
}

Array.prototype.shuffle = function(){ //v1.0
	for(var j, x, i = this.length; i; j = parseInt(Math.random() * i), x = this[--i], this[i] = this[j], this[j] = x);
	return this;
};