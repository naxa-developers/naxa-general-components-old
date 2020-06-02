import React, { Component, Children } from 'react';
import './table.scss';

export function TableHeader({ dataField, dataFormat }) {
  return <div dataField={dataField} data={dataFormat} />;
}

export default class Table extends Component {
  getFields = () => {
    const numberOfChildren = Children.count(this.props.children);
    if (numberOfChildren > 0) {
      const fields = Children.map(
        this.props.children,
        (child) => child.props.dataField
      );

      return fields;
    }
    return Object.keys(this.props.data[0]);
  };

  getCellData = (row, field) => {
    const numberOfChildren = Children.count(this.props.children);
    if (numberOfChildren > 0) {
      const tableChildren = Children.toArray(this.props.children);
      const tableChildWithSameFieldAndDataForma = tableChildren.find(
        (child) =>
          child.props.dataField === field &&
          child.props.hasOwnProperty('dataFormat')
      );

      if (!!tableChildWithSameFieldAndDataForma) {
        return tableChildWithSameFieldAndDataForma.props.dataFormat(
          row,
          row[field]
        );
      }

      return row[field];
    }

    return row[field];
  };

  renderHeader = () => {
    const fields = this.getFields();

    return fields.map((field, index) => {
      return <th key={field}>{field.toUpperCase()}</th>;
    });
  };

  renderRow = () => {
    const items = this.props.data;
    const fields = this.getFields();
    return items.map((row, index) => {
      return (
        <tr key={index}>
          {fields.map((field) => {
            return <td key={row[field]}>{this.getCellData(row, field)}</td>;
          })}
        </tr>
      );
    });
  };

  render() {
    return (
      <div>
        <table>
          <thead>
            <tr>{this.renderHeader()}</tr>
          </thead>
          <tbody>{this.renderRow()}</tbody>
        </table>
      </div>
    );
  }
}
