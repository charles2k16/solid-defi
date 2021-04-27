pragma solidity ^0.5.0;

import "./SolidToken.sol";

contract LockedWallets {
  uint256 public unlockDate;
  uint256 public createdAt;

  constructor() public {
    unlockDate = 200;
    createdAt = now;
  }
  
  function get1000Tokens(address _tokenContract) public {
    require(now >= unlockDate);

    // the address we are withdrawing the token from
    SolidToken token = SolidToken(_tokenContract);

    uint256 amount = 1000;
    token.transfer(msg.sender, amount);
    emit WithdrewTokens(msg.sender, amount);
  }

  // msg.sender(whoever is calling the contract, type = address).

  function info() public view returns(uint256, uint256) {
    return (unlockDate, createdAt);
  }

  event WithdrewTokens(address tokenContract, uint256 amount);
  event Received(address from, uint256 amount);
}