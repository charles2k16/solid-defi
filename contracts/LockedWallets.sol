pragma solidity ^0.5.0;

import "./SolidToken.sol";

contract LockedWallets {
  uint256 public unlockDate;
  uint256 public createdAt;

  event WithdrewTokens(address tokenContract, address to, uint256 amount);

  constructor() public {
    unlockDate = 200;
    createdAt = now;
  }

  // payable means this address can receive ether
  // when receieved we trigger a received event.
  function() payable public { 
    Received(msg.sender, msg.value);
  }

  function get1000Tokens() public {
    require(now >= unlockDate);

    // the address we a are withdrawing the token from
    // ERC20 token = ERC20(_tokenContract);

    uint256 amount = 1000;
    token.transfer(msg.sender, amount);
    WithdrewTokens(msg.sender, amount);
  }

  // msg.sender(whoever is calling the contract, type = address).


  function info() public view returns(uint256, uint256) {
    return (unlockDate, createdAt);
  }
}