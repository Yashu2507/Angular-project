import { CanActivateFn } from '@angular/router';
import { UserInformationService } from '../services/user-information-service';
import { inject } from '@angular/core';

export const teacherGuardGuard: CanActivateFn = (route, state) => {
  const userInformationService = inject(UserInformationService);

  if(userInformationService.getUserUserRole()==='teacher'){
    return true;
  }else{
    alert('You are not allowed to access this page, you are not a teacher!');
    return false;
  }
};
