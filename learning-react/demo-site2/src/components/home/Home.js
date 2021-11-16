import React from 'react';
import { Container, Header, Segment, Grid, List } from 'semantic-ui-react';
import { Link } from 'react-router-dom';

const pstyle = {
    "textIndent": "2rem"
}

const Home = () => {
    return (
        <Container text style={{}}>
            <Header as='h1'>交通联盟链数据开放共享与数据安全关键技术
                研究报告</Header>

            <table className="ui   collapsing celled table">
                <thead>
                </thead>
                <tbody>
                    <tr>
                        <td>总课题:</td>
                        <td>交通联盟链构建关键技术及应用示范</td>
                    </tr>
                    <tr>
                        <td>委托单位:</td>
                        <td>上海市科学技术委员会</td>
                    </tr>
                    <tr>
                        <td>项目编号:</td>
                        <td>19511102101</td>
                    </tr>
                    <tr>
                        <td>日期:</td>
                        <td>2021-11-15</td>
                    </tr>
                </tbody>
            </table>
            <Header as='h2'>研究内容</Header>
            <p style={pstyle}>研究交通联盟链数据开放共享过程中的确权、交易确认和仲裁机制，设计交通联盟链数据分发共享组件，通过权限模型和密钥分发管理实现交通实时数据和离线数据的安全数据共享，适应交通行业多样化应用场景。同时研究利用区块链数据公开透明不可篡改的特性，对数据共享过程进行全程追溯，实现有效监管。</p>
            <Header as='h2'>数据分发共享关键技术</Header>
            <p style={pstyle}>城市交通大数据具有种类繁多、时空尺度跨越大、动态多变、局部性和生命周期较短等特征，如何安全共享实时交通数据和离线交通数据，满足高时效性的交通行政监管、交通市民服务等应用需求，是城市交通和智慧城市面临的前所未有的机遇和挑战</p>
            <p style={pstyle}>数据共享的安全性是在互联网环境中数据由数据提供方分享给数据使用方时要面对的非常重要的问题。现有技术中，提供对外数据共享服务的服务器通常采用安全通信协议HTTPS实现数据共享。该方法在具体应用上可能存在隐患，例如在整个数据传输过程中会存在数据内可能被窃听、数据内容可能发生篡改以及数据发送方的身份容易被冒充等等。</p>
            <p style={pstyle}>为了解决以上问题，本研究设计交通联盟链数据分发共享组件，该组件利用区块链记录数据共享过程中的各种信息，使得各种记录真实不可篡改，身份不能冒充，大大提高了数据共享的安全性，能够适应交通行业多样化应用场景。同时利用区块链数据公开透明不可篡改的特性，对数据共享过程进行全程追溯，实现有效监管。</p>

            <Header as="h2">
                关于测试
            </Header>
            <p><i className="angle right icon" />使用得到的用户名和密码
                <Link to='/login'>登录</Link>，以进行测试</p>

            <Segment vertical style={{ margin: '5rem 0rem 0rem', padding: '5rem 0rem' }}>
                <Container textAlign='left'>
                    <Grid divided stackable>
                        <Grid.Column width={3}>
                            <Header as='h4' content='Web Tech' />
                            <List link  >
                                <List.Item>Java</List.Item>
                                <List.Item>Node.js</List.Item>
                                <List.Item>React</List.Item>
                                <List.Item>Docker</List.Item>
                            </List>
                        </Grid.Column>
                        <Grid.Column width={3}>
                            <Header as='h4' content='Chain Tech' />
                            <List link>
                                <List.Item>Fisco Bcos</List.Item>
                                <List.Item>Solidity</List.Item>
                                <List.Item>Remix2</List.Item>
                            </List>
                        </Grid.Column>
                        <Grid.Column width={3}>
                            <Header as='h4' content='Database Tech' />
                            <List link>
                                <List.Item>PostgreSQL</List.Item>
                                <List.Item>MongoDB</List.Item>
                                <List.Item>Nest.js</List.Item>

                            </List>
                        </Grid.Column>
                        <Grid.Column width={7}>
                            <Header as='h4' content='Developed by' />
                            <p>
                                2021
                            </p>
                        </Grid.Column>
                    </Grid>

                </Container>

            </Segment>

        </Container>
    )
}

export default Home;
