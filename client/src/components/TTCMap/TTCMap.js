import React from 'react';
import { Button, Popover, PopoverHeader, PopoverBody } from 'reactstrap';

export default class TTCMap extends React.Component {
  constructor(props) {
    super(props);

    this.toggle = this.toggle.bind(this);
    this.state = {
      popoverOpen: false
    };
  }

  toggle() {
    this.setState({
      popoverOpen: !this.state.popoverOpen
    });
  }

  renderImage() {
    if (this.state.popoverOpen === true) {
      return (
        <div>
          <img src="./SubwayMap.jpg" />
        </div>
      )
    }
    return;
  }

  render() {
    return (
      <div>
        <Button id="Popover1" type="button">
          Subway Map
        </Button>
            <Popover placement="bottom" isOpen={this.state.popoverOpen} target="Popover1" toggle={this.toggle}>
          <PopoverHeader>Map</PopoverHeader>
          <PopoverBody>
            {this.renderImage()}
          </PopoverBody>
        </Popover>
      </div>
    );
  }
}