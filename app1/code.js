var app = angular.module('todoApp', [])
/*
app.controller('TodoListController', function() {
        var todoList = this;
        todoList.todos = [
          {text:'learn AngularJS', done:true},
          {text:'build an AngularJS app', done:false}];

        todoList.addTodo = function() {
          todoList.todos.push({text:todoList.todoText, done:false});
          todoList.todoText = '';
        };

        todoList.remaining = function() {
          var count = 0;
          angular.forEach(todoList.todos, function(todo) {
            count += todo.done ? 0 : 1;
          });
          return count;
        };

        todoList.archive = function() {
          var oldTodos = todoList.todos;
          todoList.todos = [];
          angular.forEach(oldTodos, function(todo) {
            if (!todo.done) todoList.todos.push(todo);
          });
        };
      });

app.controller('Example', function() {
          var main = this;
          main.jTable = [ {name:'learn AngularJS', phone: '4444'},
                         {name:'build an AngularJS app', phone : '22222'}];

});
*/

app.controller('mainCtrl', function($scope) {
     console.log('main')

    $scope.Send2Me = function() {
       $scope.$broadcast('myCustomEvent', '!!!! Broadcast it works! !!!');
    }

});


app.controller('Example2', function($scope,$rootScope) {
console.log('init Example2')

      $scope.jTable = [
                    {name:'Example2', phone: '4444'},
                    {name:'build an AngularJS app', phone : '22222'}
                  ];

       $scope.$on('myCustomEvent', function (event, data) {
                  //  $scope.jeden=data; // 'Some data'
                    console.log('Cos przyslo')
                    console.log(data)
       });
      // $rootScope.sharedata = 'sharedata is ok!';

});



app.controller('Example1', function($scope) {
  console.log('init Example1')
  $scope.jTable = [ {name:'learn AngularJS', phone: '4444'},
                 {name:'build an AngularJS app', phone : '22222'}];
  $scope.reader='default'
//  $scope.reader
  $scope.sharedata = 'share data'
});
