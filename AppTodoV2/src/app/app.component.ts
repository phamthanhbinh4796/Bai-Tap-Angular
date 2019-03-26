import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Todo } from './model/todo.class';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  public condition= true;
  title = 'AppTodo';
  public todos: Todo[] = [];
  public todo: Todo;
  onHandleText($event) {
    this.todos.push(
      {
        id: new Date().getTime(),
        name: $event,
        isComplete: false
      }
    );
    $event = '';
  }
  onHandleComplete($event){
    this.todos.forEach(element => {
      if(element.id == $event){
        element.isComplete = !element.isComplete;
      }
    });
  }
  onHandleDelete($event){
    this.todos = this.todos.filter(data => {
      return data.id != $event;
    });
  }
  public numberOfvalue: number; // biến thể hiện độ dài 1 cạnh của ma trận
  public result = 1; // biến giá trị tăng dần từ 1 đến numberOfValue bình phương
  public arrayNum = 0; // biến thể hiện pham tu dau tien của ma tran
  public matrix: any[] = []; // Mảng ma trận tổng
  public item: Number[] = []; // Mảng con của ma trận
  generateSpiralMatrix(value: number): Number[][] {
    this.result = 1;
    this.arrayNum = 0;
    this.matrix = [];
    this.item = [];
    while (this.result <= value * value) {
      this.item.push(this.result); // Đẩy các giá trị từ 1 đến (value * value) vào mảng item
      if (this.result % value === 0) {
        this.matrix.push(this.item); // Đẩy mảng item vào mảng ma trận tổng
        this.item = [];
      }
      this.result ++;
    }
    this.result = 1;

    this.numberOfvalue = value;
    while (this.result <= value * value) { // chạy ma trận theo chiều kim đồng hồ
      for (let i = this.arrayNum; i < this.numberOfvalue ; i++) { // chạy ma trận từ trái sang phải
        this.matrix[this.arrayNum][i] = this.result;
        this.result ++;
      }
      for (let i = this.arrayNum + 1; i < this.numberOfvalue ; i++) { // chạy ma trận từ trên xuống dưới
        this.matrix[i][this.numberOfvalue - 1] = this.result;
        this.result ++;
      }
      for (let i = this.numberOfvalue - 2; i >= this.arrayNum ; i--) { // chạy ma trận từ phải qua trái
        this.matrix[this.numberOfvalue - 1][i] = this.result;
        this.result ++;
      }
      for (let i = this.numberOfvalue - 2; i >= this.arrayNum + 1; i-- ) { //chạy ma trận từ dưới lên trên
        this.matrix[i][this.arrayNum] = this.result;
        this.result ++;
      }
      this.numberOfvalue --; // giảm cạnh của ma trận đi 1
      this.arrayNum ++; // tăng biến thể hiện phần tử đầu tiên của ma trận lên 1
    }
    return this.matrix;


    // Create new attribute directive
    
 }
}
