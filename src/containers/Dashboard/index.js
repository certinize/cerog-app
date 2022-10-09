import React from 'react'
import 'semantic-ui-css/semantic.min.css'
import { Container, Grid, Header } from 'semantic-ui-react'

import AppSidebar from '../../components/AppSidebar'
import AppTable from '../../components/AppTable'
import './index.css'

const Dashboard = () => {
  // create a dataset, multiple items by 100
  // randomize level

  const uuidv4 = () => {
    return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(
      /[xy]/g,
      function (c) {
        const r = (Math.random() * 16) | 0
        const v = c === 'x' ? r : (r & 0x3) | 0x8
        return v.toString(16)
      }
    )
  }

  const dataset = []
  for (let i = 0; i < 100; i++) {
    dataset.push({
      id: uuidv4(),
      created_at: new Date().toISOString(),
      message: 'This is a message',
      raw: 'This is a raw message',
      level: ['INFO', 'WARNING', 'ERROR'][Math.floor(Math.random() * 3)],
      source: 'This is a source'
    })
  }

  return (
    <div>
      <Header as="h1">Header</Header>
      <AppSidebar />
      <Container>
        <div className="dashboard">
          <div className="dashboard__content">
            <Grid>
              <Grid.Row>
                <Grid.Column width={16}>
                  <div className="dashboard__content__body">
                    <div className="dashboard__content__body__header">
                      <h1>Logs</h1>
                    </div>
                  </div>
                </Grid.Column>
              </Grid.Row>
            </Grid>
            <div className="app-table">
              <AppTable dataset={dataset} />
            </div>
          </div>
        </div>
      </Container>
    </div>
  )
}

export default Dashboard
