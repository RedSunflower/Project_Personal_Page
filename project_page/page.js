var API_KEY = 'eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiIsImp0aSI6IjNhOGU5ZmU4YzVmYzMzMGI0NGNjZDAxYzBlNjNhMWMyODBlYjE2MTJhMzhjMDI2YjU3N2U5N2NkNDkxYTVkMzM3NGZjYTA2ZmEwYmFkZjNiIn0.eyJhdWQiOiIxMCIsImp0aSI6IjNhOGU5ZmU4YzVmYzMzMGI0NGNjZDAxYzBlNjNhMWMyODBlYjE2MTJhMzhjMDI2YjU3N2U5N2NkNDkxYTVkMzM3NGZjYTA2ZmEwYmFkZjNiIiwiaWF0IjoxNTExNDU2MDI2LCJuYmYiOjE1MTE0NTYwMjYsImV4cCI6MTgyNjk4ODgyNiwic3ViIjoiNjg4Iiwic2NvcGVzIjpbInVzZXJCYXNlSW5mbyIsInVzZXJEZXRhaWxlZEluZm8iLCJ1c2VyQ291cnNlSW5mbyJdfQ.XvMEkLpwN4b48Z8KnuSeLJka5nKECYg8W-D321-F7oZqVbBWm77bg08qqDZUmPXASJNtJldFB1Y2TDBHXptgLkr94wFbVSQFGzt2cABrDW1KI0oP3tACIWk9os_J17TH1g8aJVhUzo-EjbQhIX-IVH1Ruf2UwgKVd4ltnwBvBx22pXSJ-0ABKArVLwtSz2GRxCOr6Nr1FTgyI5A2ZlrRc3lUCKrF9vuZcmnPsxK2-FmPWsU-L7pdr1kTkmkCrISdQk1PpB6gDgp9mcF5cU3kl_GtpIgWVB5U_ChoBdPWs271MvwHvE7uCRzSqBHxtDsk4Lo_J9Nt9STaaLO0gagarYrI3TJ_VzyuFiJ9l6EZCPP7nEnF85QlAMur0LWykl1BWLjrKe1LMSCsI6A6yXhq59kaQ1jAstV7YghcIFCpBtSUiYmVr8RFKJ5m9SVVqIyOvBvHHV3gSlz45TIFizriBxsSgwJfdjXTPbsL3WEt4zf8zxp6DvHJysxmyv9cS3hIhpJ-TOunEOeJBhCMOt4qZKtbJ6AALqWM7d8aBuoFcRk9xTqJegEcp2B5eL7YfKWfOvC2yPiM9l9Jb84aGunfg-0fJciX9g02B-o_U4lvSXjgeEIkE0GE_n6UGmrXd6SfmL33BHOeptTM4lucR2CGNd4jBob5ZGRQm8IhOrKC5Q0';
//var myID = 688;
var client = new INTITAClient({
key : API_KEY,
});
var avatar_p;
client.getUserDetails(function (error, data) {
//console.log(data);
document.getElementById("name").innerHTML = data.firstName;
document.getElementById("surname").innerHTML = data.secondName;
document.getElementById("aboutMy").innerHTML = data.aboutMy;
document.getElementById("education").innerHTML = data.education;
document.getElementById("educationForm").innerHTML = data.educationForm;
document.getElementById("interests").innerHTML = data.interests;
document.getElementById("e-mail").innerHTML = data.email;
avatar_p = document.getElementById("avatar");
avatar_p.src = data.avatar;
});
client.getUserCoursesAndModules(function (error, data) {
	//console.log(error, data);
    var courseId = data.courses[0].id;

client.getCourseInfo(courseId, function (error, data) {
       // console.log(error, data);
        document.getElementById("title_ua").innerHTML = data.title_ua;
        document.getElementById("for_whom_ua").innerHTML = data.for_whom_ua;
        document.getElementById("what_you_get_ua").innerHTML = data.what_you_get_ua;
        document.getElementById("what_you_learn_ua").innerHTML = data.what_you_learn_ua;
    
        
    });
    client.getCourseModules(courseId, function (error, modules) {
    	//console.log(error, modules);
        modules.forEach(function (module) {
            console.log(module.title);
            var course = document.getElementById("submenu");
            var Li = document.createElement("li");
            Li.innerHTML = module.title;
            Li.className = 'accordion-title btn-default';
            course.appendChild(Li);

            var Ullect = document.createElement("ul");
            Ullect.id = module.id;
            Li.appendChild(Ullect);

 var title = document.getElementsByClassName('accordion-title'),
    cont =document.getElementsByClassName('accordion-cont');
    for(var i = 0; i < title.length;i++){
        title[i].addEventListener('click',function(){
            if(!(this.classList.contains('active'))){
                 for(var i = 0; i < title.length;i++){
                    title[i].classList.remove('active');
                 }
                 this.classList.add('active');
            }

        })
    }

            client.getModuleLectures(module.id, function (error, lectures) {
            	//console.log(error, lectures);
                lectures.forEach(function (lecture) {
                    console.log(lecture.title);
                    var Lilect = document.createElement("li");
                    Lilect.id = lecture.id;
                    Lilect.innerHTML = lecture.title;
                    Ullect.className = 'accordion-cont';
                    Ullect.appendChild(Lilect);
                });
            });
        })
    })

});


