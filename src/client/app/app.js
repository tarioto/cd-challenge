import React, { PropTypes } from 'react';
import { connect } from 'react-redux';
import { fetchData } from './actions/index';


const App = (props) => {
  const { fetchData, appData } = props;

  return (
    <div>
      <div>Redux Examples</div>
      <button onClick={fetchData}>
        <div>Load Data</div>
      </button>
      <div>
      {
        appData.isFetching && <div>Loading</div>
      }
      {
        appData.data.length ? (
          appData.data.map((person, i) => {
            return <div key={i} >
              <div>Name: {person.name}</div>
              <div>Age: {person.age}</div>
            </div>
          })
        ) : null
      }
      </div>
    </div>

  );
};

App.propTypes = {
  fetchData: PropTypes.func.isRequired,
  appData: PropTypes.object,
};

function mapStateToProps(state) {
  return {
    appData: state.appData,
  };
}

function mapDispatchToProps(dispatch) {
  return {
    fetchData: () => dispatch(fetchData()),
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(App);
