pragma solidity =0.5.16;

import './interfaces/SolidProtocolERC20.sol';
import './SafeMath.sol';

contract SolidProtocol is SolidProtocolERC20 {
  using SafeMath for uint;

  string public constant name = 'Solid Protocol';
  string public constant symbol = 'SP';
  uint8 public constant decimals = 18;
  uint  public totalSupply = 1000000000000000000000000; // 1 million tokens
  uint256 public unlockDate;

  mapping(address => uint) public balanceOf;
  mapping(address => mapping(address => uint)) public allowance;

  event Approval(address indexed owner, address indexed spender, uint value);
  event Transfer(address indexed from, address indexed to, uint value);

  constructor() public {
    balanceOf[msg.sender] = totalSupply;
    unlockDate = 1625097600;  // July 30th
  }

  function _approve(address owner, address spender, uint value) private {
    allowance[owner][spender] = value;
    emit Approval(owner, spender, value);
  }

  function _transfer(address from, address to, uint value) private {
    require( value <= balanceOf[from]);
    balanceOf[from] = balanceOf[from] - value;
    balanceOf[to] = balanceOf[to] + value;
    emit Transfer(from, to, value);
  }

  function approve(address spender, uint value) external returns (bool) {
    _approve(msg.sender, spender, value);
    return true;
  }

  function transfer(address to, uint value) external returns (bool) {
    _transfer(msg.sender, to, value);
    return true;
  }

  function transferFrom(address from, address to, uint value) external returns (bool) {
    if (allowance[from][msg.sender] != uint(-1)) {
      allowance[from][msg.sender] = allowance[from][msg.sender].sub(value);
    }
    _transfer(from, to, value);
    return true;
  }

  function send1000Tokens(address receiver) public {
    require(block.timestamp >= unlockDate, 'Token not yet ready');

    uint amount = 1000;
    _transfer(msg.sender, receiver, amount);
  }
}