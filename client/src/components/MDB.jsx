import React from "react";
//import vini from "../data/vini.json";
import lista from "../data/listaVini";
import Modal from "./Modal";
import ObjectToArray from "../functions/ObjectToArray"


function createRow(rowElem) {
  return (
    <tr>
      <td>
        <Modal
          key={rowElem.id}
          id={"infoWine"+rowElem.id}
          btnText="Edit"
          title="Edit Wine"
          value={rowElem}
        ></Modal>
      </td>
      {ObjectToArray(rowElem).map((rowAttr) => {
        return <td>{rowAttr}</td>;
      })}
    </tr>
  );
}

export default function MDB() {
  return (
    <div>
      <table
        className="table table-striped"
        data-id-field="id"
        data-sortable="true"
        data-search="true"
        data-pagination="true"
      >
        <thead className="thead-dark">
          <tr>
            <th className="col-md-1">Edit</th>
            <th
              className="col-md-1"
              data-field="id"
              data-sortable="true"
              data-align="center"
            >
              ID
            </th>
            <th
              className="col-md-1"
              data-field="nome"
              data-sortable="true"
              data-align="center"
            >
              Nome
            </th>
            <th className="col-md-4" data-field="name">
              Anno
            </th>
            <th className="col-md-7" data-field="description">
              Tipo
            </th>
          </tr>
        </thead>
        <tbody>{lista.map(createRow)}</tbody>
      </table>
    </div>
  );
}
