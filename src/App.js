import React, {useState} from 'react';


export default function App() {

  const [turn, setTurn] = useState('x');
  const [cells, setCells] = useState(Array(9).fill(''));

  const Cell =({num})=>{
    return <td onClick={()=> handleClick(num)} className="border border-black pl-11 w-24 h-24"> {cells[num]} </td>
}

const handleClick =(num)=>{
  if(cells[num] !==  '')
  {
    alert("already clicked");
    return;
  }
  let squares = [...cells]
    if(turn=== "x"){
      squares[num]= 'x';
        setTurn('0')
    }
    else{
      squares[num]= '0';
        setTurn('x');
    }

    console.log(squares);
    setCells(squares);
  }



return (
<div className="flex justify-center m-12">

    <table>
      Turn = {turn}
        <tbody>
            <tr>
            <Cell num={0}/>
            <Cell num={1}/>
            <Cell num={2}/>
            </tr>
            <tr>
            <Cell num={3}/>
            <Cell num={4}/>
            <Cell num={5}/>
            </tr>
            <tr>
            <Cell num={6}/>
            <Cell num={7}/>
            <Cell num={8}/>
            </tr>
        </tbody>
    </table>
</div>
)
}