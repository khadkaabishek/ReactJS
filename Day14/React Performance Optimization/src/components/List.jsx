import React, { useMemo } from "react";

const List = ({ filter }) => {
  const names = [
    "Abhishek",
    "Sandesh",
    "Arpan",
    "Sanjog",
    "Kiran",
    "Bikash",
    "Sita",
    "Gita",
    "Ram",
    "Shyam",
    "Hari",
    "Krishna",
    "Mina",
    "Sushma",
    "Dipesh",
    "Rajendra",
    "Nirajan",
    "Pooja",
    "Reema",
    "Anita",
    "Sarita",
    "Sunil",
    "Madan",
    "Subash",
    "Rabin",
    "Prakash",
    "Anil",
    "Ashok",
    "Manish",
    "Binod",
    "Prashant",
    "Santosh",
    "Kapil",
    "Nabin",
    "Samir",
    "Sujata",
    "Umesh",
    "Ramesh",
    "Bijay",
    "Pratima",
    "Sandeep",
    "Sabina",
    "Aarav",
    "Kushal",
    "Ritika",
    "Sneha",
    "Sunita",
    "Manoj",
    "Rohit",
    "Nirmal",
  ];

  
  const filteredNames = useMemo(() => {
    console.log("Filtering names...");
    return names.filter((name) =>
      name.toLowerCase().includes(filter.toLowerCase())
    );
  }, [filter]);

  return (
    <ul
      className="list-group"
      style={{ maxHeight: "300px", overflowY: "auto" }}
    >
      {filteredNames.length > 0 ? (
        filteredNames.map((name, index) => (
          <li key={index} className="list-group-item">
            {name}
          </li>
        ))
      ) : (
        <li className="list-group-item text-muted">No names found</li>
      )}
    </ul>
  );
};

export default List;
