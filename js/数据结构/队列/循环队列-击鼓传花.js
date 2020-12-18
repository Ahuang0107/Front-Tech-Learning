"use strict";

import { Queue } from './queue';
function hotPotato(elementList, num) {
    const queue = new Queue();
    const eliminatedList = [];
    for (let i = 0; i < elementList.length; i++) {
        queue.enqueue(elementList[i]);
    }
    while (queue.size() > 1) {
        for (let i = 0; i < num; i++) {
            queue.enqueue(queue.dequeue());
        }
        eliminatedList.push(queue.dequeue());
    }
    return {
        eliminated: eliminatedList,
        winner: queue.dequeue()
    }
}

const names = ['John', 'Jack', 'Camila', 'Ingrid', 'Carl'];
const result = hotPotato(names, Math.floor(Math.random() * 5));

result.eliminated.forEach(name => {
    console.log(`${name}在击鼓传花游戏中淘汰。`);
})
console.log(`胜利者：${result.winner}`);
