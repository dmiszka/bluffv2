import React, { useEffect, useState } from 'react';
import '../css/Main.css';

type DieState = {
  value: number;
}

const Die: React.FC<{ value: number }> = ({ value }) => {
  return (
    <div className="die">
      {value}
    </div>
  );
};


const Main: React.FC = () => {
  const [diceValues, setDiceValues] = useState<number[]>([]);
  const [currentPlayer, setCurrentPlayer] = useState<Number>(1);
  const [currentBid, setCurrentBid] = useState<{ quantity: number, value: number }>({ quantity: 0, value: 0 });
  
  const rollDice = () => {
    const newDiceValues = Array.from({ length: 5 }, () => Math.floor(Math.random() * 6) + 1);
    setDiceValues(newDiceValues);
  };

  const handleBid = (quantity: number, value: number) => {
    setCurrentBid({ quantity, value });
    //moze kiedys tu bedzie logika przekazujaca licytacje do nastepnego gracza 
  }

  const handleChallenge = () => {
    const dieCount = diceValues.filter(die => die === currentBid.value || die === 1).length;
    if (dieCount + diceValues?.filter(die => die === 1).length >= currentBid.quantity) {
      console.log("licytujacy wygrywa")
    } else {
      console.log("Wyzwany wygrywa");
    }
    setCurrentPlayer(currentPlayer === 1 ? 2 : 1);
  }

  return (
    <div className='board'>



      <table className='tablica'>
        <tbody>
          <tr className='gorny'>
            <td><p>11</p></td>
            <td className="star"><p>6</p><img src="star.png" /></td>
            <td><p>12</p></td>
            <td><p>13</p></td>
            <td className="star"><p>7</p><img src="star.png" /></td>
            <td><p>14</p></td>
            <td><p>15</p></td>
            <td className="star"><p>8</p><img src="star.png" /></td>
            <td><p>16</p></td>
            <td><p>17</p></td>
          </tr>
          <tr>
            <td><p>10</p></td>
            <td className="empty"></td>
            <td className="empty"></td>
            <td className="empty"></td>
            <td className="empty"></td>
            <td className="empty"></td>
            <td className="empty"></td>
            <td className="empty"></td>
            <td className="empty"></td>
            <td className="star"><p>9</p><img src="star.png" /></td>
          </tr>
          <tr>
            <td className="star"><p>5</p><img src="star.png" /></td>
            <td className="empty"></td>
            <td className="empty"></td>
            <td className="empty"></td>
            <td className="empty"></td>
            <td className="empty"></td>
            <td className="empty"></td>
            <td className="empty"></td>
            <td className="empty"></td>
            <td><p>18</p></td>
          </tr>
          <tr>
            <td><p>9</p></td>
            <td className="empty"></td>
            <td className="empty"></td>
            <td className="empty"></td>
            <td className="empty"></td>
            <td className="empty"></td>
            <td className="empty"></td>
            <td className="empty"></td>
            <td className="empty"></td>
            <td><p>19</p></td>
          </tr>
          <tr>
            <td><p>8</p></td>
            <td className="empty"></td>
            <td className="empty"></td>
            <td className="empty"></td>
            <td className="empty"></td>
            <td className="empty"></td>
            <td className="empty"></td>
            <td className="empty"></td>
            <td className="empty"></td>
            <td className="star"><p>10</p><img src="star.png" /></td>
          </tr>
          <tr>
            <td className="star"><p>4</p><img src="star.png" /></td>
            <td className="empty"></td>
            <td className="empty"></td>
            <td className="empty"></td>
            <td className="empty"></td>
            <td className="empty"></td>
            <td className="empty"></td>
            <td className="empty"></td>
            <td className="empty"></td>
            <td><p>20</p></td>
          </tr>
          <tr>
            <td><p>7</p></td>
            <td><p>6</p></td>
            <td className="star"><p>3</p><img src="star.png" /></td>
            <td><p>5</p></td>
            <td><p>4</p></td>
            <td className="star"><p>2</p><img src="star.png" /></td>
            <td><p>3</p></td>
            <td><p>2</p></td>
            <td className="star"><p>1</p><img src="star.png" /></td>
            <td><p>1</p><img src="pawn.png" /></td>
          </tr>

        </tbody>
      </table>

      <div className="dice-container">
        <button onClick={rollDice} className='btn-bg'>Rzuć kostkami</button>
        {diceValues && diceValues.map((value, index) => (

          <Die key={index} value={value} />
        ))}
        {currentPlayer === 1 && <button onClick={() => handleBid(1, 1)} className='bid'>Bid</button>}
        {currentPlayer === 2 && <button onClick={handleChallenge} className='challenge'>Challenge</button>}
      </div>
    </div>
  );
};
export default Main;