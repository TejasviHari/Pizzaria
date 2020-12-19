function show_menu(){
    
     menu_list_array=[
         "Veg Supreme Pizza",
         "Cheese Pizza",
         "Chicken Tandoori Pizza",
         "Pepperoni Pizza"
        ];

    document.getElementById("display_menu").innerHTML=menu_list_array;
    }

    function add_item(){
        var reccomended=document.getElementById("add_item" ).value;
        menu_list_array.push(reccomended);
        document.getElementById("display_addedmenu").innerHTML=reccomended;
    }
  
    
   
    
 
