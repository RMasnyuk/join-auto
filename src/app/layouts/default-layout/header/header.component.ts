import {Component, OnDestroy, OnInit} from '@angular/core';
import {AuthService} from '../../../services/auth.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit, OnDestroy {
  isAuth = false;
  public isScrolledBottom = false;
  public scrolledPixels = 0;
  public actions = [
    {
      title: 'Купити авто',
      linkTo: '/vehicle-list'
    },
    {
      title: 'Продати авто',
      linkTo: '/post-sell'
    },
    {
      title: 'Замовити авто',
      linkTo: '/post-order'
    }
  ];

  public isMenuActive = false;

  constructor(public authService: AuthService, private router: Router) {
  }

  openMenu(): void {
    this.isMenuActive = !this.isMenuActive;
  }

  addScroll() {
    if ((window.scrollY || window.pageYOffset || document.documentElement.scrollTo) > this.scrolledPixels) {
      this.isScrolledBottom = true;
      this.scrolledPixels = pageYOffset;
    } else {
      this.isScrolledBottom = false;
      this.scrolledPixels = pageYOffset;
    }
  }

  ngOnInit() {
    this.addScroll = this.addScroll.bind(this);
    window.addEventListener('scroll', this.addScroll);
    this.isAuth = this.authService.isAuthenticated();
  }

  ngOnDestroy(): void {
    window.removeEventListener('scroll', this.addScroll);
  }

  logout() {
    this.authService.logout();
    this.router.navigate(['/login']);

  }
}
