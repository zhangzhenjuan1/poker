window.onload=function(){
// 3.写一个函数 在页面中用定位创建28个元素,放到一个div中
// 摆成金字塔
// 1（top:0）2:(top:30)-----7(180)
	var kk=document.getElementById("kk");
	var shang=document.getElementById('shang');
	var xia=document.getElementById('xia');
	// var zuok=document.getElementById('zuok');
	// var youk=document.getElementById('youk');
	var pokerbf;	
	var fn4=function(){	
		for(var i=0;i<7;i++){
			for(var j=0;j<i+1;j++){
				pokerbf=document.createElement('div');
				pokerbf.setAttribute('class','pok');
				pokerbf.setAttribute('id',i+'_'+j);
				kk.appendChild(pokerbf);
				pokerbf.style.top=20+i*45+'px';
				pokerbf.style.left=40+(6-i)*60+j*120+'px';
				// console.log(j);
			}
		}
		// zuok,youk='blockd';

		var zuok;
		zuok=document.createElement('div');
		zuok.setAttribute('id','zuok');
		kk.appendChild(zuok);
		var blockd='blockd';
		for(var i=0;i<24;i++){
			pokerbf=document.createElement('div');
			pokerbf.setAttribute('class','pok'+' '+blockd);
			pokerbf.setAttribute('id','8'+'_'+i);
			zuok.appendChild(pokerbf);
		}
		var youk;
		youk=document.createElement('div');
		youk.setAttribute('id','youk');
		kk.appendChild(youk);
	};
	fn4();

	var els=document.getElementsByClassName('pokerbf');
	var previous=null;
	var start=true;
	var first='',second='',el1;

	kk.onclick=function(e){
		console.log(1);
		var el=e.target;
		if(e.target==this)return;
		var id=el.getAttribute('id');
		var x=Number(id.split('_')[0]);
		var y=Number(id.split('_')[1]);
		var nx=document.getElementById((x+1)+'_'+y);
		var ny=document.getElementById((x+1)+'_'+(y+1));
		if(nx||ny){
			return;
		}
		if(previous!=null){
			previous.style.border='none';
		}
		el.style.border='2px solid #ccc';
		// el.style.transform='scale(1.15)';
		previous=el;

		if(start&&el.innerHTML!=''){
			if(el.innerHTML=='K'){
				if(el.parentElement==kk){kk.removeChild(el);}
				if(el.parentElement==zuok){zouk.removeChild(el);}
				if(el.parentElement==youk){youk.removeChild(el);}
				return;
			}
			first=Number(el.innerHTML);
			if(el.innerHTML=='A'){first=1;}
			if(el.innerHTML=='Q'){first=12;}
			if(el.innerHTML=='J'){first=11;}
			second=0;
			// console.log('first:'+first);
			el1=el;
			start=false;
		}else{
			if(el.innerHTML=='K'){
				if(el.parentElement==kk){kk.removeChild(el);}
				if(el.parentElement==zuok){zouk.removeChild(el);}
				if(el.parentElement==youk){youk.removeChild(el);}
				return;
			}
			second=Number(el.innerHTML);
			if(el.innerHTML=='A'){second=1;}
			if(el.innerHTML=='Q'){second=12;}
			if(el.innerHTML=='J'){second=11;}
			console.log('second:'+second);
			// el1=el;
			start=true;
		}
		if(first+second==13){
			console.log(first+second);
			if(el1.parentElement==kk){kk.removeChild(el1);}
			if(el1.parentElement==zuok){zuok.removeChild(el1);}
			if(el1.parentElement==youk){youk.removeChild(el1);}

            if(el.parentElement==kk){kk.removeChild(el);}
            if(el.parentElement==zuok){zuok.removeChild(el);}
            if(el.parentElement==youk){youk.removeChild(el);}
            return;
		}
		
	};

// var previous=null;
// var start=true;
// // kk.

// 5:
var dict={1:'A',2:'2',3:'3',4:'4',5:'5',6:'6',7:'7',8:'8',9:'9',10:'10',11:'J',12:'Q',13:'K'};
// 协议和函数 生成随机数组 长度为13  里面为1--13的随机数 遍历数组 按我们的规则生成数字
var fn5=function(){
	var arr=[];
	for(var i=0;i<13;i++){
		var rand=Math.floor(1+Math.random()*13);
		arr.push(rand);		
	}
	for(var j=0;j<arr.length;j++){
		dict[arr[i]];
	}
}
fn5();

// 6
// 写一个函数，生成一副乱序的扑克牌
// var poker=[{huase:'rd',number:'8'},{huase:'bk',number:'7'},{huase:'red',number:'8'},{}]

var hua=['rd','bk','fk','mh'];
var fn6=function(){
	var poker=[],hh,sjs,dd={};
	var zidian={};
	while(poker.length != 52){
		hh =hua [  Math.floor(Math.random()*4)  ];
		sjs=dict[ Math.floor(1+Math.random()*13)];
		var pai={ huase:hh,number:sjs };
		if(!zidian[hh+sjs]){
			poker.push(pai);
			zidian[hh+sjs]=true;
		}
		
	}	return poker;
};
// console.table(fn6());
var poker=fn6();

// poker.length=28;
var els=document.getElementsByClassName('pok');
for(var i=0;i<els.length;i++){
	els[i].innerHTML=poker[i].number;
	// console.log(i);
	if(poker[i].huase=='rd'){
		els[i].style.backgroundImage='url(./img/hongtao.jpg)';
	}
	if(poker[i].huase=='bk'){
		els[i].style.backgroundImage='url(./img/heitao.jpg)';
	}
	if(poker[i].huase=='fk'){
		els[i].style.backgroundImage='url(./img/fangkuai.jpg)';
	}
	if(poker[i].huase=='mh'){
		els[i].style.backgroundImage='url(./img/meihua.jpg)';
	}
	if(i>27){
	els[i].style.position='absolute';
	els[i].style.top='0px';
	els[i].style.left='0px';
	}
}
// kk.appendChild(shang);
// kk.appendChild(xia);
var blockd=document.getElementsByClassName('blockd');
shang.onclick=function(){
	if(zuok.lastElementChild!=null){
		youk.appendChild(zuok.removeChild(zuok.lastElementChild));
	}
}
var index=0;
xia.onclick=function(){
	if(zuok.lastElementChild==null){
		index++;
		if(index==3){alert('你输了');}
		for(var i=0;i<blockd.length;i++){
			zuok.appendChild(youk.removeChild(youk.lastElementChild));
		}
	}
}
shang.onmousedown=function(e){
	e.preventDefault();
}
xia.onmousedown=function(e){
	e.preventDefault();
}
// 规则：上面28张
// 下面24张

var shuaxin=document.getElementById('shuaxin');
shuaxin.onclick=function(){
	location.reload();
}


};