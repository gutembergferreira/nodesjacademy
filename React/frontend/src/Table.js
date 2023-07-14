import React, { Component } from "react";
class Table extends Component {
  render() {
    return (
      <table>
        <thead>
          <tr>
            <th>Nome</th>
            <th>e-mail</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Natacsha</td>
            <td>nat@mail.com</td>
          </tr>
          <tr>
            <td>João</td>
            <td>joao@mail.com</td>
          </tr>
          <tr>
            <td>José</td>
            <td>jose@mail.com</td>
          </tr>
          <tr>
            <td>Anna</td>
            <td>anna@mail.com</td>
          </tr>
        </tbody>
      </table>
    );
  }
}
export default Table;
