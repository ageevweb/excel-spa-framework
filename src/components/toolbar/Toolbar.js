import {ExcelComponent} from '@core/ExcelComponent'

export class Toolbar extends ExcelComponent {
  static className = 'excel__toolbar'

  constructor($root) {
    super($root, {
      name: 'Toolbar',
      listeners: ['click']
    })
  }

  toHTML() {
    return `
      <div class="button">
        <div class="material-icons">format_align_left</div>
      </div>
      <div class="button">
        <div class="material-icons">format_align_right</div>
      </div>
      <div class="button">
        <div class="material-icons">format_align_center</div>
      </div>
      <div class="button">
        <div class="material-icons">format_bold</div>
      </div>
      <div class="button">
        <div class="material-icons">format_italic</div>
      </div>
      <div class="button">
        <div class="material-icons">format_underline</div>
      </div>
    `
  }

  onClick(e) {
    console.log(e.target)
  }
}
