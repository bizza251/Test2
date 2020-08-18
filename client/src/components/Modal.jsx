import React, { useState } from "react";

function saveChanges() {}

export default function Modal(props) {
  const [vino, setVino] = useState(props.value);

  function updateValue(event) {
    const { name, value } = event.target;
    setVino((prevValue) => {
      if (name === "id") {
        return {
          id: value,
          nome: prevValue.nome,
          annata: prevValue.annata,
          tipo: prevValue.tipo,
        };
      } else if (name === "nome") {
        return {
          id: prevValue.id,
          nome: value,
          annata: prevValue.annata,
          tipo: prevValue.tipo,
        };
      }else if (name === "annata") {
        return {
          id: prevValue.id,
          nome: prevValue.nome,
          annata: value,
          tipo: prevValue.tipo,
        };
      }else if (name === "tipo") {
        return {
          id: prevValue.id,
          nome: prevValue.nome,
          annata: prevValue.annata,
          tipo: value,
        };
      }
    });
  }

  return (
    <div>
      <button
        type="button"
        className="btn btn-primary"
        data-toggle="modal"
        data-target={"#" + props.id}
        // onClick={() => console.log(props)}
      >
        {props.btnText}
      </button>
      <div
        className="modal fade"
        id={props.id}
        tabIndex="-1"
        role="dialog"
        aria-labelledby="exampleModalCenterTitle"
        aria-hidden="true"
      >
        <div
          className="modal-dialog modal-lg modal-dialog-centered"
          role="document"
        >
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title" id="exampleModalLongTitle">
                {props.title}
              </h5>
              <button
                type="button"
                className="close"
                data-dismiss="modal"
                aria-label="Close"
              >
                <span aria-hidden="true">&times;</span>
              </button>
            </div>
            <div className="modal-body">
              {/* {renderInfo(props.value, Object.keys(props.value))} */}
              <div className="container">
                <div className="d-flex justify-contend-between row">
                  <div className="col-2">
                    <label>Id</label>
                  </div>
                  <div className="col-4">
                    <input name="id" value={vino.id} onChange={updateValue} />
                  </div>
                  <div className="col-2">
                    <label>Nome</label>
                  </div>
                  <div className="col-4">
                    <input
                      name="nome"
                      value={vino.nome}
                      onChange={updateValue}
                    />
                  </div>
                  <div className="col-2">
                    <label>Annata</label>
                  </div>
                  <div className="col-4">
                    <input
                      name="annata"
                      value={vino.annata}
                      onChange={updateValue}
                    />
                  </div>
                  <div className="col-2">
                    <label>Tipo</label>
                  </div>
                  <div className="col-4">
                    <input
                      name="tipo"
                      value={vino.tipo}
                      onChange={updateValue}
                    />
                  </div>
                </div>
              </div>
            </div>
            <div className="modal-footer">
              <button
                type="button"
                className="btn btn-secondary"
                data-dismiss="modal"
              >
                Close
              </button>
              <button
                type="button"
                className="btn btn-primary"
                onClick={(event) => saveChanges()}
              >
                Save changes
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
