import { customElement,  property } from 'lit-element';

import { Base } from '@spectrum/sp-base';

import paginationStyles from './pagination.styles';
import template from './pagination.template';

@customElement('sp-pagination')
export class Pagination extends Base {
  public static componentStyles = [paginationStyles];

  @property({ type: String }) public name: string = '';
  @property({ type: Number }) public value: number = 0;
  @property({ type: String }) public maxPages: string = '';
  @property({ type: String }) public linkLeft: string = '';
  @property({ type: String }) public linkRight: string = '';
  @property({ type: Boolean }) public explicit: boolean = false;
  @property({ type: Boolean }) public page: boolean = false;

  
  

  

  protected render() {
    return template.call(this);
  }
}

declare global {
  interface HTMLElementTagNameMap {
    'sp-pagination': Pagination;
  }
}
