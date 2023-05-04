import React from 'react';

const DisplayBlog = () => {
    return (
        <div className="mt-4 mx-10 text-secondary border-2 text-bg-warning rounded p-5">
            <div>
                <h3 className="mb-3">Q: Differences between uncontrolled and controlled components.</h3>
                <p className="text-black"><strong>Ans:</strong> Controlled components are components whose value is controlled by React, meaning that their state is managed by React. Uncontrolled components, on the other hand, are components whose value is controlled by the DOM, and not React. In other words, controlled components are more "React-y", whereas uncontrolled components are more "DOM-y". With controlled components, you can enforce strict input validation, prevent invalid input, and control the behavior of the component. With uncontrolled components, you rely on the browser to manage the input, which can be less predictable and less secure.</p>
            </div>
            <div>
                <h3 className="mb-3">Q: How to validate React props using PropTypes?</h3>
                <p className="text-black"><strong>Ans:</strong> PropTypes is a built-in validation library in React that allows you to specify the types of props that a component should receive. This helps to catch errors early on in development and can save time and effort in debugging.</p>
            </div>
            <div>
                <h3 className="mb-3">Q: Difference between nodejs and express js.</h3>
                <p className="text-black"><strong>Ans:</strong> Node.js is a runtime environment for executing JavaScript code outside of a web browser. It provides features such as file system access, networking, and concurrency, making it a versatile platform for building server-side applications.</p>
                <p className="text-black">Express.js, on the other hand, is a web framework built on top of Node.js that provides a set of features and tools for building web applications, such as middleware for handling HTTP requests and responses, routing, and view rendering.</p>
            </div>
            <div>
                <h3 className="mb-3">Q: What is a custom hook, and why will you create a custom hook?</h3>
                <p className="text-black"><strong>Ans:</strong> A custom hook is a JavaScript function that uses one or more built-in React hooks and can be reused throughout an application to extract and share some common logic. By creating custom hooks, developers can reduce code duplication, improve code organization, and make their code more reusable.</p>
                <p className="text-black">Custom hooks can be used to abstract away complex logic into a single, easily consumable hook that can be used across different components. For example, a custom hook could handle authentication, data fetching, or form validation. Custom hooks can also be used to keep stateful logic separate from presentation logic, which can improve the readability and maintainability of code.</p>
            </div>
        </div>
    );
};

export default DisplayBlog;

