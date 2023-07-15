import "./Users.css";
import { useEffect, useState } from "react";
import axios from "axios";

const LIMIT = 10;
const pages = [1, 2, 3, 4, 5];
let lastPage = pages.length - 1;

const Users = () => {
  const [users, setUsers] = useState([]);
  const [selectedPage, setSelectedPage] = useState(0);

  useEffect(() => {
    axios
      .get("http://localhost:5000/users", {
        params: { page: selectedPage + 1, limit: LIMIT },
      })
      .then(({ data }) => {
        setUsers(data.users);
      })
      .catch((error) => console.log(error.message));
  }, [selectedPage]);

  const handlePageChange = (indx) => {
    setSelectedPage(indx);
  };

  const handlePreviousPageChange = () => {
    setSelectedPage(selectedPage - 1);
  };

  const handleNextPageChange = () => {
    setSelectedPage(selectedPage + 1);
  };

  return (
    <>
      <div className="navigator">
        <div className="pages-container">
          {selectedPage + 1 <= 1 ? (
            <div className="inactive">Prev</div>
          ) : (
            <div onClick={handlePreviousPageChange}>Prev</div>
          )}
          {pages.map((item, indx) => (
            <div
              onClick={() => handlePageChange(indx)}
              className={`${indx + 1 === selectedPage + 1 ? "active" : ""}`}
              key={indx}
            >
              {item}
            </div>
          ))}

          {lastPage === selectedPage ? (
            <div className="inactive">Next</div>
          ) : (
            <div onClick={handleNextPageChange}>Next</div>
          )}
        </div>
      </div>
      <div className="users">
        {users &&
          users.map((item, indx) => {
            return (
              <div className="profile" key={indx}>
                <div className="image-container">
                  <img className="image" alt="cr7" src={item.picture} />
                </div>
                <div className="details-container">
                  <span>{`${item.title}. ${item.firstName} ${item.lastName}`}</span>
                </div>
              </div>
            );
          })}
      </div>
    </>
  );
};

export default Users;
