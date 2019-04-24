import React from "react";
import { connect } from "react-redux";

import { CharacterList } from "../components";

import { getData } from '../actions';
import Loader from "react-loader-spinner";

class CharacterListView extends React.Component {
  

  componentDidMount() {
    // call our action
   this.props.getData();
  }

  render() {
    if (this.props.fetching) {
      // return something here to indicate that you are fetching data
      return (
        <Loader type="TailSpin" color="#00BFFF" height="90" width="60" />
      )
    }
    return (
      <div className="CharactersList_wrapper">
        <CharacterList characters={this.props.characters} />
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    characters: state.charsReducer.characters,
    fetching: state.charsReducer.fetching,
    error: state.charsReducer.error
  }
}
// our mapStateToProps needs to have two properties inherited from state
// the characters and the fetching boolean
export default connect(
  mapStateToProps,
  { getData }
)(CharacterListView);
