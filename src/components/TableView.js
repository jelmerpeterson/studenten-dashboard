import React from "react";
import StudentData from "./data/StudentData";

class TableView extends React.Component {
  render() {
    const data = this.props.getAllNames();

    const selectedStudents = data.map((item) => {
      return <option value={item.name}>{item.name}</option>;
    });

    let studentDataMap = StudentData.map((item) => {
      return (
        <tr>
          <td>{item.name}</td>
          <td>{item.assignment}</td>
          <td>{item.difficultyRating}</td>
          <td>{item.enjoymentRating}</td>
        </tr>
      );
    });

    return (
      <div className="tableView">
        <h3 className="table-h3">Studenten scores</h3>
        <br />
        <div className="filter-table">
          <span>filter studenten</span>
          <select>{selectedStudents}</select>
        </div>
        <table>
          <thead>
            <th>Naam</th>
            <th>Opdracht</th>
            <th>Moeilijkheid</th>
            <th>Leukheid</th>
          </thead>
          <tbody>{studentDataMap}</tbody>
        </table>
      </div>
    );
  }
}

export default TableView;
