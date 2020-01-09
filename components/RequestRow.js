import React, { Component } from 'react';
import { Table, Button } from '@material-ui/core';
import web3 from '../ethereum/web3';
import Campaign from '../ethereum/campaign';

class RequestRow extends Component {
    state = {
        approving: false,
        finalizing: false
    };

    onApprove = async () => {
        this.setState({ approving: true })
        const campaign = Campaign(this.props.address);
        const accounts = await web3.eth.getAccounts();
        await campaign.methods.approveRequest(this.props.id).send({ from: accounts[0] });
        this.setState({ approving: false });
    }

    onFinalize = async () => {
        this.setState({ finalizing: true });
        const campaign = Campaign(this.props.address);
        const accounts = await web3.eth.getAccounts();
        await campaign.methods.finalizeRequest(this.props.id).send({ from: accounts[0] });
        this.setState({ finalizing: false });
    }
    
    render() {
        const { Row, Cell } = Table;
        const { description, value, recipient, approvalCount } = this.props.request;
        const readyToFinalize = approvalCount > (this.props.approversCount / 2);
        return (
            <Row disabled={ this.props.request.complete } positive={ readyToFinalize && !this.props.request.complete } >
                <Cell>{ this.props.id }</Cell>
                <Cell>{ description }</Cell>
                <Cell>{ web3.utils.fromWei(value, 'ether') }</Cell>
                <Cell>{ recipient }</Cell>
                <Cell>{ approvalCount }/{ this.props.approversCount }</Cell>
                <Cell>
                    { this.props.request.complete ? null : (
                    <Button
                            color="green"
                            basic
                            onClick={ this.onApprove }
                            loading={ this.state.approving }
                        >Approve</Button>
                    )}
                </Cell>
                <Cell>
                    { this.props.request.complete ? null : (
                    <Button color="teal" basic onClick={ this.onFinalize } >Finalize</Button>
                    )}
                </Cell>
            </Row>
        );
    }
}

export default RequestRow;