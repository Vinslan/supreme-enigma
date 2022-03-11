function MyFuction() {
	clck = document.getElementById("menu__list-visible");
	list = document.getElementById("header__menu");

	menu_list = document.getElementById("menu__list")

	if(clck.style.display === "flex"){
		clck.style.display = "none";
	} else{
		clck.style.display = "flex";

		
		list.style.flexDirection = "column";
		list.style.alignItems = "normal";

		menu_list.style.flexDirection = "column";
		menu_list.style.alignItems = "normal";
		menu_list.style.paddingLeft = "2px";
	}
}
