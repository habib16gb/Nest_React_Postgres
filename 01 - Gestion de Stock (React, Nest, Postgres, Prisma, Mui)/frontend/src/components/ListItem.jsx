import { Link } from "react-router-dom";

const ListItem = ({ label }) => {
  return (
    <li>
      <Link
        className='capitalize hover:text-blue-700 font-bold'
        to={`/${label}`}
      >
        {label}
      </Link>
    </li>
  );
};

export default ListItem;
