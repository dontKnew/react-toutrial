### Below Topics We have covered in this project : - 
- Include CSS File - __completed__
- Inlcude JS File - __completed__
- Without Page Refresh Navigation With Routes - __completed__
- Form Submit & Get the data in console - __completed__
- Call Fake API & Display, Delete Data - __completed__
- Add Title and meta tag seo tags in head dynamically using SSR PHP Language & react helement - __completed__
- Login & Logout
- Error Handling and Error Boundaries

### Important topics in React.js that beginners and intermediate learners should focus on :
1. **JSX (JavaScript XML)**:
Understand JSX, which allows you to write HTML-like syntax in your JavaScript code. Learn how to use JSX to define React components, render dynamic content, and handle events.

2. **Components and Props**:
Master the concept of components in React and how to pass data and behavior to child components using props. Learn how to create reusable and modular components to build your application's UI.

3. **State and Lifecycle**:
Explore React's state and lifecycle concepts. Understand how to manage component state using the useState hook, handle side effects using the useEffect hook, and leverage lifecycle methods for specific actions.

4. **React Hooks**:
Dive into React hooks, such as useState, useEffect, useContext, and more. Hooks allow you to write functional components with state and other React features, simplifying component logic.

5. **Handling Events**:
Learn how to handle events in React components, such as onClick, onChange, and onSubmit. Understand event handling patterns and best practices for updating state and triggering actions in response to user interactions.

6. **Conditional Rendering**:
Master the techniques for conditionally rendering components and content based on certain conditions. Understand how to use conditional statements and logical operators to control the visibility and behavior of UI elements.

7. **Lists and Keys**:
Learn how to render lists of items in React and the importance of using unique keys for efficient rendering and proper reconciliation. Understand how to map over arrays to dynamically generate components.

8. **Forms and Controlled Components**:
Understand how to work with forms in React and manage form state using controlled components. Learn how to handle form input changes, validation, and submission using React's form handling techniques.

9. **Component Composition**:
Explore the concept of component composition and how to build complex UIs by combining multiple smaller components. Learn how to create a component hierarchy and pass data and behavior through nested components.

10. **React Router**:
Gain knowledge about React Router and how to implement client-side routing in your application. Learn how to define routes, handle navigation, and manage URL parameters using React Router.

These topics provide a solid foundation for beginners and intermediate learners in React.js. Understanding these concepts will enable you to build robust and interactive applications with React. As you progress, you can explore more advanced topics and libraries to expand your React skills further.



## SSR With PHP 
- define as well same meta tag and title information in react js app using react-helmet library :)
```php 
<?php
$routes = $_SERVER['REQUEST_URI'];
switch($routes){
    case '/':
        $title = "Home Page - Server";
        $keywords = "Home Page Keywords - Server";
        $description = "Home page Description - Server";
        break;
    case '/contact':
        $title = "Contact Page - Server";
        $keywords = "Contact Page Keywords - Server";
        $description = "Contact page Description - Server";
        break;

    case '/about':
            $title = "About Page - Server";
            $keywords = "About Page Keywords - Server";
            $description = "About page Description - Server";
            break;
    case '/api':
        $title = "Api Page - Server";
        $keywords = "Api Page Keywords - Server";
        $description = "Api page Description - Server";
        break;
    default :
        $title  = "404 Erorr - Server";
        $keywords = "Page Not Found, Error - Server";
        $description = "Page Not Found Description - Server";
        break;
}
?>
<!doctype html>
<html lang="en">

<head>
    <meta charset="utf-8" />
    <link rel="icon" href="" />
    <meta name="viewport" content="width=device-width,initial-scale=1" />
    <meta name="theme-color" content="#000000" />
    <meta name="keywords" content="<?=$keywords?>" />
    <meta name="description" content="<?=$description?>" />
    <link rel="apple-touch-icon" href="/logo192.png" />
    <title><?=$title?></title>
    <script defer="defer" src="/static/js/main.cace2cfd.js"></script>
    <link href="/static/css/main.0ba73d62.css" rel="stylesheet">
</head>

<body><noscript>You need to enable JavaScript to run this app.</noscript>
    <div id="root"></div>
</body>

</html>  
```