import "./styles.css";
import { useState, useRef, useEffect, Children } from "react";
const checkBoxesData = [
  {
    id: 1,
    name: "Fruits",
    children: [
      {
        id: 2,
        name: "Citrus",
        children: [
          {
            id: 3,
            name: "Orange",
          },
          {
            id: 4,
            name: "Lemon",
          },
        ],
      },
      {
        id: 5,
        name: "Berries",
        children: [
          {
            id: 6,
            name: "Strawberry",
          },
          {
            id: 7,
            name: "Blueberry",
          },
        ],
      },
      {
        id: 8,
        name: "Banana",
      },
      {
        id: 9,
        name: "Apple",
      },
    ],
  },
];
export default function App() {
  const [checked, setChecked] = useState({});
  return (
    <NestedCheckBox
      data={checkBoxesData}
      checked={checked}
      setChecked={setChecked}
    />
  );
}

function NestedCheckBox({ data, checked, setChecked }) {
  function updateChildren(children, checkedCopy, newValue) {
    children?.forEach((item, index) => {
      checkedCopy[item?.id] = newValue;
      item?.children && updateChildren(item?.children, checkedCopy, newValue);
    });
  }

  function updateParent(node, checkedCopy) {
    if (!node?.children) return checkedCopy[node.id] || false;
    const isAllChildrenChecked = node?.children?.every((item) =>
      updateParent(item, checkedCopy)
    );

    checkedCopy[node.id] = isAllChildrenChecked;
    return isAllChildrenChecked;
  }

  const handleOnChange = (newValue, id, children) => {
    const checkedCopy = { ...checked };
    checkedCopy[id] = newValue;

    // updating all the childrens
    updateChildren(children, checkedCopy, newValue);

    // updating all the parents if childrens are selected
    checkBoxesData?.forEach((node) => {
      updateParent(node, checkedCopy);
    });

    // updating the final state
    setChecked(checkedCopy);
  };
  return (
    <>
      {data?.map((item, index) => (
        <div className="parent" key={item?.id}>
          <input
            type="checkbox"
            style={{ marginRight: "8px" }}
            checked={checked?.[item?.id]}
            onChange={(event) =>
              handleOnChange(event.target.checked, item?.id, item?.children)
            }
          />
          <span>{item?.name}</span>
          {item?.children && (
            <NestedCheckBox
              data={item?.children}
              checked={checked}
              setChecked={setChecked}
            />
          )}
        </div>
      ))}
    </>
  );
}
