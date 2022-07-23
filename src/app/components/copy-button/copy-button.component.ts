import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-copy-button',
  templateUrl: './copy-button.component.html',
  styleUrls: ['./copy-button.component.scss'],
})
export class CopyButtonComponent implements OnInit {
  value: string = '';
  constructor() {}

  ngOnInit(): void {}

  copyText(): void {
    navigator.clipboard.writeText(this.value);
    alert('Copied the text: ' + this.value);
  }
}
