let dnaComp = ['A','C','G','T'];
let rnaComp = [];

//Your task is determine the RNA complement of a given DNA sequence.

//The four nucleotides found in DNA are adenine (A), cytosine (C), guanine (G) and thymine (T).

//The four nucleotides found in RNA are adenine (A), cytosine (C), guanine (G) and uracil (U).

/*

Given a DNA strand, its transcribed RNA strand is formed by replacing each nucleotide with its complement:
G -> C
C -> G
T -> A
A -> U


*/

for (let i = 0; i < dnaComp.length; i++) {
    if (dnaComp[i] === 'G') {
        rnaComp.push('C')
    } else if (dnaComp[i] === 'C') {
        rnaComp.push('G')
    } else if (dnaComp[i] === 'T') {
        rnaComp.push('A')
    } else if (dnaComp[i] === 'A') {
        rnaComp.push('U')
    }
}

console.log(rnaComp)