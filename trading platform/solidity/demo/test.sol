// SPDX-License-Identifier: MIT

pragma solidity ^0.8.11;

contract SimpleStorage {
    // declare two state variables
    uint256 favoriteNumber;
    bool favoriteBool;

    // A new struct type named People is defined with two properties
    struct People {
        uint256 favoriteNumber;
        string name;
    }

    // A state variable person of type People (struct) is declared and initialized
    People public person = People({favoriteNumber: 2, name: "Arthur"});

    // A dynamic array of People structs is declared as a state variable
    People[] public people;

    //A mapping named nameToFavoriteNumber is declared to map string names to uint256 numbers
    mapping(string => uint256) public nameToFavoriteNumber;

    function store(uint256 _favoriteNumber) public returns (uint256) {
        favoriteNumber = _favoriteNumber;
        return favoriteNumber;
    }

    function retrieve() public view returns (uint256) {
        return favoriteNumber;
    }

    function addPerson(string memory _name, uint256 _favoriteNumber) public {
        people.push(People({favoriteNumber: _favoriteNumber, name: _name}));
        nameToFavoriteNumber[_name] = _favoriteNumber;
    }
}

