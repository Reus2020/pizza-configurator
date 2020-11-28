import {useState} from 'react'
// import PIZZA_SIZES, PIZZA_DOUGH, PIZZA_SAUСE, PIZZA_CHEESE, PIZZA_VEGETABLES, PIZZA_MEAT from './pizzaData';
// import PIZZA_DOUGH from './pizzaData';
// // import PIZZA_CHEESE from './../pizzaData';
// import PIZZA_MEAT from './pizzaData';
// import PIZZA_VEGETABLES from './pizzaData';
// import PIZZA_SAUСE from './pizzaData';
import ConfiguratorBlock from './ConfiguratorBlock';

function Configurator(){
    const PIZZA_SIZES=['25 см.','30 см.'];
    const PIZZA_DOUGH=['пышное','тонкое']; 
    const PIZZA_SAUСE=['томатный', 'белый', 'острый'];
    const PIZZA_CHEESE=['Моцарелла', 'Чеддер', 'Дор блю'];
    const PIZZA_VEGETABLES=['Помидор', 'Грибы', 'Перец'];
    const PIZZA_MEAT =['Бекон', 'Пепперони', 'Ветчина'];

    const[size, setSize] = useState(PIZZA_SIZES[0]);
    const[dough, setDough] = useState(PIZZA_DOUGH[0]);
    const[souce, setSauce] = useState(PIZZA_SAUСE[0]);
    const[cheese, setCheese] = useState(PIZZA_CHEESE[0]);
    const[vegetables, setVegetables] = useState(PIZZA_VEGETABLES[0]);
    const[meat, setMeat] = useState(PIZZA_MEAT[0]);

    const updateSize =(event) =>{
        event.preventDefault();
        console.log('size: ', event.target.value)
        setSize(event.target.value)
    }
    const updateDough =(event) =>{
        event.preventDefault();
        setDough(event.target.value);
    }
    const updateSauce =(event) =>{
        event.preventDefault();
        setSauce(event.target.value);
    }
    const updateCheese =(event) =>{
        event.preventDefault();
        setCheese(event.target.value);
    }
    const updateVegetables =(event) =>{
        event.preventDefault();
        setVegetables(event.target.value);
    }
    const updateMeat =(event) =>{
        event.preventDefault();
        setMeat(event.target.value);
    }
    return(
        <div>
            <b><h3>Конфигуратор пиццы</h3></b>
            <form>
                <ConfiguratorBlock blockType='radio' selected={size} title='Размер:' updateBlock = {updateSize} values={PIZZA_SIZES}/> 
                <ConfiguratorBlock blockType='radio' selected={dough} title='Тесто:' updateBlock = {updateDough} values={PIZZA_DOUGH}/>
                <ConfiguratorBlock blockType='radio' selected={souce} title='Соус:' updateBlock = {updateSauce} values={PIZZA_SAUСE}/>
                <ConfiguratorBlock blockType='checkbox' selected={cheese} title='Сыр:' updateBlock = {updateCheese} values={PIZZA_CHEESE}/>
                <ConfiguratorBlock blockType='checkbox' selected={vegetables} title='Овощи:' updateBlock = {updateVegetables} values={PIZZA_VEGETABLES}/>
                <ConfiguratorBlock blockType='checkbox' selected={meat} title='Мясо:'  updateBlock = {updateMeat} values={PIZZA_MEAT}/>
                <div>
                    <input type="submit" value="Готово" />
                </div>
            </form>
        </div>
    );
}
export default Configurator;