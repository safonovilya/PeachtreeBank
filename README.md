# Peachtree Bank

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 10.0.2.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `--prod` flag for a production build.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via [Protractor](http://www.protractortest.org/).

## App Structure

├── LICENSE
├── README.md
├── angular.json                                // angular configs to serv, build, test
├── e2e                                         // e2e test init folder
│   ├── protractor.conf.js
│   ├── src
│   │   ├── app.e2e-spec.ts
│   │   └── app.po.ts
│   └── tsconfig.json
├── karma.conf.js                               // karma test config
├── messages.xlf                                // i18n
├── ngsw-config.json                            // offline mode 
├── package-lock.json
├── package.json
├── server.js                                   // express server for heroku serve static
├── src
│   ├── app
│   │   ├── app-routing.module.ts
│   │   ├── app.component.html
│   │   ├── app.component.scss
│   │   ├── app.component.spec.ts
│   │   ├── app.component.ts
│   │   ├── app.module.ts
│   │   ├── components                          // components folder
│   │   │   ├── card
│   │   │   │   ├── ...
│   │   │   │   └── card.component.ts
│   │   │   ├── modal
│   │   │   │   ├── ...
│   │   │   │   └── modal.component.ts
│   │   │   ├── transaction
│   │   │   │   ├── ...
│   │   │   │   └── transactions.componen.ts
│   │   │   └── transfer-form
│   │   │       ├── ...
│   │   │       └── transfer-form.component.ts
│   │   ├── directives
│   │   │   ├── ...
│   │   │   └── number-only.directive.ts
│   │   ├── models
│   │   │   └── transaction.ts
│   │   └── services
│   │       └── transaction.service.ts
│   ├── assets
│   │   ├── ...
│   │   └── logo.jpg
│   ├── environments                            // configs variables
│   │   ├── environment.prod.ts
│   │   └── environment.ts
│   ├── favicon.ico
│   ├── index.html
│   ├── main.ts
│   ├── manifest.webmanifest 
│   ├── polyfills.ts
│   ├── styles.scss
│   ├── test.ts
│   └── variables.scss                          // scss variables
└── tslint.json                                 // code styling config
