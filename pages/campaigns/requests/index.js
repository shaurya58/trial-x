import React, { Component } from 'react';
import Layout from '../../../components/Layout';
import { Button, Grid, Table } from 'semantic-ui-react';
import { Link } from '../../../routes';
import Campaign from '../../../ethereum/campaign';
import RequestRow from '../../../components/RequestRow';

class RequestIndex extends Component {
    static async getInitialProps (props) {
        const campaign = Campaign(props.query.address);
        const requestsCount = await campaign.methods.getRequestsCount().call();
        const approversCount = await campaign.methods.approversCount().call();
        const requests = await Promise.all(
            Array(parseInt(requestsCount)).fill().map((element, index) => {
                return campaign.methods.requests(index).call();
            })
        );
        return {
            address: props.query.address,
            requests,
            requestsCount,
            approversCount
        };
    }

    renderRows() {
        return this.props.requests.map((request, index) => {
            return <RequestRow 
                        key={index}
                        id={index}
                        request={request}
                        address={ this.props.address }
                        approversCount={ this.props.approversCount } />
        });
    }
    
    render() {
        const { Header, Body, Row, HeaderCell } = Table;
        return (
            <Layout>
                <h3>Request List</h3>
                <Link route={`/campaigns/${ this.props.address }/requests/new`}>
                    <a><Button floated="right" style={{ marginBottom: '10px' }} primary>Add Request</Button></a>
                </Link>
                <Table>
                    <Header>
                        <Row>
                            <HeaderCell>ID</HeaderCell>
                            <HeaderCell>Description</HeaderCell>
                            <HeaderCell>Amount</HeaderCell>
                            <HeaderCell>Recipient</HeaderCell>
                            <HeaderCell>Approval Count</HeaderCell>
                            <HeaderCell>Approve</HeaderCell>
                            <HeaderCell>Finalize</HeaderCell>
                        </Row>
                    </Header>
                    <Body>
                        { this.renderRows() }
                    </Body>
                </Table>
                <div>Found { this.props.requestsCount } requests.</div>
            </Layout>
        );
    }
}

export default RequestIndex;