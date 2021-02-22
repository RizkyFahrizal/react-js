function ListSiswa(props) {
  const siswa=props.judul.map((item,key)=> <li key={key}>{item}</li>)
    return (
      <div className="App">
        <ul>{siswa}</ul>
      </div>
    );
  }
  
  export default ListSiswa;

  