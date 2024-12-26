// SPDX-License-Identifier: MIT
pragma solidity >=0.4.22 <0.9.0;

/// @title ChainList
/// @notice A contract for managing articles in a decentralized marketplace
contract ChainList {
    // State variables
    address seller;
    string name;
    string description;
    uint256 price;

    constructor() {
        // Initialize with empty values
        seller = address(0);
        name = "";
        description = "";
        price = 0;
    }

    /// @notice Get the current article information
    /// @return The seller's address, name, description, and price
    function getArticle() public view returns (
        address,
        string memory,
        string memory,
        uint256
    ) {
        return (seller, name, description, price);
    }
}
