// Initialize Web3
let web3;
if (window.ethereum) {
    web3 = new Web3(window.ethereum);
    window.ethereum.enable();
} else if (window.web3) {
    web3 = new Web3(window.web3.currentProvider);
} else {
    console.log('Non-Ethereum browser detected. You should consider trying MetaMask!');
}

// Contract ABI and Address (replace with your deployed contract address)
const abi = [
    {
		"anonymous": false,
		"inputs": [
			{
				"indexed": false,
				"internalType": "uint256",
				"name": "newValue",
				"type": "uint256"
			}
		],
		"name": "DataChanged",
		"type": "event"
	},
	{
		"inputs": [
			{
				"internalType": "uint256",
				"name": "x",
				"type": "uint256"
			}
		],
		"name": "set",
		"outputs": [],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [],
		"name": "get",
		"outputs": [
			{
				"internalType": "uint256",
				"name": "",
				"type": "uint256"
			}
		],
		"stateMutability": "view",
		"type": "function"
	}

];
const contractAddress = 'YOUR_CONTRACT_ADDRESS_HERE';
const simpleStorage = new web3.eth.Contract(abi, contractAddress);

// Set value
async function setValue() {
    const value = document.getElementById('valueInput').value;
    const accounts = await web3.eth.getAccounts();
    await simpleStorage.methods.set(value).send({ from: accounts[0] });
    console.log('Value set to', value);
}

// Get value
async function getValue() {
    const value = await simpleStorage.methods.get().call();
    document.getElementById('valueDisplay').innerText = 'Stored value: ${value}';
    console.log('Stored Value:', value);
}