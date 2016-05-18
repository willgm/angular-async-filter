'use strict';

describe('asyncFilter', function () {

  beforeEach(module('async'));

  it('should return undefined for a not resolved promise without loading message', inject(function (asyncFilter, $q) {
    var promise = $q.defer().promise;
    expect(asyncFilter(promise)).toBeUndefined();
  }));

  it('should return the given loading message for a not resolved promise', inject(function (asyncFilter, $q) {
    var message = "loading", promise = $q.defer().promise;
    expect(asyncFilter(promise, message)).toBe(message);
  }));

  it('should return the given loading message for a not resolved promise called more then once', inject(function (asyncFilter, $q, $rootScope) {
    var message = "loading", promise = $q.defer().promise;
    asyncFilter(promise, message);
    $rootScope.$apply();
    expect(asyncFilter(promise, message)).toBe(message);
  }));

  it('should return the value of resolved promise', inject(function (asyncFilter, $q, $rootScope) {
    var result = { a: 1}, promise = $q.resolve(result);
    asyncFilter(promise);
    $rootScope.$apply();
    expect(asyncFilter(promise)).toBe(result);
  }));

});
