// SPDX-License-Identifier: MIT
pragma solidity >=0.4.22 <0.9.0;

contract ToDo {
    struct Task {
        uint256 id;
        uint256 date;
        string content;
        string author;
        bool done;
    }

    event TaskCreated(uint id, uint date, string content, string author, bool sign);

    // Task[] tasks;
    mapping(uint => Task) tasks; // to speed up 
    uint [] taskIds;
    uint lastTaskId = 1;
    address public owner;

    modifier taskExists(uint id){
      if(tasks[id].id == 0){
        revert();
      }
      _;
    }

    function getTaskIds() public  view returns(uint[] memory){
      return taskIds;
    }

    function createTask(string memory _content, string memory _author)
        public
    {
        lastTaskId++;
        tasks[lastTaskId] = Task(lastTaskId, block.timestamp, _content, _author, false);
        taskIds.push(lastTaskId);
        emit TaskCreated(lastTaskId, block.timestamp, _content, _author, false);
        // tasks.push(
        //     Task(tasks.length, block.timestamp, _content, _author, false)
        // );
    }

    function getTask(uint256 id) taskExists(id)
        public
        view
        returns (
            uint256,
            uint256,
            string memory,
            string memory,
            bool
        )
    {
        return (
            id,
            tasks[id].date,
            tasks[id].content,
            tasks[id].author,
            tasks[id].done
        );
    }
    // function getTasks() public view returns ( Task[] calldata){
    //   return tasks;
    // }

    constructor() public {
      owner = msg.sender;
    }
}
