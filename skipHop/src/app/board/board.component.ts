import { Component, OnInit } from '@angular/core';
import { CellStatus} from "./cellStatus";

@Component({
  selector: 'app-board',
  templateUrl: './board.component.html',
  styleUrls: ['./board.component.css']
})
export class BoardComponent implements OnInit {
  columns: number;
  rows: number;
  grid: CellStatus[][] = [];
  constructor() { }

  ngOnInit() {
    this.columns = 5;
    this.rows = 5;
    for(let i = 0 ; i < this.columns ; i++){
      this.grid[i] = [];
      for(let j = 0 ; j < this.rows ; j++){
        if(i == 0 && j == 0){
          this.grid[i][j] = CellStatus.token;
        }else if (i == this.columns-1 && j == this.rows-1){
          this.grid[i][j] = CellStatus.opponentToken;
        }else if (i == Math.floor(this.columns/2) && j == Math.floor(this.rows/2)){
          this.grid[i][j] = CellStatus.star;
        }else if (i == this.columns-1 && j == 0){
          this.grid[i][j] = CellStatus.star;
        }else if (j == this.rows-1 && i == 0){
          this.grid[i][j] = CellStatus.star;
        }else{
          this.grid[i][j] = CellStatus.emptyBlock;
        }
      }
    }
  }

  formatCell(cell:CellStatus){
    var resultStyles = "";
    debugger;
    if(cell == CellStatus.star){
      resultStyles += 'starCell ';
    }
    if(cell == CellStatus.token){
      resultStyles += 'tokenCell ';
    }
    if(cell == CellStatus.opponentToken){
      resultStyles += 'opponentCell ';
    }
    return resultStyles += 'boardCell';
  }
}
