import { useState } from 'react';
import Tabel from "./Tabel";

  function Menu() {
      const  title="Daftar Menu Restoran";
      const [menus,setMenu]=useState(
        [
            {
                idmenu:10,
                idkategori:1,
                menu:"jeruk manis",
                gambar:"jeruk.jpg",
                harga:5000
            },
            {
                idmenu:11,
                idkategori:33,
                menu:"apel",
                gambar:"apel.jpg",
                harga:6000
            },
            {
                idmenu:12,
                idkategori:33,
                menu:"melon",
                gambar:"melon.jpg",
                harga:10000
            },
            {
                idmenu:13,
                idkategori:33,
                menu:"buah naga",
                gambar:"buahnaga.jpg",
                harga:11000
            },
            {
                idmenu:14,
                idkategori:46,
                menu:"pisang",
                gambar:"pisang.jpg",
                harga:3000
            },
            {
                idmenu:16,
                idkategori:31,
                menu:"burger",
                gambar:"burger.jpg",
                harga:15000
            },
        ]
      );
      return (
        <div className="App">
<Tabel menu={menus} title={title}/>
<Tabel menu={menus.filter((data)=> (data.idkategori===1))} title="Menu Buah"/>
        </div>
      );
    }
    export default Menu;