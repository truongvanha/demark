module.exports = {
    getAbiContractICO(){
        return [
            {
                "constant": false,
                "inputs": [
                    {
                        "name": "to",
                        "type": "address"
                    }
                ],
                "name": "destroy",
                "outputs": [],
                "payable": false,
                "stateMutability": "nonpayable",
                "type": "function"
            },
            {
                "constant": true,
                "inputs": [
                    {
                        "name": "",
                        "type": "address"
                    }
                ],
                "name": "amountOf",
                "outputs": [
                    {
                        "name": "",
                        "type": "uint256"
                    }
                ],
                "payable": false,
                "stateMutability": "view",
                "type": "function"
            },
            {
                "constant": false,
                "inputs": [],
                "name": "checkGoalReached",
                "outputs": [],
                "payable": false,
                "stateMutability": "nonpayable",
                "type": "function"
            },
            {
                "constant": true,
                "inputs": [],
                "name": "amountPreOrder",
                "outputs": [
                    {
                        "name": "",
                        "type": "uint256"
                    }
                ],
                "payable": false,
                "stateMutability": "view",
                "type": "function"
            },
            {
                "constant": true,
                "inputs": [],
                "name": "preOrderBasePrice",
                "outputs": [
                    {
                        "name": "",
                        "type": "uint256"
                    }
                ],
                "payable": false,
                "stateMutability": "view",
                "type": "function"
            },
            {
                "constant": true,
                "inputs": [],
                "name": "tokenSoldInPreEther",
                "outputs": [
                    {
                        "name": "",
                        "type": "uint256"
                    }
                ],
                "payable": false,
                "stateMutability": "view",
                "type": "function"
            },
            {
                "constant": true,
                "inputs": [],
                "name": "startPreOrder",
                "outputs": [
                    {
                        "name": "",
                        "type": "uint256"
                    }
                ],
                "payable": false,
                "stateMutability": "view",
                "type": "function"
            },
            {
                "constant": true,
                "inputs": [],
                "name": "startOrder",
                "outputs": [
                    {
                        "name": "",
                        "type": "uint256"
                    }
                ],
                "payable": false,
                "stateMutability": "view",
                "type": "function"
            },
            {
                "constant": true,
                "inputs": [],
                "name": "tokenSold",
                "outputs": [
                    {
                        "name": "",
                        "type": "uint256"
                    }
                ],
                "payable": false,
                "stateMutability": "view",
                "type": "function"
            },
            {
                "constant": true,
                "inputs": [],
                "name": "isReachedGoal",
                "outputs": [
                    {
                        "name": "",
                        "type": "bool"
                    }
                ],
                "payable": false,
                "stateMutability": "view",
                "type": "function"
            },
            {
                "constant": true,
                "inputs": [
                    {
                        "name": "",
                        "type": "address"
                    }
                ],
                "name": "amountInEtherOf",
                "outputs": [
                    {
                        "name": "",
                        "type": "uint256"
                    }
                ],
                "payable": false,
                "stateMutability": "view",
                "type": "function"
            },
            {
                "constant": true,
                "inputs": [],
                "name": "tokenRemaining",
                "outputs": [
                    {
                        "name": "",
                        "type": "uint256"
                    }
                ],
                "payable": false,
                "stateMutability": "view",
                "type": "function"
            },
            {
                "constant": true,
                "inputs": [],
                "name": "amountOrder",
                "outputs": [
                    {
                        "name": "",
                        "type": "uint256"
                    }
                ],
                "payable": false,
                "stateMutability": "view",
                "type": "function"
            },
            {
                "constant": true,
                "inputs": [],
                "name": "fundingGoal",
                "outputs": [
                    {
                        "name": "",
                        "type": "uint256"
                    }
                ],
                "payable": false,
                "stateMutability": "view",
                "type": "function"
            },
            {
                "constant": true,
                "inputs": [],
                "name": "endOrder",
                "outputs": [
                    {
                        "name": "",
                        "type": "uint256"
                    }
                ],
                "payable": false,
                "stateMutability": "view",
                "type": "function"
            },
            {
                "constant": false,
                "inputs": [
                    {
                        "name": "amountBuy",
                        "type": "uint256"
                    }
                ],
                "name": "buyCoin",
                "outputs": [],
                "payable": true,
                "stateMutability": "payable",
                "type": "function"
            },
            {
                "constant": true,
                "inputs": [],
                "name": "orderBasePrice",
                "outputs": [
                    {
                        "name": "",
                        "type": "uint256"
                    }
                ],
                "payable": false,
                "stateMutability": "view",
                "type": "function"
            },
            {
                "constant": true,
                "inputs": [],
                "name": "owner",
                "outputs": [
                    {
                        "name": "",
                        "type": "address"
                    }
                ],
                "payable": false,
                "stateMutability": "view",
                "type": "function"
            },
            {
                "constant": true,
                "inputs": [],
                "name": "tokenSoldAfterPre",
                "outputs": [
                    {
                        "name": "",
                        "type": "uint256"
                    }
                ],
                "payable": false,
                "stateMutability": "view",
                "type": "function"
            },
            {
                "constant": true,
                "inputs": [],
                "name": "tokenRemainingInPre",
                "outputs": [
                    {
                        "name": "",
                        "type": "uint256"
                    }
                ],
                "payable": false,
                "stateMutability": "view",
                "type": "function"
            },
            {
                "constant": true,
                "inputs": [],
                "name": "inst",
                "outputs": [
                    {
                        "name": "",
                        "type": "address"
                    }
                ],
                "payable": false,
                "stateMutability": "view",
                "type": "function"
            },
            {
                "constant": true,
                "inputs": [],
                "name": "isClosed",
                "outputs": [
                    {
                        "name": "",
                        "type": "bool"
                    }
                ],
                "payable": false,
                "stateMutability": "view",
                "type": "function"
            },
            {
                "constant": true,
                "inputs": [],
                "name": "tokenConnected",
                "outputs": [
                    {
                        "name": "",
                        "type": "address"
                    }
                ],
                "payable": false,
                "stateMutability": "view",
                "type": "function"
            },
            {
                "constant": true,
                "inputs": [],
                "name": "tokenSoldAfterPreEther",
                "outputs": [
                    {
                        "name": "",
                        "type": "uint256"
                    }
                ],
                "payable": false,
                "stateMutability": "view",
                "type": "function"
            },
            {
                "constant": true,
                "inputs": [],
                "name": "tokenSoldInPre",
                "outputs": [
                    {
                        "name": "",
                        "type": "uint256"
                    }
                ],
                "payable": false,
                "stateMutability": "view",
                "type": "function"
            },
            {
                "constant": true,
                "inputs": [],
                "name": "endPreOrder",
                "outputs": [
                    {
                        "name": "",
                        "type": "uint256"
                    }
                ],
                "payable": false,
                "stateMutability": "view",
                "type": "function"
            },
            {
                "constant": true,
                "inputs": [],
                "name": "limitedPreOrderSize",
                "outputs": [
                    {
                        "name": "",
                        "type": "uint256"
                    }
                ],
                "payable": false,
                "stateMutability": "view",
                "type": "function"
            },
            {
                "constant": false,
                "inputs": [
                    {
                        "name": "newOwner",
                        "type": "address"
                    }
                ],
                "name": "transferOwnership",
                "outputs": [],
                "payable": false,
                "stateMutability": "nonpayable",
                "type": "function"
            },
            {
                "constant": false,
                "inputs": [],
                "name": "safeWithdrawal",
                "outputs": [],
                "payable": false,
                "stateMutability": "nonpayable",
                "type": "function"
            },
            {
                "inputs": [
                    {
                        "name": "amountForSell",
                        "type": "uint256[]"
                    },
                    {
                        "name": "_timeLine",
                        "type": "uint256[]"
                    },
                    {
                        "name": "_price",
                        "type": "uint256[]"
                    },
                    {
                        "name": "addressOfTokenUsed",
                        "type": "address"
                    },
                    {
                        "name": "limited",
                        "type": "uint256"
                    }
                ],
                "payable": false,
                "stateMutability": "nonpayable",
                "type": "constructor"
            },
            {
                "anonymous": false,
                "inputs": [
                    {
                        "indexed": true,
                        "name": "owner",
                        "type": "address"
                    },
                    {
                        "indexed": true,
                        "name": "sold",
                        "type": "uint256"
                    }
                ],
                "name": "GoalReached",
                "type": "event"
            },
            {
                "anonymous": false,
                "inputs": [
                    {
                        "indexed": true,
                        "name": "sender",
                        "type": "address"
                    },
                    {
                        "indexed": true,
                        "name": "amount",
                        "type": "uint256"
                    },
                    {
                        "indexed": true,
                        "name": "isContribution",
                        "type": "bool"
                    }
                ],
                "name": "FinalizeICO",
                "type": "event"
            },
            {
                "anonymous": false,
                "inputs": [
                    {
                        "indexed": true,
                        "name": "previousOwner",
                        "type": "address"
                    },
                    {
                        "indexed": true,
                        "name": "newOwner",
                        "type": "address"
                    }
                ],
                "name": "OwnershipTransferred",
                "type": "event"
            }
        ]
    },

    getAbiTokenICO(){
        return [
            {
                "constant": true,
                "inputs": [],
                "name": "name",
                "outputs": [
                    {
                        "name": "",
                        "type": "string"
                    }
                ],
                "payable": false,
                "stateMutability": "view",
                "type": "function"
            },
            {
                "constant": false,
                "inputs": [
                    {
                        "name": "_spender",
                        "type": "address"
                    },
                    {
                        "name": "_value",
                        "type": "uint256"
                    }
                ],
                "name": "approve",
                "outputs": [
                    {
                        "name": "success",
                        "type": "bool"
                    }
                ],
                "payable": false,
                "stateMutability": "nonpayable",
                "type": "function"
            },
            {
                "constant": true,
                "inputs": [],
                "name": "totalSupply",
                "outputs": [
                    {
                        "name": "",
                        "type": "uint256"
                    }
                ],
                "payable": false,
                "stateMutability": "view",
                "type": "function"
            },
            {
                "constant": false,
                "inputs": [
                    {
                        "name": "_from",
                        "type": "address"
                    },
                    {
                        "name": "_to",
                        "type": "address"
                    },
                    {
                        "name": "_value",
                        "type": "uint256"
                    }
                ],
                "name": "transferFrom",
                "outputs": [
                    {
                        "name": "success",
                        "type": "bool"
                    }
                ],
                "payable": false,
                "stateMutability": "nonpayable",
                "type": "function"
            },
            {
                "constant": true,
                "inputs": [],
                "name": "decimals",
                "outputs": [
                    {
                        "name": "",
                        "type": "uint256"
                    }
                ],
                "payable": false,
                "stateMutability": "view",
                "type": "function"
            },
            {
                "constant": false,
                "inputs": [
                    {
                        "name": "to",
                        "type": "address"
                    },
                    {
                        "name": "amount",
                        "type": "uint256"
                    }
                ],
                "name": "mint",
                "outputs": [],
                "payable": false,
                "stateMutability": "nonpayable",
                "type": "function"
            },
            {
                "constant": true,
                "inputs": [
                    {
                        "name": "_owner",
                        "type": "address"
                    }
                ],
                "name": "balanceOf",
                "outputs": [
                    {
                        "name": "balance",
                        "type": "uint256"
                    }
                ],
                "payable": false,
                "stateMutability": "view",
                "type": "function"
            },
            {
                "constant": true,
                "inputs": [],
                "name": "owner",
                "outputs": [
                    {
                        "name": "",
                        "type": "address"
                    }
                ],
                "payable": false,
                "stateMutability": "view",
                "type": "function"
            },
            {
                "constant": true,
                "inputs": [],
                "name": "symbol",
                "outputs": [
                    {
                        "name": "",
                        "type": "string"
                    }
                ],
                "payable": false,
                "stateMutability": "view",
                "type": "function"
            },
            {
                "constant": false,
                "inputs": [
                    {
                        "name": "_to",
                        "type": "address"
                    },
                    {
                        "name": "_value",
                        "type": "uint256"
                    }
                ],
                "name": "transfer",
                "outputs": [
                    {
                        "name": "success",
                        "type": "bool"
                    }
                ],
                "payable": false,
                "stateMutability": "nonpayable",
                "type": "function"
            },
            {
                "constant": true,
                "inputs": [
                    {
                        "name": "_owner",
                        "type": "address"
                    },
                    {
                        "name": "_spender",
                        "type": "address"
                    }
                ],
                "name": "allowance",
                "outputs": [
                    {
                        "name": "remaining",
                        "type": "uint256"
                    }
                ],
                "payable": false,
                "stateMutability": "view",
                "type": "function"
            },
            {
                "constant": false,
                "inputs": [
                    {
                        "name": "newOwner",
                        "type": "address"
                    }
                ],
                "name": "transferOwnership",
                "outputs": [],
                "payable": false,
                "stateMutability": "nonpayable",
                "type": "function"
            },
            {
                "inputs": [
                    {
                        "name": "_name",
                        "type": "string"
                    },
                    {
                        "name": "_decimals",
                        "type": "uint256"
                    },
                    {
                        "name": "_symbol",
                        "type": "string"
                    },
                    {
                        "name": "_totalSupply",
                        "type": "uint256"
                    }
                ],
                "payable": false,
                "stateMutability": "nonpayable",
                "type": "constructor"
            },
            {
                "anonymous": false,
                "inputs": [
                    {
                        "indexed": true,
                        "name": "to",
                        "type": "address"
                    },
                    {
                        "indexed": true,
                        "name": "amount",
                        "type": "uint256"
                    }
                ],
                "name": "Mint",
                "type": "event"
            },
            {
                "anonymous": false,
                "inputs": [
                    {
                        "indexed": false,
                        "name": "name",
                        "type": "string"
                    },
                    {
                        "indexed": false,
                        "name": "decimals",
                        "type": "uint256"
                    },
                    {
                        "indexed": false,
                        "name": "symbol",
                        "type": "string"
                    },
                    {
                        "indexed": false,
                        "name": "totalSupply",
                        "type": "uint256"
                    }
                ],
                "name": "Created",
                "type": "event"
            },
            {
                "anonymous": false,
                "inputs": [
                    {
                        "indexed": true,
                        "name": "previousOwner",
                        "type": "address"
                    },
                    {
                        "indexed": true,
                        "name": "newOwner",
                        "type": "address"
                    }
                ],
                "name": "OwnershipTransferred",
                "type": "event"
            },
            {
                "anonymous": false,
                "inputs": [
                    {
                        "indexed": true,
                        "name": "",
                        "type": "address"
                    },
                    {
                        "indexed": true,
                        "name": "",
                        "type": "address"
                    },
                    {
                        "indexed": true,
                        "name": "",
                        "type": "uint256"
                    }
                ],
                "name": "Transfer",
                "type": "event"
            },
            {
                "anonymous": false,
                "inputs": [
                    {
                        "indexed": true,
                        "name": "",
                        "type": "address"
                    },
                    {
                        "indexed": true,
                        "name": "",
                        "type": "address"
                    },
                    {
                        "indexed": true,
                        "name": "",
                        "type": "uint256"
                    }
                ],
                "name": "Approval",
                "type": "event"
            }
        ]
    },

    getBytecodeContractICO(){
        return "60806040523480156200001157600080fd5b5060405162001e0d38038062001e0d833981018060405260a08110156200003757600080fd5b8101908080516401000000008111156200005057600080fd5b828101905060208101848111156200006757600080fd5b81518560208202830111640100000000821117156200008557600080fd5b50509291906020018051640100000000811115620000a257600080fd5b82810190506020810184811115620000b957600080fd5b8151856020820283011164010000000082111715620000d757600080fd5b50509291906020018051640100000000811115620000f457600080fd5b828101905060208101848111156200010b57600080fd5b81518560208202830111640100000000821117156200012957600080fd5b50509291906020018051906020019092919080519060200190929190505050336000806101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff160217905550846000815181106200019657fe5b6020026020010151600e8190555084600181518110620001b257fe5b6020026020010151600f8190555083600081518110620001ce57fe5b6020026020010151600a8190555083600181518110620001ea57fe5b6020026020010151600b81905550836002815181106200020657fe5b6020026020010151600c81905550836003815181106200022257fe5b6020026020010151600d8190555062000267670de0b6b3a7640000846000815181106200024b57fe5b6020026020010151620003aa60201b6200196f1790919060201c565b600181905550620002a4670de0b6b3a7640000846001815181106200028857fe5b6020026020010151620003aa60201b6200196f1790919060201c565b6002819055508060108190555081601560006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff1602179055506200034662000314600254600f54620003aa60201b6200196f1790919060201c565b62000332600154600e54620003aa60201b6200196f1790919060201c565b620003e860201b620019501790919060201c565b60098190555081601260016101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff160217905550600e54600781905550600f54600881905550505050505062000408565b600080831415620003bf5760009050620003e2565b6000828402905082848281620003d157fe5b0414620003dd57600080fd5b809150505b92915050565b600080828401905083811015620003fe57600080fd5b8091505092915050565b6119f580620004186000396000f3fe6080604052600436106101c15760003560e01c806383d568ad116100f7578063c2b6b58c11610095578063e1115c5811610064578063e1115c581461070e578063edfa6a5714610739578063f2fde38b14610764578063fd6b7ef8146107b5576101c1565b8063c2b6b58c14610632578063c4415ca314610661578063df5bf0e0146106b8578063e0cb9db4146106e3576101c1565b80638da5cb5b116100d15780638da5cb5b1461052e578063994966d5146105855780639b716c89146105b0578063bd6b2222146105db576101c1565b806383d568ad146104aa57806387792574146104d557806388a8ebf014610503576101c1565b8063513797e1116101645780635d875a271161013e5780635d875a27146103c457806368646cf0146104295780636e09e6e8146104545780637a3a0e841461047f576101c1565b8063513797e11461033f578063519ee19e1461036a57806352a2695c14610395576101c1565b80630909a106116101a05780630909a1061461029357806328a53967146102be57806328d8c964146102e95780634c780bda14610314576101c1565b8062f55d9d146101c657806301608f5f1461021757806301cb3b201461027c575b600080fd5b3480156101d257600080fd5b50610215600480360360208110156101e957600080fd5b81019080803573ffffffffffffffffffffffffffffffffffffffff1690602001909291905050506107cc565b005b34801561022357600080fd5b506102666004803603602081101561023a57600080fd5b81019080803573ffffffffffffffffffffffffffffffffffffffff1690602001909291905050506107e5565b6040518082815260200191505060405180910390f35b34801561028857600080fd5b506102916107fd565b005b34801561029f57600080fd5b506102a861093c565b6040518082815260200191505060405180910390f35b3480156102ca57600080fd5b506102d3610942565b6040518082815260200191505060405180910390f35b3480156102f557600080fd5b506102fe610948565b6040518082815260200191505060405180910390f35b34801561032057600080fd5b5061032961094e565b6040518082815260200191505060405180910390f35b34801561034b57600080fd5b50610354610954565b6040518082815260200191505060405180910390f35b34801561037657600080fd5b5061037f61095a565b6040518082815260200191505060405180910390f35b3480156103a157600080fd5b506103aa610960565b604051808215151515815260200191505060405180910390f35b3480156103d057600080fd5b50610413600480360360208110156103e757600080fd5b81019080803573ffffffffffffffffffffffffffffffffffffffff169060200190929190505050610973565b6040518082815260200191505060405180910390f35b34801561043557600080fd5b5061043e61098b565b6040518082815260200191505060405180910390f35b34801561046057600080fd5b50610469610991565b6040518082815260200191505060405180910390f35b34801561048b57600080fd5b50610494610997565b6040518082815260200191505060405180910390f35b3480156104b657600080fd5b506104bf61099d565b6040518082815260200191505060405180910390f35b610501600480360360208110156104eb57600080fd5b81019080803590602001909291905050506109a3565b005b34801561050f57600080fd5b50610518611338565b6040518082815260200191505060405180910390f35b34801561053a57600080fd5b5061054361133e565b604051808273ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200191505060405180910390f35b34801561059157600080fd5b5061059a611363565b6040518082815260200191505060405180910390f35b3480156105bc57600080fd5b506105c5611369565b6040518082815260200191505060405180910390f35b3480156105e757600080fd5b506105f061136f565b604051808273ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200191505060405180910390f35b34801561063e57600080fd5b50610647611395565b604051808215151515815260200191505060405180910390f35b34801561066d57600080fd5b506106766113a8565b604051808273ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200191505060405180910390f35b3480156106c457600080fd5b506106cd6113ce565b6040518082815260200191505060405180910390f35b3480156106ef57600080fd5b506106f86113d4565b6040518082815260200191505060405180910390f35b34801561071a57600080fd5b506107236113da565b6040518082815260200191505060405180910390f35b34801561074557600080fd5b5061074e6113e0565b6040518082815260200191505060405180910390f35b34801561077057600080fd5b506107b36004803603602081101561078757600080fd5b81019080803573ffffffffffffffffffffffffffffffffffffffff1690602001909291905050506113e6565b005b3480156107c157600080fd5b506107ca611537565b005b8073ffffffffffffffffffffffffffffffffffffffff16ff5b60136020528060005260406000206000915090505481565b600d544211610874576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040180806020018281038252600d8152602001807f43616e742063616c6c206e6f770000000000000000000000000000000000000081525060200191505060405180910390fd5b61088b60065460045461195090919063ffffffff16565b6011819055506009546011541061091f576001601260166101000a81548160ff0219169083151502179055506011546000809054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff167fec3f991caf7857d61663fd1bba1739e04abd4781238508cde554bb849d790c8560405160405180910390a35b6001601260156101000a81548160ff021916908315150217905550565b600e5481565b60015481565b60045481565b600a5481565b600c5481565b60115481565b601260169054906101000a900460ff1681565b60146020528060005260406000206000915090505481565b60085481565b600f5481565b60095481565b600d5481565b42600a54111580156109b75750600b544211155b806109d2575042600c54111580156109d15750600d544211155b5b610a44576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040180806020018281038252600d8152602001807f43616e742063616c6c206e6f770000000000000000000000000000000000000081525060200191505060405180910390fd5b601260159054906101000a900460ff1615610ac7576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040180806020018281038252600d8152602001807f43616e742063616c6c206e6f770000000000000000000000000000000000000081525060200191505060405180910390fd5b3460008111610b3e576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040180806020018281038252600d8152602001807f496e76616c69642076616c75650000000000000000000000000000000000000081525060200191505060405180910390fd5b600034905042600a5411158015610b575750600b544211155b15610f3b57601054831015610bd4576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040180806020018281038252600a8152602001807f4e6f7420656e6f7567680000000000000000000000000000000000000000000081525060200191505060405180910390fd5b600754831115610c4c576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040180806020018281038252600d8152602001807f4f7574206f6620746f6b656e730000000000000000000000000000000000000081525060200191505060405180910390fd5b610c616001548461196f90919063ffffffff16565b811015610cd6576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040180806020018281038252600a8152602001807f4e6f7420656e6f7567680000000000000000000000000000000000000000000081525060200191505060405180910390fd5b610ceb836007546119a990919063ffffffff16565b600781905550610d4383601360003373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019081526020016000205461195090919063ffffffff16565b601360003373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002081905550610dd881601460003373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019081526020016000205461195090919063ffffffff16565b601460003373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002081905550610e308360035461195090919063ffffffff16565b600381905550610e4b8160045461195090919063ffffffff16565b600481905550601560009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1663a9059cbb33856040518363ffffffff1660e01b8152600401808373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200182815260200192505050602060405180830381600087803b158015610efa57600080fd5b505af1158015610f0e573d6000803e3d6000fd5b505050506040513d6020811015610f2457600080fd5b8101908080519060200190929190505050506112eb565b601260009054906101000a900460ff16610f8857610f6660075460085461195090919063ffffffff16565b6008819055506001601260006101000a81548160ff0219169083151502179055505b600854831115611000576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040180806020018281038252600d8152602001807f4f7574206f6620746f6b656e730000000000000000000000000000000000000081525060200191505060405180910390fd5b6110156002548461196f90919063ffffffff16565b81101561108a576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040180806020018281038252600a8152602001807f4e6f7420656e6f7567680000000000000000000000000000000000000000000081525060200191505060405180910390fd5b61109f836008546119a990919063ffffffff16565b6008819055506110f783601360003373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019081526020016000205461195090919063ffffffff16565b601360003373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019081526020016000208190555061118c81601460003373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019081526020016000205461195090919063ffffffff16565b601460003373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020819055506111e48360055461195090919063ffffffff16565b6005819055506111ff8160065461195090919063ffffffff16565b600681905550601560009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1663a9059cbb33856040518363ffffffff1660e01b8152600401808373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200182815260200192505050602060405180830381600087803b1580156112ae57600080fd5b505af11580156112c2573d6000803e3d6000fd5b505050506040513d60208110156112d857600080fd5b8101908080519060200190929190505050505b60011515833373ffffffffffffffffffffffffffffffffffffffff167fc6256fb2ecd8d2f158a68a9262e6b66c4bf8f05c85f472ea17929c27d1d6ed4d60405160405180910390a4505050565b60025481565b6000809054906101000a900473ffffffffffffffffffffffffffffffffffffffff1681565b60055481565b60075481565b601560009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1681565b601260159054906101000a900460ff1681565b601260019054906101000a900473ffffffffffffffffffffffffffffffffffffffff1681565b60065481565b60035481565b600b5481565b60105481565b6000809054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff163373ffffffffffffffffffffffffffffffffffffffff161461143f57600080fd5b600073ffffffffffffffffffffffffffffffffffffffff168173ffffffffffffffffffffffffffffffffffffffff16141561147957600080fd5b8073ffffffffffffffffffffffffffffffffffffffff166000809054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff167f8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e060405160405180910390a3806000806101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff16021790555050565b600d5442116115ae576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040180806020018281038252600d8152602001807f43616e742063616c6c206e6f770000000000000000000000000000000000000081525060200191505060405180910390fd5b6000601360003373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019081526020016000205490506000811015611669576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004018080602001828103825260088152602001807f4e6f2076616c756500000000000000000000000000000000000000000000000081525060200191505060405180910390fd5b601260169054906101000a900460ff16611817576000601360003373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020819055506000811115611816573373ffffffffffffffffffffffffffffffffffffffff166108fc601460003373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020549081150290604051600060405180830381858888f19350505050156117d05760001515601460003373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020543373ffffffffffffffffffffffffffffffffffffffff167fc6256fb2ecd8d2f158a68a9262e6b66c4bf8f05c85f472ea17929c27d1d6ed4d60405160405180910390a4611815565b80601360003373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020819055505b5b5b601260169054906101000a900460ff16801561187f57506000809054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff163373ffffffffffffffffffffffffffffffffffffffff16145b1561194d573373ffffffffffffffffffffffffffffffffffffffff166108fc6011549081150290604051600060405180830381858888f193505050501561193057600015156011546000809054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff167fc6256fb2ecd8d2f158a68a9262e6b66c4bf8f05c85f472ea17929c27d1d6ed4d60405160405180910390a461194c565b6000601260166101000a81548160ff0219169083151502179055505b5b50565b60008082840190508381101561196557600080fd5b8091505092915050565b60008083141561198257600090506119a3565b600082840290508284828161199357fe5b041461199e57600080fd5b809150505b92915050565b6000828211156119b857600080fd5b60008284039050809150509291505056fea165627a7a723058207edc9835e1186dc404ce3e09d1676d73c45da2ca5170c945079fcabfd403cbbb0029"
    },

    getBytecodeTokenICO(){
        return "60806040523480156200001157600080fd5b50604051620014e5380380620014e5833981018060405260808110156200003757600080fd5b8101908080516401000000008111156200005057600080fd5b828101905060208101848111156200006757600080fd5b81518560018202830111640100000000821117156200008557600080fd5b5050929190602001805190602001909291908051640100000000811115620000ac57600080fd5b82810190506020810184811115620000c357600080fd5b8151856001820283011164010000000082111715620000e157600080fd5b50509291906020018051906020019092919050505033600260006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff16021790555083600390805190602001906200014f929190620002a0565b508260048190555081600590805190602001906200016f929190620002a0565b50806006819055507f93658079481e20c5865eccecd193b0bdd8648bd50974260b4f1ba8c7f5b1595284848484604051808060200185815260200180602001848152602001838103835287818151815260200191508051906020019080838360005b83811015620001ee578082015181840152602081019050620001d1565b50505050905090810190601f1680156200021c5780820380516001836020036101000a031916815260200191505b50838103825285818151815260200191508051906020019080838360005b83811015620002575780820151818401526020810190506200023a565b50505050905090810190601f168015620002855780820380516001836020036101000a031916815260200191505b50965050505050505060405180910390a1505050506200034f565b828054600181600116156101000203166002900490600052602060002090601f016020900481019282601f10620002e357805160ff191683800117855562000314565b8280016001018555821562000314579182015b8281111562000313578251825591602001919060010190620002f6565b5b50905062000323919062000327565b5090565b6200034c91905b80821115620003485760008160009055506001016200032e565b5090565b90565b611186806200035f6000396000f3fe608060405234801561001057600080fd5b50600436106100b45760003560e01c806370a082311161007157806370a08231146102b25780638da5cb5b1461030a57806395d89b4114610354578063a9059cbb146103d7578063dd62ed3e1461043d578063f2fde38b146104b5576100b4565b806306fdde03146100b9578063095ea7b31461013c57806318160ddd146101a257806323b872dd146101c0578063313ce5671461024657806340c10f1914610264575b600080fd5b6100c16104f9565b6040518080602001828103825283818151815260200191508051906020019080838360005b838110156101015780820151818401526020810190506100e6565b50505050905090810190601f16801561012e5780820380516001836020036101000a031916815260200191505b509250505060405180910390f35b6101886004803603604081101561015257600080fd5b81019080803573ffffffffffffffffffffffffffffffffffffffff16906020019092919080359060200190929190505050610597565b604051808215151515815260200191505060405180910390f35b6101aa61067f565b6040518082815260200191505060405180910390f35b61022c600480360360608110156101d657600080fd5b81019080803573ffffffffffffffffffffffffffffffffffffffff169060200190929190803573ffffffffffffffffffffffffffffffffffffffff16906020019092919080359060200190929190505050610685565b604051808215151515815260200191505060405180910390f35b61024e610a07565b6040518082815260200191505060405180910390f35b6102b06004803603604081101561027a57600080fd5b81019080803573ffffffffffffffffffffffffffffffffffffffff16906020019092919080359060200190929190505050610a0d565b005b6102f4600480360360208110156102c857600080fd5b81019080803573ffffffffffffffffffffffffffffffffffffffff169060200190929190505050610c4a565b6040518082815260200191505060405180910390f35b610312610c92565b604051808273ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200191505060405180910390f35b61035c610cb8565b6040518080602001828103825283818151815260200191508051906020019080838360005b8381101561039c578082015181840152602081019050610381565b50505050905090810190601f1680156103c95780820380516001836020036101000a031916815260200191505b509250505060405180910390f35b610423600480360360408110156103ed57600080fd5b81019080803573ffffffffffffffffffffffffffffffffffffffff16906020019092919080359060200190929190505050610d56565b604051808215151515815260200191505060405180910390f35b61049f6004803603604081101561045357600080fd5b81019080803573ffffffffffffffffffffffffffffffffffffffff169060200190929190803573ffffffffffffffffffffffffffffffffffffffff169060200190929190505050610f40565b6040518082815260200191505060405180910390f35b6104f7600480360360208110156104cb57600080fd5b81019080803573ffffffffffffffffffffffffffffffffffffffff169060200190929190505050610fc7565b005b60038054600181600116156101000203166002900480601f01602080910402602001604051908101604052809291908181526020018280546001816001161561010002031660029004801561058f5780601f106105645761010080835404028352916020019161058f565b820191906000526020600020905b81548152906001019060200180831161057257829003601f168201915b505050505081565b600081600160003373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060008573ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002081905550818373ffffffffffffffffffffffffffffffffffffffff163373ffffffffffffffffffffffffffffffffffffffff167f8c5be1e5ebec7d5bd14f71427d1e84f3dd0314c0f7b2291e5b200ac8c7c3b92560405160405180910390a46001905092915050565b60065481565b6000816000808673ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019081526020016000205410158015610751575081600160008673ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060003373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019081526020016000205410155b801561075d5750600082115b156109fb576107b3826000808673ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019081526020016000205461111b90919063ffffffff16565b6000808573ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002081905550610846826000808773ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019081526020016000205461113a90919063ffffffff16565b6000808673ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019081526020016000208190555061091782600160008773ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060003373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019081526020016000205461113a90919063ffffffff16565b600160008673ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060003373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002081905550818373ffffffffffffffffffffffffffffffffffffffff168573ffffffffffffffffffffffffffffffffffffffff167fddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef60405160405180910390a460019050610a00565b600090505b9392505050565b60045481565b600260009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff163373ffffffffffffffffffffffffffffffffffffffff1614610a6757600080fd5b8060065411610ade576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040180806020018281038252600d8152602001807f496e76616c69642076616c75650000000000000000000000000000000000000081525060200191505060405180910390fd5b60008111610b54576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040180806020018281038252600d8152602001807f496e76616c69642076616c75650000000000000000000000000000000000000081525060200191505060405180910390fd5b610ba5816000808573ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019081526020016000205461111b90919063ffffffff16565b6000808473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002081905550610bfc8160065461113a90919063ffffffff16565b600681905550808273ffffffffffffffffffffffffffffffffffffffff167f0f6798a560793a54c3bcfe86a93cde1e73087d944c0ea20544137d412139688560405160405180910390a35050565b60008060008373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020549050919050565b600260009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1681565b60058054600181600116156101000203166002900480601f016020809104026020016040519081016040528092919081815260200182805460018160011615610100020316600290048015610d4e5780601f10610d2357610100808354040283529160200191610d4e565b820191906000526020600020905b815481529060010190602001808311610d3157829003601f168201915b505050505081565b6000816000803373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019081526020016000205410158015610da65750600082115b15610f3557610dfc826000803373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019081526020016000205461113a90919063ffffffff16565b6000803373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002081905550610e8f826000808673ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019081526020016000205461111b90919063ffffffff16565b6000808573ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002081905550818373ffffffffffffffffffffffffffffffffffffffff163373ffffffffffffffffffffffffffffffffffffffff167fddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef60405160405180910390a460019050610f3a565b600090505b92915050565b6000600160008473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060008373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002054905092915050565b600260009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff163373ffffffffffffffffffffffffffffffffffffffff161461102157600080fd5b600073ffffffffffffffffffffffffffffffffffffffff168173ffffffffffffffffffffffffffffffffffffffff16141561105b57600080fd5b8073ffffffffffffffffffffffffffffffffffffffff16600260009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff167f8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e060405160405180910390a380600260006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff16021790555050565b60008082840190508381101561113057600080fd5b8091505092915050565b60008282111561114957600080fd5b60008284039050809150509291505056fea165627a7a723058204d693ef666dee186a0b537498a0d68d456aa8e929106080025ee7c2f29ed71920029"
    },

    getAbiDTUToken(){
        return [ { "constant": false, "inputs": [ { "name": "_spender", "type": "address" }, { "name": "_value", "type": "uint256" } ], "name": "approve", "outputs": [ { "name": "success", "type": "bool" } ], "payable": false, "stateMutability": "nonpayable", "type": "function" }, { "constant": false, "inputs": [ { "name": "_amount", "type": "uint256" } ], "name": "burn", "outputs": [ { "name": "", "type": "bool" } ], "payable": false, "stateMutability": "nonpayable", "type": "function" }, { "constant": false, "inputs": [ { "name": "_amount", "type": "uint256" } ], "name": "buyToken", "outputs": [ { "name": "", "type": "bool" } ], "payable": true, "stateMutability": "payable", "type": "function" }, { "constant": false, "inputs": [], "name": "deposit", "outputs": [ { "name": "", "type": "bool" } ], "payable": true, "stateMutability": "payable", "type": "function" }, { "constant": false, "inputs": [], "name": "reward", "outputs": [ { "name": "", "type": "bool" } ], "payable": false, "stateMutability": "nonpayable", "type": "function" }, { "constant": false, "inputs": [ { "name": "_to", "type": "address" }, { "name": "_value", "type": "uint256" } ], "name": "transfer", "outputs": [ { "name": "success", "type": "bool" } ], "payable": false, "stateMutability": "nonpayable", "type": "function" }, { "constant": false, "inputs": [ { "name": "_from", "type": "address" }, { "name": "_to", "type": "address" }, { "name": "_value", "type": "uint256" } ], "name": "transferFrom", "outputs": [ { "name": "success", "type": "bool" } ], "payable": false, "stateMutability": "nonpayable", "type": "function" }, { "inputs": [ { "name": "_name", "type": "string" }, { "name": "_decimals", "type": "uint256" }, { "name": "_symbol", "type": "string" }, { "name": "_unitCan", "type": "uint256" }, { "name": "_cashier", "type": "address" }, { "name": "_description", "type": "string" } ], "payable": false, "stateMutability": "nonpayable", "type": "constructor" }, { "anonymous": false, "inputs": [ { "indexed": true, "name": "_from", "type": "address" }, { "indexed": true, "name": "_valueSend", "type": "uint256" }, { "indexed": true, "name": "_exchange", "type": "uint256" } ], "name": "BuyToken", "type": "event" }, { "anonymous": false, "inputs": [ { "indexed": true, "name": "_to", "type": "address" }, { "indexed": true, "name": "_valueSend", "type": "uint256" } ], "name": "FundTransfer", "type": "event" }, { "anonymous": false, "inputs": [ { "indexed": true, "name": "_from", "type": "address" }, { "indexed": true, "name": "_valueSend", "type": "uint256" } ], "name": "Deposit", "type": "event" }, { "anonymous": false, "inputs": [ { "indexed": true, "name": "", "type": "address" }, { "indexed": true, "name": "", "type": "address" }, { "indexed": true, "name": "", "type": "uint256" } ], "name": "Transfer", "type": "event" }, { "anonymous": false, "inputs": [ { "indexed": true, "name": "", "type": "address" }, { "indexed": true, "name": "", "type": "address" }, { "indexed": true, "name": "", "type": "uint256" } ], "name": "Approval", "type": "event" }, { "constant": true, "inputs": [ { "name": "_owner", "type": "address" }, { "name": "_spender", "type": "address" } ], "name": "allowance", "outputs": [ { "name": "remaining", "type": "uint256" } ], "payable": false, "stateMutability": "view", "type": "function" }, { "constant": true, "inputs": [ { "name": "_owner", "type": "address" } ], "name": "balanceOf", "outputs": [ { "name": "balance", "type": "uint256" } ], "payable": false, "stateMutability": "view", "type": "function" }, { "constant": true, "inputs": [ { "name": "", "type": "uint256" } ], "name": "bonus", "outputs": [ { "name": "", "type": "uint256" } ], "payable": false, "stateMutability": "view", "type": "function" }, { "constant": true, "inputs": [], "name": "cashier", "outputs": [ { "name": "", "type": "address" } ], "payable": false, "stateMutability": "view", "type": "function" }, { "constant": true, "inputs": [], "name": "contractDescription", "outputs": [ { "name": "", "type": "string" } ], "payable": false, "stateMutability": "view", "type": "function" }, { "constant": true, "inputs": [], "name": "creator", "outputs": [ { "name": "", "type": "address" } ], "payable": false, "stateMutability": "view", "type": "function" }, { "constant": true, "inputs": [], "name": "decimals", "outputs": [ { "name": "", "type": "uint256" } ], "payable": false, "stateMutability": "view", "type": "function" }, { "constant": true, "inputs": [], "name": "getState", "outputs": [ { "name": "", "type": "uint256" } ], "payable": false, "stateMutability": "view", "type": "function" }, { "constant": true, "inputs": [ { "name": "", "type": "address" } ], "name": "isRegister", "outputs": [ { "name": "", "type": "bool" } ], "payable": false, "stateMutability": "view", "type": "function" }, { "constant": true, "inputs": [], "name": "name", "outputs": [ { "name": "", "type": "string" } ], "payable": false, "stateMutability": "view", "type": "function" }, { "constant": true, "inputs": [], "name": "rating", "outputs": [ { "name": "", "type": "uint256" } ], "payable": false, "stateMutability": "view", "type": "function" }, { "constant": true, "inputs": [], "name": "symbol", "outputs": [ { "name": "", "type": "string" } ], "payable": false, "stateMutability": "view", "type": "function" }, { "constant": true, "inputs": [ { "name": "", "type": "address" } ], "name": "timeRegister", "outputs": [ { "name": "", "type": "uint256" } ], "payable": false, "stateMutability": "view", "type": "function" }, { "constant": true, "inputs": [ { "name": "", "type": "address" } ], "name": "totalBonus", "outputs": [ { "name": "", "type": "uint256" } ], "payable": false, "stateMutability": "view", "type": "function" }, { "constant": true, "inputs": [], "name": "totalSupply", "outputs": [ { "name": "", "type": "uint256" } ], "payable": false, "stateMutability": "view", "type": "function" } ]
    }
}