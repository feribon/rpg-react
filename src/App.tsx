import { useEffect } from 'react';
import * as c from './App.styles';
import { Character } from './components/Character';
import { useCharacter } from './hooks/useCharacter';

const App = () => {
  const char = useCharacter('player 1');
  const char2 = useCharacter('player 2');
  
  useEffect(() => {
    window.addEventListener('keydown', handleKeyDown);
// eslint-disable-next-line react-hooks/exhaustive-deps
},[]);

  const handleKeyDown = (e: KeyboardEvent) => {
    switch(e.code) {
      case 'KeyA':
        char2.moveLeft();
      break;
      case 'ArrowLeft':
        char.moveLeft();
      break;
      case 'KeyW':
        char2.moveUp();
      break;
      case 'ArrowUp':
        char.moveUp();
      break;
      case 'KeyD':
        char2.moveRight();
      break;
      case 'ArrowRight':
        char.moveRight();
      break;
      case 'KeyS':
        char2.moveDown();
      break;
      case 'ArrowDown':
        char.moveDown();
      break;
    }
  }
  return (
    <c.Container>
      <c.Map>
        <Character x={char.x} y={char.y} side={char.side}/>
        <Character x={char2.x} y={char2.y} side={char2.side}/>
      </c.Map>
    </c.Container>
  );
}
export default App;
