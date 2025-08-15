// Toggle class trên body để mở/đóng sidebar
      $("#sbToggle").on("click", function () {
        $("body").toggleClass("sb-open");
        $(this).find("i").toggleClass("fa-bars fa-xmark"); // đổi icon bars <-> X
      });