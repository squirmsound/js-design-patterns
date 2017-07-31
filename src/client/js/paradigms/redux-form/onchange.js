// Using redux-form 6, you can use the formValueSelector:

import { formValueSelector } from 'redux-form';

const selector = formValueSelector('myFormName');

connect(
  state => ({
      values: selector(state, 'fieldValue1', 'fieldValue2', 'fieldValue3');
  })
)(MyFormComponent);
// Now you can compare the current values, and the previous values in componentWillReceiveProps:

componentWillReceiveProps(nextProps) {
    const nextValues = nextProps.values;
    const values = this.props.values;
    // if at least one of the form values changed
    if(Object.keys(nextValue).some((key) => nextValues[key] !== values[key])) {
        console.log(nextProps.values); // do something with values
    }
}
// Using redux-form up to version 6, you don't have to use the formValueSelector as redux-form add the values prop automatically to your decorated form.
