import PropTypes from 'prop-types'
import React from 'react'
import { Table } from 'semantic-ui-react'

const AppTable = ({ dataset }) => {
  const rows = dataset.map((row, index) => {
    return (
      <Table.Row key={index}>
        <Table.Cell>{row.id}</Table.Cell>
        <Table.Cell>{row.created_at}</Table.Cell>
        <Table.Cell>{row.message}</Table.Cell>
        <Table.Cell>{row.raw}</Table.Cell>
        <Table.Cell
          positive={row.level === 'INFO'}
          negative={row.level === 'ERROR'}
          warning={row.level === 'WARNING'}
        >
          {row.level}
        </Table.Cell>
        <Table.Cell>{row.source}</Table.Cell>
      </Table.Row>
    )
  })

  return (
    <Table celled selectable>
      <Table.Header>
        <Table.Row>
          <Table.HeaderCell>ID</Table.HeaderCell>
          <Table.HeaderCell>Created At</Table.HeaderCell>
          <Table.HeaderCell>Message</Table.HeaderCell>
          <Table.HeaderCell>Raw</Table.HeaderCell>
          <Table.HeaderCell>Level</Table.HeaderCell>
          <Table.HeaderCell>Source</Table.HeaderCell>
        </Table.Row>
      </Table.Header>
      <Table.Body>{rows}</Table.Body>
    </Table>
  )
}

AppTable.propTypes = {
  dataset: PropTypes.array.isRequired
}

export default AppTable
