import { HttpClient } from '@angular/common/http';
import { Component, Input, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { FormlyFieldConfig, FormlyFormOptions } from '@ngx-formly/core';
import { AnyPageComponent } from '../../../pages/components';
import { IPanelComponent } from '../../interfaces/panel-component.interface';
import { IPanelOptions } from '../../interfaces/panel-options.interface';

export interface IFormPanelButton {
  caption: string;
  class?: '';
  type: 'button' | 'submit';
  onClick: (panel: IFormPanelComponent, button: IFormPanelButton) => boolean;
}
export interface IFormPanelComponent {
  parent: AnyPageComponent;
  options: IPanelOptions;
  form: FormGroup;
  model: { [key: string]: any };
  fields: FormlyFieldConfig[];
  formOptions?: FormlyFormOptions;
  buttons?: IFormPanelButton[];
  submit?: IFormPanelButton;
  httpClient: HttpClient;
}
@Component({
  selector: 'form-panel',
  templateUrl: './form-panel.component.html'
})
export class FormPanelComponent implements IPanelComponent, IFormPanelComponent, OnInit {
  @Input()
  parent: any;
  @Input()
  options: IPanelOptions;
  form = new FormGroup({});
  model = {};
  fields: FormlyFieldConfig[] = [];
  formOptions?: FormlyFormOptions;
  buttons: IFormPanelButton[] = [];
  submit: IFormPanelButton;
  static getType() {
    return 'form-panel';
  }
  constructor(
    public httpClient: HttpClient
  ) { }
  ngOnInit() {
    const states = (this.options.states as IFormPanelComponent);
    this.model = states.model;
    this.fields = states.fields;
    this.formOptions = states.formOptions;
    this.buttons = states.buttons;
    this.submit = states.submit;
    if (this.options.resolvers.init) {
      this.options.resolvers.init(this);
    }
    console.log(states);
  }
  onSubmit(panel: IFormPanelComponent, button: IFormPanelButton) {
    if (this.submit) {
      this.submit.onClick(panel, button);
    } else {
      if (this.buttons && this.buttons[0]) {
        this.buttons[0].onClick(panel, button);
      }
    }
    return true;
  }
}
