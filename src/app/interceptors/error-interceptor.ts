import { HttpInterceptorFn } from '@angular/common/http';
import Swal from 'sweetalert2';
import { EMPTY } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { HttpErrorResponse } from '@angular/common/http';

export const errorInterceptor: HttpInterceptorFn = (req, next) => {

   return next(req).pipe(
    catchError((error: HttpErrorResponse) => {

      let errorMessage = 'Something went wrong. Please try again.';

      if (error.status === 0 || error.status >= 500) {
        errorMessage = 'Server is unreachable or down. Try again later.';
      }

      Swal.fire({
        icon: 'error',
        title: 'Error',
        text: errorMessage,
        confirmButtonColor: '#d33',
        confirmButtonText: 'OK',
      });

      return EMPTY;
    })
  );
};
