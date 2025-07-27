import { useState } from 'react';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup';
import Row from 'react-bootstrap/Row';
import { Link } from 'react-router-dom';

function Header13() {
  const [formData, setFormData] = useState({
    Firstname: '',
    Lastname: '',
    username: '',
    email: '',
    password: '',
    confirmPassword: '',
    phone: '',
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Basic password match check
    if (formData.password !== formData.confirmPassword) {
      alert("Passwords do not match.");
      return;
    }

    const params = new URLSearchParams();
    for (const key in formData) {
      params.append(key, formData[key]);
    }

    try {
      const response = await fetch('http://localhost:5555/users/register', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/x-www-form-urlencoded',
        },
        body: params.toString(),
      });

      const data = await response.json();

      if (response.ok) {
        alert('Registration successful!');
        // Optional: Redirect or reset form
      } else {
        alert(data.message || 'Registration failed.');
      }
    } catch (error) {
      alert('Error submitting the form.');
      console.error(error);
    }
  };

  return (
    <div className="flex justify-center p-4">
      <div className="shadow-2xl rounded-md p-8 bg-white">
        <p className="text-center font-bold font-serif text-3xl">Join Our Community</p>
        <p className="text-center text-sm font-serif font-semibold">
          Create your account and unlock exclusive benefits
        </p>
        <br />
        <Form onSubmit={handleSubmit}>
          <Row className="mb-3">
            <Form.Group as={Col} md="6">
              <Form.Label className='after:content-["*"] after:text-red-900 after:text-lg'>
                First name
              </Form.Label>
              <Form.Control
                required
                type="text"
                placeholder="Enter your first name"
                name="Firstname"
                value={formData.Firstname}
                onChange={handleChange}
              />
            </Form.Group>
            <Form.Group as={Col} md="6">
              <Form.Label className='after:content-["*"] after:text-red-900 after:text-lg'>
                Last name
              </Form.Label>
              <Form.Control
                required
                type="text"
                placeholder="Enter your last name"
                name="Lastname"
                value={formData.Lastname}
                onChange={handleChange}
              />
            </Form.Group>
          </Row>

          <Form.Group>
            <Form.Label className='after:content-["*"] after:text-red-900 after:text-lg'>
              Username
            </Form.Label>
            <InputGroup>
              <InputGroup.Text>@</InputGroup.Text>
              <Form.Control
                required
                type="text"
                placeholder="Choose a username"
                name="username"
                value={formData.username}
                onChange={handleChange}
              />
            </InputGroup>
          </Form.Group>
          <br />
          <Form.Group>
            <Form.Label className='after:content-["*"] after:text-red-900 after:text-lg'>
              Email
            </Form.Label>
            <Form.Control
              required
              type="email"
              placeholder="you@example.com"
              name="email"
              value={formData.email}
              onChange={handleChange}
            />
          </Form.Group>
          <br />
          <Form.Group>
            <Form.Label className='after:content-["*"] after:text-red-900 after:text-lg'>
              Password
            </Form.Label>
            <Form.Control
              required
              type="password"
              placeholder="Create a password"
              name="password"
              value={formData.password}
              onChange={handleChange}
            />
          </Form.Group>
          <br />
          <Form.Group>
            <Form.Label className='after:content-["*"] after:text-red-900 after:text-lg'>
              Confirm Password
            </Form.Label>
            <Form.Control
              required
              type="password"
              placeholder="Re-enter your password"
              name="confirmPassword"
              value={formData.confirmPassword}
              onChange={handleChange}
            />
          </Form.Group>
          <br />
          <Form.Group>
            <Form.Label className='after:content-["*"] after:text-red-900 after:text-lg'>
              Phone Number
            </Form.Label>
            <Form.Control
              required
              type="tel"
              placeholder="Enter your phone number"
              name="phone"
              value={formData.phone}
              onChange={handleChange}
            />
          </Form.Group>
          <br />

          <input type="checkbox" required />
          <span className='font-medium'> I agree to the</span>
          <Link to="/FooterT"><span className='text-blue-900 font-medium'> Terms & Conditions</span></Link>
          <span className='font-medium'> and </span>
          <Link to="/FooterP"><span className='text-blue-900 font-medium'>Privacy Policy</span></Link>

          <div className="flex items-center my-4">
            <hr className="flex-grow border-t" />
            <span className="px-3 font-medium text-sm">or continue with</span>
            <hr className="flex-grow border-t-black" />
          </div>

          <div className="flex flex-col sm:flex-row gap-4 mt-4">
            <button type="button" className="flex justify-center gap-2 px-4 py-2 w-full sm:w-auto border border-gray-300 rounded-md text-sm text-gray-700 hover:bg-gray-100 dark:border-gray-600 dark:text-gray-200 dark:hover:bg-gray-800">
              <img src="https://www.svgrepo.com/show/475656/google-color.svg" alt="Google" className="w-5 h-5" />
              Continue with Google
            </button>
            <button type="button" className="flex justify-center gap-2 px-4 py-2 w-full sm:w-auto border border-gray-300 rounded-md text-sm text-gray-700 hover:bg-gray-100 dark:border-gray-600 dark:text-gray-200 dark:hover:bg-gray-800">
              <img src="https://www.svgrepo.com/show/512317/github-142.svg" alt="GitHub" className="w-5 h-5" />
              Continue with GitHub
            </button>
          </div>
          <br />

          <button type="submit" className="w-full px-6 py-3 bg-gradient-to-r from-indigo-600 to-blue-600 text-white font-semibold text-base rounded-xl shadow-sm hover:from-indigo-700 hover:to-blue-700 transition-all duration-200 dark:from-indigo-500 dark:to-blue-500 dark:hover:from-indigo-600 dark:hover:to-blue-600">
            Create an Account
          </button>
        </Form>

        <div className="text-center mt-3">
          <span className="font-medium">Already have an account?</span>
          <Link to="/Header10"><span className="text-blue-900 font-medium"> Sign In here</span></Link>
        </div>
      </div>
    </div>
  );
}

export default Header13;
