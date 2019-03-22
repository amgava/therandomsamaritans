import React from "react";
import "./Card.css";

$('a[rel=popover]').popover({
  html: true,
  trigger: 'hover',
  content: function () {
    return '<img src="../../images/SubwayMap.jpg" />';
  }
});

function Card(props) {
  return (
    <div className="card">
      <div className="card-body modal-card-body">

      {/* view post */}
        <div className="card-text view-post">
          <ul>
          <li>
              <strong>Category:</strong> {props.reqcategory}
          </li>
          <li>
              <strong>Location:</strong> {props.reqlocation}
          </li>
          <li>
              <strong>Description:</strong> {props.description}
          </li>
          <li>
            <strong>Contact Number:</strong> {props.reqcontactNo}
          </li>
          <li>
            <strong>Price:</strong> {props.reqprice}
          </li>
          <li className="hiddenClass">
            <strong>Expiry:</strong> {props.reqexpiryDate}
          </li>
          <li className="hiddenClass">
            <strong>User ID:</strong> {props.requserId}
          </li>
          </ul>
        </div>

        {/* make post */}
        <div className="card-text make-post">
          <form className="make-post">
            <div className="make-post-input">
            {/* Form Input Controls */}
              <div className="form-group">
                <label for="category-in" className="form-label">Category</label>
                <input type="text" id="category-in" />
              </div>
              <div className="form-group">
                <label for="location-id">Choose A Station:</label>
                <select multiple className="form-control" id="location-id">
                  <option>1</option>
                  <option>2</option>
                  <option>3</option>
                  <option>4</option>
                  <option>5</option>
                </select>
                <button type="button" class="btn btn-danger" data-toggle="popover" data-trigger="focus" title="TTC Map">Stations</button>

              </div>
              <div className="form-group">
                <label for="description-in">Description:</label>
                <textarea className="form-control" id="description-in" rows="6"></textarea>
              </div>
              <div className="form-group">
                <label for="contact-no-in" className="form-label">Phone:</label>
                <input type="text" id="contact-no-in" />
              </div>
              <div className="form-group">
                <label for="price-in" className="form-label">Price</label>
                <input type="text" id="price-in" />
              </div>
              <div className="form-group">
                <label for="expiry-in" className="form-label hiddenClass">Expiry</label>
                <input type="text" id="expiry-in" value={props.reqexpiryDate} />
              </div>
              <div className="form-group">
                <label for="user-id-in" className="form-label hiddenClass">User ID</label>
                <input type="text" id="user-id-in" value={props.requserId} />
              </div>
{/* end form input */}
            </div>
          </form>
        </div>

      </div>
    </div>
  );
}

export default Card;