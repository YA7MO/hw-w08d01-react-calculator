import React, { Component } from 'react';
import Tile from './Tile';
import tileData from '../data/tileData';

class NumberPad extends Component {

  renderTiles() {
    return tileData.map((tile, i) => {
      return (
        <div key = {i} className="number_pad" onClick = {() => {this.props.renderClickedNums(tile.symbol)}}>
        
        <Tile key={i} size={tile.size} symbol={tile.symbol} />
        </div>
      )
    });
  }

  render() {
    return (
      <div className="number_pad">
        {this.renderTiles()}
        
      </div>
    )
  }
}

export default NumberPad;
