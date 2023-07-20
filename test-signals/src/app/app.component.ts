import { Component, signal } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  input = '';
  items = new Array(200).fill(0);
  title = signal<string>('test-signals');

  slides: { src: string }[] = [];
  private imgs = [
    {
      id: 1,
      imgUrl:
        'https://static-wmwm.warnermediacdn.com/styles/img_342_width/s3/2021-12/Untitled%20design%20%2821%29_2.png?itok=w_EnPK-m',
      name: 'All Elite Wrestling: Rampage',
      outlineInfo: 'New episode Friday at 10 p.m. ET on TNT',
    },
    {
      id: 2,
      imgUrl:
        'https://static-wmwm.warnermediacdn.com/styles/img_342_width/s3/2022-01/Euphoria%20dotcom.png?itok=RaX1cHh9',
      name: 'Euphoria',
      outlineInfo: 'New episode Sunday on HBO Max',
    },
    {
      id: 3,
      imgUrl:
        'https://static-wmwm.warnermediacdn.com/styles/img_342_width/s3/2022-01/The%20Righteous%20Gemstones%20dotcom.png?itok=3te-1K35',
      name: 'The Righteous Gemstones',
      outlineInfo: 'New episode Sunday at 10 p.m. ET on HBO',
    },
    {
      id: 4,
      imgUrl:
        'https://static-wmwm.warnermediacdn.com/styles/img_342_width/s3/2022-01/Untitled%20design%20%2821%29_0.png?itok=urqCy5ew',
      name: 'Somebody Somewhere',
      outlineInfo: 'New episode Sunday at 10:30 p.m. ET on HBO',
    },
    {
      id: 5,
      imgUrl:
        'https://static-wmwm.warnermediacdn.com/styles/img_342_width/s3/2022-01/AEW%20Dynamite.png?itok=sjglbj6L',
      name: 'AEW: Dynamite',
      outlineInfo: 'New episode Wednesday at 7 p.m. ET on TBS',
    },
    {
      id: 6,
      imgUrl:
        'https://static-wmwm.warnermediacdn.com/styles/img_342_width/s3/2022-01/Go%20Big%20Show%20dotcom.png?itok=KYceIV0W',
      name: 'Go-Big Show',
      outlineInfo: 'New episode Thursday at 9:30 p.m. ET on TBS',
    },
    {
      id: 7,
      imgUrl:
        'https://static-wmwm.warnermediacdn.com/styles/img_342_width/s3/2022-02/Untitled%20design%20%2821%29.png?itok=TrGjaBnI',
      name: 'About Last Night',
      outlineInfo: 'Premieres Thursday on HBO Max',
    },
    {
      id: 8,
      imgUrl:
        'https://static-wmwm.warnermediacdn.com/styles/img_342_width/s3/2022-02/The%20Girl%20Before%20dotcom.png?itok=htym4Uh9',
      name: 'The Girl Before',
      outlineInfo: 'Season 1 streaming Thursday on HBO Max',
    },
    {
      id: 9,
      imgUrl:
        'https://static-wmwm.warnermediacdn.com/styles/img_342_width/s3/2022-02/Untitled%20design%20%2821%29%20copy.png?itok=oHpGuIjU',
      name: 'KIMI',
      outlineInfo: 'Premieres Thursday on HBO Max',
    },
  ];

  ngOnInit(): void {
    //Called after the constructor, initializing input properties, and the first call to ngOnChanges.
    //Add 'implements OnInit' to the class.
    this.slides = this.imgs.map((ele) => ({ src: ele.imgUrl }));
  }

  settitle() {
    this.title.set(this.input);
  }

  changetitle() {
    this.title.set('the change');
  }
}
