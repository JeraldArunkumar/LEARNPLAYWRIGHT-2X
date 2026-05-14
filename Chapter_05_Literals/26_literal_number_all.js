// 26_literal_number_all.js
// Comprehensive guide to all number types and literals in JavaScript.

// 1. INTEGER (Decimal) - Basic whole numbers
console.log('=== 1. INTEGERS (Decimal) ===');
let int1 = 42;
let int2 = -100;
let int3 = 0;
console.log('int1:', int1);
console.log('int2:', int2);
console.log('int3:', int3);

// 2. FLOATING POINT - Numbers with decimals
console.log('\n=== 2. FLOATING POINT ===');
let float1 = 3.14;
let float2 = -2.5;
let float3 = 0.001;
console.log('float1:', float1);
console.log('float2:', float2);
console.log('float3:', float3);

// 3. SCIENTIFIC NOTATION - Large or small numbers
console.log('\n=== 3. SCIENTIFIC NOTATION ===');
let sci1 = 1e3;           // 1 * 10^3 = 1000
let sci2 = 2.5e2;         // 2.5 * 10^2 = 250
let sci3 = 1e-3;          // 1 * 10^-3 = 0.001
let sci4 = 3.14e-1;       // 3.14 * 10^-1 = 0.314
console.log('sci1 (1e3):', sci1);
console.log('sci2 (2.5e2):', sci2);
console.log('sci3 (1e-3):', sci3);
console.log('sci4 (3.14e-1):', sci4);

// 4. HEXADECIMAL - Base 16 numbers (prefix: 0x)
console.log('\n=== 4. HEXADECIMAL (0x) ===');
let hex1 = 0xFF;          // 255 in decimal
let hex2 = 0x10;          // 16 in decimal
let hex3 = 0xDEADBEEF;    // Large hex number
console.log('hex1 (0xFF):', hex1);
console.log('hex2 (0x10):', hex2);
console.log('hex3 (0xDEADBEEF):', hex3);

// 5. OCTAL - Base 8 numbers (prefix: 0o)
console.log('\n=== 5. OCTAL (0o) ===');
let oct1 = 0o10;          // 8 in decimal
let oct2 = 0o77;          // 63 in decimal
let oct3 = 0o755;         // 493 in decimal (common Unix permission)
console.log('oct1 (0o10):', oct1);
console.log('oct2 (0o77):', oct2);
console.log('oct3 (0o755):', oct3);

// 6. BINARY - Base 2 numbers (prefix: 0b)
console.log('\n=== 6. BINARY (0b) ===');
let bin1 = 0b1010;        // 10 in decimal
let bin2 = 0b1111;        // 15 in decimal
let bin3 = 0b11111111;    // 255 in decimal
console.log('bin1 (0b1010):', bin1);
console.log('bin2 (0b1111):', bin2);
console.log('bin3 (0b11111111):', bin3);

// 7. SPECIAL VALUES - Infinity and NaN
console.log('\n=== 7. SPECIAL VALUES ===');
let inf1 = Infinity;
let inf2 = -Infinity;
let notANumber = NaN;
console.log('Infinity:', inf1);
console.log('-Infinity:', inf2);
console.log('NaN (Not a Number):', notANumber);
console.log('typeof NaN:', typeof notANumber); // "number" (another quirk!)

// Infinity examples
console.log('\n--- Infinity Examples ---');
let result1 = 1 / 0;                          // Infinity
let result2 = -1 / 0;                         // -Infinity
let result3 = Math.max();                     // -Infinity
console.log('1 / 0:', result1);
console.log('-1 / 0:', result2);
console.log('Math.max():', result3);

// NaN examples
console.log('\n--- NaN Examples ---');
let result4 = 0 / 0;                          // NaN
let result5 = Math.sqrt(-1);                  // NaN
let result6 = parseInt('hello');              // NaN
console.log('0 / 0:', result4);
console.log('Math.sqrt(-1):', result5);
console.log('parseInt("hello"):', result6);

// 8. BIG INT - Very large integers (suffix: n)
console.log('\n=== 8. BigINT ===');
let big1 = 9007199254740992n;                 // Beyond max safe integer
let big2 = 123456789012345678901234567890n;  // Very large number
let big3 = 100n;
console.log('big1:', big1);
console.log('big2:', big2);
console.log('big3:', big3);
console.log('typeof big3:', typeof big3);      // "bigint"

// Note: Cannot mix BigInt with regular numbers
// let result = 10n + 5; // This would throw an error
let result7 = 10n + 5n;                       // Both must be BigInt
console.log('10n + 5n:', result7);

// 9. UNDERSCORES for readability (ES2021) - Separators in numbers
console.log('\n=== 9. NUMBER SEPARATORS (Underscores) ===');
let num1 = 1_000_000;                         // 1 million
let num2 = 0xFF_FF_FF;                        // Hex with underscores
let num3 = 0b1111_0000;                       // Binary with underscores
console.log('num1 (1_000_000):', num1);
console.log('num2 (0xFF_FF_FF):', num2);
console.log('num3 (0b1111_0000):', num3);

// 10. TYPE CHECKING ALL NUMBER TYPES
console.log('\n=== 10. TYPE CHECKING ===');
console.log('typeof 42:', typeof 42);                      // "number"
console.log('typeof 3.14:', typeof 3.14);                  // "number"
console.log('typeof Infinity:', typeof Infinity);          // "number"
console.log('typeof NaN:', typeof NaN);                    // "number"
console.log('typeof 100n:', typeof 100n);                  // "bigint"

// SUMMARY
console.log('\n=== SUMMARY ===');
console.log('JavaScript number types:');
console.log('1. Integer (decimal)');
console.log('2. Floating point');
console.log('3. Scientific notation (1e3)');
console.log('4. Hexadecimal (0x)');
console.log('5. Octal (0o)');
console.log('6. Binary (0b)');
console.log('7. Special values (Infinity, -Infinity, NaN)');
console.log('8. BigInt (123n)');
console.log('9. Number separators for readability (1_000_000)');
