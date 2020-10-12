import { PageViewElement } from '@components/page-view-element';
import { customElement, query } from 'lit-element';

import styles from './demo-pagination.styles';
import template from './demo-pagination.template';

// These are the shared styles needed by this element.
import sharedStyles from '@components/shared.styles';
import { Pagination } from '@spectrum/sp-pagination';
import { Spectrum } from '@spectrum/config/spectrum-config';

import Prism from "prismjs";

@customElement('demo-pagination')
export class DemoPagination extends PageViewElement {

  public static styles = [sharedStyles, styles];

  protected render() {
    return template.call(this);
  }

  protected firstUpdated() {
    Prism.highlightAllUnder(this.shadowRoot);
  }

}

declare global {
  interface HTMLElementTagNameMap {
    'demo-pagination': DemoPagination;
  }
}
