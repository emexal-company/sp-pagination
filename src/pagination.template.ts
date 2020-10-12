import { html } from 'lit-element';
import { classMap } from 'lit-html/directives/class-map.js';

import { Pagination } from './pagination.component';

import '@spectrum/sp-icon';
import '@spectrum/sp-textfield';

export default function template(this: Pagination) {



    var itemTemplate = [];
    if (this.explicit) {

        function reducePage() {
            if (this.value > 0)
                this.value--;
        }

        function addPage() {
            if ((this.value >= 0) && (this.value < this.maxPages))
                this.value++;
        }

        itemTemplate.push(html`
    <nav class="spectrum-Pagination spectrum-Pagination--explicit">
        <sp-button quiet @click="${reducePage}" type="action" icon="ChevronLeftMedium" class="spectrum-Pagination-prevButton"></sp-button>
        <sp-textfield name="${this.name}" width="100%" id="inputTF" value="${this.value}" class="spectrum-Pagination-input"></sp-textfield>
        <span class="spectrum-Body--secondary spectrum-Pagination-counter">of ${this.maxPages} pages</span>
        <sp-button quiet @click="${addPage}" type="action" icon="ChevronRightMedium" class="spectrum-Pagination-nextButton"></sp-button>
    </nav>
  `);
    }

    if (this.page) {
        itemTemplate.push(html` 
        <nav class="spectrum-Pagination spectrum-Pagination--listing">
            <a href="#""><sp-button type="primary" quiet label="Pre"></sp-buttongroup></a>
                <a ><sp-button type="action" @click="" quiet label="1"></sp-button></a>
                <a ><sp-button type="action" selected @click="" quiet label="2"></sp-button></a>
                <a ><sp-button type="action" @click="" quiet label="3"></sp-button></a>
                <a ><sp-button type="action" @click="" quiet label="4"></sp-button></a>
                <a ><sp-button type="action" @click="" quiet label="5"></sp-button></a>
                <a><sp-button type="action"  @click="" quiet label="6"></sp-button></a>
                <a ><sp-button type="action" quiet label="..."></sp-button></a>
                <a href="#"><sp-button type="action" @click="" quiet label="${this.maxPages}"></sp-button></a>                
            <a ><sp-button type="primary" quiet label="Next"></sp-buttongroup></a>        
        </nav>
    `);
    }

    return html`
    ${itemTemplate}
`;
}