import React from "react";

export default function Dashboard() {
  const dummyData = [
    { name: "shubham", dob: "21-10-2001", email: "shubh@test.com" },
    { name: "john doe", dob: "15-04-1995", email: "john@test.com" },
    { name: "jane smith", dob: "22-11-1988", email: "jane@test.com" },
    { name: "bob johnson", dob: "05-07-1990", email: "bob@test.com" },
    { name: "alice davis", dob: "19-03-1992", email: "alice@test.com" },
    { name: "michael brown", dob: "30-12-1985", email: "michael@test.com" },
    { name: "emily wilson", dob: "14-02-1993", email: "emily@test.com" },
    { name: "david clark", dob: "07-09-1991", email: "david@test.com" },
    { name: "sarah miller", dob: "25-06-1989", email: "sarah@test.com" },
    { name: "daniel lee", dob: "01-01-1987", email: "daniel@test.com" },
    { name: "emma thomas", dob: "10-05-1994", email: "emma@test.com" },
    { name: "emma thomas", dob: "10-05-1994", email: "emma@test.com" },
    { name: "emma thomas", dob: "10-05-1994", email: "emma@test.com" },
    { name: "emma thomas", dob: "10-05-1994", email: "emma@test.com" },
    { name: "emma thomas", dob: "10-05-1994", email: "emma@test.com" },
  ];

  return (
    <div className="flex justify-content-center align-items-center">
      <table className="table mx-2 my-4 w-75 ">
        <thead>
          <tr>
            <th>Name</th>
            <th>Date of Birth</th>
            <th>Email</th>
          </tr>
        </thead>
        <tbody>
          {dummyData.map((user, index) => (
            <tr key={index}>
              <td>{user.name}</td>
              <td>{user.dob}</td>
              <td>{user.email}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
