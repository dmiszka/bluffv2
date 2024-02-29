import React, { useState } from 'react';
import '../css/Main.css';
import { Link } from 'react-router-dom';

const Main: React.FC = () => {
  return (
    <div>
      <Link to="/Players">players</Link>
    <table className='tablica'>
      {/* <h1>BLUFF</h1> */}
      <tbody>
        <tr className='gorny'>
          <td><p>11</p></td>
          <td className="star"><p>6</p><img src="star.png"/></td>
          <td><p>12</p></td>
          <td><p>13</p></td>
          <td className="star"><p>7</p><img src="star.png"/></td>
          <td><p>14</p></td>
          <td><p>15</p></td>
          <td className="star"><p>8</p><img src="star.png"/></td>
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
          <td className="star"><p>9</p><img src="star.png"/></td>
        </tr>
        <tr>
          <td className="star"><p>5</p><img src="star.png"/></td>
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
          <td className="star"><p>10</p><img src="star.png"/></td>
        </tr>
        <tr>
          <td className="star"><p>4</p><img src="star.png"/></td>
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
          <td className="star"><p>3</p><img src="star.png"/></td>
          <td><p>5</p></td>
          <td><p>4</p></td>
          <td className="star"><p>2</p><img src="star.png"/></td>
          <td><p>3</p></td>
          <td><p>2</p></td>
          <td className="star"><p>1</p><img src="star.png"/></td>
          <td><p>1</p><img src="pawn.png"/></td>
        </tr>

      </tbody>
    </table>
    </div>
  );
};
export default Main;
