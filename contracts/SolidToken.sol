pragma solidity ^0.5.0;

contract SolidToken { 
  string public name = "Solid Token";
  string public symbol = "ST";
  uint8  public decimals = 18;
  uint256 public totalSupply = 1000000000000000000000000; // 1 million tokens


  // create our event that will will be emitted when there is a transfer()
  event Transfer(
    address indexed _from,
    address indexed _receiver,
    uint256 _amount
  );

  event Approval(
    address indexed _owner,
    address indexed _spender,
    uint256 _amount
  );


 // current token of an account identified by the owners address
  mapping(address => uint256) public balanceOf;

  // token allowed to be transfered from an address to owners address.
  mapping(address => mapping(address => uint256)) public allowance;


  constructor() public {
    balanceOf[msg.sender] = totalSupply;
  }

  function transfer(address _receiver, uint256 _amount) public returns (bool success) {
    require( _amount <= balanceOf[msg.sender]);
    balanceOf[msg.sender] = balanceOf[msg.sender] - _amount;
    balanceOf[_receiver] = balanceOf[_receiver] + _amount;
    emit Transfer(msg.sender, _receiver, _amount);
    return true;
  }

  function approve(address _spender, uint256 _amount) public returns (bool success) {
    // account owner approves spender a number of token to be spent or transfered.
    allowance[msg.sender][_spender] = _amount;
    emit Approval(msg.sender, _spender, _amount);
    return true;
  }

  function transferFrom(address _from, address _to, uint256 _value) public returns (bool success) {
    require(_value <= balanceOf[_from]);
    require(_value <= allowance[_from][msg.sender]);
    balanceOf[_from] -= _value;
    balanceOf[_to] += _value;
    allowance[_from][msg.sender] -= _value;
    emit Transfer(_from, _to, _value);
    return true;
  }
}