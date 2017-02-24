import {
    Component, Input, ElementRef, forwardRef, Output, EventEmitter, ChangeDetectionStrategy,
    ViewContainerRef, ViewChild, ComponentRef, ComponentFactoryResolver, ChangeDetectorRef
} from "@angular/core";
import {NG_VALUE_ACCESSOR, ControlValueAccessor} from "@angular/forms";
import {noop} from "../../../lib/utils.lib";
import {DropDownMenuComponent} from "./dropdown-menu.component";
import {ComponentBase} from "../../../components/common/component-base";

@Component({
    selector: "ct-dropdown-button",
    changeDetection: ChangeDetectionStrategy.OnPush,
    providers: [
        {provide: NG_VALUE_ACCESSOR, useExisting: forwardRef(() => DropDownButtonComponent), multi: true}
    ],
    template: `
        <div class="btn-group dropdown" [class.open]="toggle" (click)="showMenu(!toggle)">

            <button #button class="btn btn-secondary dropdown-toggle" type="button">
                {{selected?.caption}}
            </button>

        </div>
    `
})
export class DropDownButtonComponent extends ComponentBase implements ControlValueAccessor {

    @Input()
    public dropDownOptions: { value, caption, description }[] = [];

    private selected: { value, caption, description } = null;

    @Input('value') set value(value: string) {
        this.externalSelect(value);
    }

    @Output()
    public change = new EventEmitter();

    @ViewChild('button', {read: ViewContainerRef}) button;

    private toggle = false;

    private el: Element;

    private dropDownList: ComponentRef<DropDownMenuComponent>;

    constructor(el: ElementRef, private resolver: ComponentFactoryResolver, private cdr: ChangeDetectorRef) {
        super();
        this.el = el.nativeElement;
    }

    writeValue(value: string): void {
        this.externalSelect(value);
    }

    /**
     * Selects option in drop down list when value is changed externally using [value], [ngModel], [formControl] bindings
     */
    private externalSelect(value: string) {
        this.selected = this.dropDownOptions.find(item => item.value === value) || this.dropDownOptions[0];
    }

    /**
     * Selects item
     */
    private select(item) {
        // Avoid selecting if its already selected
        if (this.selected && item && this.selected !== item) {
            this.selected = item;
            this.change.emit(this.selected.value);
            this.propagateChange(this.selected.value);
        }

        // Close drop-down menu
        this.showMenu(false);
    }

    /**
     * Show/Hide drop-down menu
     */
    private showMenu(show: boolean) {
        this.toggle = show;
        show ? this.createDropDownMenu() : this.destroyDropDownMenu();
    }

    /**
     * Dynamically creates drop-down menu
     */
    createDropDownMenu() {
        const factory = this.resolver.resolveComponentFactory(DropDownMenuComponent);
        this.dropDownList = this.button.createComponent(factory);
        const instance = this.dropDownList.instance;

        instance.dropDownOptions = this.dropDownOptions;
        instance.hostElement = this.el;
        instance.selected = this.selected;
        instance["select"].first().subscribe((item) => {
            this.select(item);
        });
    }

    /**
     * Destroys dynamically created drop-down menu
     */
    destroyDropDownMenu() {
        this.dropDownList && this.dropDownList.destroy();
        this.dropDownList = null;

        // Needed when hide is coming from drop-down menu (change detection is not triggered)
        this.cdr.markForCheck();
    }

    registerOnChange(fn: any): void {
        this.propagateChange = fn;
    }

    registerOnTouched(fn: any): void {
        this.onTouched = fn;
    }

    private onTouched = noop;

    private propagateChange = noop;
}
