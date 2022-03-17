		function move(obj,attr,speed,target,callback=function(){}){
			clearInterval(obj.timer);
			
			var value = parseFloat(getComputedStyle(obj,null)[attr]);
			
			if(value>target){
				speed = -speed;
			}
			
			
			obj.timer = setInterval(function(){
					
				value += speed;
				if((value<=target && speed<0) || (speed>0 && value>=target)){
					value = target;
				}
				
				obj.style[attr] = value+"px";
				
				if(value == target){
					clearInterval(obj.timer);
					
					callback();
				}
				
			},20)
		}