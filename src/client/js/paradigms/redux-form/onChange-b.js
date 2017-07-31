componentWillReceiveProps(nextProps){
  if (nextProps.dirty && nextProps.valid && nextProps.values !== this.props.values) {
     this.onFormFieldChange(nextProps.values);
    }
}
