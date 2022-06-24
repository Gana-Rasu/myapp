import React, { useState } from "react";
import './Tictactoe.css';
import useWindowSize from 'react-use/lib/useWindowSize';
import Confetti from 'react-confetti';
import Button from '@mui/material/Button';

function Tictactoe(){
    return(
        <>
        <div className="gamepage">
        {/* <h1>tic tac toe game</h1> */}
        <Board/>
        </div>
        </>
    )
}

export default Tictactoe;

function Board(){

    const initial_value = [null,null,null,null,null,null,null,null,null]
    const [board,setBoard] = useState(initial_value)

    const [isXturn,setXturn] = useState(true);

    const decidewinner=(board)=>{
        const lines = [
            [0,1,2],
            [3,4,5],
            [6,7,8],
            [0,4,8],
            [2,4,6],
            [0,3,6],
            [1,4,7],
            [2,5,8],
        ]

        for(let i=0;i<lines.length;i++){
            const [a,b,c] = lines[i]
            if(board[a]!==null && board[a]===board[b] && board[a]===board[c]) {
                console.log(lines[i],a,b,c);
                console.log(board);
                console.log("winner",board[a]);
                return board[a]
            }
        }
        return null;
    }

    const winner = decidewinner(board)
   

    const handleclick = (index)=>{
        console.log(index);

        if(board[!winner && index]===null){
            const boardcopy=[...board];
            boardcopy[index] = isXturn ? "x" : "o";
            setBoard(boardcopy)
            setXturn(!isXturn)
        }
       
    }


    const restart=()=>{
        setBoard(initial_value);
        setXturn(true)
    }

    const { width, height } = useWindowSize()

    return(
        <>
        <div className="Board">
        {winner ? <Confetti width={width} height={height} gravity={0.05} /> : null}
            {board.map((value,index) =>(
        <Gamebox value={value} onPlayerClick={()=>{handleclick(index)}} />
            ))}
            <div>
            {winner ? <Confetti width={width} height={height} /> && <h2 className="winner">winner is : {winner}</h2> : null }
    <Button style={{ margin: "5%"}} onClick={restart} className="restart" variant="contained">Restart</Button>
            </div>
        </div>
        </>
    )
}

function Gamebox({value,onPlayerClick}){
    // const [state,setState] = useState("");
    // const value = state;
    const styles ={ 
        color : value === 'x' ? "red" : "green", 
    }
    return(
        <>
        <div style={styles} 
        onClick={onPlayerClick} 
        
        className="gamebox">{value}</div>
        </>
    )
}