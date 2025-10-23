import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { UserService } from '../../services/userService/user-service';

@Component({
  selector: 'app-user-crud',
  imports: [FormsModule],
  templateUrl: './user-crud.html',
  styleUrl: './user-crud.css'
})
export class UserCrud {
user_api_url = 'http://localhost:3000/users';

isLoading:boolean =false;
isEdit:boolean =false;

users:any[] = [];

empObj={
  "firstName":"",
  "lastName":"",
  "email":"", 
  "gender":"",    
  "salary":null,
  "id":null
  
}
// addId=0;
// addName:String='';
// addEmail:String='';
// addPhone:Number=0;
// addUserName:String='';

resetForm(){
  this.empObj={
    "firstName":"",
    "lastName":"",
    "email":"", 
    "gender":"",    
    "salary":null,
    "id":null
  }
  this.isEdit=false;
}




constructor(private userService :UserService){
}

ngOnInit(){
  this.fetchUsers_angular();
}

fetchUsers_angular(){
  this.isLoading = true;
  this.userService.getUsers().subscribe(
    (response:any)=>{
      this.isLoading=false
      this.users = response;
      console.log(this.users)},
    (error)=>{console.log(error)}
  )
};

addUser(){

  // const addUser = {
  //   id: this.addId,
  //   name: this.addName,
  //   email: this.addEmail,
  //   phone: this.addPhone,
  //   username: this.addUserName
  // };

  this.userService.addUser(this.empObj).subscribe(
    (response)=>{
      console.log(response);
      this.users.push(response);
      this.resetForm();
    },
    (error)=>{console.log(error)}
  )
};

deleteUser(id:number){

  this.userService.deleteUser(id).subscribe(
    (response)=>{
      alert('User deleted successfully');
      this.fetchUsers_angular();
    },
    (error)=>{
      console.log(error);
    }
  )
}

editUser(user:any){
  this.empObj = {...user};
  this.isEdit =true;
}

saveUser(){
   if (!this.empObj.id) {
    alert('No user selected for update.');
    return;
  }

   this.userService.updateUser(this.empObj.id,this.empObj).subscribe(
    (response)=>{
      alert('User updated successfully');
      this.fetchUsers_angular();
      this.resetForm();
    },
    (error)=>{console.log(error)}
  )
};


}
