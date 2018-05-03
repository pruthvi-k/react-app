"# react-app"

2011 Created by Facebook
2015 React Native released
2016 React 15 released

Why React?
- Flexibility (library not framework)
- Developer Experience : user.map() iterate using javascript (as angular ng-repeat)
- Corporate investment
- community
- Performance (minimize dom changes as its expensive)
- Testability (run in-memory test via node - jest )

- Components
    - like functions
    - Reusable and composable
    - can manage private state
- Reactive updates
    - React will react
    - Take updates to the browser
- Virtual views in memory
    - Write Html in Javascript
    - Tree reconciliation

Tradeoffs
- FV vs library ( React - lightweight, use with existing app

    - Features
        - Components
        - Testing - Jest,Mocha
        - HTTP Library - Fetch, Axios
        - Routing- React Router
        - l18n - react-intl
        - Animation react-motion
        - Form Validation- react-forms
        - CLI - create-react-app

        - more control, more explicit, easy to debug
        - unique - as plain js editors provide auto complete
        - little framework-specific syntax instead it has plain js
        - markup and HTML collocated in same file

        - jsx for markuup
        - declare react components
        - css modules,css in js inline

 - Components
    - State: Used when a component needs to change independently of its parent
    - Default Props: used when not providing properties as attributes (getDefaultProps function react 0.13.3)
    - Validating Props: propTypes object is used to validate properties ( required, data type or custom validation)
    - Mixins: behaviour required for many components; reuse between components (ex. visually highlight component on rendering)

 - JSX
    - xml-like syntax inline in js
    - each element is transformed into js function call

    - for not using JSX skip directly to the output of jsx transformer
    - Difference: className, htmlFor

- Flux
    - uni-directional data flows
    - more a pattern than a library


    props - allows to pass data down to child the child component, are immutable

    state - mutable, use on controller views

    - Life Cycle Methods
      - componentWillMount: immidiately before initial render, both client and server, good place to set initial state
      - componentDid Mount : After render, access DOM, integrate with frameworks, set timers, AJAX requests
      - componsntWillReceiveProps: When receiving new props. not called on initial render, set sate before render
      - shouldComponentUpdate: Before render when new props or state are being received, not called on initial render,For Performance. Return false to void unnecessary re-renders
      - componentWillUpdate: immediately before rendering when new props or state are being received. Not called on initial render. Prepare for an update
      - componentDidUpdate: After component's updates are flushed to the DOM. Not called for the initial render. Work with the DOM after an update
      - compnentWillUnmount: Immediately before component is removed from the DOM, cleanup
