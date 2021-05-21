class Node {
 constructor(data){
     this.data = data;
     this.next = null;
 }
}

class LinkedList {
    constructor()
    {
        this.head = null;
    }

    insertLast(data){
        var toAdd = new Node(data);
      var current;

      if(this.head == null)
      {
          this.head = toAdd;
      }
      else{
          current = this.head;
          while(current.next != null)
          {
              current = current.next;
          }
          current.next = toAdd;
      }
    }

    insertFront(data){
        var toAdd = new Node(data);
        if(this.head == null) 
        this.head = toAdd;

        else{
            toAdd.next = this.head;
            this.head = toAdd;
        }

    }

    deleteElement(data){
      
            var current = this.head;
            var prev;

            while(current != null)
            {
               
                
                if(current.data == data)
                {
                    if(prev == null)
                    {
                        this.head = current.next;
                    }
                    else{
                        prev.next = current.next;
                       
                    }
                    return;
                     
                }
                prev = current;
                current = current.next;

            }

        
    }

    size(){
        var current = this.head;
        var size = 0;
        while(current != null)
        {
            size++;
            current = current.next;
        }
        return size;
    }

    print(){
        var current;
        if(this.head == null) console.log('List is empty');
        else{
            current = this.head;
            while(current)
            {
                console.log(current.data);
                current = current.next;
            }
        }
    }
}


var list = new LinkedList();
list.insertLast(5);
list.insertLast(6);
list.insertLast(7);
list.insertLast(8);
list.insertLast(9);
list.insertFront(4);

list.deleteElement(9);
list.print();

console.log(list.size());