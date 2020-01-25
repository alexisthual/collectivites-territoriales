import fetch from 'isomorphic-unfetch'
import { Col, Icon, Input, Layout, List, Row, Select, Tabs, Typography } from 'antd';
import { useRouter } from 'next/router'
import { useState, useEffect } from 'react'

import SimpleTab from '../components/SimpleTab'

const { Search } = Input;
const { Content, Footer, Sider } = Layout;
const { Option } = Select;
const { TabPane } = Tabs;
const { Title } = Typography;

const data = [
  {name: "Ile de France"},
  {name: "Polynésie française"}
]

const MainPage = ({ entries, y, t }: any) => {
  const router = useRouter()
  const [year, setYear] = useState(y)
  const [type, setType] = useState(t)
  const [query, setQuery] = useState()

  const handleState = () => {
    if (year && type) {
      router.push('/[year]/[type]', `/${year}/${type}`)
    }
  }

  const yearChanged = (value) => {
    setYear(value)
  }

  const typeChanged = (value) => {
    setType(value)
  }

  const queryChanged = (value) => {
    setQuery(value)
  }

  useEffect(() => {
    if (year && type) {
      router.push('/[year]/[type]', `/${year}/${type}`)
    }
  }, [year, type])

  return (
    <Layout className="page-layout">
      <Sider
        breakpoint="md"
        collapsedWidth="0"
        onBreakpoint={broken => {
          console.log(broken);
        }}
        onCollapse={(collapsed, type) => {
          console.log(collapsed, type);
        }}
        width={250}
      >
        <Row gutter={[20, 12]}>
          <Col span={22} offset={1}>
            <Title className="app-title">Coolectivités</Title>
          </Col>
        </Row>
        <Row gutter={[0, 12]}>
          <Col span={22} offset={1}>
            <Select
              className="full-width"
              defaultValue={year}
              onChange={yearChanged}
            >
              <Option value="2015">2015</Option>
              <Option value="2016">2016</Option>
              <Option value="2017">2017</Option>
              <Option value="2018">2018</Option>
              <Option value="2019">2019</Option>
            </Select>
          </Col>
        </Row>
        <Row gutter={[0, 12]}>
          <Col span={22} offset={1}>
            <Select
              className="full-width"
              defaultValue={type}
              onChange={typeChanged}
            >
              <Option value="r" disabled>Régions</Option>
              <Option value="d">Départements</Option>
              <Option value="c" disabled>Communes</Option>
            </Select>
          </Col>
        </Row>
        <Row gutter={[0, 12]}>
          <Col span={22} offset={1}>
            <Search
              className="full-width"
              placeholder="Nom de la collectivité"
              value={query}
              onChange={queryChanged}
            />
          </Col>
        </Row>
        <Row gutter={[0, 8]}>
          <Col span={24}>
            <List
              dataSource={entries}
              renderItem={(item: any) => (
                <List.Item key={item.ndept}>
                  <List.Item.Meta
                    title={item.ndept}
                  />
                </List.Item>
              )}
            >
            </List>
          </Col>
        </Row>
      </Sider>
      <Layout>
        <Content style={{margin: "5px"}}>
          <div className="card-container">
            <Tabs defaultActiveKey="simple" type="card">
              <TabPane
                key="simple"
                tab={
                  <span>
                    <Icon type="bulb" />
                    Vue simple
                  </span>
                }
              >
                <SimpleTab />
              </TabPane>
              <TabPane
                disabled
                key="advanced"
                tab={
                  <span>
                    <Icon type="thunderbolt" />
                    Vue avancée
                  </span>
                }
              >
                Tab 2
              </TabPane>
            </Tabs>
          </div>
        </Content>
      </Layout>
    </Layout>
  )
}

MainPage.getInitialProps = async ({ req, query }) => {
  let protocol = req
    ? `${req.headers['x-forwarded-proto']}:`
    : location.protocol
  let host = req ? req.headers['x-forwarded-host'] : location.host

  // TODO: fix
  protocol = 'http'
  host = 'localhost:3000'

  const year = query.y || 2018
  const type = query.t || 'd'

  const entries = `${protocol}://${host}/api/entries?year=${year}&type=${type}`

  const res = await fetch(entries)
  const results = await res.json()

  return {
    entries: results.entries,
    y: year,
    t: type
  }
}

export default MainPage