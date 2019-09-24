# NgStarterKit (Production / Enterprise ready Angular seed project)

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 8 and customized to include most of the commonly used Angular features and concepts to leapfrog initial development efforts.

This project is also expected to work with future Angular releases, unless any breaking changes are introduced by Angular team in any of the libraries or associated functionalities. This project started off with Angular 6 and got migrated to Angular 7 in between.

#### Background:

This starter kit has been created to help beginner and advanced Angular developers leapfrog their initial Angular application development efforts by giving them key concepts and references, which are the solid foundations of building a modular, scalable and efficient Angular application.

From my own experience of working on an Angular project afresh with no background knowledge and then wading through tons of documentation and help online and offline before refactoring most of the existing application code to make them more streamlined, I felt it would be better if there was some starter Angular code that really helps to bring most of the commonly Angular features out of box or atleast help highlight them with live examples,so that user can rightaway start implementing them, instead of copy pasting sample code from blogs and then tweaking around it.

While I make every attempt to make this as efficient and user friendly, as possible, any suggestions to make it even better is always welcome.

#### Important info:

Most of the tips given here are from my personal experience and/or from reading the blogs/views of several other fellow Angular developers across the spectrum. If you feel some or all of this doesnt make sense, feel free to the make world a better place by giving an efficient alternative approach :)

#### Configuration details:

1. This project been configured with CSS preprocessor - SCSS, by default. You can change that using this command or through usual angular.json configuration:
   ng config schematics.@schematics/angular:component.styleext scss
   I would strongly recommend to use CSS preprocessor and BEM methodology to make CSS more OOPS friendly, modular and reusable along with being developer friendly.

2. In line with actual development requirements, environment(LOCAL, DEV, STAGE/QA, PRODUCTION) wise configuration options are enabled in angular.json
   You can set environment specific variables/flags in these environment files and import them to your components/services as required (sample implementation given to illustrate). A good usecase would be set a flag to denote each environment and then use that flag inside one of your service file to set the backend API urls for that particular environment.

3. Relative paths' configuration has been added to tsconfig.json, so that alias for absolute paths can be used instead of relative pathname each time while importing other components

4. Routing has been moved to a separate module, as per the Angular best practice. Also, "page not found error" be shown for any invalid url/views, instead of simply showing up a 404 or bringing user back to homepage.

5. We have also included the concept of Lazy Loading modules in this starter kit by default, as its always prudent to first load the bare minimum set of code for bootstrapping the application and then slowly downloading/adding further modules/features into DOM as the user navigates between views/pages. In case if your project is small or you are developing a pure mobile oriented hybrid app that also has the constraint of slow network speed, its better to reconsider this approach and network cost might negate the benefit offered by lazy loading modules. In that case, just delete the 'sub-app01' and 'shared' folder contents and you are left with only a single module to proceed.

6. Planned future updates:

   - D3 charts
   - Auth Guard

7. We have also explored the concepts of simple Template and reactive forms, which can be used in almost most of the project that has user interactions. Also, we have used the reactive forms without ngModel directive, as per latest Angular 7 deprecations

8. tslint.json file has been customized to disable 'no-inferrable-types', in order to allow declaration and typecasting in same line (eg. test: string = 'This is test variable' instead of test = 'This is test variable')
   This project is linting compliant and all the standard linting checks has been passed. I encourage you to regularly run 'ng lint' and fix any alerts thrown by linter)

9. All the standard spec files have been updated to give you a hands on experience of configuring Unit test cases.

10. All the constants have been moved to a separate constantsService file under shared module. I strongly recommend to put in all your constants, magic numbers and any other repeatable/constant values to this service and inject it in your required components/service as required.

11. ForkJoin has been used to hide/show loader after all the API calls are completed.

12. A sample template driven and reactive forms has been included along with validators and post submit form reset functionality to get you started with forms as well, based on your requirements.

#### Build instructions:

To run the application in your local system : (any of the commands, based on your preference to test)  
`ng serve --o --configuration=localhost`  
`ng serve --o --configuration=dev`  
`ng serve --o --configuration=stage`  
`ng serve --o --configuration=production`

To build the application before deploying to any application server : (any of the commands, based on your preference to test)
`ng build --prod --configuration=production`  
`ng build --prod --configuration=stage`  
`ng build --prod --configuration=dev`  
`ng build --prod --configuration=localhost`

The output will be generated under `releases` directory inside the project.

To run unit test cases:
`npm run test`

To run code coverage:
`npm run run-code-coverage`

To view code coverage results:
(Open in a separate terminal as it will start a separate HTTP server process to serve this page.
After analyzing the result, ensure to kill the process using `Ctrl` + `C` keys combination for this from the terminal you ran the following command.):
`npm run view-code-coverage`
