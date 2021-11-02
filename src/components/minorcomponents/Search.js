import React from 'react';
import { Search } from 'react-bootstrap-icons'
const SearchBar = ( props ) => {

  return (

    <form onSubmit={ props.onSubmit } className="col-md-8 mt-4">
      <div className="input-group">
        <input
          type="search"
          name={ props.name }
          id={ props.id }
          value={ props.value }
          placeholder={ props.placeholder }
          onChange={ props.onChange }
          className="form-control "
        />

        <button
          type="submit"
          className="btn btn-primary"
          onClick={ props.onClick }>
          {props.text ? props.text: <Search />}
        </button>
      </div>
    </form>


  );
};

export default SearchBar;
