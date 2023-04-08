/*
////////////////// SEVERAL ELEMENTS PROBLEM: FRAGMENTS /////////////////////////////////////
A component can only return ONE element
------------------------------------------------------------------------------------------
import { Fragment } from "react";
<Fragment> ... </Fragment> You can use fragments to solver the issue of using one element
------------------------------------------------------------------------------------------

------------------------------------------------------------------------------------------
//<div> ... </div>You can also use div
------------------------------------------------------------------------------------------

------------------------------------------------------------------------------------------
Or you can use Fragments implicitly with empty tags 
<></>
------------------------------------------------------------------------------------------
*/

/* 
  /////////////////// WAY 1 TO IMPLEMENT "ITEMS NOT FOUND" MESSAGE DINAMICALLY ///////////
  ------------------------------------------------------------------------------------------
  if (items.length === 0)
    return (
      <>
        <h1>List</h1> //Code repeated
        <p>No items found</p>
      </>
    );
  ------------------------------------------------------------------------------------------

  /////////////////// WAY 2 TO IMPLEMENT "ITEMS NOT FOUND" MESSAGE DINAMICALLY (withoud code repeated)///////////
  ------------------------------------------------------------------------------------------
  const getMessage = () => {
    return items.length === 0 ? <p>No items found</p> : null; //Terniary operator
    return items.length === 0 && <p>No items found</p> //Alternative to Terniary operator
  };
  ------------------------------------------------------------------------------------------
  */

/*
import { MouseEvent, useState } from "react";
  //Event Handler
  const handleClick = (event: MouseEvent, index: number) => {
    console.log((event.target as HTMLLIElement).innerText, " clicked", index);
  };
*/

import { useState } from "react";

interface ListGroupProps {
  items: string[];
  heading: string;
  onSelectItem: (item: string, index: number) => void;
}

function ListGroup({ items, heading, onSelectItem }: ListGroupProps) {
  // Hook
  const [selectedIndex, setSelectedIndex] = useState(-1);

  return (
    <>
      <h1>{heading}</h1>
      {items.length === 0 && <p>No items found</p>}
      <ul className="list-group">
        {items.map((item, index) => (
          <li
            className={
              selectedIndex === index
                ? "list-group-item list-group-item-dark active"
                : "list-group-item list-group-item-dark"
            }
            key={item}
            onClick={() => {
              setSelectedIndex(index);
              onSelectItem(item, index);
            }}
          >
            {item}
          </li>
        ))}
      </ul>
    </>
  );
}

export default ListGroup;
