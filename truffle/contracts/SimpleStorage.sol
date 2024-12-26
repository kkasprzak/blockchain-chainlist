// SPDX-License-Identifier: MIT
pragma solidity >=0.4.22 <0.9.0;

/// @title SimpleStorage
/// @notice A basic smart contract for storing and retrieving a single uint256 value
/// @dev This contract serves as a simple example of state management in Solidity
contract SimpleStorage {
  /// @notice The stored value
  uint256 value;

  /// @notice Retrieves the currently stored value
  /// @return The current value stored in the contract
  function read() public view returns (uint256) {
    return value;
  }

  /// @notice Updates the stored value with a new one
  /// @param newValue The new value to store in the contract
  function write(uint256 newValue) public {
    value = newValue;
  }
}
