# SimpleStorage DApp

A simple decentralized application using Ethereum and Web3.js to store and retrieve a value on the blockchain.

## Project Structure

### Homepage (index.html)
```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>SimpleStorage DApp</title>
    <link rel="stylesheet" href="styles.css">
</head>
<body>
    <h1>SimpleStorage DApp</h1>
    <div class="container">
        <div class="input-container">
            <label for="valueInput">Set Value: </label>
            <input type="number" id="valueInput">
            <button onclick="setValue()">Set Value</button>
        </div>
        <div class="output-container">
            <button onclick="getValue()">Get Value</button>
            <p id="valueDisplay"></p>
        </div>
    </div>
    <script src="https://cdn.jsdelivr.net/npm/web3/dist/web3.min.js"></script>
    <script src="app.js"></script>
</body>
</html>
