var current_list_item;
var current_text;
var html;
var html_body;
var html_input;
var current_list_item;
var list_items;
var new_element;
var list_container;
var parent_element;

function log_to_console(message_to_console){
    console.log(message_to_console);
};

function create_element(element_name){
    new_element = document.createElement(element_name);
    new_element.addEventListener('dblclick',change_text);
    
};

var change_text = function(){
     var original_text = this.textContent;
     this.textContent = prompt('enter new list item text');
 
}


function updated_text(){

    this.textContent = change_text();
}










document.addEventListener('DOMContentLoaded',function(){

    html = document.getElementsByTagName('html');
    html = html[0];
    html.style.width = '100%';
    html.style.height = '100%';
    
    html_body = document.getElementsByTagName('body');
    html_body = html_body[0];
    html_body.style.width = '100%';
    html_body.style.height = '100%';
    
    html_input = document.getElementsByTagName('input');
    html_input = html_input[0];
    
    html_body.appendChild(document.createElement('ul'));
        
    
    list_container = document.getElementsByTagName('ul');
    list_items = document.getElementsByTagName('li');
    
    
    html_input.onkeyup = function(event){
        
        switch(event.keyCode){
            case 13:
                create_element('li');
                list_container[0].appendChild(new_element);
                list_items[list_items.length-1].textContent = this.value;
                this.value = null;                
            break;
        }

    }
    
    

});


