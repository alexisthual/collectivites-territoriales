import { Col, Icon, Input, Layout, List, Row, Select, Tabs, Typography } from 'antd';

import SimpleTab from '../components/SimpleTab'

const { Search } = Input;
const { Content, Footer, Sider } = Layout;
const { Option } = Select;
const { TabPane } = Tabs;
const { Title } = Typography;

const onChange = (event) => {
  console.log(event)
};

const handleChange = (value) => {
  console.log(value)
}

const data = [
  {name: "Ile de France"},
  {name: "Polynésie française"}
]

export default () => (
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
          <Select className="full-width" defaultValue="2019">
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
          <Select className="full-width" defaultValue="d">
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
          />
        </Col>
      </Row>
      <Row gutter={[0, 8]}>
        <Col span={24}>
          <List
            dataSource={data}
            renderItem={item => (
              <List.Item key={item.name}>
                <List.Item.Meta
                  title={<a href="https://ant.design">{item.name}</a>}
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