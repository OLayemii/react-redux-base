import React, { useState } from "react";
import useDebounce from "../hooks/useDebounce";
import { PageLoader } from "../components/Loaders";

export default { title: "Debouncer" };

export const debouncerTest = () => {
  const [debounce] = useDebounce();
  const [searchValue, setSearchValue] = useState("");
  const [users, setUsers] = useState([]);
  const [isSearching, setIsSearching] = useState(false);

  const searchUsers = value => {
    if (value) {
      fetch(`https://api.github.com/search/users?q=${value}`)
        .then(res => res.json())
        .then(res => {
          setIsSearching(false);
          setUsers(res.items);
        })
        .catch(_ => {
          alert("An error occured");
        });
    } else {
      setUsers([]);
      setIsSearching(false);
    }
  };

  return (
    <>
      <input
        placeholder={"Start typing to search"}
        style={{ padding: "10px 50px" }}
        value={searchValue}
        onChange={e => {
          let {
            target: { value },
          } = e;
          setIsSearching(true);

          // Could just set state here and monitor changes in an effect before debouncing.
          setSearchValue(value);
          debounce(() => searchUsers(value));
        }}
      />

      {isSearching ? (
        <PageLoader />
      ) : (
        <div>
          {users.map(user => (
            <div style={{ display: "flex", padding: "20px 0" }}>
              <img
                src={user.avatar_url}
                alt=""
                style={{ width: 20, height: 20 }}
              />
              <div>{user.login}</div>
            </div>
          ))}
        </div>
      )}
    </>
  );
};
