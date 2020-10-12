import { html } from 'lit-element';
import { DemoPagination } from './demo-pagination.component';

import '@spectrum/sp-pagination';
import '@spectrum/sp-container';
import '@spectrum/sp-rule';

export default function template(this: DemoPagination) {
  return html`
  <sp-container>
  <section>
    <sp-rule medium label="Pagination - Explicit"></sp-rule>
      <sp-demo width="350">
        <pre><sp-pagination explicit value="1" maxPages="89"></sp-pagination></pre>
      </sp-demo>
        <br>
    <sp-rule medium label="Pagination - Page"></sp-rule>
      <sp-demo width="350">
        <pre><sp-pagination page maxPages="98"></sp-pagination></pre>
      </sp-demo> 
  </section>
</sp-container>
  `;
}
