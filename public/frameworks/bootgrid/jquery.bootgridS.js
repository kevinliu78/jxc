(function($){
	$.fn.tableResize = function(h){
		var _this = $(this);
		var that = $(this).parent();
		if(!that.parent().hasClass("flag")){
			that.parent().css("overflow","hidden");
			that.parent().children(":eq(0)").find("span.dropdown-text").parent().off().on("click",function(){
				if($(this).parent().hasClass("open")){
					that.parent().css("min-height","");
				}else{
					that.parent().css("min-height",$(this).outerHeight()+$(this).next().outerHeight());
				}
			});
			var tb = document.createElement("div");
			tb.className = "flag";
			var tbody = null;
			var w = that.outerWidth();
			$(tb).css({"width":w,"max-height":h,"overflow-y":"auto","overflow-x":"hidden","font-size":"15px"});
			that.prev().css("width",w);
			that.next().css("width",w);
			that.append(tb);
			if(that.parent().length){
				if(that.parent().attr("style").indexOf("overflow")==0){
					var tDiv = document.createElement("div");
					var theader=that.prev();
					var tfooter=that.next();
					$(tDiv).attr("rel","tableDiv");
					$(tDiv).css({"width":w,"overflow":"auto","padding-bottom":"15px"});
					that.parent().append(tDiv);
					$(tDiv).append(theader);
					$(tDiv).append(that);
					$(tDiv).append(tfooter);
				}else{
					that.parent().css({"width":w,"overflow":"auto"})
				}
			}

			var table2 = document.createElement("table");
			$(table2).css({"width":w,"margin":"0"});
			$(table2).addClass("table table-condensed bootgrid-table table-striped");
			$(table2).append(_this);
			$(tb).append(table2);
		}else{
			that.empty().append(_this);
		}

		var gridRszMouseDown ;

		$(".gridRsz").on("mousedown",function(event){
			event.stopPropagation();
			var TH = $(event.target).parent();
			var TD = [];
			var THEAD=TH.parent().parent()[0];
			var TABLE=$(THEAD).parent();
			var tbodyTr=TABLE.find("tbody tr");
			var startX = event.clientX;
			var thW = TH.outerWidth();
			var TR = $(event.target).closest("table").find("tbody tr");
			gridRszMouseDown=true;
			$.each(TR,function(i,tr){
				TD.push($(tr).find("td:eq("+TH.index()+")")[0]);
			});
			$(document).on("mousemove",function(event){
				var endX = event.clientX - startX;
				if(gridRszMouseDown!=null&&gridRszMouseDown==true){
					if(TH.width()>30||endX>0){
						TH.width(thW + endX);
						$.each(TD,function(i,td){
							$(td).width(thW + endX);
						});
					}

				}
				//调整每个表格的宽度
				$.each($(THEAD.rows[0].cells),function(i,v){
					$.each($(tbodyTr[0]),function(a,b){
						$(b.cells[v.cellIndex]).width($(v).width()) ;
					})
				});

				TABLE.find($(".flag")).width(TABLE.width());
				if(!(TABLE.parent().attr("rel")=="tableDiv")){
					TABLE.parent().width(TABLE.width());
				}

			});
		});
		$(document).on("mouseup",function(){
			$(document).off("mousemove");
			gridRszMouseDown = false;
		});
	}
})(jQuery);