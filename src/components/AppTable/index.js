import PropTypes from 'prop-types'
import React from 'react'
import { Table } from 'semantic-ui-react'

const AppTable = ({ dataset }) => {
  const rows = dataset
    .slice(0)
    .reverse()
    .map((row, index) => {
      const level = row.level.toUpperCase() || 'INFO'

      return (
        <Table.Row key={index}>
          <Table.Cell>{index}</Table.Cell>
          <Table.Cell>{row.id}</Table.Cell>
          <Table.Cell>{row.created_at}</Table.Cell>
          <Table.Cell>{row.message}</Table.Cell>
          <Table.Cell>{row.raw}</Table.Cell>
          <Table.Cell
            positive={level === 'INFO'}
            negative={level === 'ERROR' || level === 'CRITICAL'}
            warning={level === 'WARNING'}
          >
            {level}
          </Table.Cell>
          <Table.Cell>{row.source}</Table.Cell>
        </Table.Row>
      )
    })

  return (
    <Table celled selectable>
      <Table.Header>
        <Table.Row>
          <Table.HeaderCell>#</Table.HeaderCell>
          <Table.HeaderCell>Reference ID</Table.HeaderCell>
          <Table.HeaderCell>Created At</Table.HeaderCell>
          <Table.HeaderCell>Message</Table.HeaderCell>
          <Table.HeaderCell>Raw</Table.HeaderCell>
          <Table.HeaderCell>Level</Table.HeaderCell>
          <Table.HeaderCell className="source-col">Source</Table.HeaderCell>
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
