import {ExcelComponent} from '@core/ExcelComponent'

export class Formula extends ExcelComponent {
  static className = 'excel__formula'

  toHTML() {
    return `
      <div class="info">fx</div>
      <div class="input" contenteditable="contenteditable" spellcheck="false"></div>
    `
  }
}
