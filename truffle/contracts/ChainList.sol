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

    // events
    event LogSellArticle (
        address indexed _seller,
        string _name,
        uint256 _price
    );

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

    /// @notice Sell an article by setting its details
    /// @param _seller The address of the seller
    /// @param _name The name of the article
    /// @param _description The description of the article
    /// @param _price The price of the article in wei
    function sellArticle(
        address _seller,
        string memory _name,
        string memory _description,
        uint256 _price
    ) public {
        seller = _seller;
        name = _name;
        description = _description;
        price = _price;

        emit LogSellArticle(_seller, _name, _price);
    }
}