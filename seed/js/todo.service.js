
  function TodoService($http){

    var API = '//jsonplaceholder.typicode.com/todos/'

    function create(todo){
      return $http.post(API, todo).then(function(result){
        return result.data;
      })
    }
    function retrieve(){
      return $http.get(API).then(function(result){
        return result.data.splice(0, 10)
      })
    }
    function update(todo){
      $http.put(API + todo.id).then(function(result){
        return response.data;
      });
    }
    function remove(todo){
      return $http.delete(API + todo.id).then(function(result){
        return result.data;
      });
    }
    return {
      create:create,
      retrieve:retrieve,
      update: update,
      remove:remove
    }
  }
  angular
    .module('app')
    .factory('TodoService', TodoService)
