(function (angular, undefined) {
  angular.module('async', []).filter('async', function () {
    var promiseValues = new WeakMap()
    return function (promise, loadingMessage) {
      if (!promiseValues.has(promise)) {
        promiseValues.set(promise, undefined)
        promise.then(function (value) {
          promiseValues.set(promise, value)
        })
        return loadingMessage;
      } else {
        return promiseValues.get(promise) || loadingMessage
      }
    }
  })
  if (typeof module === 'object' && module.exports) {
    module.exports = 'async'
  } else if (typeof exports === 'object') {
    exports['default'] = 'async'
  }
})(typeof require === 'function' ? require('angular') : angular)