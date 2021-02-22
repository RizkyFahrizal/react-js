import ListSiswa from './ListSiswa';
const nama=['jono','joni','jeno'];
  function Siswa() {
      return (
        <div className="App">
        <ListSiswa judul={nama} />
        </div>
      );
      
    }
    
    export default Siswa;