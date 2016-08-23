(function(){
  'use strict'
  function TodoController(){
    var self = this;

    self.newTodo = '';
    self.list = [{
      title:'Primera tarea',
      completed: false
    },{
      title:'Segunda tarea',
      completed: false
    },{
      title:'Tercera tarea',
      completed: false
    }];
    self.addTodo = addTodo;
    self.removeTodo = removeTodo;

    function addTodo (){
      self.list.unshift({
        title:self.newTodo,
        completed:false
      });
      self.newTodo = '';
    }

    function removeTodo(item, index){
      self.list.splice(index, 1);
    }


  }


  angular
    .module('app')
    .controller('TodoController', TodoController)
})();
