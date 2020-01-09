pragma solidity ^0.4.17;

contract CampaignFactory {
    address[] public deployedCampaigns;
    
    function createCampaign(uint minimum) public {
        address newCampaign = new Campaign(minimum, msg.sender);
        deployedCampaigns.push(newCampaign);
    }
    
    function getDeployedCampaigns() public view returns (address[]) {
        return deployedCampaigns;
    }
}

contract Campaign {
    
    struct Request {
        string description;
        uint value;
        address recipient;
        bool complete;
        uint approvalCount;
        mapping(address => bool) approvals;
    }


    address public manager;
    uint public minimumContribution;
    mapping(address => bool) public approvers;
    Request[] public requests;
    uint public approversCount;
    
    modifier restricted() {
        require(msg.sender == manager);
        _;
    }
    
    function Campaign(uint minimum, address creator) public {
        minimumContribution = minimum;
        manager = creator;
    }
    
    function contribute() public payable {
        require(msg.value > minimumContribution);
        
        if (!approvers[msg.sender])
            approversCount++;
        approvers[msg.sender] = true;
    }
    
    function createRequest(string description, uint value, address recipient) public restricted {
        Request memory newRequest = Request({
           description: description,
           value: value,
           recipient: recipient,
           complete: false,
           approvalCount: 0
        });
        
        requests.push(newRequest);
    }
    
    function approveRequest(uint index) public {
        Request storage request = requests[index];
        
        require(msg.sender != manager);
        require(approvers[msg.sender] == true);
        require(!requests[index].approvals[msg.sender]);
        
        request.approvals[msg.sender] = true;
        request.approvalCount++;
    }
    
    function finalizeRequest(uint index) public restricted {
        Request storage request = requests[index];
        
        require(!request.complete);
        request.complete = true;
        
        require(request.approvalCount > (approversCount / 2));
        request.recipient.transfer(request.value);
    }

    function getSummary() public view returns(uint, uint, uint, uint, address) {
        return (
            minimumContribution,
            this.balance,
            requests.length,
            approversCount,
            manager
        );
    }

    function getRequestsCount() public view returns (uint) {
        return requests.length;
    }
}