import React, { Component } from 'react';
import Layout from '../../components/Layout';
import web3 from '../../ethereum/web3';
import Campaign from '../../ethereum/campaign';
import { Card, Button, Grid } from '@material-ui/core';
import ContributeForm from '../../components/ContributeForm';
import { Link } from '../../routes';

class CampaignShow extends Component {
    state = {
        campaign: '',
        minimumContribution: '',
        balance: '',
        contributors: '',
        pendingRequests: ''
    }

    static async getInitialProps(props) {
        const campaign = Campaign(props.query.address);
        const summary = await campaign.methods.getSummary().call();
        return {
            address: props.query.address,
            minimumContribution: summary[0],
            balance: summary[1],
            requests: summary[2],
            contributors: summary[3],
            manager: summary[4]
        };
    }

    renderCards() {
        const items = [
            {
                header: this.props.manager,
                meta: 'Address of Manager',
                description: 'The manager created this campaign and can create requests to withdraw money.',
                style: { overflowWrap: 'break-word' }
            },
            {
                header: this.props.minimumContribution,
                meta: 'Minimum Contribution (wei)',
                description: 'You must contribute atleast this much wei to become an approver.'
            },
            {
                header: web3.utils.fromWei(this.props.balance, 'ether'),
                meta: 'Campaign Balance (ether)',
                description: 'The balance is how much money this campaign has left to spend.'
            },
            {
                header: this.props.requests,
                meta: 'Number of Requests',
                description: 'A request tries to withdraw money from the contract. Requests must be approved by approvers.'
            },
            {
                header: this.props.contributors,
                meta: 'Number of Contributors',
                description: 'Number of people who have already donated for this campaign.'
            }
        ];

        return <Card.Group items={items} />;
    }

    render() {
        return (
            <Layout>
                <h3>Campaign Details</h3>
                <Grid>
                    <Grid.Row>
                        <Grid.Column width={10} >{ this.renderCards() }</Grid.Column>
                        <Grid.Column width={6} ><ContributeForm address={ this.props.address }/></Grid.Column>
                    </Grid.Row>

                    <Grid.Row>
                        <Grid.Column>
                            <Link route={`/campaigns/${this.props.address}/requests` }>
                                <a>
                                    <Button primary>View Requests</Button>
                                </a>
                            </Link>
                        </Grid.Column>
                    </Grid.Row>
                </Grid>
            </Layout>
        );
    }
}

export default CampaignShow;