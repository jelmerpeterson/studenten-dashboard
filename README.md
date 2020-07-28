# studenten-dashboard

import React from "react";
import StudentData from "./StudentData";

const StudentDetails = ({match}) => {
console.log(match.params.name)

let studentDataMap = StudentData.filter((item) => {
return item.name === match.params.name
})
.map((item) => {
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
<div>
{/_ <StudentView /> _/}
<div className="tableView">
<h3 className="table-h3">Studenten scores</h3>
<br />

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
    </div>

);
};

export default StudentDetails;
# studenten-dashboard
