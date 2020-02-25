import { Col, Form, Icon, Layout, Row, Select, Tabs, Typography } from 'antd';
import fetch from 'isomorphic-unfetch'
import { NextPageContext } from 'next';
import { useRouter } from 'next/router'
import { useState, useEffect } from 'react'

import SimplePie from '../components/SimplePie'
import SimpleBars from '../components/SimpleBars'
import SunburstTab from '../components/SunburstTab'
import { AutoSizer } from 'react-virtualized';

const { Content, Header } = Layout;
const { Option } = Select;
const { TabPane } = Tabs;
const { Title } = Typography;

const MainPage = ({ year, type, index }: any) => {
  const router = useRouter()
  const [authorities, setAuthorities] = useState([])
  const [pieData, setPieData] = useState([])
  const [barsData, setBarsData] = useState([])

  const fetchJson = async (url: string, callback: any) => {
    const res = await fetch(url)
    const results = await res.json()
    callback(results)
  }

  useEffect(() => {
    const entriesUrl = `/api/authorities?year=${year}&type=${type}`
    fetchJson(entriesUrl, setAuthorities)

    if(index) {
      const pieDataUrl = `/api/authority?year=${year}&ndept=${index}`
      fetchJson(pieDataUrl, setPieData)

      const barsDataUrl = `/api/authority?ndept=${index}`
      fetchJson(barsDataUrl, setBarsData)
    }
  }, [year, type, index])

  const changeRoute = ({y=year, t=type, id=index}) => {
    if (y && t && id) {
      router.push('/[type]/[year]/[index]', `/${t}/${y}/${id}`)
    }
    else if (y && t) {
      router.push('/[type]/[year]', `/${t}/${y}`)
    }
  }

  const AuthoritiesSelect = index && authorities ?
    <Select
      className="full-width"
      defaultValue={index}
      onChange={(newIndex: string) => changeRoute({id: newIndex})}
    >
      {
        authorities.map((authority: any) => (
          <Option key={authority.ndept} value={authority.ndept}>{authority.ndept}</Option>
        ))
      }
    </Select> :
    <Select className="full-width" disabled ></Select>

  return (
    <Layout className="page-layout">
      <Header>
        <Title level={2}>Recettes des Collectivités Territoriales</Title>
      </Header>
      <Layout>
        <Content id="main-container">
          <div style={{margin: "5px 0px"}}>
            <Row type="flex" justify="space-around">
              <Col span={6}>
                <Form>
                  <Form.Item label="Collectivité">
                    <Select
                      disabled
                      className="full-width"
                      defaultValue={type}
                      onChange={(newType: string) => changeRoute({t: newType})}
                    >
                      <Option value="r" disabled>Régions</Option>
                      <Option value="d">Départements</Option>
                      <Option value="c" disabled>Communes</Option>
                    </Select>
                  </Form.Item>
                </Form>
              </Col>
              <Col span={6}>
                <Form>
                  <Form.Item label="Année">
                    <Select
                      className="full-width"
                      defaultValue={year}
                      onChange={(newYear: number) => changeRoute({y: newYear})}
                    >
                      <Option value="2016">2016</Option>
                      <Option value="2017">2017</Option>
                      <Option value="2018">2018</Option>
                    </Select>
                  </Form.Item>
                </Form>
              </Col>
              <Col span={6}>
                <Form>
                  <Form.Item label="Authorité">
                    {AuthoritiesSelect}
                  </Form.Item>
                </Form>
              </Col>
            </Row>
          </div>
          <div className="card-container">
            <Tabs defaultActiveKey="simple">
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