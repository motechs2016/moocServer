
var $_$ = jQuery.noConflict();//替换jquery默认的$，因为和el表达式的$冲突

$_$(document).ready(function(){
	
	$_$("#submit").click(function(){
//		var pageSize = $_$("#pageSize").attr("value");
		var pageSize = getPageSize();
		$_$("#form1").attr("action","QueryPage?currentPage=1"+"&pageSize="+pageSize);
		$_$("#form1").submit();
	});
	
	$_$("#nextPage").click(function(){
		var currentPage = $_$("#currentPage").attr("value");
		var pageCount = $_$("#pageCount").attr("value");
		var pageSize = $_$("#pageSize").attr("value");
		
		var isp = $_$("#isp").attr("value");
		var app = $_$("#app").attr("value");
		var alertValue = $_$("#alertValue").attr("value");
//		alert("currentPage="+currentPage);
		if(pageCount==""){
			return;
		}
		if(parseInt(currentPage) >= parseInt(pageCount)){
			$_$("#nextPage").attr("href","#");
		}else{
			currentPage = parseInt(currentPage)+1;
			$_$("#nextPage").attr("href","AlertDetailSlip?currentPage="+currentPage+"&pageSize="+pageSize+
					"&isp="+isp+"&app="+app+"&alertValue="+alertValue);
		}
	});
	
	$_$("#previousPage").click(function(){
		var currentPage = $_$("#currentPage").attr("value");
		var pageSize = $_$("#pageSize").attr("value");
		
		var isp = $_$("#isp").attr("value");
		var app = $_$("#app").attr("value");
		var alertValue = $_$("#alertValue").attr("value");
		
		if(currentPage==""||currentPage=="1"){
			$_$("#previousPage").attr("href","#");
		}else{
			currentPage = parseInt(currentPage)-1;
			$_$("#previousPage").attr("href","AlertDetailSlip?currentPage="+currentPage+"&pageSize="+pageSize+
					"&isp="+isp+"&app="+app+"&alertValue="+alertValue);
		}
	});
	
	$_$("#firstPage").click(function(){
		var currentPage = $_$("#currentPage").attr("value");
		var pageSize = $_$("#pageSize").attr("value");
		
		var isp = $_$("#isp").attr("value");
		var app = $_$("#app").attr("value");
		var alertValue = $_$("#alertValue").attr("value");
		
		if(currentPage==""||currentPage=="1"){
			$_$("#firstPage").attr("href","#");
		}else{
			currentPage = 1;
			$_$("#firstPage").attr("href","AlertDetailSlip?currentPage="+currentPage+"&pageSize="+pageSize+
					"&isp="+isp+"&app="+app+"&alertValue="+alertValue);
		}
	});
	
	$_$("#endPage").click(function(){
		var currentPage = $_$("#currentPage").attr("value");
		var pageCount = $_$("#pageCount").attr("value");
		var pageSize = $_$("#pageSize").attr("value");
		
		var isp = $_$("#isp").attr("value");
		var app = $_$("#app").attr("value");
		var alertValue = $_$("#alertValue").attr("value");
		
		if(pageCount==""||currentPage==""||currentPage==pageCount){
			$_$("#endPage").attr("href","#");
		}else{
			$_$("#endPage").attr("href","AlertDetailSlip?currentPage="+pageCount+"&pageSize="+pageSize+
					"&isp="+isp+"&app="+app+"&alertValue="+alertValue);
		}
	});
	
	$_$("#goPage").click(function(){
		var currentPage = $_$("#currentPage").attr("value");
		var pageCount = $_$("#pageCount").attr("value");
		var pageSize = $_$("#pageSize").attr("value");
		
		var isp = $_$("#isp").attr("value");
		var app = $_$("#app").attr("value");
		var alertValue = $_$("#alertValue").attr("value");
//		alert("currentPage="+currentPage);
		if(currentPage<1||currentPage>pageCount){
			
		}else{
			document.location.href="AlertDetailSlip?currentPage="+currentPage+"&pageSize="+pageSize+
			"&isp="+isp+"&app="+app+"&alertValue="+alertValue;
		}
	});
	
	$_$("#insertBank").bind({
		click:function(){
			alert("新增");
		},
		mouseover:function(){
			$_$(this).addClass("xg_mouseondiv");
		},
		mouseout:function(){
			$_$(this).removeClass("xg_mouseondiv");
		}
	});
	
	$_$("#updateBank").bind({
		click:function(){
			/*var obox = $_$(":checkbox:checked");
			if(obox.length==1){
				var userId = $_$(obox[0]).val();
				window.location.href="toModifyUserBank.action?userId="+userId;
			}*/
			alert("更新");
		},
		mouseover:function(){
			$_$(this).addClass("xg_mouseondiv");
		},
		mouseout:function(){
			$_$(this).removeClass("xg_mouseondiv");
		}
	});
	
	$_$("#deleteBank").bind({
		click:function(){
			var obox = $_$(":checkbox:checked");
			var datas = new Array();
			if(obox.length >= 1){
				obox.each(function(){
					datas.push($_$(this).val());
				});
				alert(datas);
			}
			
		},
		mouseover:function(){
			$_$(this).addClass("xg_mouseondiv");
		},
		mouseout:function(){
			$_$(this).removeClass("xg_mouseondiv");
		}
	});
		
});
function getPageSize(){
	var pageSize = $_$("#pageSize").attr("value");
	if(pageSize==""||pageSize==null){
		return 5;
	}else{
		return pageSize;
	}
}
function senfe(o,a,b,c,d){
	 var t=document.getElementById(o).getElementsByTagName("tr");
//	 alert("length = "+t.length);
	 for(var i=1;i<t.length;i++){
	  t[i].style.backgroundColor=(t[i].sectionRowIndex%2==0)?a:b;
	  t[i].onclick=function(){
	   if(this.x!="1"){
	    this.x="1";
	    this.style.backgroundColor=d;
	   }else{
	    this.x="0";
	    this.style.backgroundColor=(this.sectionRowIndex%2==0)?a:b;
	   }
	  };
	  t[i].onmouseover=function(){
	   if(this.x!="1")this.style.backgroundColor=c;
	  };
	  t[i].onmouseout=function(){
	   if(this.x!="1")this.style.backgroundColor=(this.sectionRowIndex%2==0)?a:b;
	  };
	 }
}

