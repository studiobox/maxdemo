import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-sticker',
  templateUrl: './sticker.component.html',
  styleUrls: ['./sticker.component.css']
})
export class StickerComponent implements OnInit {

  @Input() title?: string;
  @Input() link?: string;
  @Input() icon?: string;
  @Input() count?: number;
  @Input() helpText: string;
  @Input() background: string;

  constructor() { }

  ngOnInit() {
  }

}
