function myEach(collection, callback) {
    if(Array.isArray(collection) === true) {
        for(let element of collection) {
            callback(element);
        }
    } else if(Array.isArray(collection) === false) {
        let values = Object.values(collection);
        for(let element of values) {
            callback(element);
        }
    }
    return collection;
}