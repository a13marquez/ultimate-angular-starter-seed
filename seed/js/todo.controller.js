(function{
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
  app
    .module('app')
    .controller('TodoController', TodoController)
})();
