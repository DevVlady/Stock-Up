import React from 'react';
import './Search.css';

function SearchForm(props) {
    return (
        <form className="search">
            <div className="form-group">
                <label htmlFor="language">Search Term:</label>
                <input
                    value={props.search}
                    onChange={props.handleInputChange}
                    name="term"
                    list="term"
                    type="text"
                    className="form-control"
                    placeholder="Type in a search term to begin"
                    id="term"
                />
            </div>
        </form>
    );
}

export default SearchForm;