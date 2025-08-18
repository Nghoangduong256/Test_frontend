// Toggle class trên body để mở/đóng sidebar
      $("#sbToggle").on("click", function () {
        $("body").toggleClass("sb-open");
        $(this).find("i").toggleClass("fa-bars fa-xmark"); // đổi icon bars <-> X
      });

      function fillData() {
    $("#data-table").empty();
    // Gọi API để lấy dữ liệu
       $.ajax({
       url: 'https://68a288f2c5a31eb7bb1d1e70.mockapi.io/api/v1/studentClass',
       type: 'GET',
       contentType: 'application/json', // Định nghĩa định dạng dữ liệu truyền vào là json
    //    data: JSON.stringify(request), // Object truyền vào request body (thường dùng cho chức năng thêm mới và chỉnh sửa)
       error: function (err) {
           // Hành động khi apii bị lỗi
           console.log(err)
           alert("Lỗi khi lấy dữ liệu API")
       },
       success: function (data) {
           // Hành động khi thành công
           console.log(data)
           for(let i = 0; i< data.length; i++){
            let row = `<tr>
            <td>${i+1}</td>
            <td><img src="${data[i].avatar}" alt="Avatar" width="50"></td>
            <td>${data[i].fullname}</td>
            <td>${data[i].classname}</td>
            <td>${data[i].email}</td>
            <td>${data[i].phoneNumber}</td>
            <td>${data[i].dateOfBirth}</td>
            <td><button class="btn btn-danger" onclick="deleteData(${data[i].id})">Delete</button>
            <button class="btn btn-warning" onclick="editData(${data[i].id})">Edit</button></td>
            `
            
            $("#data-table").append(row)
           }
       }
   });

}