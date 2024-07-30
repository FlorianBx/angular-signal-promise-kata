import { Component, signal, WritableSignal } from '@angular/core';
import {
  tap,
  forkJoin,
  switchMap,
  finalize,
  Observable,
} from 'rxjs';
import { Cat } from '../../Models/cats';
import { CatsService } from '../../services/cats.service';

@Component({
  selector: 'app-list-of-cats',
  standalone: true,
  imports: [],
  templateUrl: './list-of-cats.component.html',
  styleUrl: './list-of-cats.component.css',
})
export class ListOfCatsComponent {
  listOfCats: WritableSignal<Cat[]> = signal([]);
  isLoading = signal(true);

  constructor(private catsService: CatsService) {}

  ngOnInit() {
    this.catsService.getCats()
      .pipe(
        tap((cats: Cat[]) => {
          this.listOfCats.set(cats);
        }),
        switchMap((cats: Cat[]) => {
          const imageLoadObservables = cats.map((cat) =>
            this.loadImage$(cat.url),
          );
          return forkJoin(imageLoadObservables);
        }),
        finalize(() => {
          this.isLoading.set(false);
        }),
      )
      .subscribe();
  }

  loadImage$(url: string): Observable<void> {
    return new Observable<void>((observer) => {
      const img = new Image();
      img.src = url;
      img.onload = () => {
        observer.next();
        observer.complete();
      };
      img.onerror = (err) => observer.error(err);
    });
  }

  // ngOnInit() {
  //   this.catsService.getCats().subscribe((cats: Cat[]) => {
  //     this.listOfCats.set(cats);
  //     this.loadAllImages(cats).then(() => {
  //       this.isLoading.set(false);
  //     });
  //   });
  // }
  //
  // loadAllImages(cats: Cat[]): Promise<void[]> {
  //   const loadImagePromises = cats.map((cat) => this.loadImage(cat.url));
  //   return Promise.all(loadImagePromises);
  // }
  //
  // loadImage(url: string): Promise<void> {
  //   return new Promise((resolve, reject) => {
  //     const img = new Image();
  //     img.src = url;
  //     img.onload = () => resolve();
  //     img.onerror = (err) => reject(err);
  //   });
  // }
}
