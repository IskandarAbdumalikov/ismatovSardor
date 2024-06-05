import React from "react";
import "./table.scss"

const Table = () => {
  return (
    <div className="table container">
      <h1>My classmates</h1>
      <hr />
      <div className="table__wrapper">
        <table>
          <thead>
            <tr>
              <th>Sinfdoshlar soni</th>
              <th>Sinfdoshlar ismlari</th>
              <th>Sinfdoshlar yoshlari</th>
              <th>Sinfdoshlar tug`ilgan kunlari</th>
              <th>Sinfdoshlar contactlari</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>1</td>
              <td>Nazokat</td>
              <td>17</td>
              <td>2007</td>
              <td>Ma`lum emas</td>
            </tr>
            <tr>
              <td>2</td>
              <td>Iskandar</td>
              <td>17</td>
              <td>2007</td>
              <td>+998882784041</td>
            </tr>
            <tr>
              <td>3</td>
              <td>Shahriyor</td>
              <td>17</td>
              <td>2007</td>
              <td>Ma`lum emas</td>
            </tr>
            <tr>
              <td>4</td>
              <td>Husnora</td>
              <td>17</td>
              <td>2007</td>
              <td>Ma`lum emas</td>
            </tr>
            <tr>
              <td>5</td>
              <td>Sardor</td>
              <td>17</td>
              <td>2007</td>
              <td>+998944392279</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Table;
