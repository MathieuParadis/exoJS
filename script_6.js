
// 2.4.1. Code la vie
console.log("2.4.1. Code la vie");

const code = [
  { ARN: 'UCU', AA: "Sérine" },
  { ARN: 'UCC', AA: "Sérine" },
  { ARN: 'UCA', AA: "Sérine" },
  { ARN: 'UCG', AA: "Sérine" },
  { ARN: 'AGU', AA: "Sérine" },
  { ARN: 'AGC', AA: "Sérine" },
  { ARN: 'CCU', AA: "Proline" },
  { ARN: 'CCC', AA: "Proline" },
  { ARN: 'CCA', AA: "Proline" },
  { ARN: 'CCG', AA: "Proline" },
  { ARN: 'UUA', AA: "Leucine" },
  { ARN: 'UUG', AA: "Leucine" },
  { ARN: 'UUU', AA: "Phénylalanine" },
  { ARN: 'UUC', AA: "Phénylalanine" },
  { ARN: 'CGU', AA: "Arginine" },
  { ARN: 'CGC', AA: "Arginine" },
  { ARN: 'CGA', AA: "Arginine" },
  { ARN: 'CGG', AA: "Arginine" },
  { ARN: 'AGA', AA: "Arginine" },
  { ARN: 'AGG', AA: "Arginine" },
  { ARN: 'UAU', AA: "Tyrosine" },
  { ARN: 'UAC', AA: "Tyrosine" },
];


seq1 = 'CCGUCGUUGCGCUACAGC'
seq2 = 'CCUCGCCGGUACUUCUCG'

function convertSequenceInntoArray(sequence) {
  arr = [];
  for (let i = 0; i <=sequence.length-1; i+=3) {
    arr.push(sequence.slice(i, i+3));
  }
  return arr;
}

function ConversionARN_AA(sequence_array) {
  arr = []

  sequence_array.forEach(seq => {
    code.forEach(code_hash => {
      if(code_hash.ARN == seq) {
        arr.push(code_hash.AA)
      }
    });
  });
  return arr
}

function decode (string_seq) {
  let keys = convertSequenceInntoArray(string_seq);
  let values = ConversionARN_AA(convertSequenceInntoArray(string_seq));
  
  let result = {};
  keys.forEach((key, i) => result[key] = values[i]);
  console.log(result);
}
console.log("Sequence 1");
decode(seq1)

console.log("");

console.log("Sequence 2");
decode(seq2)
