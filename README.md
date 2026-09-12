# 🚀 DevStack

DevStack is a responsive React web application that helps developers explore popular technologies and build their own ideal development stack.

Users can browse technologies from categories such as Frontend, Backend, Database, Language, Styling, DevOps, and Tools.

---

## 🛠️ Technologies Used

- React
- TypeScript
- Vite
- Tailwind CSS
- DaisyUI
- React Toastify
- JSON
- Git & GitHub

---

## ✨ Features

### 1. Build Your Own Technology Stack

Users can explore different technologies and add their preferred technologies to the **Your Stack** section.

Once a technology is added, the button changes to:

`✓ Added to Stack`

and becomes disabled.

### 2. Add and Remove Technologies

Users can:

- Add technologies to their stack
- Remove an individual technology
- Remove all technologies at once
- Prevent duplicate technologies from being added
- Receive notifications using React Toastify

### 3. Fully Responsive Design

DevStack is fully responsive for:

- Mobile devices
- Tablets
- Laptops
- Desktop screens

The application includes a responsive navbar, banner, technology card section, stack panel, and footer.

---

## 🎨 Brand Theme

DevStack uses a shared gradient theme:

**Orange → Pink → Violet**

The gradient is used for the brand, highlighted text, and primary buttons.

---

## 📦 Installation

Clone the repository:

```bash
git clone https://github.com/Afia611/Devstack-react.git


 React Questions and Answers

### 1. What is JSX, and why is it used in React?

JSX is a syntax that lets us write HTML-like code inside JavaScript. It makes React components easier to create and understand.

### 2. What is the difference between props and state?

**Props** are used to pass data from a parent component to a child component. Props are read-only.

**State** is data managed inside a component. State can change, and when it changes, React updates the UI.

### 3. What does the `useState` hook do, and where did you use it in this project?

The `useState` hook is used to store and update data inside a React component. here in this project, i used `useState` to manage changing data, such as selected items and other information that needs to update on the screen.

### 4. What does the `useEffect` hook do, and why did you need it to load the JSON data?

The `useEffect` hook is used to run code after a component renders. I used it to load the JSON data when the page first loads. This allowed the application to fetch the data and then display it in the React components.

### 5. Why does every item in a `.map()` list need a unique `key` prop?

A unique `key` helps React identify each item in a list. It allows React to update, add, or remove items efficiently without unnecessarily re-rendering the whole list.

### 6. What is conditional rendering? Show one place you used it.

Conditional rendering means showing different content depending on a condition. For example, in this project I showed an empty stack message when there were no items in the stack.

```jsx
{stack.length === 0 ? (
  <p>Your stack is empty.</p>
) : (
  stack.map(item => (
    <div key={item.id}>{item.name}</div>
  ))
)}
```

###7. How do you pass data from a parent component to a child component, and how does a child send something back to the parent?

A parent component passes data to a child component using **props**.

``tsx
<DeveloperCard developer={developer} />
```
The child receives the data through props.

``tsx
const DeveloperCard = ({ developer }) => {
  return <h2>{developer.name}</h2>;
};
```

A child component can send information back to the parent by calling a function that the parent passes to it as a prop.

``tsx
<DeveloperCard
  developer={developer}
  handleAddToStack={handleAddToStack}/>
```

Then the child can call that function:
``tsx
<button onClick={() => handleAddToStack(developer)}>
  Add to Stack
</button>
```

This lets the parent control the main data while the child can trigger changes.
