pragma circom 2.0.0;

include "../../node_modules/circomlib/circuits/comparators.circom";

template LessThan10() {
    signal input a;
    signal output out;

    component lt = LessThan(32); 

    lt.in[0] <== a;
    lt.in[1] <== 10;

    out <== lt.out;
}
component main = LessThan10();