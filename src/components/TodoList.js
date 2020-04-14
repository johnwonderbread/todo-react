import React, { Component } from "react";
import { Table } from "reactstrap";

import ConfirmRemovalModal from "./ConfirmRemovalModal";
import NewListModal from "./NewListModal";

class TodoList extends Component {
  render() {
    const lists = this.props.lists;
    return (
      <Table dark>
        <thead>
          <tr>
            <th>User</th>
            <th>Task</th>
            <th>Due Date</th>
            <th></th>
          </tr>
        </thead>
        <tbody>
          {!lists || lists.length <= 0 ? (
            <tr>
              <td colSpan="6" align="center">
                <b>Oops, no one here yet</b>
              </td>
            </tr>
          ) : (
            lists.map(list => (
              <tr key={list.id}>
                <td>{list.user}</td>
                <td>{list.item}</td>
                <td>{list.duedate}</td>
                <td align="center">
                  <NewListModal
                    create={false}
                    list={list}
                    resetState={this.props.resetState}
                  />
                  &nbsp;&nbsp;
                  <ConfirmRemovalModal
                    id={list.id}
                    resetState={this.props.resetState}
                  />
                </td>
              </tr>
            ))
          )}
        </tbody>
      </Table>
    );
  }
}

export default TodoList;
