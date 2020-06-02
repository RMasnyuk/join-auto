import {Component, OnInit} from '@angular/core';
import {AuthService} from './services/auth.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'join-auto';

  constructor(private authService: AuthService) {
  }

  ngOnInit() {
    if(this.authService.isAuthenticated()) {
      this.authService.getOwnProfileInfo().subscribe((res: any) => {
        this.authService.setCredentials(res._id);
      })
    }
  }
}
