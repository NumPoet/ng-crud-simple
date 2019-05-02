import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title: string = 'Angular crud';

  msg:string = '';

  employees = [
    {'name': 'Sergio', position: 'Software Developer', email: 'email@EmailValidator.com'},
    {'name': 'Joan', position: 'Project Manager', email: 'email@EmailValidator.com'},
    {'name': 'Crisostomo', position: 'Designer', email: 'email@EmailValidator.com'}
  ];

  model:any = {};
  model2:any = {};
  hideUpdate:boolean = true;
  addEmployee(): void{
    this.employees.push(this.model);
    this.msg = 'Campo agregado exitosamente';
    
  }

  deleteEmployee(i): void{
    // alert("Seguro de querer eliminar Ususario???????");
    var answer =confirm('¿Estas seguro de quere eliminar ususario??');
    if(answer){
      this.employees.splice(i, 1);
    }
    this.msg = 'Campo Eliminado exitosamente';

  }

  myValue;
  editEmployee(i): void{
    this.hideUpdate = false;
    this.model2.name = this.employees[i].name;
    this.model2.position = this.employees[i].position;
    this.model2.email = this.employees[i].email;
    this.myValue = i;
  }

  updateEmployee(): void{
    // console.log(this.model2);
    let i = this.myValue;
    for(let j = 0; j < this.employees.length; j++){
      if(i == j) {
        this.employees[i] = this.model2;
        this.msg = 'Campo actualizado exitosamente';
        this.model2 = {}; 
      }
    }
  }

  closeAlert(){

    this.msg = '';
  }

}
