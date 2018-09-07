import { AgGridNg2 } from 'ag-grid-angular';
import { map } from 'rxjs/operators';
import { ListPageComponent } from '../app/pages/components';
import { IFormPanelButton, IFormPanelComponent, IGridPanelComponent } from '../app/panels/components';
import { IEnvironment } from './environment.interface';

// This file can be replaced during build by using the `fileReplacements` array.
// `ng build ---prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

export const environment: IEnvironment = {
  app: {
    layout: {
      type: 'sidenav-layout',
      resolvers: {
        'main-nav-create-router-link': { a: 1 },
        'main-breadcrumb-create-router-link': { a: 2 },
        'main-nav-selected-item-to-breadcrumb': { a: 3 }
      },
      states: {
        'main-breadcrumb': {
          items: []
        },
        'main-nav': {
          items: [
            {
              key: '',
              icon: 'anticon anticon-table',
              caption: 'Entities',
              children: [
                {
                  key: 'groups',
                  caption: 'Groups'
                },
                {
                  key: 'users',
                  caption: 'Users'
                }
              ]
            }, {
              key: 'auth',
              icon: 'anticon anticon-user',
              caption: 'Auth',
              children: [
                {
                  key: 'login',
                  caption: 'Login'
                },
                {
                  key: 'logout',
                  caption: 'Logout'
                }
              ]
            }
          ]
        }
      }
    },
    pages: [
      {
        type: 'list-page',
        resolvers: {
          'resolver': 'resolver-options'
        },
        states: {
          'routes': [
            'auth',
            'auth/:name'
          ],
          'panels': [
            {
              type: 'form-panel',
              resolvers: {
                'init': (panel: IFormPanelComponent) => {
                  const parent = panel.parent as ListPageComponent;
                  parent.activatedRouteSnapshot$.subscribe(
                    activatedRouteSnapshot => {
                      const name = activatedRouteSnapshot.params['name'];
                      if (name === 'logout') {
                        panel.model = {};
                        panel.fields = [];
                        panel.buttons[0].caption = 'Logout';
                      } else {
                        panel.model = { username: '', password: '' };
                        panel.fields = panel.options.states.fields;
                        panel.buttons[0].caption = 'Login';
                      }
                      console.log(panel, activatedRouteSnapshot);
                    }
                  );
                }
              },
              states: {
                model: { username: '' },
                fields: [{
                  key: 'username',
                  type: 'input',
                  templateOptions: {
                    type: 'text',
                    label: 'Username',
                    placeholder: 'Enter username',
                    required: true,
                  }
                }, {
                  key: 'password',
                  type: 'input',
                  templateOptions: {
                    type: 'password',
                    label: 'Password',
                    placeholder: 'Enter password',
                    required: true,
                  }
                }],
                buttons: [
                  {
                    caption: 'Submit',
                    type: 'submit',
                    onClick: (panel: IFormPanelComponent, button: IFormPanelButton) => {
                      if (panel.buttons[0].caption === 'Logout') {
                        alert('Bye-Bye!');
                      } else {
                        if (panel.form.valid) {
                          alert(JSON.stringify(panel.model));
                        } else {
                          alert('Data in form is not valid!');
                        }
                      }
                    }
                  }
                ]
              }
            }
          ]
        }
      },
      {
        type: 'list-page',
        resolvers: {
          'resolver': 'resolver-options'
        },
        states: {
          'routes': [
            'groups',
            'groups/:name'
          ],
          'panels': [
            {
              type: 'form-panel',
              resolvers: {
                'init': (panel: IFormPanelComponent) => {
                  const parent = panel.parent as ListPageComponent;
                  parent.activatedRouteSnapshot$.subscribe(
                    activatedRouteSnapshot => {
                      const name = activatedRouteSnapshot.params['name'];
                      panel.model = { name: name };
                      if (name) {
                        panel.buttons[0].caption = 'Save';
                      } else {
                        panel.buttons[0].caption = 'Create';
                      }
                      console.log(panel);
                    }
                  );
                }
              },
              states: {
                model: { name: '' },
                fields: [{
                  key: 'name',
                  type: 'input',
                  templateOptions: {
                    type: 'text',
                    label: 'Name',
                    placeholder: 'Enter name',
                    required: true,
                  }
                }],
                buttons: [
                  {
                    caption: 'Save',
                    type: 'submit',
                    onClick: (panel: IFormPanelComponent, button: IFormPanelButton) => {
                      const parent = panel.parent as ListPageComponent;
                      const grid = parent.options.resolvers.grid as AgGridNg2;
                      console.log(panel);
                      if (panel.form.valid) {
                        if (panel.buttons[0].caption === 'Create') {
                          grid.api.addItems([
                            panel.model
                          ]);
                          panel.model = {};
                        }
                      } else {
                        alert('Data in form is not valid!');
                      }
                    }
                  }
                ]
              }
            },
            {
              type: 'grid-panel',
              resolvers: {
                'init': (panel: IGridPanelComponent) => {
                  const parent = panel.parent as ListPageComponent;
                  parent.options.resolvers.grid = panel.gridRef;
                  parent.activatedRouteSnapshot$.subscribe(
                    activatedRouteSnapshot => {
                      console.log(panel, activatedRouteSnapshot.params);
                    }
                  );
                  panel.httpClient.get('http://598726293223df0011bbead7.mockapi.io/api/groups').pipe(
                    map(data => data['groups'])
                  ).subscribe(data => {
                    panel.gridRef.api.setRowData(data);
                    console.log(panel);
                  });
                }
              },
              states: {
                theme: 'ag-theme-balham',
                style: 'width: 500px; height: 500px;',
                gridOptions: {
                  columnDefs: [
                    { headerName: 'Name', field: 'name' }
                  ],
                  rowData: []
                }
              }
            }
          ]
        }
      }, {
        type: 'list-page',
        resolvers: {
          'resolver': 'resolver-options'
        },
        states: {
          'routes': [
            'users',
            'users/:username'
          ],
          'panels': [
            {
              type: 'grid-panel',
              resolvers: {
                'init': (panel: IGridPanelComponent) => {
                  const parent = panel.parent as ListPageComponent;
                  parent.activatedRouteSnapshot$.subscribe(
                    activatedRouteSnapshot => {
                      console.log(panel, activatedRouteSnapshot.params);
                    }
                  );
                  panel.httpClient.get('http://598726293223df0011bbead7.mockapi.io/api/users').pipe(
                    map(data => data['users'])
                  ).subscribe(data => {
                    panel.gridRef.api.setRowData(data);
                    console.log(panel);
                  });
                }
              },
              states: {
                theme: 'ag-theme-balham',
                style: 'width: 500px; height: 500px;',
                gridOptions: {
                  columnDefs: [
                    { headerName: 'Username', field: 'username' },
                    { headerName: 'Email', field: 'email' }
                  ],
                  rowData: []
                }
              }
            }
          ]
        }
      }
    ]
  },
  production: false
};

/*
 * In development mode, for easier debugging, you can ignore zone related error
 * stack frames such as `zone.run`/`zoneDelegate.invokeTask` by importing the
 * below file. Don't forget to comment it out in production mode
 * because it will have a performance impact when errors are thrown
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.
