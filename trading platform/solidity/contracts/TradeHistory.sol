// Tells the Solidity compiler to compile only from v0.8.13 to v0.9.0
pragma solidity ^0.8.0;

contract TradeHistory {
    enum Status {
        Pending,
        Completed,
        Failed,
        Rejected,
        Cancelled
    }

    struct Trade {
        string nftName;
        address from;
        address to;
        string ethValue;
        Status transactionStatus;
        string timeStamp;
        string image;
        string transactionHash;
    }

    Trade[] public trades;

    function addTrade(
        string memory nftName,
        address from,
        address to,
        string memory ethValue,
        string memory timeStamp,
        string memory image,
        string memory transactionHash
    ) public {
        trades.push(
            Trade({
                nftName: nftName,
                from: from,
                to: to,
                ethValue: ethValue,
                timeStamp: timeStamp,
                image: image,
                transactionHash: transactionHash,
                transactionStatus: Status.Completed 
            })
        );
    }

    function getTrades() public view returns (Trade[] memory) {
        return trades;
    }
}
