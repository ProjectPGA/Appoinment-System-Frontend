#  frontend

The  frontend architecture is built using the following technologies and libraries:
- Typescript
- Vue
- Vuex (state management)
- Bulma (CSS Framework)
- Buefy (component library, based on Bulma)
- JEST (unit testing)
- Cypress (e2e testing) 

## Build Setup

``` bash
# install dependencies
npm install

# serve with hot reload at localhost:18083
npm run serve

# build for production and view the bundle analyzer report
npm run build --report

# run Cypress with integration tests (e2e)
npx cypress run

# run unit tests
npm run test

```


## Guidelines

### CSS Architecture
* Overwrite bulma behaviour with variables where possible
  * see ``src/assets/scss/variables/bulma-variables.scss``
* Prefer scoped styles over global style classes
* Use variables for reusable values 
  * see ``src/assets/scss/variables/andres-variables.scss``
  * use "p-" prefix to emphasise andres specificity
* TODO define naming scheme  
 

### Unit testing
- Use *.test.ts file names for unit tests (e.g file-under-test.test.ts)
and it will be recognized by jest test runner
- Write unit tests for vuex store modules
- Write isolated tests for mutations / actions / getters
- Mock dependencies to other mutations / actions with jest.mock
- TODO define guidelines to write unit tests for components

### E2E testing
- Use automated authentication in your tests (TODO provide example)
- Use attribute selection with "data-cy" attributes to access elements in the app.
If necessary add the "data-cy" attributes while writing tests
- All tests are executed against the "neutral  data dump" that is hosted at 
(this is configured in vue.config.js). Your tests can assume that the behaviour of that instance will not change often.

### Provide examples of components using storybook
- TODO define guidelines for writing stories

