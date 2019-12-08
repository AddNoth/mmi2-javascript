function addPost(){
    // Variables
    title = document.getElementById("title").value;
    description = document.getElementById("descr").value;
    var url = "../server/add-post.php";

    // alert("id:"+post_id+" | title:"+title+" | descr:"+description+" | url:"+url);

    $.ajax({
        type: "GET",
        url: url,
        dataType:'json',
        data: {
            'title': title,
            'description': description,
        },
        crossDomain: true,
        cache: false
    });

    setTimeout(function() { 
        document.location.href="index.html";
    }, 50);
}