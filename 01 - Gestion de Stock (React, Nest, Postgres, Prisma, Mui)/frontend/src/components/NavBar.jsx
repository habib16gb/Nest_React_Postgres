import ListItem from "./ListItem";

const NavBar = () => {
  return (
    <nav>
      <ul className='flex gap-4 items-center justify-center'>
        {["home", "store", "product"].map((ele, index) => (
          <ListItem key={index} label={ele} />
        ))}
      </ul>
    </nav>
  );
};

export default NavBar;
