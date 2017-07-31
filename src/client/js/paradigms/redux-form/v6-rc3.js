<Field name="myField" component={props =>
  <select
    {...props}
    onChange={event => {
      console.log("This is the new value of field myField: " + event.target.value);
      props.input.onChange(event); // <-- Propagate the event
    }>
      {myDynamicallyGeneratedOptions}
    </select>
}/>
