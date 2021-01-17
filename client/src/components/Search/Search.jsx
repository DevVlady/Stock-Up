import React from 'react';
import './Search.css';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import FormControl from 'react-bootstrap/FormControl';




// function SearchForm(props) {
//     return (
//         <form className="search">
//             <div className="form-group">
//                 <label htmlFor="language">Search Term:</label>
//                 <input
//                     value={props.search}
//                     onChange={props.handleInputChange}
//                     name="term"
//                     list="term"
//                     type="text"
//                     className="form-control"
//                     placeholder="Type in a search term to begin"
//                     id="term"
//                 />
//             </div>
//         </form>
//     );
// }

// export default SearchForm;

const SearchBar = (props) => {
    return (
        <Form inline>
    <FormControl type="text" placeholder="Search" className=" mr-sm-2" />
    <Button type="submit">Submit</Button>
  </Form>
    );
};

export default SearchBar;