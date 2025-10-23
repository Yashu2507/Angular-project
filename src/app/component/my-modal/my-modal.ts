import { Component } from '@angular/core';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { faEye } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-my-modal',
  imports: [FontAwesomeModule],
  templateUrl: './my-modal.html',
  styleUrl: './my-modal.css',
})
export class MyModal {
  faEye = faEye;
}
