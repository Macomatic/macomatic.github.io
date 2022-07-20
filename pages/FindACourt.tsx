import "../assets/styles/styles.css"
import { useState } from "react";
import  { Link, useNavigate } from "react-router-dom"



export default function FindACourt() {

    const [courtLights, setCourtLights] = useState(String);
    const [accessType, setAccessType] = useState(String);
    const [surface, setSurface] = useState(String);
    const [popularity, setPopularity] = useState(String);
    const [filtered, setFiltered] = useState(String);
    const [operationTimes, setOperationTimes] = useState(String);

    const navigate = useNavigate();
    const toCourtPage = (id: number) => {
      navigate('/tenniscourt', {state: {
        id: id,
        lang: "eng"
      }});
    }

  
    function filterResults() {
      let filteredOptions = "";
      // console.log(courtLights);
      // console.log(accessType);
      // console.log(surface);
      // console.log(popularity);
      // console.log(operationTimes);

      filteredOptions+=courtLights+","+accessType+","+surface+","+popularity+","+operationTimes;
      // console.log(filteredOptions);
      setFiltered(filteredOptions);
      // console.log(filtered);
      
    }
    
    return (
      <div>
        <Link to="/findacourtfr">
          <button className="courtButton languageButton">FR</button>
        </Link>
        
        <div>
        <h1>Find a Court</h1>
        <p>Choose your filters on the left side, then click the "Filter Results" button to find all viable Courts!</p>
        </div>
        <div className="grid">
          <div className="grid">
            <div>
              <h3>Court Surface</h3>
              <input type="radio" name="surface" id="grass" value="grass" onChange={e=>setSurface(e.target.value)}  />
              <label htmlFor="grass">Grass</label>
              <input type="radio" name="surface" id="clay" value="clay" onChange={e=>setSurface(e.target.value)}/>
              <label htmlFor="clay">Clay</label>
              <input type="radio" name="surface" id="asphalt" value="asphalt" onChange={e=>setSurface(e.target.value)}/>
              <label htmlFor="asphalt">Asphalt</label>
              <br /><br />
              <h3>Court Popularity</h3>
              <input type="radio" name="pop" id="empty" value="empty" onChange={e=>setPopularity(e.target.value)} />
              <label htmlFor="empty">Empty</label>
              <input type="radio" name="pop" id="somewhatBusy" value="somewhatBusy" onChange={e=>setPopularity(e.target.value)} />
              <label htmlFor="somewhatBusy">Somewhat Busy</label>
              <input type="radio" name="pop" id="busy" value="busy" onChange={e=>setPopularity(e.target.value)} />
              <label htmlFor="busy">Busy</label>
              <br /><br />
              <h3>Hours of Operation</h3>
              <div>
                <input type="radio" name="operationTimes" id="morning" value="morn" onChange={e=>setOperationTimes(e.target.value)} />
                <label htmlFor="morning">Morning: 5:00 AM - 11:00 AM</label>
              </div>
              <br />
              <div>
                <input type="radio" name="operationTimes" id="afternoon" value="aft" onChange={e=>setOperationTimes(e.target.value)} />
                <label htmlFor="afternoon">Afternoon: 12:00 PM - 5:00 PM</label>
              </div>
              <br />
              <div>
                <input type="radio" name="operationTimes" id="evening" value="eve" onChange={e=>setOperationTimes(e.target.value)} />
                <label htmlFor="evening">Evening 6:00 PM - 11:00 PM</label>
              </div>
              
            </div>
            <div>
              <h3>Access Type</h3>
              <input type="radio" name="access" id="public" value="public"  onChange={e=>setAccessType(e.target.value)}/>
              <label htmlFor="public">Public</label>
              <input type="radio" name="access" id="private" value="private" onChange={e=>setAccessType(e.target.value)} />
              <label htmlFor="private">Private</label>
              <br /><br />
              <h3>Court Lights</h3>
              <input type="radio" name="lights" id="yes" value="hasLights" onChange={e=>setCourtLights(e.target.value)} />
              <label htmlFor="yes">Yes</label>
              <input type="radio" name="lights" id="no" value="noLights" onChange={e=>setCourtLights(e.target.value)}/>
              <label htmlFor="no">No</label>
              <br /><br /><br /><br /><br />
              <button className="customButton" onClick={filterResults}>Filter Results</button>
            </div>
          </div>
          <div>

            { (filtered == "" ||
              (filtered.includes("morn") || filtered.includes("public") || filtered.includes("grass") || filtered.includes("empty") || filtered.includes("noLights")) && // parameters it can be searched by
              (!filtered.includes("aft") && !filtered.includes("eve") && !filtered.includes("private") && !filtered.includes("hasLights") && !filtered.includes("clay") && !filtered.includes("asphalt") && !filtered.includes("somewhatBusy") && !filtered.includes("busy")) // parameters that would remove it from the search
            ) && 
             <div className="courts">
              <h3>Glennfield Court</h3>
              <p>123 Glennfield St. K1S 0K7</p>
              <button className="courtButton" onClick={() => {toCourtPage(1)}}>Visit Court</button>
            </div>
            }
            { (filtered == "" ||
              (filtered.includes("aft") || filtered.includes("public") || filtered.includes("asphalt") || filtered.includes("somewhatBusy") || filtered.includes("noLights")) && // parameters it can be searched by
              (!filtered.includes("morning") && !filtered.includes("eve") && !filtered.includes("private") && !filtered.includes("hasLights") && !filtered.includes("clay") && !filtered.includes("grass") && !filtered.includes("empty") && !filtered.includes("busy")) // parameters that would remove it from the search
            ) && 
            <div className="courts">
              <h3>Allen-Smith Court</h3>
              <p>456 Allen-Smith Dr. K1S 5L2</p>
              <button className="courtButton" onClick={() => {toCourtPage(2)}}>Visit Court</button>
              </div>
            }
            { (filtered == "" ||
              (filtered.includes("eve") || filtered.includes("private") || filtered.includes("clay") || filtered.includes("somewhatBusy") || filtered.includes("hasLights")) && // parameters it can be searched by
              (!filtered.includes("aft") && !filtered.includes("morn") && !filtered.includes("public") && !filtered.includes("noLights") && !filtered.includes("grass") && !filtered.includes("asphalt") && !filtered.includes("empty") && !filtered.includes("busy")) // parameters that would remove it from the search
            ) && 
            <div className="courts">
              <h3>uOttawa Tennis Court</h3>
              <p>78 University of Ottawa Rd. K1S 2B3</p>
              <button className="courtButton" onClick={() => {toCourtPage(3)}}>Visit Court</button>
              </div>
            }
            { (filtered == "" ||
              (filtered.includes("eve") || filtered.includes("public") || filtered.includes("clay") || filtered.includes("busy") || filtered.includes("hasLights")) && // parameters it can be searched by
              (!filtered.includes("aft") && !filtered.includes("morn") && !filtered.includes("private") && !filtered.includes("noLights") && !filtered.includes("grass") && !filtered.includes("asphalt") && !filtered.includes("somewhatBusy") && !filtered.includes("empty")) // parameters that would remove it from the search
            ) && 
            <div className="courts">
              <h3>Rideau Tennis Court</h3>
              <p>910 Rideau St. K1S 4C6</p>
              <button className="courtButton" onClick={() => {toCourtPage(4)}}>Visit Court</button>
              </div>
            }
            <p>If you see no courts, there are no courts that match your given parameters! Try switching it up!</p>
          </div>
        </div>
      </div>
  
      
    );
}