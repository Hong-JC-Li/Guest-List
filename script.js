var friends=[];
var memer=[];
$('.addButton').click(function() {
var newname = $(".guestName").val();
friends.push(newname);
memer.push(newname);
$(".guestList").append("<li>" + memer);
memer = [];
var newlist = friends.length;
console.log(friends);
$(".numberOfGuests").text(newlist);
});