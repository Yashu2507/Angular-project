import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UserInformationService {
  userRole: string = 'teacher';
  getUserUserRole(){
    return this.userRole
  }
}
