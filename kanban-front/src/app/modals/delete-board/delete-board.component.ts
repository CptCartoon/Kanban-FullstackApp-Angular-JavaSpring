import {
  Component,
  EventEmitter,
  Input,
  OnChanges,
  OnInit,
  Output,
  SimpleChanges,
} from '@angular/core';
import { ModalComponent } from '../../shared/modal/modal.component';
import { Board } from '../../core/models/model';
import { BoardService } from '../../core/services/board.service';
import { ApiService } from '../../core/services/api.service';

@Component({
  selector: 'app-delete-board',
  standalone: true,
  templateUrl: './delete-board.component.html',
  styleUrl: './delete-board.component.css',
  imports: [ModalComponent],
})
export class DeleteBoardComponent {
  @Output() confrim = new EventEmitter<boolean>();
  @Input() board!: Board | undefined;
  @Input() boards!: Board[];

  constructor(private apiService: ApiService) {}

  cancelDelete() {
    this.confrim.emit();
  }

  deleteBoard(boardId: number) {
    this.apiService.deleteBoard(boardId).subscribe();
    this.cancelDelete();
  }
}
