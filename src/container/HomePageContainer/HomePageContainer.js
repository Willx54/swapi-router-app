import React, { Component } from 'react';
import { connect } from 'react-redux';
import HomePage from '../../components/HomePage/HomePage';
import {fetchFilmData} from '../../store/actions';
import {moduleTitlesSelect} from '../../store/selectors';

const mapStateToProps = (state) => {
    return ({
        characters: state.characters,
        moduleTitles: moduleTitlesSelect(state)
    })
}

const mapDispatchToProps = dispatch => {
    return {
      fetchFilmData: () => {
        dispatch(fetchFilmData())
      }
    }
  }

class HomePageContainer extends Component {
    componentDidMount () {
        this.props.fetchFilmData();
    };
    render () {
        return (
            <HomePage {...this.props} />
        );
    };
}

export default connect(mapStateToProps, mapDispatchToProps)(HomePageContainer);