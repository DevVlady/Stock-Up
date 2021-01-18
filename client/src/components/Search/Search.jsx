import React from 'react';
import './Search.css';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import FormControl from 'react-bootstrap/FormControl';

const SearchBar = (props) => {
  return (
    <div className="searchBox">
      <Form inline>
        <FormControl type="text" placeholder="Search by Symbol" className="mr-sm-2" />
        <Button type="submit">Submit</Button>
      </Form>
    </div>
  );
};

export default SearchBar;