const fs = require("fs");
const solidityRegex = /pragma solidity \^\d+\.\d+\.\d+/;

const verifierRegex = 'contract Verifier';
const plonkVerifierRegex = 'contract PlonkVerifier';

let content = fs.readFileSync("./contracts/HelloWorldVerifier.sol", { encoding: 'utf-8' });
let bumped = content.replace(solidityRegex, 'pragma solidity ^0.8.0')
             .replace(verifierRegex, 'contract HelloWorldVerifier');

let contentMult3 = fs.readFileSync("./contracts/Multiplier3Verifier.sol", { encoding: 'utf-8' });
let bumpedMult3 = contentMult3.replace(solidityRegex, 'pragma solidity ^0.8.0')
                .replace(verifierRegex, 'contract Multiplier3Verifier');

let contentPlonk = fs.readFileSync("./contracts/Multiplier3Verifier_plonk.sol", { encoding: 'utf-8' });
let bumpedPlonk = contentPlonk.replace(solidityRegex, 'pragma solidity ^0.8.0')
                .replace(plonkVerifierRegex, 'contract Multiplier3PlonkVerifier');

fs.writeFileSync("./contracts/HelloWorldVerifier.sol", bumped);
fs.writeFileSync("./contracts/Multiplier3Verifier.sol", bumpedMult3);
fs.writeFileSync("./contracts/Multiplier3Verifier_plonk.sol", bumpedPlonk);

// [assignment] add your own scripts below to modify the other verifier contracts you will build during the assignment