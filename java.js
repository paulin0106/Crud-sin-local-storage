//
var app = new function() { // controla todo lo que hago//
    this.el = document.getElementById('tasks');//creo una variable el y le asigno tasks
      this.tasks = [];
     
    //esta funcion , es para obtener todo , agregar botonoes a las tareas y contador.
    this.FetchAll = function() {//dependiente del contexto y cambia de metodo en metodo, variable local//
      var data = '';
  

      if (this.tasks.length > 0) { //longitud de la variable tasks//
        for (i = 0; i < this.tasks.length; i++) {
          data += '<tr>'; //inyeccion 
          data += '<td>'+(i+1)+". " + this.tasks[i] + '</td>'; //i + 0 = 1 cada dato tiene su index, en la posicion 0 hace escribir 1. 
          data += '<td><button onclick="app.Edit(' + i + ')"  class="btn btn-warning">Edit</button></td>';//para que se vea boton editar, identificador 0, tipo botton//
          data += '<td><button onclick="app.Delete(' + i + ')"  class="btn btn-danger">Delete</button></td>';
          data += '</tr>';
        }
      }
  
      this.Count(this.tasks.length);
      return this.el.innerHTML = data; //devolver o establecer sintaxis html
    };
  
    this.Add = function () {
      el = document.getElementById('Agregar-todo');
      // Get the value
      var task = el.value;
  
      if (task) {
        // Add the new value
        this.tasks.push(task.trim());//push agregame task valor del elemento, trim evita espacios al prin y al final
        // Reset input value
        el.value = '';
        // Dislay the new list
        this.FetchAll();
      }
    };
  
    this.Edit = function (item) {
      var el = document.getElementById('edit-todo');
      // Display value in the field
      el.value = this.tasks[item];
      // Display fields
      document.getElementById('caja-editable').style.display = 'block';//referencia al index para establecer que el display se bloquee//
      self = this;//this, es dependiente del contexto en el cual se encuentra y va a ir cambiando de método en método ya que es dinámico. 
            //La técnica de dejar this guardado en self se usa para tener siempre la referencia original al objeto que disparó ese método.
  
      document.getElementById('save-edit').onsubmit = function() {
        // Get value
        var task = el.value;
  
        if (task) {
          // Edit value
          self.tasks.splice(item, 1, task.trim());
          // Display the new list
          self.FetchAll();
          // Hide fields
          CloseInput();
        }
      }
    };
  
    this.Delete = function (item) {
      // Delete the current row
      this.tasks.splice(item, 1);
      // Display the new list
      this.FetchAll();
    };
  
    this.Count = function(data) {
      var el   = document.getElementById('contador');
      var name = 'Tasks';
  
      if (data) {
          if(data ==1){ //contar las tareas
              name = 'Task'
          }
        el.innerHTML = data + ' ' + name ;
      } 
      else {
        el.innerHTML = 'No ' + name;
      }
    };
    
  }
  
  app.FetchAll();
  
  function CloseInput() {
    document.getElementById('caja-editable').style.display = 'none';//para que se cierre//
  }
  
