# codetest-typescript-linear11

For this coding challenge, you will need to write a Typescript app that takes a 16-bit hexadecimal number in Linear-11 format and converts it to a decimal number.
## Relevant concepts
Here are a few concepts that will be helpful:
* Binary numbers
* Hexadecimal numbers
* Bit/String manipulation
* Converting a binary number into a signed integer (Two's Complement)

## Linear-11 Format
The 16 bits in a Linear-11 number have the following big-endian format:

`XXXX XYYY YYYY YYYY`

`X` are the 5 most significant bits, and are a signed binary number. This is the "Exponent".

`Y` are the 11 least significant bits, and are also a signed binary number. This is called the "Mantissa".

If we convert these two numbers into integers, they are used in the following formula to get a decimal number:
```
Decimal Value = Y * 2^(X)
```

## Conversion Process
You will be implementing the following conversion process:
1. Convert the hexadecimal input into a binary string.
2. Extract the 5 most significant bits from the binary string and convert it to a signed integer. Store it as the Exponent and print it.
3. Extract the 11 least significant bits from the binary string and convert it to a signed integer. Store it as the Mantissa and print it.
4. Plug these two values into the `Decimal Value` formula above and print it.

## Examples
Input: E801

Expected Output:
```
Exponent: -3
Mantissa: 1
Value: 0.125
```

Input: F9AD

Expected Output:
```
Exponent: -1
Mantissa: 429
Value: 214.5
```

Input: 1234

Expected Output:
```
Exponent: 2
Mantissa: 564
Value: 2256.0
```

Input: EC01

Expected Output:
```
Exponent: -3
Mantissa: -1023
Value: -127.875
```
