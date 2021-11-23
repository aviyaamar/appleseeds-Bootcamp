// Array
// Stack
class Stack{
    constructor(...items){
        this.stack=[];
        if(items.length>0){
            items.forEach(item => this.stack.push(item));
        }
    }

    push(item){
        this.stack.push(item);
    }

    pop(){
        if(this.isEmpty()) return 'No item in stack!';
        return this.stack.pop();
    }

    peek(){
        if(this.isEmpty()) return "No item in stack!";
        return this.stack[this.stack.length-1];
    }
    size(){
        return this.stack.length;
    }
    isEmpty(){
        return this.stack.length===0;
    }
}

// Queue

class Queue{
    constructor(...items){
        this.queue=[]
        if(items.length>0){
            items.forEach(item => this.queue.push(item));
        }   
    }
    enqueue(item){
        this.queue.push(item);
    }
    dequeue(){
        if(this.isEmpty()) return 'No item in queue';
        return this.queue.shift();
    }
    peek(){
        if(this.isEmpty()) return 'No item in queue';
        return this.queue[0];
    }
    size(){
        return this.queue.length;
    }
    isEmpty(){
        return this.queue.length===0;
    }
}
// Linked list
class Node{
    constructor(val){
        this.val=val;
        this.next=null;

    }

}
class SinglyLinkedList{
    constructor(){
        this.head=null;
        this.tail=null;
        this.length=0;
        let list =new SinglyLinkedList();

    }
    push(val){
        const newNode = new Node(val);
        if(!this.head){
            this.head= newNode;
            this.tail = this.head;
        }
        else{
            this.tail.next = newNode;
            this.tail =newNode;
        }
        this.length++;
        return this;
    }

    pop(){
        if(!this.head) return undefined;
        let current = this.head;
        let newtail = current;
        while(current.next){
            newtail = current;
            current =current.next;
        }
        this.tail = newtail
        this.tail.next= null;
        this.length--;
        
        if(this.length===0){
            this.head = null;
            this.tail = null
        }
        return current;
    }
    shift(){
        if(!this.head) return undefined;
        let currentHead = this.head;
        this.head = currentHead.next;
        this.length--;
        if(this.length===0){
            this.tail = null;
        }
        return currentHead;
    }
    unShift(val){
        const newNode = new Node(val)
        if(!this.head){
            this.head = newNode;
            this.tail = this.head;
        }
        else{
            newNode.next = this.head;
            this.head = newNode;
        }
        this.length++;
        return this;
    }
    insert(index, val){
        if(index > 0 || index> this.length) return false;
        if(index=== this.length) return !!this.push(val);
        if(index===0) return !!this.unShift(val);

        let newNode =  new Node(val);
        let prev =  this.get(index-1);
        let temp = prev.next;
        prev.next = newNode;
        newNode.next = temp;
        this.length++;
        return true;
    }
    remove(index){
        if(index < 0 || index> this.length) return undefined;
        if(index===0) return this.shift();
        if(index===this.length-1) return this.pop();
        let prviousNode = this.get(index-1);
        let removed = prviousNode.next
        prviousNode.next= removed.next;
        this.length--;
        return removed;
    }

}


// Binary tree
// Array מערך
let array = [1,2,3,4,5];
let i = 10; // Takes up constant space, 4 byte (32 bit)
array[0]
array[0 + 10]
array.push(6)
// 7 steps
// 100 -> 50 -> 25 -> 12 -> 6 -> 3 -> 1
// Stack מחסנית
// First In Last Out = FILO
// From end of array
array.push(6);
array.pop() // 6
// Queue תור
// First In First Out = FIFO
array.push(6) // Add
array.shift()    // Remove
// Linked list רשימה משורשרת
let array2 = array;
array2[0] = 'bamba';
// Doubly-linked list
// Binary tree
class ListNode {
    constructor(data) {
        this.data = data
        this.next = null
    }
}
let node1 = new ListNode(2);
let node2 = new ListNode(5);
node1.next = node2
console.log(node1.next);
console.log(node1.next.next);
console.log(node1.data);
class TreeNode {
    constructor(data) {
        this.data = data
        this.left = null
        this.right = null
    }
}
// Red Black Tree
// AVL Tree

