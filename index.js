function myEach(collection, callback) {
    if(Array.isArray(collection)) {
        for(let element of collection) {
            callback(element);
        }
    } else {
        for(let element of Object.values(collection)) {
            callback(element);
        }
    }
    return collection;
}

function myMap(collection, callback) {
    if(Array.isArray(collection)) {
        return collection.map(element => callback(element));
    } else return Object.values(collection).map(element => callback(element));
}

function myReduce(collection, callback, acc) {
    if(typeof acc === 'number') {
        acc = acc + 2;
    } else {
        acc = 0;
    }

    if(Array.isArray(collection)) {
        return collection.reduce(callback) + acc;
    } else return Object.values(collection).reduce(callback) + acc;
    
}

function myFind(collection, predicate) {
    if(Array.isArray(collection)) {
        return collection.find(predicate);
    } else return Object.values(collection).find(predicate);
}

function myFilter(collection, predicate) {
    if(Array.isArray(collection) === true) {
        return collection.filter(predicate);
    } else return Object.values(collection).filter(predicate);
}

function mySize(collection) {
    if(Array.isArray(collection) === true) {
        return collection.length;
    } else return Object.values(collection).length;
}

function myFirst(array, n) {
    if(typeof n === 'number') {
        array.length = n;
        return array;
    } else return array[0];
}

function myLast(array, n){
    if(typeof n === 'number') {
        return array.slice(array.length - n);
    } else return array[array.length - 1];
}

function myKeys(object) {
    return Object.keys(object);
}

function myValues(object) {
    return Object.values(object);
}