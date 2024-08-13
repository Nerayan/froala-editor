import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'froala';
  editorContent: string = '';
  froalaEditorOptions: Object = {
    pluginsEnabled: ['align', 'charCounter', 'codeBeautifier', 'codeView', 'colors', 'draggable', 'emoticons', 'entities', 'fontSize', 'fullscreen', 'image', 'imageManager', 'inlineStyle', 'lineBreaker', 'link', 'lists', 'paragraphFormat', 'paragraphStyle', 'quote', 'save', 'table', 'url', 'specialCharacters', 'video', 'embedly'],
    toolbarButtons: ['undo', 'redo', 'paragraphFormat', 'paragraphStyle', 'backgroundColor', 'textColor', 'fontSize', 'bold', 'underline', 'strikeThrough', 'subscript', 'superscript', 'italic', 'specialCharacters', 'insertLink', 'align', 'formatULSimple', 'formatOLSimple', 'quote', 'insertImage', 'insertTable', 'insertVideo']
  };
}
