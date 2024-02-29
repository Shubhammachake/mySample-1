let users;

const addUsers = (val) => {
  users = val;
};

const getAllusers = () => {
  return users;
};
let myInd;
const addIndex = (value) => {
  myInd = value;
};

const getIndex = () => {
  return myInd;
};

let details = "No data Found";

const addDetails = (val) => {
  details = val;
};

const getDetails = () => {
  return details;
};

export { addUsers, getAllusers, addIndex, getIndex, addDetails, getDetails };
