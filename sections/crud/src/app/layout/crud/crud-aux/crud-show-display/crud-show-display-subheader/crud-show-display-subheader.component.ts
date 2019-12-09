import { Component, OnInit, Output, EventEmitter, Input } from '@angular/core';

@Component({
  selector: 'app-crud-crud-show-display-subheader',
  templateUrl: './crud-show-display-subheader.component.html',
  styleUrls: ['./crud-show-display-subheader.component.scss']
})
export class CrudShowDisplaySubheaderComponent implements OnInit {

  @Output() getActiveBack: EventEmitter<any> = new EventEmitter();
  @Output() getInactiveBack: EventEmitter<any> = new EventEmitter();
  @Output() getAllBack: EventEmitter<any> = new EventEmitter();
  @Output() gewRecordBack: EventEmitter<any> = new EventEmitter();
  @Output() showDetailBack: EventEmitter<any> = new EventEmitter();
  @Output() newRecordBack: EventEmitter<any> = new EventEmitter();
  @Output() editRecordBack: EventEmitter<any> = new EventEmitter();

  @Input() showEditButton: boolean
  @Input() showDetailButton: boolean
  showNewButton: boolean

  constructor() {
    this.showNewButton = true;
  }

  ngOnInit() {
  }


  onGetAll() { this.getAllBack.emit('getAllBack') }
  onGetActive() { this.getActiveBack.emit('getActive') }
  onGetInactive() { this.getInactiveBack.emit('getInactiveBack') }
  onNewRecord() { this.newRecordBack.emit('newRecordBack') }
  onShowDetail() { this.showDetailBack.emit('showDetailBack') }
  onNewRecordBack() { this.newRecordBack.emit('newRecordBack') }
  onEditRecord() { this.editRecordBack.emit('editRecordBack') }



}
