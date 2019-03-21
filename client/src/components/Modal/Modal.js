import React from "react";
import "./Modal.css";
import Buybutton from "../Buybutton";
import Card from "../Card";

function Modal() {
  return (
    <div className="modal" tabindex="-1" role="dialog">
      <div className="modal-dialog" role="document">
        <div className="modal-content">
          <div className="modal-header">
            <h5 className="modal-title"></h5>
            <button type="button" className="close" data-dismiss="modal" aria-label="Close">
              <span aria-hidden="true">&times;</span>
            </button>
          </div>
          <div className="modal-body">
            <Card />
          </div>
          <div className="modal-footer">
            <button type="button" className="btn btn-primary" onClick={() => props.buyitem(props._id)}/>
            {/* above line is where it would save that a service had been requested, need an onclick*/}
            <button type="button" className="btn btn-secondary" data-dismiss="modal">Exit</button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Modal;

// onClick={() =>