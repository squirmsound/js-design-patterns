
import { formValueSelector, change } from 'redux-form'
const formSelector = formValueSelector('form');
@connect(state => ({
  country: formSelector(state, 'country'),
  city: formSelector(state, 'city'),
}
componentWillUpdate(nextProps) {
    if (this.props.country != nextProps.country) {
      this.props.dispatch(change('form', 'city', ''));
    }
}
