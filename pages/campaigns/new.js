import React, { Component } from 'react';
import Layout from '../../components/Layout';
// import { Form, Button, Input, Message } from 'semantic-ui-react';
import factory from '../../ethereum/factory';
import web3 from '../../ethereum/web3';
import { Router } from '../../routes';
import { TextField } from '@material-ui/core';
import Header from '../../components/Header';

class CampaignNew extends Component {
    state = {
        minimumContribtion: '',
        errorMessage: '',
        loading: false
    }

    onSubmit = async (event) => {
        event.preventDefault();
        this.setState({ loading: true, errorMessage: '' });
        try {
            const accounts = await web3.eth.getAccounts();
            await factory.methods.createCampaign(this.state.minimumContribtion).send({
                from: accounts[0]
            });
            Router.pushRoute('/');
        } catch(err) {
            this.setState({ errorMessage: err.message });
        }
        this.setState({ loading: false });
    }
    
    render() {
        return (
            <Layout>
                <h3>Create a Campaign</h3>
                {/* <Form onSubmit={ this.onSubmit } error={ !!this.state.errorMessage }>
                    <Form.Field>
                        <label>Minimum Contribution</label>
                        <Input
                            value={ this.state.minimumContribtion }
                            label="wei"
                            labelPosition="right"
                            onChange={event => this.setState({ minimumContribtion: event.target.value })}    
                        />
                    </Form.Field>
                    <Message error header="Oops!" content={ this.state.errorMessage } />
                    <Button primary loading={ this.state.loading }>Create!</Button>
                </Form> */}
                <Header/>
                <TextField required id="standard-required" label="Required" defaultValue="Hello World" />
        
            </Layout>
        );
    }
}

export default CampaignNew;