var itemIndex = 0;

function GetFreeItemIndex() {
    itemIndex++;
    return itemIndex;
}

var testData = [
    {Id: GetFreeItemIndex(), Text:"Test1", IsDone:false},
    {Id: GetFreeItemIndex(), Text:"Test2", IsDone:false},
    {Id: GetFreeItemIndex(), Text:"Test3", IsDone:true}
];

var todoList = new Vue({
    el: '#app-todolist',
	
	data: {
		todoItems: testData,
		newTodoText: ""
    },
    methods:{
        addTodo: function(){
            if(this.newTodoText.trim() === "")
                return;
            this.todoItems.push({Id:GetFreeItemIndex(), Text:this.newTodoText, IsDone:false});
            this.newTodoText="";
        },

        removeTodo: function(todo){
            this.todoItems.splice(this.todoItems.indexOf(todo), 1);
        }
    }

})