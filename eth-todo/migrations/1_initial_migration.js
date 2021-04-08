const Migrations = artifacts.require("Migrations");
const Todo = artifacts.require("ToDo");

module.exports = function (deployer) {
  deployer.deploy(Migrations);
  deployer.deploy(Todo);
};
