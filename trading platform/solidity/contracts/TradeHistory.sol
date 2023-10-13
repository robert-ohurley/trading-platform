// Tells the Solidity compiler to compile only from v0.8.13 to v0.9.0
pragma solidity ^0.8.0;

contract TradeHistory {
    // declare two state variables
    // uint256 favoriteNumber;
    // bool favoriteBool;

    // A new struct type named People is defined with two properties
    // struct People {
    //     uint256 favoriteNumber;
    //     string name;
    // }

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
        //     people.push(People({favoriteNumber: _favoriteNumber, name: _name}));
        trades.push(
            Trade({
                nftName: nftName,
                from: from,
                to: to,
                ethValue: ethValue,
                timeStamp: timeStamp,
                image: image,
                transactionHash: transactionHash,
                transactionStatus: Status.Pending
            })
        );
    }

    function getTrades() public view returns (Trade[] memory) {
        return trades;
    }
    // A state variable person of type People (struct) is declared and initialized
    // People public person = People({favoriteNumber: 2, name: "Arthur"});

    // A dynamic array of People structs is declared as a state variable
    // People[] public people;

    //A mapping named nameToFavoriteNumber is declared to map string names to uint256 numbers
    // mapping(string => uint256) public nameToFavoriteNumber;

    // function store(uint256 _favoriteNumber) public returns (uint256) {
    //     favoriteNumber = _favoriteNumber;
    //     return favoriteNumber;
    // }

    // function retrieve() public view returns (uint256) {
    //     return favoriteNumber;
    // }

    // function addPerson(string memory _name, uint256 _favoriteNumber) public {
    //     people.push(People({favoriteNumber: _favoriteNumber, name: _name}));
    //     nameToFavoriteNumber[_name] = _favoriteNumber;
    // }

    // function getPeople() public view returns (People[] memory) {
    //     return people;
    // }
}
