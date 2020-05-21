import {Component, OnDestroy, OnInit} from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit, OnDestroy {
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

  constructor() {
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
  }

  ngOnDestroy(): void {
    window.removeEventListener('scroll', this.addScroll);
  }

}
