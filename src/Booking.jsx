import "./Booking.css";

function Booking() {
  return (
    <div className="app">
      <div className="card booking-wrapper">
        {/* PAGE TITLE + INTRO */}
        <h1>Crop Residue Pickup Booking</h1>
        <p className="booking-lead">
          Farmers can use this form to book a visit for{" "}
          <strong>crop residue collection instead of stubble burning</strong>.
          Once you submit, our BioLoop team will contact you to confirm date,
          time and location.
        </p>

        {/* HOW IT WORKS (optional) */}
        <ul className="booking-steps">
          <li>Fill basic details about you and your farm.</li>
          <li>Tell us which crop residue you want to give and your land size.</li>
          <li>Our team will call you and schedule a pickup or visit.</li>
        </ul>

        {/* BOOKING FORM */}
        <div className="booking-form-wrapper">
          <h2 className="booking-form-heading">Farmer Booking Form</h2>

          <form
            action="https://api.web3forms.com/submit"
            method="POST"
            className="booking-form"
          >
            {/* Web3Forms configuration */}
            <input
              type="hidden"
              name="access_key"
              value="1ef5c2bb-348c-4c9d-a22d-1acb5ec90420"
            />
            <input
              type="hidden"
              name="subject"
              value="New BioLoop Crop Residue Booking"
            />
            <input
              type="hidden"
              name="redirect"
              value="https://web3forms.com/success"
            />

            {/* FARMER DETAILS */}
            <div className="form-section-title">Farmer Details</div>

            <div className="form-grid">
              <div className="form-field">
                <label>Farmer Name</label>
                <input
                  type="text"
                  name="farmer_name"
                  className="contact-input"
                  placeholder="Full name"
                  required
                />
              </div>

              <div className="form-field">
                <label>Mobile Number</label>
                <input
                  type="tel"
                  name="mobile"
                  className="contact-input"
                  placeholder="10-digit phone number"
                  required
                />
              </div>

              <div className="form-field">
                <label>Alternate Mobile (optional)</label>
                <input
                  type="tel"
                  name="alternate_mobile"
                  className="contact-input"
                  placeholder="Another contact number"
                />
              </div>
            </div>

            {/* LOCATION DETAILS */}
            <div className="form-section-title">Farm Location</div>

            <div className="form-grid">
              <div className="form-field">
                <label>Village / Town</label>
                <input
                  type="text"
                  name="village"
                  className="contact-input"
                  placeholder="Village / Town name"
                  required
                />
              </div>

              <div className="form-field">
                <label>District</label>
                <input
                  type="text"
                  name="district"
                  className="contact-input"
                  placeholder="e.g. Pathankot, Jalandhar"
                  required
                />
              </div>

              <div className="form-field">
                <label>State</label>
                <input
                  type="text"
                  name="state"
                  className="contact-input"
                  placeholder="e.g. Punjab"
                  required
                />
              </div>

              <div className="form-field">
                <label>Pin Code</label>
                <input
                  type="text"
                  name="pincode"
                  className="contact-input"
                  placeholder="6-digit PIN code"
                  required
                />
              </div>

              <div className="form-field form-field-full">
                <label>Full Address / Landmark</label>
                <input
                  type="text"
                  name="full_address"
                  className="contact-input"
                  placeholder="Nearby landmark, road, etc."
                  required
                />
              </div>
            </div>

            {/* CROP & RESIDUE DETAILS */}
            <div className="form-section-title">Crop & Residue Details</div>

            <div className="form-grid">
              <div className="form-field">
                <label>Crop Type</label>
                <select
                  name="crop_type"
                  className="contact-input"
                  defaultValue=""
                  required
                >
                  <option value="" disabled>
                    Select crop
                  </option>
                  <option value="Wheat">Wheat</option>
                  <option value="Paddy / Rice">Paddy / Rice</option>
                  <option value="Maize">Maize</option>
                  <option value="Sugarcane">Sugarcane</option>
                  <option value="Mustard">Mustard</option>
                  <option value="Other">Other</option>
                </select>
              </div>

              <div className="form-field">
                <label>Residue Type</label>
                <input
                  type="text"
                  name="residue_type"
                  className="contact-input"
                  placeholder="e.g. paddy straw, wheat straw"
                  required
                />
              </div>

              <div className="form-field">
                <label>Approx. Land Area</label>
                <input
                  type="text"
                  name="land_area"
                  className="contact-input"
                  placeholder="e.g. 3 acres / 6 kanal"
                  required
                />
              </div>

              <div className="form-field">
                <label>Approx. Residue Quantity</label>
                <input
                  type="text"
                  name="residue_quantity"
                  className="contact-input"
                  placeholder="e.g. 2 tonnes, 15 quintals"
                  required
                />
              </div>
            </div>

            {/* PICKUP PREFERENCE */}
            <div className="form-section-title">Pickup Preference</div>

            <div className="form-grid">
              <div className="form-field">
                <label>Preferred Pickup Date</label>
                <input
                  type="date"
                  name="preferred_date"
                  className="contact-input"
                  required
                />
              </div>

              <div className="form-field">
                <label>Preferred Time Slot</label>
                <select
                  name="preferred_time"
                  className="contact-input"
                  defaultValue=""
                >
                  <option value="" disabled>
                    Select time slot
                  </option>
                  <option value="Morning (7–11 AM)">Morning (7–11 AM)</option>
                  <option value="Afternoon (12–4 PM)">Afternoon (12–4 PM)</option>
                  <option value="Evening (4–7 PM)">Evening (4–7 PM)</option>
                  <option value="Flexible">Flexible</option>
                </select>
              </div>

              <div className="form-field form-field-full">
                <label>Any machinery available? (optional)</label>
                <input
                  type="text"
                  name="machinery"
                  className="contact-input"
                  placeholder="e.g. Happy seeder, baler, tractor, none"
                />
              </div>
            </div>

            {/* EXTRA NOTES */}
            <div className="form-field form-field-full">
              <label>Any other details (optional)</label>
              <textarea
                name="extra_details"
                className="contact-textarea"
                placeholder="Share anything else – urgency, burning deadline, special instructions, etc."
                rows="4"
              ></textarea>
            </div>

            <button type="submit" className="contact-submit-btn">
              Submit Booking Request
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Booking;
