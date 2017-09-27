function filterCollapse() {
    var x = document.getElementById("our-work-filter");
    if (x.className === "filter") {
        x.className += " expand";
    } else {
        x.className = "filter";
    }
}


checkitem = function() {
  var $this;
  $this = $("#webdev-carousel");
  if ($("#webdev-carousel .carousel-inner .item.first-slide").hasClass("active")) {
    $this.children(".carousel-control-prev").hide();
    $this.children(".carousel-control-next").show();
  } else if ($("#webdev-carousel .carousel-inner .item.last-slide").hasClass("active")) {
    $this.children(".carousel-control-next").hide();
    $this.children(".carousel-control-prev").show();
  } else {
    $this.children(".carousel-control-prev").show();
    $this.children(".carousel-control-next").show();
  }
};




function showGallery(project) {
    var x = $("#black-overlay");
    x.show();
    var projectName = "#gallery-" + project;
    var y = $(projectName);
    y.show();
    $("#webdev-carousel").carousel(0);
}

function hideGallery(project) {
    var x = $("#black-overlay");
    x.hide();
    var projectName = "#" + project;
    var y = $(projectName);
    y.hide();
}

function show() {
    var galleryList = $(".teaser-gallery");
    galleryList.each(function(index, element) {
        var galleryItem = $(this).find(".teaser-hover a");
        var temp = $(this);
        galleryItem.on("click", function() {
            showGallery(temp.attr('id'));
        });
    });
}

function hide() {
    var galleryList = $(".lightbox");
    galleryList.each(function(index, element) {
        var galleryItem = $(this).find("a.lightbox-title-close");
        var temp = $(this);
        galleryItem.on("click", function() {
            hideGallery(temp.attr('id'));
        });
    });
}

$(document).ready(function() {
    show();
    hide();
    checkitem();
    $("#webdev-carousel").on("slid.bs.carousel", "", checkitem);
});