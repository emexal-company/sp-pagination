import { __decorate, __metadata } from "tslib";
import { customElement, property } from 'lit-element';
import { Base } from '@spectrum/sp-base';
import paginationStyles from './pagination.styles';
import template from './pagination.template';
let Pagination = class Pagination extends Base {
    constructor() {
        super(...arguments);
        this.name = '';
        this.value = 0;
        this.maxPages = '';
        this.linkLeft = '';
        this.linkRight = '';
        this.explicit = false;
        this.page = false;
    }
    render() {
        return template.call(this);
    }
};
Pagination.componentStyles = [paginationStyles];
__decorate([
    property({ type: String }),
    __metadata("design:type", String)
], Pagination.prototype, "name", void 0);
__decorate([
    property({ type: Number }),
    __metadata("design:type", Number)
], Pagination.prototype, "value", void 0);
__decorate([
    property({ type: String }),
    __metadata("design:type", String)
], Pagination.prototype, "maxPages", void 0);
__decorate([
    property({ type: String }),
    __metadata("design:type", String)
], Pagination.prototype, "linkLeft", void 0);
__decorate([
    property({ type: String }),
    __metadata("design:type", String)
], Pagination.prototype, "linkRight", void 0);
__decorate([
    property({ type: Boolean }),
    __metadata("design:type", Boolean)
], Pagination.prototype, "explicit", void 0);
__decorate([
    property({ type: Boolean }),
    __metadata("design:type", Boolean)
], Pagination.prototype, "page", void 0);
Pagination = __decorate([
    customElement('sp-pagination')
], Pagination);
export { Pagination };
//# sourceMappingURL=pagination.component.js.map