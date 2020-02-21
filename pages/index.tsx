import { Col, Icon, Layout, Row, Select, Tabs, Typography } from 'antd';
import fetch from 'isomorphic-unfetch'
import { NextPageContext } from 'next';
import { useRouter } from 'next/router'
import { useState, useEffect } from 'react'

import SimplePie from '../components/SimplePie'
import SimpleBars from '../components/SimpleBars'
import SunburstTab from '../components/SunburstTab'
import EntryList from '../components/EntryList'
import { AutoSizer } from 'react-virtualized';

const { Content, Sider } = Layout;
const { Option } = Select;
const { TabPane } = Tabs;
const { Title } = Typography;

const MainPage = ({ year, type, index }: any) => {
  const router = useRouter()
  const [authorities, setAuthorities] = useState([])
  const [pieData, setPieData] = useState([])
  const [barsData, setBarsData] = useState([])
  const protocol = 'http'
  const host = 'localhost:3000'

  const fetchJson = async (url: string, callback: any) => {
    const res = await fetch(url)
    const results = await res.json()
    callback(results)
  }

  useEffect(() => {
    const entriesUrl = `${protocol}://${host}/api/authorities?year=${year}&type=${type}`
    fetchJson(entriesUrl, setAuthorities)

    if(index) {
      const pieDataUrl = `${protocol}://${host}/api/authority?year=${year}&ndept=${index}`
      fetchJson(pieDataUrl, setPieData)

      const barsDataUrl = `${protocol}://${host}/api/authority?ndept=${index}`
      fetchJson(barsDataUrl, setBarsData)
    }
  }, [year, type, index])

  const changeRoute = ({y=year, t=type, id=index}) => {
    if (y && t && id) {
      router.push('/[year]/[type]/[index]', `/${y}/${t}/${id}`)
    }
    else if (y && t) {
      router.push('/[year]/[type]', `/${y}/${t}`)
    }
  }

  return (
    <Layout className="page-layout">
      <Sider
        breakpoint="md"
        collapsedWidth="0"
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
              onChange={(newYear: number) => changeRoute({y: newYear})}
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
              onChange={(newType: string) => changeRoute({t: newType})}
            >
              <Option value="r" disabled>Régions</Option>
              <Option value="d">Départements</Option>
              <Option value="c" disabled>Communes</Option>
            </Select>
          </Col>
        </Row>
        <Row gutter={[0, 8]}>
          <Col span={24}>
            <EntryList
              entries={authorities}
              callback={(newIndex: number) => changeRoute({id: newIndex})}
            />
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
                <AutoSizer style={{height: '80vh'}}>
                  {({ height, width }) => (
                    <>
                      <SimplePie
                        data={pieData}
                        height={height}
                        width={width}
                      />
                      <SimpleBars
                        data={barsData}
                        height={height}
                        width={width}
                      />
                    </>
                  )}
                </AutoSizer>
              </TabPane>
              <TabPane
                key="advanced"
                tab={
                  <span>
                    <Icon type="thunderbolt" />
                    Vue avancée
                  </span>
                }
              >
                <SunburstTab />
              </TabPane>
            </Tabs>
          </div>
        </Content>
      </Layout>
    </Layout>
  )
}

MainPage.getInitialProps = async ({ query }: NextPageContext) => {
  console.log(query)

  // console.log(req)
  // let protocol = req
  //   ? `${req.headers['x-forwarded-proto']}:`
  //   : location.protocol
  // let host = req ? req.headers['x-forwarded-host'] : location.host

  // // TODO: fix
  // protocol = 'http'
  // host = 'localhost:3000'

  const year = query.year || 2018
  const type = query.type || 'd'
  const index = query.index || undefined

  return {
    year,
    type,
    index
  }
}

export default MainPage