
function selectCarouselItem(selectedItem){
    //remove selected if there is any
    var allItems = document.querySelectorAll('.menuCard');
    
    allItems.forEach(function(item){
            item.classList.remove('keepEffect');
        }
    );
    //add effect to the selected item
    selectedItem.classList.add('keepEffect');
}
$(document).ready(function() {
 
    $("#owl-example").owlCarousel({
        itemsDesktop : [1499,4],
        itemsDesktopSmall : [1199,3],
        itemsTablet : [899,2],
        itemsMobile : [599,1],
        navigation : true,
        navigationText : ['<span class="fa-stack"><i class="fa fa-circle fa-stack-1x"></i><i class="fa fa-chevron-circle-left fa-stack-1x fa-inverse"></i></span>','<span class="fa-stack"><i class="fa fa-circle fa-stack-1x"></i><i class="fa fa-chevron-circle-right fa-stack-1x fa-inverse"></i></span>'],
    });    
  });