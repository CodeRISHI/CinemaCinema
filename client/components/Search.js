// import React from 'react';
// import { Form, FormGroup, ControlLabel, FormControl, Button } from 'react-bootstrap';

class Search extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      query: '',
    };
  }

  handleSearch(event) {
    event.preventDefault();
    this.setState({
      query: event.target.value,
    });
  }

  render() {
    return (
      <div>
        <h1>inside search</h1>
      </div>
    )
  }
}

window.Search = Search;
        // <Form inline>
        //   <FormGroup controlId="formInlineSearch">
        //     <ControlLabel>Search</ControlLabel>
        //     {' '}
        //     <FormControl type="text" placeholder="search..." />
        //   </FormGroup>
        //   {' '}
        //   <Button type="submit">
        //     {'Submit'}
        //   </Button>
        // </Form>