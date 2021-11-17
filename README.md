# A Command Line Password Generator

Create the safest password with this Node.js command line tool. 

Basic output:

**word1** + **word2** + **word3** + **4-6 random numbers** + **!**

Future: 

- Randomly capitalize 1-3 of the randomly generated words
- Put the exclemation point at a random position in the string

```javascript
// Test script

function rNum() {
  const min = 1;
  const max = 9;

  return Math.floor(
    Math.random() * (max - min + 1) + min
  )
};

console.log(rNum());
```
