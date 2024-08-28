function myFunction() {
  var key = "xxxtoken"; //ตรงนี้เอา Token Line ที่เราได้ในตอนแรกมาใส่ https://notify-bot.line.me/my/ ตรงนี้
  var url = "https://notify-api.line.me/api/notify";
  
  if (FoundDeadline != "No") {
    //ประกาศตัวแปรเป็นแบบ json data โดยเราจะใส่ message ที่ต้องการส่งไปในนี้ สามารถแก้ไข wording ตรงนี้ได้เลย
    var jsonData = {
      //message ที่เราจะส่งไปใน Line
      message: "test"
    }
    
    var options = {
      "method": "post",
      "contentType": "application/x-www-form-urlencoded",
      "payload": jsonData,   //ส่ง message จากตัวแปร jsonData ไปยัง line api
      "headers": { "Authorization": "Bearer " + key }
    };
    
    var res = UrlFetchApp.fetch(url, options);   //เรียกใช้ Class UrlFetchApp เพื่อ fetch URL ไปยัง URL ของ Line API โดยแนบ key และ parameter ต่างๆ ที่เก็บไว้ในตัวแปร options ไปด้วย
  }
}