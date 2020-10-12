import { Base } from '@spectrum/sp-base';
export declare class Pagination extends Base {
    static componentStyles: import("lit-element").CSSResult[];
    name: string;
    value: number;
    maxPages: string;
    linkLeft: string;
    linkRight: string;
    explicit: boolean;
    page: boolean;
    protected render(): import("lit-element").TemplateResult;
}
declare global {
    interface HTMLElementTagNameMap {
        'sp-pagination': Pagination;
    }
}
