// code your solution here [year, result]

function isWin(record){
    return record.result === 'W';
  
}

// Function superBowlWin() receives 1 argument; an Array of JavaScript Object
function superbowlWin(record){
    let winningYear = 0;
    winningYear = record.find(isWin);

    if (winningYear === undefined)
    {
        return winningYear;
    }
    else
    {
        return winningYear.year;
    }
   
}
