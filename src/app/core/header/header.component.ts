import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  // output出去一个叫toggle的EventEmitter
  // 因为不需要返回任何参数，只是知道被返回出去就行了，所以返回值可以是<void>
  @Output () toggle = new EventEmitter<void>()
  constructor() { }

  ngOnInit() {
  }

  openSidebar () {
    // 发射
    // 按钮在header组件，他不知道将会在哪里被触发，所以要发送出去，在接受的地方再触发动作
    this.toggle.emit()
  }
}
