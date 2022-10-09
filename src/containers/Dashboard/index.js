import React from 'react'
import 'semantic-ui-css/semantic.min.css'
import { Container, Grid, Header } from 'semantic-ui-react'

import { getLogEntries } from '../../api/LogEntryAPI'
import AppSidebar from '../../components/AppSidebar'
import AppTable from '../../components/AppTable'
import './index.css'

const Dashboard = () => {
  const [data, setData] = React.useState([])

  React.useEffect(() => {
    const fetchData = async () => {
      const result = await getLogEntries('logs')
      setData(result.logs)
    }
    fetchData()
  }, [])

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
              <AppTable dataset={data} />
            </div>
          </div>
        </div>
      </Container>
    </div>
  )
}

export default Dashboard
