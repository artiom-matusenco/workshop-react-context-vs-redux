import { Link } from 'react-router-dom';

export default function Navigation() {
  return (
    <ul className="mt-5 mb-5 pl-10">
      <li className="">
        <Link to="/">Home</Link>
      </li>
      <li>
        <Link to="/events">Events</Link>
      </li>
    </ul>
  );
}
