import React, { useState } from "react";

const Contact = () => {
  const [loading, setLoading] = useState(false);

  return (
    <div>
      {loading ? (
        <div className="ui active centered inline loader"></div>
      ) : (
        <form>
          <h2>Contact</h2>
          <div className="ui form" style={{ margin: "20px 0" }}>
            <div className="field">
              <label>Name</label>
              <input type="text" name="name" placeholder="Name" required />
            </div>
          </div>

          <div className="ui form" style={{ margin: "20px 0" }}>
            <div className="field">
              <label>Email</label>
              <input type="email" name="email" placeholder="Email" required />
            </div>
          </div>

          <div className="ui form">
            <div className="field" style={{ margin: "20px 0" }}>
              <label>State</label>
              <select className="ui fluid dropdown">
                <option value="AL">Alabama</option>
                <option value="AK">Alaska</option>
                <option value="AZ">Arizona</option>
                <option value="AR">Arkansas</option>
                <option value="CA">California</option>
                <option value="CO">Colorado</option>
                <option value="CT">Connecticut</option>
                <option value="DE">Delaware</option>
                <option value="DC">District Of Columbia</option>
                <option value="FL">Florida</option>
                <option value="GA">Georgia</option>
                <option value="HI">Hawaii</option>
                <option value="ID">Idaho</option>
                <option value="IL">Illinois</option>
                <option value="IN">Indiana</option>
                <option value="IA">Iowa</option>
                <option value="KS">Kansas</option>
                <option value="KY">Kentucky</option>
                <option value="LA">Louisiana</option>
                <option value="ME">Maine</option>
                <option value="MD">Maryland</option>
                <option value="MA">Massachusetts</option>
                <option value="MI">Michigan</option>
                <option value="MN">Minnesota</option>
                <option value="MS">Mississippi</option>
                <option value="MO">Missouri</option>
                <option value="MT">Montana</option>
                <option value="NE">Nebraska</option>
                <option value="NV">Nevada</option>
                <option value="NH">New Hampshire</option>
                <option value="NJ">New Jersey</option>
                <option value="NM">New Mexico</option>
                <option value="NY">New York</option>
                <option value="NC">North Carolina</option>
                <option value="ND">North Dakota</option>
                <option value="OH">Ohio</option>
                <option value="OK">Oklahoma</option>
                <option value="OR">Oregon</option>
                <option value="PA">Pennsylvania</option>
                <option value="RI">Rhode Island</option>
                <option value="SC">South Carolina</option>
                <option value="SD">South Dakota</option>
                <option value="TN">Tennessee</option>
                <option value="TX">Texas</option>
                <option value="UT">Utah</option>
                <option value="VT">Vermont</option>
                <option value="VA">Virginia</option>
                <option value="WA">Washington</option>
                <option value="WV">West Virginia</option>
                <option value="WI">Wisconsin</option>
                <option value="WY">Wyoming</option>
              </select>
            </div>
          </div>

          <div className="ui form" style={{ margin: "20px 0" }}>
            <div className="field">
              <label>Subject</label>
              <textarea
                rows="3"
                name="content"
                placeholder="What you want to tell us?"
                required
              ></textarea>
            </div>
          </div>

          <button className="ui primary button fluid" type="submit">
            Contact
          </button>
        </form>
      )}
    </div>
  );
};

export default Contact;
