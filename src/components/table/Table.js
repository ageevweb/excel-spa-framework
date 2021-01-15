import {ExcelComponent} from '@core/ExcelComponent'

export class Table extends ExcelComponent {
  static className = 'excel__table'

  toHTML() {
    return `
    <div class="row">
        <div class="row-info"></div>
        <div class="row-data">
            <div class="column">A</div>
            <div class="column">B</div>
            <div class="column">C</div>
            <div class="column">D</div>
        </div>
    </div>
    <div class="row">
        <div class="row-info">1</div>
        <div class="row-data">
            <div class="cell selected" contenteditable="contenteditable">A1 </div>
            <div class="cell" contenteditable="contenteditable">B1</div>
            <div class="cell" contenteditable="contenteditable">C1</div>
        </div>
    </div>
    <div class="row">
        <div class="row-info">2</div>
        <div class="row-data">
            <div class="cell" contenteditable="contenteditable">A2</div>
            <div class="cell" contenteditable="contenteditable">B2</div>
            <div class="cell" contenteditable="contenteditable">C2</div>
        </div>
    </div>
    `
  }
}
