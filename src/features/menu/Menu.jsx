import { useLoaderData } from "react-router-dom";
import { getMenu } from "../../services/apiRestaurant";
import MenuItem from "./MenuItem";

function Menu() {
  const menu = useLoaderData(); // causes [menu] data to be fetched as it renders at the <same time>

  return (
    <ul>
      {menu.map((pizza) => (
        <MenuItem
          pizza={pizza}
          key={pizza.id}
        />
      ))}
    </ul>
  );
}

export async function loader() {
  const menu = await getMenu();
  return menu;
}

export default Menu;
