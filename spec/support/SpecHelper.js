Array.prototype.find_all = function(isAMatch) {
    var matches = [];
    for (i = 0; i < this.length; i++) {
        if (isAMatch(this[i])) {
            matches.push(this[i]);
        }
    }
    return matches;
}

Array.prototype.find = function(isAMatch) {
    var matches = [];
    for (i = 0; i < this.length; i++) {
        if (isAMatch(this[i])) {
            matches.push(this[i]);
        }
    }
    return matches.first();
}

Array.prototype.has_any = function(isAMatch) {
    var matches = [];
    for (i = 0; i < this.length; i++) {
        if (isAMatch(this[i])) {
            matches.push(this[i]);
        }
    }
    return matches.length >= 1 ? true :false
}


Array.prototype.max = function(){
    return Math.max.apply( Math, this );
};

Array.prototype.map = function(mapFunc) {
    if (this.is_empty()) {
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

Array.prototype.is_empty = function() {
    return this.length == 0;
}

Array.prototype.shuffle = function(){ //v1.0
	for(var j, x, i = this.length; i; j = parseInt(Math.random() * i), x = this[--i], this[i] = this[j], this[j] = x);
	return this;
};

Array.prototype.fold_recursive = function(combineFunc, base) {
    if (this.is_empty()) {      // I added is_empty, first, and rest, as above
        return base;
    }
    else {
        return combineFunc(
            this.first(),
            this.rest().fold_recursive(combineFunc, base));
    }
}

function add(a, b) { return a + b; }  // A handy adding function

Array.prototype.sum_recursive = function() {
    return this.fold_recursive(add, 0);
}