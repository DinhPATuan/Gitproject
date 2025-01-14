function Info () {
  const students = [{
      id: "1",
      name: "Nguyễn Văn A",
      age: "30",
      address: "Hà Nội"
    }];
    return (
      <div>
        <table>
          <thead>
            <tr>
            <th>ID</th>
            <th>Name</th>
            <th>Age</th>
            <th>Address</th>
          </tr>
          </thead>
          <tbody>
            {students.map(student =>(
            <tr key={student.id}>
              <td>{student.id}</td>
              <td>{student.name}</td>
              <td>{student.age}</td>
              <td>{student.address}</td>
            </tr>    
            ))}
          </tbody>
        </table>
      </div>
    );
}

export default Info;