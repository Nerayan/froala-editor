import { Component } from '@angular/core';
import * as Prism from 'prismjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'froala';
  editorContent: string = '';
  froalaEditorOptions: Object = {
    pluginsEnabled: [
      'align',
      'charCounter',
      'codeBeautifier',
      'codeView',
      'colors',
      'draggable',
      'emoticons',
      'entities',
      'fontSize',
      'fullscreen',
      'image',
      'imageManager',
      'inlineStyle',
      'lineBreaker',
      'link',
      'lists',
      'listsAdvanced',
      'paragraphFormat',
      'paragraphStyle',
      'quote',
      'save',
      'table',
      'url',
      'specialCharacters',
      'video',
      'embedly',
      'tableResize',
    ],
    toolbarButtons: [
      'undo',
      'redo',
      'paragraphFormat',
      'paragraphStyle',
      'backgroundColor',
      'textColor',
      'fontSize',
      'bold',
      'underline',
      'strikeThrough',
      'subscript',
      'superscript',
      'italic',
      'clearFormatting',
      'specialCharacters',
      'insertLink',
      'align',
      'formatOLSimple',
      'formatUL',
      'quote',
      'selectAll',
      'html',
      'insertImage',
      'insertTable',
      'insertVideo',
      'codeBlock',
    ],
    codeBeautifierOptions: {
      end_with_newline: true,
      indent_size: 2,
      indent_char: ' ',
      preserve_newlines: true,
      max_preserve_newlines: 10,
    },
    codeLanguages: [
      { code: 'html', name: 'HTML' },
      { code: 'javascript', name: 'JavaScript' },
      { code: 'typescript', name: 'TypeScript' },
      { code: 'css', name: 'CSS' },
      { code: 'java', name: 'Java' },
      // додай інші мови
    ],
    colorsBackground:[
      '#FFFFFF','#000000','#86BC25','#26890D','#007CB0','#0df200','#33f0ff',
      '#DA291C','#ED8B00','#FFCD00','#E3E48D','#C4D600','#009A44','#2C5234',
      '#A0DCFF','#62B5E5','#00A3E0','#0076A8','#005587','#012169','#041E42',
      '#D0D0CE','#BBBCBC','#A7A8AA','#97999B','#75787B','#63666A','#53565A',
      'REMOVE'
    ],
    colorsText:[
      '#FFFFFF','#000000','#86BC25','#26890D','#007CB0','#0df200','#33f0ff',
      '#DA291C','#ED8B00','#FFCD00','#E3E48D','#C4D600','#009A44','#2C5234',
      '#A0DCFF','#62B5E5','#00A3E0','#0076A8','#005587','#012169','#041E42',
      '#D0D0CE','#BBBCBC','#A7A8AA','#97999B','#75787B','#63666A','#53565A',
      'REMOVE'
    ],
    typingTimer: 1000,
    listOptions: {
      level1: '•',
      level2: '-',
    },
    tableResize: true,
    events: {
      'codeView.update': function () {
        Prism.highlightAll();
      },
      'table.inserted': function (table: any) {
        const caption = table.createCaption();
        caption.innerText = 'Enter table caption';
      },
    },
  };
}
