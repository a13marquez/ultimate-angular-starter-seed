(function(){
  'use strict'
  function TodoController(){
    var self = this;

    self.list = [{
      title:'Primera tarea',
      completed: false
    },{
      title:'Segunda tarea',
      completed: false
    },{
      title:'Tercera tarea',
      completed: false
    }]
  }
  angular
    .module('app')
    .controller('TodoController', TodoController)
})();
