function todoApp(){
  return {
    restrict: 'E',
    controller: 'TodoController as todo',
    template: `
    <div class="todo">
      <form class="todo__form" data-ng-submit="todo.addTodo();">
        <input type="text" placeholder="Añadir nueva tarea" data-ng-model="todo.newTodo">
      </form>
      <ul class="todo__list">
        <li data-ng-repeat="item in todo.list">
          <input
            type="checkbox"
            id="todo-{{ $index }}"
            data-ng-model="item.completed"
            data-ng-click="todo.toggleState(item)"
            todo-autofocus="showEditField">
          <label class="toggle" for="todo-{{ $index }}"></label>
          <p data-ng-dblclick="showEditField = true" data-ng-hide="showEditField">
            {{item.title}}
          </p>
          <div data-ng-show="showEditField">
            <input
              type="text"
              data-ng-model="item.title"
              data-ng-blur="todo.updateTodo(item, $index); showEditField = false">
          </div>
          <a href="" data-ng-click="todo.removeTodo(item, $index)">
            &#215;
          </a>
        </li>
      </ul>
      <p class="todo__remaining">
        <span data-ng-hide="todo.getRemaining().length === 0">
          Tienes {{ todo.getRemaining().length }} de {{ todo.list.length }} tareas
        </span>
        <span data-ng-show="todo.getRemaining().length === 0">
          Eres super productivo!!!
        </span>
      </p>
    </div>
    `
  }
}

angular
.module('app')
.directive('todoApp', todoApp);
