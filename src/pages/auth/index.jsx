import { useState } from 'react'; // Import useState hook from React

// Auth component definition
export const Auth = () => {
  // State for storing login name and password
  const [loginName, setLoginName] = useState(''); // Login name state
  const [password, setPassword] = useState(''); // Password state

  // Function to handle form submission
  const handleSubmit = (e) => {
    e.preventDefault(); // Prevent the default form submission behavior
    // Handle form submission logic here (e.g., API call for authentication)
    console.log('Login Name:', loginName); // Log the login name
    console.log('Password:', password); // Log the password
  };

  // Render the component UI
  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-100">
      <form onSubmit={handleSubmit} className="bg-white p-8 rounded-lg shadow-lg w-96">
        <h2 className="text-2xl font-bold mb-6 text-center text-black-600">Login</h2>

        {/* Login Name Input */}
        <div className="mb-4">
          <label htmlFor="loginName" className="block text-gray-700 text-sm font-bold mb-2">
            Name
          </label>
          <input
            type="text"
            id="loginName"
            value={loginName} // Bind input value to state
            onChange={(e) => setLoginName(e.target.value)} // Update state on input change
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            placeholder="Enter your login name" // Placeholder text
            required // Makes this input required
          />
        </div>

        {/* Password Input */}
        <div className="mb-6">
          <label htmlFor="password" className="block text-gray-700 text-sm font-bold mb-2">
            Password
          </label>
          <input
            type="password"
            id="password"
            value={password} // Bind input value to state
            onChange={(e) => setPassword(e.target.value)} // Update state on input change
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline"
            placeholder="Enter your password" // Placeholder text
            required // Makes this input required
          />
        </div>

        {/* Submit Button */}
        <div className="flex items-center justify-between">
          <button
            type="submit" // Submit button
            className="bg-black hover:bg-gray-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline w-full"
          >
            Sign In
          </button>
        </div>
      </form>
    </div>
  );
};
