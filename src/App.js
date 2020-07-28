import React from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import StudentData from "./components/data/StudentData";
import TableView from "./components/TableView";
import ChartAvg from "./components/ChartAvg";
import Details from './components/Details'
import StudentView from './components/StudentView'
import StudentDetails from './components/StudentDetails'

class App extends React.Component {
 

  getAssignments = () => {
    const studentData = StudentData;
    let assignment = [];
    const map = new Map();
    for (const item of studentData) {
      if (!map.has(item.assignment)) {
        map.set(item.assignment, true);
        assignment.push({ assignment: item.assignment });
      }
    }

    return assignment;
  };


  getAllNames = () => {

    let names = [];
    const map = new Map();
    for (const item of StudentData) {
      if (!map.has(item.name)) {
        map.set(item.name, true);
        names.push({ name: item.name, id: item.id });
      }
    }

    return names;
  };

  

  
  // verkrijg hier de namen van de assigment en koppel met difficult en enjoy average
  getNames = () => {
    let assignments = this.getAssignments();
    let assignmentsWithData = assignments.map((ass) => {
      let data = {};

      data = StudentData.filter((i) => {
        return ass.assignment === i.assignment;
      });

      const getDataLength = data.length;


      let difficultyRating = data
        .map((d) => {
          return parseInt(d.difficultyRating);
        })
        .reduce((a, b) => a + b, 0);
      difficultyRating = Math.round(difficultyRating / getDataLength);
      let enjoymentRating = data
        .map((e) => {
          return parseInt(e.enjoymentRating);
        })
        .reduce((a, b) => a + b, 0);
      enjoymentRating = Math.round(enjoymentRating / getDataLength);
      return {
        assignment: ass.assignment,
        difficultyRating: difficultyRating,
        enjoymentRating: enjoymentRating,


      };
    });
    return assignmentsWithData;
  };

  


  render() {


    return (
      <Router>
        <div>
          <nav>
            <ul className="nav-ul">
              <li>
                <Link to="/">Home</Link>
              </li>
              <li>
                <Link to="/tableview">Table view</Link>
              </li>
              <li>
                <Link to="/studentview">Student view</Link>
              </li>
      
            </ul>
          </nav>
          <main>
            <Switch>
              <Route path="/tableview">
                <TableView getAllNames={this.getAllNames} />
              </Route>

              <Route path="/studentview" exact>
                <StudentView getAllNames={this.getAllNames} />
              </Route>
              
              
              <Route path="/studentview/:name" render={(props) => <StudentDetails getNames={this.getNames}  {...props}/>}/>
             


              <Route path="/details">
              <div className="button-container">
                <Link to="/"><button>Overview</button></Link>
                </div>

                <Details
                  getAssignments={this.getAssignments}
                  getAverage={this.getAverage}
                  getNames={this.getNames}
                />
              </Route>
              <Route path="/">
              <div className="button-container">
        
              <Link to="/Details"><button>Detailed view</button></Link>
                 </div>
                <ChartAvg
                  getAssignments={this.getAssignments}
                  getAverage={this.getAverage}
                  getNames={this.getNames}
                />
              </Route>
              
            </Switch>
          </main>
        </div>
      </Router>
    );
  }
}

export default App;
