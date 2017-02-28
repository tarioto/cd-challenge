import React, { PropTypes } from 'react';
import { connect } from 'react-redux';
import { fetchUser } from '../actions/personActions';
import SearchComponent from './SearchComponent.jsx';

const Person = (props) => {
  const { fetchUser, personData } = props;

  return (
    <div>
      <SearchComponent change={fetchUser} />
      {
        Object.keys(personData.userData).length > 0 ? (
          <div>
            <img src={personData.userData.data.avatar_url} />
            <div>UserID: {personData.userData.data.login}</div>
            <div>Name: {personData.userData.data.name}</div>
            <div>Email: {personData.userData.data.email}</div>
            <div>Bio: {personData.userData.data.bio}</div>
          </div>
        ) : null
      }
    </div>
  )
}


Person.propTypes = {
  fetchUser: PropTypes.func.isRequired,
  personData: PropTypes.object,
};

function mapStateToProps(state) {
  return {
    personData: state.personData,
  };
}

function mapDispatchToProps(dispatch) {
  return {
    fetchUser: (user) => dispatch(fetchUser(user)),
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(Person);
