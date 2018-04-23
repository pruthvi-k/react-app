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

