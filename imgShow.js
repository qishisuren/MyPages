/**
 * 显示图片详情，鼠标移入时执行
 */
function on(productImg) {
	if (productImg == "undefined" || productImg == null || productImg == "") {
		return;
	}
    //给图片容器赋值路径
    $("#s").attr("src", "${pageContext.request.contextPath}/static/images/upload/" + productImg);
    $(document).mousemove(function(e) {
    	$("#s").css("position", "absolute").css("left", e.pageX+1+"px").css("top", e.pageY+1+"px");
    })
}

/**
 * 关闭图片，当鼠标移出时执行
 */
function off() {
	$("#s").attr("src", "");
	$(document).mousemove(function(e) {
		$("#s").css("position", "absolute").css("left", "-400px").css("top", "-400px");
	})
}