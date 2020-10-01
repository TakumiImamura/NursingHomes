myImage = new Array(
    "../img/sample1.jpg",
    "../img/sample2.jpg",
    "../img/sample3.jpg",
    "../img/sample4.jpg"
    );
myNowCnt = -1;		// 現在表示している配列番号
myflg = 0;		// どっちを表示して、どっちを消すかのフラグ
function myChange(){	// スライドショーメイン関数
    myNowCnt = (myNowCnt<myImage.length-1) ? myNowCnt+1 : 0;		// 次の配列番号
    myflg = (myflg==0) ? 1 : 0;						// 表示・非表示フラグ反転
    if (myflg == 0){
        document.getElementById("idshow1").src = myImage[myNowCnt];		// 次の画像をセットする
        document.getElementById("idshow1").className = "fadein";
        document.getElementById("idshow2").className = "fadeout";
    }else{
        document.getElementById("idshow2").src = myImage[myNowCnt];
        document.getElementById("idshow1").className = "fadeout";
        document.getElementById("idshow2").className = "fadein";
    }
    setTimeout( "myChange()" , 4000 );
}