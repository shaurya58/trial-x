import React, { Component } from 'react';
// import factory from '../ethereum/factory';
import { Card, Button } from '@material-ui/core';
// import Layout from '../components/Layout';
import { Link } from '../routes';
import YouTube from '@u-wave/react-youtube';
import SideDrawer from '../components/SideDrawer';
import Header from '../components/Header';
import LayoutDrawer from '../containers/LayoutDrawer';
import Signup from '../components/Signup';
import Login from '../components/Login';
import MediaCard from '../components/MediaCard';
import MediaWall from '../components/MediaWall';
import ContributeForm from '../components/ContributeForm';
import Table from '../components/table';

class CampaignIndex extends Component {
    
    // static async getInitialProps () {
    //     const campaigns = await factory.methods.getDeployedCampaigns().call();
    //     return { campaigns };
    // }
    
    renderCampaigns() {
        const items = this.props.campaigns.map(address => {
            return {
                header: address,
                description: <Link route={`/campaigns/${address}`}><a>View Campaign</a></Link>,
                fluid: true
            }
        });

        return <Card.Group items={items} />;
    }

    render() {
        return (
            // <Layout>
            //     <div>
            //         <h3>Open Campaigns</h3>
            //         <Link route="/campaigns/new">
            //             <a><Button floated="right" content="Create Campaign" icon="add circle" primary /></a>
            //         </Link>
            //         { this.renderCampaigns() }
            //     </div>
            // </Layout>
            // <div>
            //     Hello
            //     <YouTube
            //         video="jW40DVS1RsY"
            //         autoplay
            //     />
            // </div>
            // <div>
            //     <Header />
            //     <SideDrawer />
            // </div>
            // <LayoutDrawer />
            // <Signup />
            // <Login />
            // <MediaCard />
            // <MediaWall />
            // <ContributeForm />
            <Table />
        );
    }
}

export default CampaignIndex;