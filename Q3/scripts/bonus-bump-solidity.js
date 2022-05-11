const fs = require("fs");
const solidityRegex = /pragma solidity \^\d+\.\d+\.\d+/

const verifierRegex = /contract Verifier/

// let content = fs.readFileSync("./contracts/SystemOfEquationsVerifier.sol", { encoding: 'utf-8' });
// let bumped = content.replace(solidityRegex, 'pragma solidity ^0.8.0');
// bumped = bumped.replace(verifierRegex, 'contract SystemOfEquationsVerifier');

// fs.writeFileSync("./contracts/SystemOfEquationsVerifier.sol", bumped);

let LessThen10 = fs.readFileSync("./contracts/LessThan10Verifier.sol", { encoding: 'utf-8' });
let bumpedLessThen10 = LessThen10.replace(solidityRegex, 'pragma solidity ^0.8.0').replace("contract Verifier","contract LessThan10Verifier")

fs.writeFileSync("./contracts/LessThan10Verifier.sol", bumpedLessThen10);

// [assignment] add your own scripts below to modify the other verifier contracts you will build during the assignment