import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { Observable } from 'rxjs';
import { ActivatedRoute } from '@angular/router';
import { butterService } from '../../../services';
import { map, take } from 'rxjs/operators';
import { LocationStrategy, PlatformLocation, Location } from '@angular/common';
import { Router } from '@angular/router';

@Component({
  selector: 'app-blog-loans',
  templateUrl: './blog-loans.component.html',
  styleUrls: ['./blog-loans.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class BlogLoansComponent implements OnInit {
  url = "";
  pageId = "";
  catId = "";
  public posts: any[];


  constructor(protected route: ActivatedRoute, private location: Location, private router: Router) {
  }
  public year = 1999;
  protected slug$: Observable<string>;
  public post = {
    meta: null,
    data: null
  };
  ngOnInit() {
    var date = new Date();
    this.year = date.getFullYear()


    this.slug$ = this.route.paramMap
      .pipe(
        map(params => (params.get('slug')))
      );

    this.slug$.pipe(
      take(1))
      .subscribe(slug => {
        butterService.post.retrieve(slug)
          .then((res) => {
            this.post = res.data;
            console.log(res.data);
          }).catch((res) => {

          });
      });


  }

  ngAfterViewInit() {
    (function () { // DON'T EDIT BELOW THIS LINE
      var d = document, s = d.createElement('script');
      s.src = 'https://creditkitchen.disqus.com/embed.js';
      s.setAttribute('data-timestamp', (new Date()).toString());
      (d.head || d.body).appendChild(s);
    })();
  }


  goToArticle(slug) {
    console.log(slug)
    if (slug) {
      this.router.navigate(['/blog/', slug]);
    }
  }
}
