  function Tabel(props) {
      const menus=props.menu;
      const title=props.title;
      return (
        <div className="App">
            <h1>{title}</h1>
            <table>
                <tr>
                    <th>Menu</th>
                    <th>Harga</th>
                </tr>
            </table>
        <div>
            {menus.map((data)=>(
                <tr key={data.idmenu}>
                    <td>{data.menu}</td>
                    <td>{data.harga}</td>
                </tr>
            ))}
        </div>
        </div>
      );
      
    }
    
    export default Tabel;