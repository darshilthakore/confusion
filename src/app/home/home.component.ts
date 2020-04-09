import { Component, OnInit, Inject } from '@angular/core';
import { Dish } from '../shared/dish';
import { Promotion } from '../shared/promotion';
import { Leader } from '../shared/leader';

import { DishService } from '../services/dish.service';
import { PromotionService } from '../services/promotion.service';
import { LeaderService } from '../services/leader.service';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  dish: Dish;
  dishErrMess: string;
  promotion: Promotion;
  promotionErrMess: string;
  leader: Leader;
  leaderErrMess: string;

  constructor(
    private dishService: DishService,
    private promotionService: PromotionService,
    private leaderService: LeaderService,
    @Inject('BaseURL') private BaseURL) { }

  ngOnInit(): void {
    this.dishService.getFeaturedDish()
      .subscribe(dish => this.dish = dish,
        disherrmess => this.dishErrMess = <any>disherrmess );

    this.promotionService.getFeaturedPromotion()
      .subscribe(promotion => this.promotion = promotion,
        promotionerrmess => this.promotionErrMess = <any>promotionerrmess );

    this.leaderService.getFeaturedLeader()
      .subscribe(leader => this.leader = leader,
        leadererrmess => this.leaderErrMess = <any>leadererrmess );
  }

}
