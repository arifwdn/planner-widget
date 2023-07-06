import { useState, useEffect } from "react";

export default function MyCustomWidget() {
  const [prayData, setPrayData] = useState(null);
  let date = new Date();
  date = date.toISOString().split("T")[0];
  date = date.split("-");
  let wilayah = 2110;
  const api = "https://api.myquran.com/v1/sholat/jadwal/";
  const getData = () => {
    fetch(api + wilayah + "/" + date[0] + "/" + date[1] + "/" + date[2], {
      method: "GET",
    })
      .then((res) => res.json())
      .then((res) => {
        console.log(res.data);
        setPrayData(res.data);
      });
  };
  useEffect(() => {
    getData();
  }, []);
  return (
    <div>
      <h6>
        Sholat Time <br />
        {prayData.lokasi}
      </h6>
      <table
        border={1}
        style={{
          border: "solid 1px white",
          width: "100%",
          borderCollapse: "collapse",
        }}>
        <tr>
          <td>Tanbih </td>
          <td>{prayData.jadwal.imsak}</td>
        </tr>
        <tr>
          <td>Subuh </td>
          <td>{prayData.jadwal.subuh}</td>
        </tr>
        <tr>
          <td>Isyraq </td>
          <td>{prayData.jadwal.terbit}</td>
        </tr>
        <tr>
          <td>Dhuha </td>
          <td>{prayData.jadwal.dhuha}</td>
        </tr>
        <tr>
          <td>Dzhuhr </td>
          <td>{prayData.jadwal.dzuhur}</td>
        </tr>
        <tr>
          <td>Ashr </td>
          <td>{prayData.jadwal.ashar}</td>
        </tr>
        <tr>
          <td>Maghrib </td>
          <td>{prayData.jadwal.maghrib}</td>
        </tr>
        <tr>
          <td>Isya </td>
          <td>{prayData.jadwal.isya}</td>
        </tr>
      </table>
    </div>
  );
}
