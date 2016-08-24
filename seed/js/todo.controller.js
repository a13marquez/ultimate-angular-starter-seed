(function(){
  'use strict'
  function TodoController(TodoService){
    var self = this;

    self.newTodo = '';
    self.list = [];
    self.addTodo = addTodo;
    self.removeTodo = removeTodo;
    self.getRemaining = getRemaining;
    self.getTodos = getTodos;
    self.updateTodo = updateTodo;
    self.toggleState = toggleState

    function addTodo (){
      if (!self.newTodo){
        return;
      }
      TodoService
        .create({
          title:self.newTodo,
          completed:false
        })
        .then(function(response){
          self.list.unshift(
            response
          );
          self.newTodo = '';
        })
    }

    function removeTodo(item, index){
      TodoService
        .remove(item)
        .then(function(response){
          self.list.splice(index, 1);

        })
    }

    function getRemaining(){
      return self.list.filter(function (item){
        return !item.completed;
      })
    }
    function getTodos(){
      TodoService
        .retrieve()
        .then(function(response){
          self.list = response;
        });
    }
    function updateTodo(item, index){
      if (!item.title) {
        self.removeTodo(item, index);
        return;
      }
      TodoService
        .update(item);
    }
    function toggleState(item){
      TodoService
        .update(item).
        then(function(){

        }, function(){
          item.completed = !item.completed;
        });
    }

    self.getTodos();
  }


  angular
    .module('app')
    .controller('TodoController', TodoController)
})();
