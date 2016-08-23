(function(){
  'use strict'
  function TodoController(){
    var self = this;

    self.list = [{
      title:'Primera tarea',
      completed: false
    },{
      title:'Primera tarea',
      completed: false
    },{
      title:'Primera tarea',
      completed: false
    }]
  }
  angular
    .module('app')
    .controller('TodoController', TodoController)
})();
