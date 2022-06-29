import "../assets/styles/styles.css"

export default function FindACourt() {

    return (
      <div>
        <div>
        <h1>Find a Court Page</h1>
        </div>
        <div className="grid">
          <form action="" className="grid">
            <div>
              <h3>Court Surface</h3>
              <input type="checkbox" name="grass" id="grass" />
              <label htmlFor="grass">Grass</label>
              <input type="checkbox" name="clay" id="clay" />
              <label htmlFor="clay">Clay</label>
              <input type="checkbox" name="asphalt" id="asphalt" />
              <label htmlFor="asphalt">Asphalt</label>
              <br /><br />
              <h3>Court Popularity</h3>
              <input type="checkbox" name="empty" id="empty" />
              <label htmlFor="empty">Empty</label>
              <input type="checkbox" name="sbusy" id="sbusy" />
              <label htmlFor="sbusy">Somewhat Busy</label>
              <input type="checkbox" name="busy" id="busy" />
              <label htmlFor="busy">Busy</label>
              <br /><br />
              <h3>Hours of Operation</h3>
              <div>
                <input type="checkbox" name="morning" id="morning" />
                <label htmlFor="morning">Morning: 5:00 AM - 11:00 AM</label>
              </div>
              <br />
              <div>
                <input type="checkbox" name="afternoon" id="afternoon" />
                <label htmlFor="afternoon">Afternoon: 12:00 PM - 5:00 PM</label>
              </div>
              <br />
              <div>
                <input type="checkbox" name="evening" id="evening" />
                <label htmlFor="evening">Evening 6:00 PM - 11:00 PM</label>
              </div>
              
            </div>
            <div>
              <h3>Access Type</h3>
              <input type="checkbox" name="public" id="public" />
              <label htmlFor="public">Public</label>
              <input type="checkbox" name="private" id="private" />
              <label htmlFor="private">Private</label>
              <br /><br />
              <h3>Court Lights</h3>
              <input type="radio" name="lights" id="yes" />
              <label htmlFor="yes">Yes</label>
              <input type="radio" name="lights" id="no" />
              <label htmlFor="no">No</label>
              <br /><br /><br /><br /><br />
              <button className="customButton">Filter Results</button>
            </div>
          </form>
          <div>
            <p>This is where I am going to show filtered results for the Tennis courts. This will be done by Step 5</p>
          </div>
        </div>
      </div>
  
      
    );
}