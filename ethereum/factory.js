import web3 from './web3';
import CampaignFactory from './build/CampaignFactory.json';

const instance = new web3.eth.Contract(JSON.parse(CampaignFactory.interface), '0x523Eb653FeB8Dc7ef461E652421c87fB4B05BA04');

export default instance;