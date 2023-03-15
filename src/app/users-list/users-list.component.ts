import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-users-list',
  templateUrl: './users-list.component.html',
  styleUrls: ['./users-list.component.scss']
})
export class UsersListComponent implements OnInit {
  public newName!: string;
  public newPass!: string;
  public newEmail!: string;
  public editStatus = false;
  public userIndex!: number;
  public arrUsers: any[] = [];

  constructor() { }

  ngOnInit(): void {
  }

  addUser(): void {
    let obj = {
      name: this.newName,
      password: this.newPass,
      email: this.newEmail
    }

    if(this.newName.trim().length > 0 && this.newPass.trim().length > 0 && this.newEmail.trim().length > 0) {
      this.arrUsers.push(obj);
      this.newName = '';
      this.newPass = '';
      this.newEmail = '';
    }
  }

  deleteUser(index: number): void {
    this.arrUsers.splice(index, 1);
  }

  editUser(index: number): void {
    this.newName = this.arrUsers[index].name;
    this.newPass = this.arrUsers[index].password;
    this.newEmail = this.arrUsers[index].email;
    this.userIndex = index;
    this.editStatus = true;
  }

  saveEditUser(): void {
    if(this.newName.trim().length > 0 && this.newPass.trim().length > 0 && this.newEmail.trim().length > 0) {
      this.arrUsers[this.userIndex].name = this.newName;
      this.arrUsers[this.userIndex].password = this.newPass;
      this.arrUsers[this.userIndex].email = this.newEmail;
      this.newName = '';
      this.newPass = '';
      this.newEmail = '';
      this.editStatus = false;
    }
  }

}
