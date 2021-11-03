import {useState} from 'react';
import {CharacterSides} from '../types/CharacterSides';
import {mapSpots} from '../data/mapSpots';


export const useCharacter = (propName:string) => {
    const [name, setName] = useState(propName);
    const [pos, setPos] = useState({x:3, y:6});
    const [side, setSide] = useState<CharacterSides>('down');

    const moveLeft = () => {
            setPos(pos => ({
                x: canMove(pos.x-1, pos.y) ? pos.x-1 : pos.x,
                y: pos.y,
            }));
        setSide('left');
    }
    
    const moveRight = () => {
            setPos(pos => ({
                x: canMove(pos.x+1, pos.y) ? pos.x+1 : pos.x,
                y: pos.y,
            }));
        setSide('right');
    }
        
        const moveUp = () => {
            setPos(pos => ({
                x: pos.x,
                y: canMove(pos.x, pos.y-1) ? pos.y-1 : pos.y,
            }));
        setSide('up');
    }
        
        const moveDown = () => {
            setPos(pos => ({
                x: pos.x,
                y: canMove(pos.x, pos.y+1) ? pos.y+1 : pos.y,
        }));
        setSide('down');
    }

    const canMove = (x:number, y:number) => {
        if(x < 0 || x > 15 || y < 0 || y > 15) return false;
        // console.log(x,y)
        if(mapSpots[y][x] === 1) {
            return true;
        }
        return false;       
    }
    return {   
        name,
        x: pos.x,
        y: pos.y,
        side,
        moveLeft,
        moveRight,
        moveUp,
        moveDown,
    };
}