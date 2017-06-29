// QUESTION 1:
// -------------------------------------------------------------------------------------------------
// // How do you make React handle or restrict Props to certain types, or require certain Props to exist?

      // // NOTE - An acceptable answer :

      // // PropTypes can be used to test Props for any kind of value

      // // If answered correctly, follow up QUESTION: Can you mame 5 type-checkers?

      // // If answered correctly, follow up QUESTION: What other PropTypes can we test for?

      // // NOTE - An acceptable answer :

            React.PropTypes.array,
            React.PropTypes.bool,
            React.PropTypes.func,
            React.PropTypes.number,
            React.PropTypes.object,
            React.PropTypes.string,
            React.PropTypes.symbol,

      // // If answered incorrectly, follow up QUESTION: Do you practice testing PropTypes?

// QUESTION 2:
// -------------------------------------------------------------------------------------------------
// // What are pure functional Components?

      // // NOTE - An acceptable answer :

      // This function that returns a React Element can be used whereever we see fit:
      // If we have no intention for a Component to need state, or to need lifecycle methods, we would write Components with a pure function.

      // // TODO - Ask to demonstrate in jsfiddle:

      // // NOTE - An acceptable answer:
      function Date(props){
          let {msg="The date is:"} = props
          let now = new Date()
          return <div>
              <span>{msg}</span>
              <time>{now.toLocaleDateString()}</time>
          </div>
      }

      // DOM.render(<div><Date msg="Today is"/><div>)

      // You might notice that <Date/> also takes a prop – we can still pass information into the Component.

// QUESTION 3:
// -------------------------------------------------------------------------------------------------
// // In relation to a pure functional component, can you define what is more well known as a traditional React component?

      // // NOTE - An acceptable answer :

      // Traditional React Components create a class that in result create a stateful component.
      // Traditional React Components are used if you need state, or if we ever need to set the state (i.e. this.setState(), getInitialState(), or this.state = {} inside a constructor()).
      // Traditional React Components are used if we need lifecycle methods, if we don't need to manage state, we can write Components with a pure function.

      // // TODO - Ask to demonstrate in jsfiddle:

      // // NOTE - Acceptable answers:

      class Example extends React.Component() {}
      // or
      React.createClass().

// QUESTION 4:
// -------------------------------------------------------------------------------------------------
// // What is the significance of refs in React?

      // // NOTE - An acceptable answer :

      // The ref serves a different purpose, it provides us quick and simple access to the DOM Element represented by a React Element.

      // // TODO - Ask to demonstrate in jsfiddle:

      // // NOTE - Acceptable answers:

      class Example extends Component {
          constructor(p){
              super(p)
          }

          _printValue(){
              console.log(this.refs.someThing.value)
          }

          render() {
              return <div onClick={e => this._printValue()}>
                  <p>test</p>
                  <input type="text" ref="someThing" />
              </div>
          }
      }
      // or
      class Example extends Component {
          constructor(p){
              super(p)
          }

          _printValue(){
              console.log(this.myTextInput.value)
          }

          render() {
              return <div onClick={e => this._printValue()}>
                  <p>test</p>
                  <input type="text" ref={node => this.myTextInput = node} />
              </div>
          }
      }


      // DOM.render(<List />, document.body)
