# FreeCodeCamp - Telephone Number Validator solution

This is a solution to the [Telephone Number Validator on FreeCodeCamp](https://www.freecodecamp.org/learn/javascript-algorithms-and-data-structures/). FreeCodeCamp helps you improve your coding skills by building realistic projects.

## Table of contents

- [Overview](#overview)
  - [The challenge](#the-challenge)
  - [Links](#links)
- [My process](#my-process)
  - [What I learned](#what-i-learned)
  - [Useful resources](#useful-resources)
- [Author](#author)

## Overview

### The challenge

Return <mark>true</mark> if the passed string looks like a valid US phone number.

The user may fill out the form field any way they choose as long as it has the format of a valid US number. The following are examples of valid formats for US numbers (refer to the tests below for other variants):

    555-555-5555
    (555)555-5555
    (555) 555-5555
    555 555 5555
    5555555555
    1 555 555 5555

For this challenge you will be presented with a string such as <mark>800-692-7753</mark> or <mark>8oo-six427676;laskdjf</mark>. Your job is to validate or reject the US phone number based on any combination of the formats provided above. The area code is required. If the country code is provided, you must confirm that the country code is <mark>1</mark>. Return <mark>true</mark> if the string is a valid US phone number; otherwise return <mark>false</mark>.

### Links

- Solution URL: [@GitHub](https://github.com/xdelmo/telephone-number-validator)

## My process

### What I learned

In this project I got better at creating regular expressions:

```js
/^(1\s?)?(\d{3}|\(\d{3}\))[\-\s]?\d{3}[\-\s]?\d{4}$/gm;
```

- ^ asserts position at start of a line

- 1st Capturing Group (1\s?)?

  - ? matches the previous token between zero and one times, as many times as possible, giving back as needed (greedy) 1 matches the character 1 with index 4910 (3116 or 618) literally (case sensitive)

    - \s matches any whitespace character (equivalent to [\r\n\t\f\v\u00a0\u1680\u2000-\u200a\u2028\u2029\u202f\u205f\u3000\ufeff])

    - ? matches the previous token between zero and one times, as many times as possible, giving back as needed (greedy)

- 2nd Capturing Group (\d{3}|\(\d{3}\))

  - 1st Alternative \d{3}
    - \d matches a digit (equivalent to [0-9])
    - {3} matches the previous token exactly 3 times
  - 2nd Alternative \(\d{3}\)
    - \( matches the character ( with index 4010 (2816 or 508) literally (case sensitive)
    - \d matches a digit (equivalent to [0-9])
    - {3} matches the previous token exactly 3 times
    - \) matches the character ) with index 4110 (2916 or 518) literally (case sensitive)

- Match a single character present in the list below [\-\s]

  - ? matches the previous token between zero and one times, as many times as possible, giving back as needed (greedy)
  - \- matches the character - with index 4510 (2D16 or 558) literally (case sensitive)
  - \s matches any whitespace character (equivalent to [\r\n\t\f\v\u00a0\u1680\u2000-\u200a\u2028\u2029\u202f\u205f\u3000\ufeff])
  - \d matches a digit (equivalent to [0-9])
  - {3} matches the previous token exactly 3 times

- Match a single character present in the list below [\-\s]

  - ? matches the previous token between zero and one times, as many times as possible, giving back as needed (greedy)
  - \- matches the character - with index 4510 (2D16 or 558) literally (case sensitive)
  - \s matches any whitespace character (equivalent to [\r\n\t\f\v\u00a0\u1680\u2000-\u200a\u2028\u2029\u202f\u205f\u3000\ufeff])
  - \d matches a digit (equivalent to [0-9])
  - {4} matches the previous token exactly 4 times

- $ asserts position at the end of a line

- Global pattern flags
  - g modifier: global. All matches (don't return after first match)
  - m modifier: multi line. Causes ^ and $ to match the begin/end of each line (not only begin/end of string)

### Useful resources

- [Regex101](https://regex101.com/) - Interactive tool to create Regular Expressions and match strings in real time
- [aksonai](https://www.youtube.com/watch?v=AKXKN8nNAHk&t=11s) - Video to understand regExp meaning

## Author

- Website - [Emanuele Del Monte](https://www.emanueledelmonte.it)
