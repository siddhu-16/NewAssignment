//reverse linked list

class node{
    constructor(data){
        this.data = data;
        this.next = null
    }
}

class LinkedList{
    constructor(){
        this.head = null;
    }
    
    add(data){
        let newNode = new node(data);
        if(this.head == null){
            this.head = newNode;
        }
        else{
           newNode.next = this.head
           this.head = newNode;
        }
    }
    display(){
        let temp = new node()
        temp = this.head;
        while(temp != null){
            console.log(temp.data);
            temp = temp.next;
        }
    }

    reverseList(){

        let prev = null;
        let curr = this.head;
        let next ;

        while(curr){
            next = curr.next;
            curr.next = prev;
            prev = curr;
            curr = next;
        }
        this.head = prev
        this.display()
    }
    

}

let list = new LinkedList();
list.add(1);
list.add(2);
list.add(3);
list.add(4);
list.display();
list.reverseList();

