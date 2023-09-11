import { useState, useEffect } from "react";

export default function MyCustomWidget() {
  const [prayData, setPrayData] = useState([]);
  const getData = async () => {
    let date = new Date();
    date = date.toISOString().split("T")[0];
    date = date.split("-");
    let wilayah = 2110;
    const api = "https://api.myquran.com/v1/sholat/jadwal/";
    let response = await fetch(
      `${api}/${wilayah}/${date[0]}/${date[1]}/${date[2]}`
    );
    response = await response.json();
    await setPrayData(response.data);
  };
  useEffect(() => {
    getData();
  }, [prayData]);
  return (
    <div>
      <h6>
        Sholat Time <br />
        {prayData.lokasi !== undefined ? prayData.lokasi : "Not found"}
      </h6>
      <table
        border={1}
        style={{
          border: "solid 1px white",
          width: "100%",
          borderCollapse: "collapse",
        }}
      >
        <tr>
          <td>Tanbih </td>
          <td>
            {prayData.jadwal.imsak !== undefined
              ? prayData.jadwal.imsak
              : "Not Found"}
          </td>
        </tr>
        <tr>
          <td>Subuh </td>
          <td>
            {prayData.jadwal.subuh !== undefined
              ? prayData.jadwal.subuh
              : "Not Found"}
          </td>
        </tr>
        <tr>
          <td>Isyraq </td>
          <td>
            {prayData.jadwal.terbit !== undefined
              ? prayData.jadwal.terbit
              : "Not Found"}
          </td>
        </tr>
        <tr>
          <td>Dhuha </td>
          <td>
            {prayData.jadwal.dhuha !== undefined
              ? prayData.jadwal.dhuha
              : "Not Found"}
          </td>
        </tr>
        <tr>
          <td>Dzhuhr </td>
          <td>
            {prayData.jadwal.dzuhur !== undefined
              ? prayData.jadwal.dzuhur
              : "Not Found"}
          </td>
        </tr>
        <tr>
          <td>Ashr </td>
          <td>
            {prayData.jadwal.ashar !== undefined
              ? prayData.jadwal.ashar
              : "Not Found"}
          </td>
        </tr>
        <tr>
          <td>Maghrib </td>
          <td>
            {prayData.jadwal.maghrib !== undefined
              ? prayData.jadwal.maghrib
              : "Not Found"}
          </td>
        </tr>
        <tr>
          <td>Isya </td>
          <td>
            {prayData.jadwal.isya !== undefined
              ? prayData.jadwal.isya
              : "Not Found"}
          </td>
        </tr>
      </table>
    </div>
  );
}
