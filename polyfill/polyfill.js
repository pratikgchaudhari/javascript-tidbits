if (!Object.groupBy) {
  	
    Object.prototype.groupBy = function (items, callbackFn) {
    
    if (typeof items === 'undefined' || items === null) {
      throw TypeError('Object.groupBy called on null or undefined');
    }

    let result = Object.create(null);

    items.forEach((item) => {
      let group = callbackFn(item);

      if (!result[group]) {
        result[group] = [];
      }

      result[group].push(item);
    });

    return result;
  }
}

