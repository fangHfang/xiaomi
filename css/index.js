//banner效果
{
    let imgs = document.querySelectorAll(".banner_img img");
    let pagers = document.querySelectorAll(".pager");
    let banner = document.querySelector(".banner_img");
    let next=document.querySelector(".banner_rbtn");
    let prev=document.querySelector(".banner_lbtn");

    //轮播点的动画效果
    pagers.forEach(function (ele, index) {
        ele.onclick = function () {
            for (let i = 0; i < imgs.length; i++) {
                imgs[i].classList.remove("banneractive");
                pagers[i].classList.remove("banneractive");
            }
            this.classList.add("banneractive");
            imgs[index].classList.add("banneractive");
            n = index;
        };
    });

    //图片的动画效果
    let n = 0;
    let t = setInterval(move, 3000);
    function move() {
        n++;
        if (n === imgs.length) {
            n = 0;
        }
        if (n < 0) {
            n = imgs.length - 1;
        }
        for (let i = 0; i < imgs.length; i++) {
            imgs[i].classList.remove("banneractive");
            pagers[i].classList.remove("banneractive");
        }
        imgs[n].classList.add("banneractive");
        pagers[n].classList.add("banneractive");
    }


    //鼠标移入移除效果
    banner.onmouseenter = function () {
        clearInterval(t);
    };
    banner.onmouseleave = function () {

        t = setInterval(move, 3000);
    };

    let flag=true;
    next.onclick=function(){
        if(flag){
            flag=false;
            move();
        }
    };
    prev.onclick=function(){
        n=n-2;
        if(flag){
            flag=false;
            move();
        }
    };
    imgs.forEach(function(ele,index){
        ele.addEventListener("transitionend",function(){
            flag=true;
        })
    })
}

//title效果
{
    let tit = document.querySelectorAll(".nav_wenzi span");
    let tittan = document.querySelectorAll(".dh3");

    let obj = tittan[0];
    tit.forEach(function (ele, index) {
        ele.onmouseenter = function () {
            obj.style.display = "none";
            tittan[index].style.display = "block";
            obj = tittan[index];
        }
        ele.onmouseleave = function () {
            tittan[index].style.display = "none";
        };
    });
}
//banner侧导航
{
    let bannernavtan = document.querySelectorAll(".banner_tan1");
    let bannernavli = document.querySelectorAll(".banner_nav li");

    let obj = bannernavtan[0];
    bannernavli.forEach(function (ele, index) {
        ele.onmouseenter = function () {
            obj.style.display = "none";
            bannernavtan[index].style.display = "block";
            obj = bannernavtan[index];
        }
        ele.onmouseleave = function () {
            bannernavtan[index].style.display = "none";
        };
    });
}
// 小米明星单品    为你推荐
{
    function content2(parent) {
        const prev = parent.querySelector(".star_btn2");            //获取prev按钮
        const next = parent.querySelector(".star_btn3");            //获取next按钮
        const inner = parent.querySelector(".dp_inner");            //获取所要移动的盒子
        var n = 0;                                                  //声明变量n

        next.onclick = function () {                                //给prev按钮设置点击事件
            n++;
            prev.classList.remove("disable");                          //点击next时，给prev移除样式
            if (n === 2) {
                this.classList.add("disable");                   //点击到尽头时，添加prev的样式
            }
            if (n === 3) {
                n = 2;                                              //点击超过最大值，将n赋值2
                return;
            }
            inner.style.marginLeft = -1226 * n + "px";               //左移一定距离
        };
        prev.onclick = function () {                                 //给prev按钮设置点击事件
            n--;
            next.classList.remove("disable");                        //点击prev时，给next移除样式
            if (n === 0) {
                prev.classList.add("disable");                       //点击到尽头时，添加next的样式
            }
            if (n === -1) {
                n = 0;                                                //prev点击到不能再点时，将n=0,并返回
                return;
            }
            inner.style.marginLeft = -1226 * n + "px";                //左移相对的距离

        };
    }

    const contentList = document.querySelectorAll(".allcontent");      //获取所要移动的大盒子，并调用函数
    content2(contentList[0]);
    content2(contentList[1]);
}


//大模块  搭配   智能   配件    周边
{
    function allcon(parent) {
        const types = parent.querySelectorAll(".type");
        const goods = parent.querySelectorAll(".jd_content");

        types.forEach(function (ele, index) {
            ele.onmouseenter = function () {
                for (let i = 0; i < types.length; i++) {
                    types[i].classList.remove("jr_rm");
                    goods[i].classList.remove("allactive");
                }
                this.classList.add("jr_rm");
                goods[index].classList.add("allactive");
            };
        });
    }

    const contentList1 = document.querySelectorAll(".dml_content");
    allcon(contentList1[0]);
    allcon(contentList1[1]);
    allcon(contentList1[2]);
    allcon(contentList1[3]);
}

// 内容
{
    function content3(parent) {

        let contentinners = parent.querySelector(".nr_inner");
        let inner = parent.querySelectorAll(".nr_inner1");
        let prev = parent.querySelector(".nr_btn1");
        let next = parent.querySelector(".nr_btn2");
        let pagers = parent.querySelectorAll(".pager");

        let n = 0;
        next.onclick = function () {
            n++;
            if (n === inner.length) {
                n = inner.length - 1;
                return;
            }
            contentinners.style.marginLeft = n * -296 + "px";
            pagers[n].classList.add("nr_active");
            pagers[n - 1].classList.remove("nr_active");

        };
        prev.onclick = function () {
            n--;
            if (n < 0) {
                n = 0;
                return;
            }
            contentinners.style.marginLeft = n * -296 + "px";
            pagers[n].classList.add("nr_active");
            pagers[n + 1].classList.remove("nr_active");
            obj = pagers[n];
        };
        let obj = pagers[0];
        pagers.forEach(function (ele, index) {
            ele.onclick = function () {
                obj.classList.remove("nr_active");
                ele.classList.add("nr_active");
                obj = ele;
                contentinners.style.marginLeft = index * -296 + "px";
                n = index;

            };
        });
    }

    const contentList = document.querySelectorAll(".nr_bt");
    content3(contentList[0]);
    content3(contentList[1]);
    content3(contentList[2]);
    content3(contentList[3]);
}