import {
  faChevronLeft,
  faChevronRight,
} from "@fortawesome/free-solid-svg-icons";
import React from "react";
import CoopButton from "../form/button/button.component";
import { tableList } from "./table.data";
import { tableHeaderList } from "./tableHeaderList.data";

export default function TableComp() {
  return (
    <div className="pt-4">
      <table
        className="table table-reponsive"
        data-bs-show-header="true"
        data-bs-pagination="true"
        data-bs-id-field="name"
        data-bs-page-list="[5, 10, 25, 50, 100, ALL]"
        data-bs-page-size="5"
      >
        <thead className="px-5">
          <tr className="pl-5">
            {tableHeaderList?.map((item: any, index: any) => (
              <th
                scope="col"
                key={index}
                className="custom-tblHeader justify-content-right secondary-text"
              >
                {item.name}
              </th>
            ))}
          </tr>
        </thead>
        <tbody className="px-5">
          {tableList?.map((item: any, index: any) => (
            <tr className="secondary-text">
              <td key={index} className="pl-5">
                {item.id}
              </td>
              <td>{item.txnId}</td>
              <td>{item.txnType}</td>
              <td>{item.sourceBank}</td>
              <td>{item.sourceName}</td>
              <td>{item.destinationBank}</td>
              <td>{item.destinationName}</td>
              <td>{item.account}</td>
              <td>{item.serviceCharge}</td>
            </tr>
          ))}
          {/* <tr>
            <th scope="row">2</th>
            <td>Jacob</td>
            <td>Thornton</td>
            <td>@fat</td>
          </tr>
          <tr>
            <th scope="row">3</th>
            <td colSpan={2}> Larry the Bird</td>
            <td>@twitter</td>
          </tr> */}
        </tbody>
      </table>
      <div className="d-flex justify-content-between px-5">
        <p className="m-0 secondary-text">Showing 1 to 10 of 32 entries</p>
        <div className="d-flex">
          <CoopButton
            btnName="Previous"
            className="button-paginate secondary-text px-3"
            hasIcon1
            icon1={faChevronLeft}
          />
          <p className="px-2">1</p>
          <p className="px-2">2</p>
          <p className="px-2">3</p>
          <CoopButton
            btnName="Next"
            className="button-paginate secondary-text px-3"
            hasIcon2
            icon2={faChevronRight}
          />
        </div>
      </div>
    </div>
  );
}
