import { useState, useEffect } from "react";

export default function MyCustomWidget() {
  const [prayData, setPrayData] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const getData = () => {
    setIsLoading(true);
    let date = new Date();
    date = date.toISOString().split("T")[0];
    date = date.split("-");
    let wilayah = 2110;
    const api = "https://api.myquran.com/v1/sholat/jadwal/";
    fetch(`${api}/${wilayah}/${date[0]}/${date[1]}/${date[2]}`)
      .then((response) => response.json())
      .then((data) => {
        setPrayData(data.data);
        setIsLoading(false);
      });
  };
  useEffect(() => getData(), []);

  if (isLoading) {
    return <p>Getting Data ...</p>;
  }
  return (
    <div style={{ width: 400 }}>
      <h6>
        Waktu Shalat
        {prayData.length !== 0 ? prayData.lokasi : "Not found"} dan sekitarnya
      </h6>
      <table
        border={0}
        style={{
          fontSize: 20,
          width: "100%",
          borderCollapse: "collapse",
        }}
      >
        <tr>
          <td>Tanbih </td>
          <td>{prayData.length !== 0 ? prayData.jadwal.imsak : "Not Found"}</td>
        </tr>
        <tr>
          <td>Subuh </td>
          <td>{prayData.length !== 0 ? prayData.jadwal.subuh : "Not Found"}</td>
        </tr>
        <tr>
          <td>Isyraq </td>
          <td>
            {prayData.length !== 0 ? prayData.jadwal.terbit : "Not Found"}
          </td>
        </tr>
        <tr>
          <td>Dhuha </td>
          <td>{prayData.length !== 0 ? prayData.jadwal.dhuha : "Not Found"}</td>
        </tr>
        <tr>
          <td>Dzhuhr </td>
          <td>
            {prayData.length !== 0 ? prayData.jadwal.dzuhur : "Not Found"}
          </td>
        </tr>
        <tr>
          <td>Ashr </td>
          <td>{prayData.length !== 0 ? prayData.jadwal.ashar : "Not Found"}</td>
        </tr>
        <tr>
          <td>Maghrib </td>
          <td>
            {prayData.length !== 0 ? prayData.jadwal.maghrib : "Not Found"}
          </td>
        </tr>
        <tr>
          <td>Isya </td>
          <td>{prayData.length !== 0 ? prayData.jadwal.isya : "Not Found"}</td>
        </tr>
      </table>
    </div>
  );
}
