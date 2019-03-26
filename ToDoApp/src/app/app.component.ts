import { Component } from '@angular/core';
import { element } from '@angular/core/src/render3';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Todo Lists';
  public name: string;
  public index = 0;
  public checkTaskName = 0;
  public todos: any[] = [
    {
      taskName : 1,
      completed: false
    },
    {
      taskName : 2,
      completed: false
    },
    {
      taskName : 3,
      completed: false
    }
  ];

  // Phan thuat toan
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
 }
// ket thuc phan thuat toan


  addTodo() {
    this.todos.forEach(item => {
      if (this.name === item.taskName) {
        this.checkTaskName = 1;
      }
    });
    if(this.checkTaskName === 0) {
      this.todos.push({taskName : this.name, completed: false});
    }
    else {
      alert ('Task name was exists!');
      this.checkTaskName = 0;
    }
  }
  deleteTodo(value) {
    this.todos.forEach(item => {
      if (item.taskName === value) {
        this.todos.splice(this.index, 1);
        this.index = 0;
      }
      this.index ++;
    });
    this.index = 0;
  }
  changeCompleted(value1) {
    console.log(value1);
    this.todos.forEach(item => {
      if (item.taskName === value1) {
        item.completed = ! item.completed;
      }
    });
  }
}
