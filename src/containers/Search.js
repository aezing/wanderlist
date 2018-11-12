import React, { Component } from 'react'
import PropTypes from 'prop-types'
import CountryModal from '../components/CountryModal'
import Results from '../components/Results'
import SearchBar from '../components/SearchBar'
import { connect } from 'react-redux'
import { fetchCountry } from '../actions/countryActions'
import { putUserData } from '../actions/userActions'
import { openCountryModal, closeCountryModal } from '../actions/modalActions'
import { DotLoader } from 'react-spinners';

class Search extends Component {

  handleSubmit = (e) => {
    e.preventDefault();
    this.props.fetchCountry(e.target.country.value);
  }

  /*
  This function checks to see if the country is already in the user list,
  adds it if it is not, and removes it if it is.
  */
  handleClick = (e) => {
    e.preventDefault();
    var newCountryList = this.props.userCountries
    var newCountry = this.props.searchedCountry[e.target.name]
    if (e.target.innerText === 'Remove') {
      var index = newCountryList.findIndex(i => i.name === newCountry.name)
      if (index !== -1){
        newCountryList.splice(index, 1);
      }
    } else {
      newCountryList = this.props.userCountries.concat([newCountry]);
    }
    this.props.putUserData(
      this.props.username,
      newCountryList,
      this.props.email
    );
  }

  render() {
      return (
        <div className="content">
          <SearchBar handleSubmit={this.handleSubmit} /> <br/>
          {
            this.props.fetching
            ? <DotLoader size={50} color={'#007bff'} className="content" />
            : null
          }
          {
            this.props.fetched
            ? <Results handleClick={this.handleClick} {...this.props} />
            : null
          }
          <CountryModal {...this.props} />
        </div>
      );
  }
}

const mapState = state => {
  return {
    username: state.user.user.username,
    email: state.user.user.email,
    userCountries: state.user.user.countries,
    authenticated: state.auth.authenticated,
    searchedCountry: state.country.country,
    fetched: state.country.fetched,
    fetching: state.country.fetching,
    showCountryModal: state.modal.showCountryModal,
    modalCountry: state.modal.modalCountry
  };
};

const mapDispatch = (dispatch, ownProps) => {
  return {
    fetchCountry: (query) => dispatch(fetchCountry(query)),
    putUserData: (username, countries, email) => dispatch(putUserData(username, countries, email)),
    openCountryModal: (country) => dispatch(openCountryModal(country)),
    closeCountryModal: () => dispatch(closeCountryModal())
  };
};

export default connect(mapState, mapDispatch)(Search);

Search.propTypes = {
  username: PropTypes.string,
  email: PropTypes.string,
  userCountries: PropTypes.array,
  authenticated: PropTypes.bool,
  searchedCountry: PropTypes.array,
  fetched: PropTypes.bool,
  fetching: PropTypes.bool,
  showCountryModal: PropTypes.bool,
  modalCountry: PropTypes.object,
  fetchCountry: PropTypes.func,
  putUserData: PropTypes.func,
  openCountryModal: PropTypes.func,
  closeCountryModal: PropTypes.func
};