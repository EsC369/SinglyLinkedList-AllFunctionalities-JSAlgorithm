// This is all functionalities for a singly Linked List:

class Node {
    constructor(val) {
        this.val = val;
        this.next = null;
    }
}

class SinglyLinkedList {
    constructor() {
        this.head = null;
        this.tail = null;
        this.length = 0;
    }
    push(val){
        let newNode = new Node(val);
        if(!this.head){
            this.head = newNode;
            this.tail = this.head;
        }else{
            this.tail.next = newNode;
            this.tail = newNode;
        }
        this.length++;
        return this;
    }
    pop(){
        if(!this.head) return undefined;
        let runner = this.head;
        let newTail = runner;
        while(runner.next){
            newTail = runner;
            runner = current.next
        }
        this.tail = newTail;
        // set next node to be null, severs the connection with the next/current/runner node, aka, the one we want to pop:
        this.tail.next = null;
        // EDGECASE TO ENSURE THE TAIL AND HEAD STILL DONT HAVEA  VALUE:
        if(this.length === 0){
            this.head = null;
            this.tail = null;
        }
        return runner;
    }
    shift(){
        if(!this.head) return undefined;
        let currentHead = this.head;
        this.head = currentHead.next;
        this.length--;
        // EDGECASE TO ENSURE THE TAIL wont HAVE A VALUE:
        if(this.length === 0){
            this.tail = null;
        }
        return currentHead;
    }
    unshift(val){
        let newNode = new Node(val);
        if(!head){
            this.head = newNode;
            this.tail = newNode;
        }
        else{
            newNode.next = this.head;
            this.head = newNode;
        }
        this.length++;
        return this;
    }
    // Grab whats in the position of said nodes
    get(index){
        if(index <0 || index >= this.length) return undefined;
        let counter =0;
        let runner = this.head;
        while(counter !== index) {
            runner = runner.next;
            counter++;
        }
        return ;
    }
    set(index, val) {
        let foundNode = this.get(index);
        if(foundNode) {
            foundNode.val = val;
            return true;
        }
        return false;
    }
    insert(index, val) {
        // checking front  and end if value and if empty:
        if(index < 0 || index > this.length)return false;
        // NOTE the   !!    double bangs to double negate what comes back form push:  boolean operator: This will as well still run the node push and unshift:
        if(index === this.length) return !!this.push(val);
        if(index === 0) return !!this.unshift(val);
        // CREATE NODE AND ADD IT:
        let newNode =  newNode(val);
        let prev = this.get(index-1);
        let temp =  prev.net;
        prev.next = newNode;
        newNode.next = temp;
        this.length++;
        return true;
    }

    remove(index){
        // Instant removes, chcking front, back and if empty:
        if(index <0 || index >= this.length) return undefined;
        if(index ===0) return this.unshift();
        if(index === this.length -1) return this.pop();
        //Var:
        let prevNode = this.get(index-1);
        // remove
        let removed = previousNode.next;
        this.length--;

        return removed;

    }
    reverse(){
        let node = this.head;
        this.head = this.tail;
        this.tail = node;
        let next;
        let prev = null;

        for(let i =0; i<this.length;i++) {
            next = node.next;
            node.next = prev;
            prev = node;
            node = next
        }
        return this;
    }

    // Iterate through nodes:
    traverse(){
        let current = this.head;
        while(current){
            console.log(current.val);
            current = current.next;
        }
    }
}


// Very crapy representation of linked list/node
// let first = new Node("hi")
// first.next = new Node("there")
// first.next.next = new Node("how")
// first.next.next.next = new Node("are")
// first.next.next.next.next = new Node("you?")

// will have this soon:
// ListeningStateChangedEvent.push("you")

let list = new SinglyLinkedList()
list.push("hello")
list.push("Goodebye")