// ── VARIABLES ───────────────────────────────────────────
const name = "Atanas"          // can't be reassigned
let age = 40                   // can be reassigned
age = 41                       // this is fine

// const vs let rule: always use const by default,
// only switch to let when you KNOW the value will change

// ── DATA TYPES ──────────────────────────────────────────
const isLearning = true        // boolean
const score = null             // intentional empty value
let notDefined                 // undefined — no value yet

console.log(typeof name)       // "string"
console.log(typeof age)        // "number"
console.log(typeof isLearning) // "boolean"
console.log(typeof score)      // "object" ← famous JS quirk
console.log(typeof notDefined) // "undefined"

// ── STRINGS ─────────────────────────────────────────────
const firstName = "Atanas"
const lastName = "Tasevski"

// Template literals — use these, not + concatenation
const fullName = `${firstName} ${lastName}`
const greeting = `Hello, ${fullName}! You are learning JS.`
console.log(greeting)

// Useful string methods
console.log(fullName.toUpperCase())    // "ATANAS TASEVSKI"
console.log(fullName.toLowerCase())    // "atanas tasevski"
console.log(fullName.includes("Task")) // true
console.log(fullName.length)           // 15

// ── FUNCTIONS ───────────────────────────────────────────
// Regular function
function greet(personName) {
  return `Hello, ${personName}!`
}

// Arrow function — same thing, shorter syntax
// You'll see arrow functions everywhere in React
const greetArrow = (personName) => {
  return `Hello, ${personName}!`
}

// Even shorter — when body is just a return, drop the braces
const greetShort = (personName) => `Hello, ${personName}!`

console.log(greet("Atanas"))
console.log(greetArrow("Atanas"))
console.log(greetShort("Atanas"))

// ── DEFAULT PARAMETERS ──────────────────────────────────
const greetWithDefault = (personName = "friend") => `Hello, ${personName}!`

console.log(greetWithDefault())          // "Hello, friend!"
console.log(greetWithDefault("Atanas"))  // "Hello, Atanas!"

// ── YOUR TURN ───────────────────────────────────────────
// Write a function called "introduce" that takes a name and a job title
// and returns: "Hi, I'm Atanas and I'm a Senior AI Business Analyst."
// Try it below:

const introduce = (personName, personJob) => `I'm, ${personName}! and I'm a ${personJob}!.`
console.log(introduce("Atanas", "Senior AI Business Analyst"))