import React from 'react';

const DisplayBlog = () => {
    return (
        <div className="mt-4 mx-10 text-secondary border-2 text-bg-warning rounded p-5">
            <div>
                <h3 className="mb-3">Q: Differences between uncontrolled and controlled components.</h3>
                <p className="text-black"><strong>Ans:</strong> Uncontrolled components are managed by the DOM, while controlled components are managed by React. Controlled components provide more control and can handle input validation and state changes.</p>
            </div>
            <div>
                <h3 className="mb-3">Q: How to validate React props using PropTypes?</h3>
                <p className="text-black"><strong>Ans:</strong> In React, developers can use the PropTypes library to validate the type and shape of props passed to a component. To use PropTypes, import the library at the top of the file, and then define the PropTypes for each prop passed to the component using the propTypes object.</p>
            </div>
            <div>
                <h3 className="mb-3">Q: Difference between nodejs and express js.</h3>
                <p className="text-black"><strong>Ans:</strong> Node.js is a JavaScript runtime environment that enables developers to run JavaScript on the server-side, while Express.js is a web application framework built on top of Node.js, providing additional features for building web applications.</p>
            </div>
            <div>
                <h3 className="mb-3">Q: What is a custom hook, and why will you create a custom hook??</h3>
                <p className="text-black"><strong>Ans:</strong> Custom hooks are reusable functions in React that allow developers to extract and share logic between components. Developers create custom hooks to reduce code duplication and improve code readability and maintainability.</p>
            </div>
        </div>
    );
};

export default DisplayBlog;

