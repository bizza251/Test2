import React from "react";
import lista from "../data/listaVini";

const keys = Object.keys(lista[0]);

function ObjectToArray(elem) {
  let array = [];
  for (const key in elem) {
    array.push(elem[key]);
  }
  console.log(array);
  return array;
}

export default function DataTable() {
  console.log(keys);
  return (
    <div className="table-responsive">
      <table class="table table-hover">
        <thead>
          <tr>
            <th scope="col">#</th>
            <th scope="col">Nome</th>
            <th scope="col">Annata</th>
            <th scope="col">Tipo</th>
          </tr>
        </thead>
        <tbody>
          {lista.map((rowElem) => {
            return (
              <tr>
                <th scope="row">{rowElem[keys[0]]}</th>
                {ObjectToArray(rowElem).splice(1).map((field) => {
                    return(<td>
                        {field}
                    </td>)
                })}
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
}
