(function (lib, img, cjs) {

var p; // shortcut to reference prototypes

// stage content:
(lib.robot_frame = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{idle:0,punch_r:15,punch_l:22,kick_r:29,kick_l:40},true);

	// timeline functions:
	this.frame_14 = function() {
		this.gotoAndPlay("idle");
	}
	this.frame_21 = function() {
		this.gotoAndPlay("idle");
	}
	this.frame_28 = function() {
		this.gotoAndPlay("idle");
	}
	this.frame_39 = function() {
		this.gotoAndPlay("idle");
	}
	this.frame_50 = function() {
		this.gotoAndPlay("idle");
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).wait(14).call(this.frame_14).wait(7).call(this.frame_21).wait(7).call(this.frame_28).wait(11).call(this.frame_39).wait(11).call(this.frame_50));

	// ik_man copy
	this.ikNode_25 = new lib.hand();
	this.ikNode_25.setTransform(292,143.4,0.981,0.981,-137.4,0,0,5.5,16);

	this.ikNode_23 = new lib.arm_upper();
	this.ikNode_23.setTransform(236,109.7,0.983,0.983,-19.5,0,0,9.1,3.8);

	this.ikNode_24 = new lib.arm_lower();
	this.ikNode_24.setTransform(248.4,160.4,0.98,0.985,-118.4,0,0,4.1,4.3);

	this.ikNode_31 = new lib.feet();
	this.ikNode_31.setTransform(203.5,366.4,0.985,0.985,-3.1,0,0,3.6,4.8);

	this.ikNode_30 = new lib.leg_lower();
	this.ikNode_30.setTransform(239.2,283.1,0.985,0.985,23,0,0,10.1,2.4);

	this.ikNode_29 = new lib.leg_upper();
	this.ikNode_29.setTransform(241.1,198.3,0.98,0.98,6,0,0,5,3);

	this.ikNode_22 = new lib.head_1();
	this.ikNode_22.setTransform(253.6,69,0.986,0.986,21.3,0,0,23.6,24.4);

	this.ikNode_20 = new lib.torso_1();
	this.ikNode_20.setTransform(232.4,113.6,0.984,0.984,-2,0,0,13.9,17.1);

	this.ikNode_21 = new lib.neck();
	this.ikNode_21.setTransform(244.5,101.2,0.986,0.986,20.4,0,0,5.5,12.2);

	this.ikNode_19 = new lib.pelvis_1();
	this.ikNode_19.setTransform(241.1,197.9,0.988,0.988,-2,0,0,21.7,19.4);

	this.ikNode_18 = new lib.ghost();
	this.ikNode_18.setTransform(250.1,440.5,1,1,0,0,0,20.5,20.5);
	this.ikNode_18.alpha = 0;

	this.ikNode_28 = new lib.hand();
	this.ikNode_28.setTransform(312.7,151.4,0.979,0.979,-119.2,0,0,3.9,3.6);

	this.ikNode_27 = new lib.arm_lower();
	this.ikNode_27.setTransform(271.7,148,0.979,0.985,-95.7,0,0,4.7,3.8);

	this.ikNode_26 = new lib.arm_upper();
	this.ikNode_26.setTransform(238.1,109.5,0.981,0.981,-47.8,0,0,9.7,3.4);

	this.ikNode_34 = new lib.feet();
	this.ikNode_34.setTransform(290.1,359.9,0.986,0.986,0.9,0,0,1.7,5.4);

	this.ikNode_33 = new lib.leg_lower();
	this.ikNode_33.setTransform(289,268.7,0.987,0.987,-0.3,0,0,5.6,1.9);

	this.ikNode_32 = new lib.leg_upper();
	this.ikNode_32.setTransform(241.1,198.7,0.981,0.981,-32.1,0,0,5.4,4);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.ikNode_32,p:{regX:5.4,rotation:-32.1,y:198.7,x:241.1}},{t:this.ikNode_33,p:{rotation:-0.3,x:289,y:268.7,regX:5.6}},{t:this.ikNode_34,p:{regY:5.4,rotation:0.9,x:290.1,y:359.9,regX:1.7}},{t:this.ikNode_26,p:{rotation:-47.8,x:238.1,y:109.5,regX:9.7,regY:3.4}},{t:this.ikNode_27,p:{rotation:-95.7,x:271.7,y:148,regX:4.7}},{t:this.ikNode_28,p:{rotation:-119.2,x:312.7,y:151.4}},{t:this.ikNode_18,p:{x:250.1,y:440.5}},{t:this.ikNode_19,p:{regX:21.7,regY:19.4,x:241.1,y:197.9}},{t:this.ikNode_21,p:{regY:12.2,scaleX:0.986,scaleY:0.986,rotation:20.4,x:244.5,y:101.2}},{t:this.ikNode_20,p:{rotation:-2,x:232.4,y:113.6}},{t:this.ikNode_22,p:{rotation:21.3,x:253.6,y:69}},{t:this.ikNode_29,p:{regX:5,regY:3,rotation:6,x:241.1,y:198.3}},{t:this.ikNode_30,p:{rotation:23,x:239.2,y:283.1,regX:10.1,regY:2.4}},{t:this.ikNode_31,p:{rotation:-3.1,x:203.5,y:366.4}},{t:this.ikNode_24,p:{regX:4.1,rotation:-118.4,x:248.4,y:160.4}},{t:this.ikNode_23,p:{rotation:-19.5,x:236,y:109.7,regX:9.1}},{t:this.ikNode_25,p:{rotation:-137.4,x:292,y:143.4}}]}).to({state:[{t:this.ikNode_32,p:{regX:5.5,rotation:-32.2,y:200.2,x:241.1}},{t:this.ikNode_33,p:{rotation:1.9,x:289.1,y:270.2,regX:5.6}},{t:this.ikNode_34,p:{regY:5.3,rotation:0.2,x:286.4,y:361.2,regX:1.7}},{t:this.ikNode_26,p:{rotation:-45.9,x:238.4,y:111,regX:9.7,regY:3.4}},{t:this.ikNode_27,p:{rotation:-98.6,x:270.8,y:150.7,regX:4.7}},{t:this.ikNode_28,p:{rotation:-121.5,x:312.8,y:151.6}},{t:this.ikNode_18,p:{x:249.9,y:442}},{t:this.ikNode_19,p:{regX:21.6,regY:19.5,x:240.9,y:199.6}},{t:this.ikNode_21,p:{regY:12.3,scaleX:0.985,scaleY:0.985,rotation:20.7,x:244.9,y:102.9}},{t:this.ikNode_20,p:{rotation:-1.7,x:232.9,y:115.2}},{t:this.ikNode_22,p:{rotation:21.6,x:254.3,y:70.6}},{t:this.ikNode_29,p:{regX:5.1,regY:3.1,rotation:5,x:241.2,y:200}},{t:this.ikNode_30,p:{rotation:25.3,x:240.5,y:284.6,regX:10.1,regY:2.4}},{t:this.ikNode_31,p:{rotation:-0.8,x:201.4,y:366.5}},{t:this.ikNode_24,p:{regX:4,rotation:-115.8,x:250.6,y:161.6}},{t:this.ikNode_23,p:{rotation:-21.5,x:236.4,y:111.2,regX:9.1}},{t:this.ikNode_25,p:{rotation:-135.3,x:295.7,y:145.1}}]},1).to({state:[{t:this.ikNode_32,p:{regX:5.4,rotation:-32.4,y:201.9,x:240.8}},{t:this.ikNode_33,p:{rotation:4.3,x:289.2,y:271.7,regX:5.6}},{t:this.ikNode_34,p:{regY:5.4,rotation:-0.3,x:282.6,y:362.6,regX:1.7}},{t:this.ikNode_26,p:{rotation:-44,x:238.8,y:112.5,regX:9.7,regY:3.4}},{t:this.ikNode_27,p:{rotation:-101.4,x:269.9,y:153.3,regX:4.7}},{t:this.ikNode_28,p:{rotation:-123.8,x:312.7,y:151.6}},{t:this.ikNode_18,p:{x:249.8,y:443.5}},{t:this.ikNode_19,p:{regX:21.6,regY:19.5,x:240.8,y:201.1}},{t:this.ikNode_21,p:{regY:12.3,scaleX:0.986,scaleY:0.986,rotation:21,x:245.3,y:104.6}},{t:this.ikNode_20,p:{rotation:-1.4,x:233.4,y:116.7}},{t:this.ikNode_22,p:{rotation:21.9,x:254.9,y:72.3}},{t:this.ikNode_29,p:{regX:5,regY:3,rotation:4,x:241,y:201.4}},{t:this.ikNode_30,p:{rotation:27.7,x:241.8,y:286.1,regX:10.1,regY:2.4}},{t:this.ikNode_31,p:{rotation:1.5,x:199.4,y:366.4}},{t:this.ikNode_24,p:{regX:4.1,rotation:-113.3,x:252.7,y:162.4}},{t:this.ikNode_23,p:{rotation:-23.6,x:236.8,y:112.7,regX:9.1}},{t:this.ikNode_25,p:{rotation:-133.1,x:299.4,y:146.8}}]},1).to({state:[{t:this.ikNode_32,p:{regX:5.4,rotation:-32.5,y:203.5,x:240.6}},{t:this.ikNode_33,p:{rotation:6.7,x:289.4,y:273.1,regX:5.7}},{t:this.ikNode_34,p:{regY:5.3,rotation:-0.9,x:278.8,y:363.5,regX:1.7}},{t:this.ikNode_26,p:{rotation:-42.1,x:239.2,y:113.9,regX:9.8,regY:3.4}},{t:this.ikNode_27,p:{rotation:-104.2,x:269,y:155.9,regX:4.6}},{t:this.ikNode_28,p:{rotation:-126.1,x:312.3,y:151.4}},{t:this.ikNode_18,p:{x:249.7,y:445.1}},{t:this.ikNode_19,p:{regX:21.6,regY:19.5,x:240.7,y:202.6}},{t:this.ikNode_21,p:{regY:12.3,scaleX:0.985,scaleY:0.985,rotation:21.3,x:245.8,y:106.2}},{t:this.ikNode_20,p:{rotation:-1.1,x:233.8,y:118.2}},{t:this.ikNode_22,p:{rotation:22.2,x:255.6,y:73.8}},{t:this.ikNode_29,p:{regX:5,regY:3,rotation:3.1,x:241,y:203}},{t:this.ikNode_30,p:{rotation:30,x:243.1,y:287.7,regX:10,regY:2.4}},{t:this.ikNode_31,p:{rotation:3.8,x:197.5,y:366.1}},{t:this.ikNode_24,p:{regX:4,rotation:-110.7,x:254.7,y:163.5}},{t:this.ikNode_23,p:{rotation:-25.6,x:237,y:114.3,regX:9}},{t:this.ikNode_25,p:{rotation:-131,x:303,y:148.6}}]},1).to({state:[{t:this.ikNode_32,p:{regX:5.4,rotation:-32.6,y:205.1,x:240.4}},{t:this.ikNode_33,p:{rotation:9.1,x:289.4,y:274.4,regX:5.6}},{t:this.ikNode_34,p:{regY:5.3,rotation:-1.5,x:275,y:364.5,regX:1.7}},{t:this.ikNode_26,p:{rotation:-40.2,x:239.5,y:115.6,regX:9.7,regY:3.4}},{t:this.ikNode_27,p:{rotation:-107.1,x:268,y:158.4,regX:4.7}},{t:this.ikNode_28,p:{rotation:-128.4,x:311.8,y:151.2}},{t:this.ikNode_18,p:{x:249.5,y:446.6}},{t:this.ikNode_19,p:{regX:21.6,regY:19.5,x:240.6,y:204.2}},{t:this.ikNode_21,p:{regY:12.2,scaleX:0.986,scaleY:0.986,rotation:21.6,x:246.3,y:107.8}},{t:this.ikNode_20,p:{rotation:-0.7,x:234.2,y:119.7}},{t:this.ikNode_22,p:{rotation:22.6,x:256.2,y:75.4}},{t:this.ikNode_29,p:{regX:5,regY:3.1,rotation:2.1,x:240.9,y:204.6}},{t:this.ikNode_30,p:{rotation:32.4,x:244.5,y:289.2,regX:10.1,regY:2.4}},{t:this.ikNode_31,p:{rotation:6.2,x:195.6,y:365.7}},{t:this.ikNode_24,p:{regX:4,rotation:-108.1,x:256.8,y:164.4}},{t:this.ikNode_23,p:{rotation:-27.6,x:237.6,y:115.8,regX:9.1}},{t:this.ikNode_25,p:{rotation:-128.8,x:306.6,y:150.4}}]},1).to({state:[{t:this.ikNode_32,p:{regX:5.4,rotation:-32.7,y:206.8,x:240.3}},{t:this.ikNode_33,p:{rotation:11.4,x:289.5,y:275.9,regX:5.6}},{t:this.ikNode_34,p:{regY:5.4,rotation:-2.1,x:271.1,y:365.4,regX:1.6}},{t:this.ikNode_26,p:{rotation:-38.3,x:239.8,y:117,regX:9.7,regY:3.4}},{t:this.ikNode_27,p:{rotation:-109.9,x:266.9,y:160.9,regX:4.7}},{t:this.ikNode_28,p:{rotation:-130.7,x:311.1,y:151}},{t:this.ikNode_18,p:{x:249.4,y:448.1}},{t:this.ikNode_19,p:{regX:21.6,regY:19.5,x:240.5,y:205.7}},{t:this.ikNode_21,p:{regY:12.3,scaleX:0.986,scaleY:0.986,rotation:22,x:246.7,y:109.5}},{t:this.ikNode_20,p:{rotation:-0.4,x:234.7,y:121.2}},{t:this.ikNode_22,p:{rotation:22.9,x:256.8,y:77}},{t:this.ikNode_29,p:{regX:5,regY:3,rotation:1.1,x:240.7,y:206}},{t:this.ikNode_30,p:{rotation:34.7,x:245.8,y:290.8,regX:10.1,regY:2.4}},{t:this.ikNode_31,p:{rotation:8.5,x:193.8,y:365.1}},{t:this.ikNode_24,p:{regX:4,rotation:-105.6,x:258.8,y:165.3}},{t:this.ikNode_23,p:{rotation:-29.6,x:238,y:117.3,regX:9.1}},{t:this.ikNode_25,p:{rotation:-126.7,x:310.1,y:152.3}}]},1).to({state:[{t:this.ikNode_32,p:{regX:5.4,rotation:-32.9,y:208.3,x:240.3}},{t:this.ikNode_33,p:{rotation:13.8,x:289.5,y:277.2,regX:5.5}},{t:this.ikNode_34,p:{regY:5.3,rotation:-2.7,x:267.4,y:365.9,regX:1.6}},{t:this.ikNode_26,p:{rotation:-36.4,x:240.3,y:118.7,regX:9.7,regY:3.5}},{t:this.ikNode_27,p:{rotation:-112.8,x:265.8,y:163.3,regX:4.7}},{t:this.ikNode_28,p:{rotation:-133,x:310.1,y:150.7}},{t:this.ikNode_18,p:{x:249.3,y:449.6}},{t:this.ikNode_19,p:{regX:21.6,regY:19.5,x:240.4,y:207.2}},{t:this.ikNode_21,p:{regY:12.2,scaleX:0.986,scaleY:0.986,rotation:22.3,x:247.2,y:111}},{t:this.ikNode_20,p:{rotation:-0.1,x:235.1,y:122.7}},{t:this.ikNode_22,p:{rotation:23.2,x:257.4,y:78.7}},{t:this.ikNode_29,p:{regX:5,regY:3,rotation:0.2,x:240.7,y:207.5}},{t:this.ikNode_30,p:{rotation:37.1,x:247.1,y:292.3,regX:10.1,regY:2.4}},{t:this.ikNode_31,p:{rotation:10.9,x:192,y:364.3}},{t:this.ikNode_24,p:{regX:4,rotation:-103,x:260.9,y:166.1}},{t:this.ikNode_23,p:{rotation:-31.6,x:238.4,y:119,regX:9}},{t:this.ikNode_25,p:{rotation:-124.5,x:313.8,y:154.3}}]},1).to({state:[{t:this.ikNode_32,p:{regX:5.4,rotation:-33,y:210,x:240}},{t:this.ikNode_33,p:{rotation:16.2,x:289.7,y:278.7,regX:5.6}},{t:this.ikNode_34,p:{regY:5.4,rotation:-3.3,x:263.7,y:366.4,regX:1.6}},{t:this.ikNode_26,p:{rotation:-34.5,x:240.7,y:120.1,regX:9.7,regY:3.5}},{t:this.ikNode_27,p:{rotation:-115.6,x:264.7,y:165.7,regX:4.7}},{t:this.ikNode_28,p:{rotation:-135.3,x:309,y:150.1}},{t:this.ikNode_18,p:{x:249.2,y:451.2}},{t:this.ikNode_19,p:{regX:21.6,regY:19.5,x:240.4,y:208.8}},{t:this.ikNode_21,p:{regY:12.3,scaleX:0.986,scaleY:0.986,rotation:22.6,x:247.6,y:112.8}},{t:this.ikNode_20,p:{rotation:0.1,x:235.6,y:124.2}},{t:this.ikNode_22,p:{rotation:23.5,x:258.1,y:80.2}},{t:this.ikNode_29,p:{regX:5,regY:3.1,rotation:-0.7,x:240.6,y:209.2}},{t:this.ikNode_30,p:{rotation:39.4,x:248.4,y:293.8,regX:10.1,regY:2.5}},{t:this.ikNode_31,p:{rotation:13.2,x:190.4,y:363.5}},{t:this.ikNode_24,p:{regX:4.1,rotation:-100.5,x:262.8,y:166.7}},{t:this.ikNode_23,p:{rotation:-33.6,x:238.8,y:120.4,regX:9.1}},{t:this.ikNode_25,p:{rotation:-122.4,x:317.2,y:156.4}}]},1).to({state:[{t:this.ikNode_32,p:{regX:5.4,rotation:-32.9,y:208.3,x:240.3}},{t:this.ikNode_33,p:{rotation:13.8,x:289.5,y:277.3,regX:5.5}},{t:this.ikNode_34,p:{regY:5.3,rotation:-2.7,x:267.5,y:365.9,regX:1.6}},{t:this.ikNode_26,p:{rotation:-36.4,x:240.3,y:118.6,regX:9.7,regY:3.5}},{t:this.ikNode_27,p:{rotation:-112.8,x:265.9,y:163.3,regX:4.7}},{t:this.ikNode_28,p:{rotation:-133,x:310.6,y:150.3}},{t:this.ikNode_18,p:{x:249.3,y:449.6}},{t:this.ikNode_19,p:{regX:21.6,regY:19.5,x:240.5,y:207.2}},{t:this.ikNode_21,p:{regY:12.2,scaleX:0.986,scaleY:0.986,rotation:22.3,x:247.2,y:111.1}},{t:this.ikNode_20,p:{rotation:-0.1,x:235.2,y:122.7}},{t:this.ikNode_22,p:{rotation:23.2,x:257.4,y:78.7}},{t:this.ikNode_29,p:{regX:5,regY:3,rotation:0.2,x:240.8,y:207.6}},{t:this.ikNode_30,p:{rotation:37.1,x:247.1,y:292.3,regX:10.1,regY:2.4}},{t:this.ikNode_31,p:{rotation:10.9,x:192,y:364.4}},{t:this.ikNode_24,p:{regX:4,rotation:-103,x:260.9,y:166.1}},{t:this.ikNode_23,p:{rotation:-31.6,x:238.4,y:119,regX:9}},{t:this.ikNode_25,p:{rotation:-124.5,x:313.8,y:154.6}}]},1).to({state:[{t:this.ikNode_32,p:{regX:5.4,rotation:-32.7,y:206.8,x:240.3}},{t:this.ikNode_33,p:{rotation:11.5,x:289.5,y:275.9,regX:5.6}},{t:this.ikNode_34,p:{regY:5.4,rotation:-2.1,x:271.2,y:365.4,regX:1.6}},{t:this.ikNode_26,p:{rotation:-38.3,x:239.8,y:117,regX:9.7,regY:3.4}},{t:this.ikNode_27,p:{rotation:-109.9,x:267,y:160.9,regX:4.7}},{t:this.ikNode_28,p:{rotation:-130.7,x:312,y:150.2}},{t:this.ikNode_18,p:{x:249.4,y:448.1}},{t:this.ikNode_19,p:{regX:21.6,regY:19.5,x:240.6,y:205.7}},{t:this.ikNode_21,p:{regY:12.3,scaleX:0.986,scaleY:0.986,rotation:22,x:246.8,y:109.7}},{t:this.ikNode_20,p:{rotation:-0.4,x:234.8,y:121.2}},{t:this.ikNode_22,p:{rotation:22.9,x:256.9,y:77.1}},{t:this.ikNode_29,p:{regX:5,regY:3,rotation:1.1,x:240.8,y:206}},{t:this.ikNode_30,p:{rotation:34.7,x:245.8,y:290.8,regX:10.1,regY:2.4}},{t:this.ikNode_31,p:{rotation:8.5,x:193.9,y:365.2}},{t:this.ikNode_24,p:{regX:4,rotation:-105.6,x:258.9,y:165.4}},{t:this.ikNode_23,p:{rotation:-29.6,x:238.2,y:117.4,regX:9.1}},{t:this.ikNode_25,p:{rotation:-126.7,x:310.2,y:152.8}}]},1).to({state:[{t:this.ikNode_32,p:{regX:5.4,rotation:-32.6,y:205.1,x:240.5}},{t:this.ikNode_33,p:{rotation:9.1,x:289.5,y:274.5,regX:5.6}},{t:this.ikNode_34,p:{regY:5.3,rotation:-1.5,x:275.1,y:364.7,regX:1.7}},{t:this.ikNode_26,p:{rotation:-40.2,x:239.5,y:115.5,regX:9.7,regY:3.4}},{t:this.ikNode_27,p:{rotation:-107.1,x:268.1,y:158.5,regX:4.7}},{t:this.ikNode_28,p:{rotation:-128.4,x:313.3,y:150.2}},{t:this.ikNode_18,p:{x:249.5,y:446.6}},{t:this.ikNode_19,p:{regX:21.6,regY:19.5,x:240.7,y:204.2}},{t:this.ikNode_21,p:{regY:12.2,scaleX:0.986,scaleY:0.986,rotation:21.6,x:246.4,y:108}},{t:this.ikNode_20,p:{rotation:-0.7,x:234.4,y:119.7}},{t:this.ikNode_22,p:{rotation:22.6,x:256.3,y:75.6}},{t:this.ikNode_29,p:{regX:5,regY:3.1,rotation:2.1,x:241.1,y:204.7}},{t:this.ikNode_30,p:{rotation:32.4,x:244.5,y:289.3,regX:10.1,regY:2.4}},{t:this.ikNode_31,p:{rotation:6.2,x:195.7,y:365.8}},{t:this.ikNode_24,p:{regX:4,rotation:-108.1,x:256.8,y:164.6}},{t:this.ikNode_23,p:{rotation:-27.6,x:237.8,y:115.9,regX:9.1}},{t:this.ikNode_25,p:{rotation:-128.8,x:306.8,y:151.2}}]},1).to({state:[{t:this.ikNode_32,p:{regX:5.4,rotation:-32.5,y:203.5,x:240.7}},{t:this.ikNode_33,p:{rotation:6.7,x:289.6,y:273.1,regX:5.7}},{t:this.ikNode_34,p:{regY:5.3,rotation:-0.9,x:278.9,y:363.7,regX:1.7}},{t:this.ikNode_26,p:{rotation:-42.1,x:239.2,y:113.9,regX:9.8,regY:3.4}},{t:this.ikNode_27,p:{rotation:-104.2,x:269.2,y:156,regX:4.6}},{t:this.ikNode_28,p:{rotation:-126.1,x:314.4,y:150}},{t:this.ikNode_18,p:{x:249.7,y:445.1}},{t:this.ikNode_19,p:{regX:21.6,regY:19.5,x:240.9,y:202.7}},{t:this.ikNode_21,p:{regY:12.3,scaleX:0.985,scaleY:0.985,rotation:21.3,x:245.9,y:106.5}},{t:this.ikNode_20,p:{rotation:-1.1,x:233.9,y:118.3}},{t:this.ikNode_22,p:{rotation:22.2,x:255.7,y:74}},{t:this.ikNode_29,p:{regX:5,regY:3,rotation:3.1,x:241.2,y:203.1}},{t:this.ikNode_30,p:{rotation:30,x:243.1,y:287.8,regX:10,regY:2.4}},{t:this.ikNode_31,p:{rotation:3.8,x:197.6,y:366.2}},{t:this.ikNode_24,p:{regX:4,rotation:-110.7,x:254.8,y:163.7}},{t:this.ikNode_23,p:{rotation:-25.6,x:237.3,y:114.4,regX:9}},{t:this.ikNode_25,p:{rotation:-131,x:303.2,y:149.7}}]},1).to({state:[{t:this.ikNode_32,p:{regX:5.4,rotation:-32.4,y:201.9,x:240.8}},{t:this.ikNode_33,p:{rotation:4.3,x:289.4,y:271.7,regX:5.6}},{t:this.ikNode_34,p:{regY:5.4,rotation:-0.3,x:282.8,y:362.8,regX:1.7}},{t:this.ikNode_26,p:{rotation:-44,x:238.8,y:112.4,regX:9.7,regY:3.4}},{t:this.ikNode_27,p:{rotation:-101.4,x:270.2,y:153.5,regX:4.7}},{t:this.ikNode_28,p:{rotation:-123.8,x:315.3,y:150}},{t:this.ikNode_18,p:{x:249.8,y:443.5}},{t:this.ikNode_19,p:{regX:21.6,regY:19.5,x:241,y:201.2}},{t:this.ikNode_21,p:{regY:12.3,scaleX:0.986,scaleY:0.986,rotation:21,x:245.4,y:105}},{t:this.ikNode_20,p:{rotation:-1.4,x:233.6,y:116.8}},{t:this.ikNode_22,p:{rotation:21.9,x:255.1,y:72.5}},{t:this.ikNode_29,p:{regX:5,regY:3,rotation:4,x:241.2,y:201.6}},{t:this.ikNode_30,p:{rotation:27.7,x:241.8,y:286.2,regX:10.1,regY:2.4}},{t:this.ikNode_31,p:{rotation:1.5,x:199.6,y:366.5}},{t:this.ikNode_24,p:{regX:4.1,rotation:-113.3,x:252.7,y:162.6}},{t:this.ikNode_23,p:{rotation:-23.6,x:237.1,y:112.8,regX:9.1}},{t:this.ikNode_25,p:{rotation:-133.1,x:299.7,y:148.1}}]},1).to({state:[{t:this.ikNode_32,p:{regX:5.5,rotation:-32.2,y:200.2,x:241.1}},{t:this.ikNode_33,p:{rotation:1.9,x:289.4,y:270.3,regX:5.6}},{t:this.ikNode_34,p:{regY:5.3,rotation:0.3,x:286.6,y:361.5,regX:1.7}},{t:this.ikNode_26,p:{rotation:-45.9,x:238.4,y:110.9,regX:9.7,regY:3.4}},{t:this.ikNode_27,p:{rotation:-98.6,x:271.1,y:150.8,regX:4.7}},{t:this.ikNode_28,p:{rotation:-121.5,x:316.2,y:149.8}},{t:this.ikNode_18,p:{x:249.9,y:442}},{t:this.ikNode_19,p:{regX:21.6,regY:19.5,x:241.1,y:199.7}},{t:this.ikNode_21,p:{regY:12.3,scaleX:0.985,scaleY:0.985,rotation:20.7,x:245,y:103.5}},{t:this.ikNode_20,p:{rotation:-1.7,x:233.2,y:115.3}},{t:this.ikNode_22,p:{rotation:21.6,x:254.6,y:70.9}},{t:this.ikNode_29,p:{regX:5.1,regY:3.1,rotation:5,x:241.5,y:200.2}},{t:this.ikNode_30,p:{rotation:25.3,x:240.6,y:284.6,regX:10.1,regY:2.4}},{t:this.ikNode_31,p:{rotation:-0.8,x:201.7,y:366.7}},{t:this.ikNode_24,p:{regX:4,rotation:-115.8,x:250.7,y:161.9}},{t:this.ikNode_23,p:{rotation:-21.5,x:236.8,y:111.3,regX:9.1}},{t:this.ikNode_25,p:{rotation:-135.3,x:296.1,y:146.7}}]},1).to({state:[{t:this.ikNode_32,p:{regX:5.4,rotation:-32.1,y:198.7,x:241.3}},{t:this.ikNode_33,p:{rotation:-0.3,x:289.3,y:268.8,regX:5.5}},{t:this.ikNode_34,p:{regY:5.3,rotation:0.9,x:290.3,y:360.2,regX:1.6}},{t:this.ikNode_26,p:{rotation:-47.8,x:238.1,y:109.5,regX:9.7,regY:3.4}},{t:this.ikNode_27,p:{rotation:-95.7,x:272.1,y:148.2,regX:4.7}},{t:this.ikNode_28,p:{rotation:-119.2,x:316.8,y:149.5}},{t:this.ikNode_18,p:{x:250.1,y:440.5}},{t:this.ikNode_19,p:{regX:21.6,regY:19.5,x:241.2,y:198.1}},{t:this.ikNode_21,p:{regY:12.2,scaleX:0.985,scaleY:0.985,rotation:20.4,x:244.6,y:101.9}},{t:this.ikNode_20,p:{rotation:-2,x:232.7,y:113.9}},{t:this.ikNode_22,p:{rotation:21.3,x:253.9,y:69.4}},{t:this.ikNode_29,p:{regX:5,regY:3,rotation:6,x:241.5,y:198.5}},{t:this.ikNode_30,p:{rotation:23,x:239.3,y:283,regX:10.1,regY:2.4}},{t:this.ikNode_31,p:{rotation:-3.1,x:203.8,y:366.6}},{t:this.ikNode_24,p:{regX:4,rotation:-118.4,x:248.5,y:160.8}},{t:this.ikNode_23,p:{rotation:-19.5,x:236.4,y:109.8,regX:9.1}},{t:this.ikNode_25,p:{rotation:-137.4,x:292.6,y:145.2}}]},1).to({state:[]},1).wait(36));

	// ik_man
	this.ikNode_59 = new lib.hand();
	this.ikNode_59.setTransform(299.8,134.9,0.981,0.981,-137.4,0,0,5.5,16);

	this.ikNode_58 = new lib.arm_lower();
	this.ikNode_58.setTransform(248.5,160.5,0.98,0.985,-118.4,0,0,4.1,4.3);

	this.ikNode_57 = new lib.arm_upper();
	this.ikNode_57.setTransform(236.3,109.8,0.983,0.983,-19.5,0,0,9.2,3.8);

	this.ikNode_65 = new lib.feet();
	this.ikNode_65.setTransform(203.7,366.4,0.985,0.985,-3.1,0,0,3.8,4.7);

	this.ikNode_64 = new lib.leg_lower();
	this.ikNode_64.setTransform(239.4,283.1,0.986,0.986,23,0,0,10.1,2.5);

	this.ikNode_63 = new lib.leg_upper();
	this.ikNode_63.setTransform(241.4,198.4,0.981,0.981,6,0,0,5.2,3.1);

	this.ikNode_56 = new lib.head_1();
	this.ikNode_56.setTransform(253.7,69.2,0.986,0.986,21.3,0,0,23.8,24.4);

	this.ikNode_54 = new lib.torso_1();
	this.ikNode_54.setTransform(232.5,113.6,0.985,0.985,-2,0,0,13.9,17.1);

	this.ikNode_55 = new lib.neck();
	this.ikNode_55.setTransform(244.5,101.5,0.986,0.986,20.3,0,0,5.6,12.2);

	this.ikNode_53 = new lib.pelvis_1();
	this.ikNode_53.setTransform(241.3,198,0.988,0.988,-2,0,0,21.8,19.4);

	this.ikNode_52 = new lib.ghost();
	this.ikNode_52.setTransform(250.1,440.5,1,1,0,0,0,20.5,20.5);
	this.ikNode_52.alpha = 0;

	this.ikNode_62 = new lib.hand();
	this.ikNode_62.setTransform(322.3,143.9,0.979,0.979,-119.2,0,0,5.7,16);

	this.ikNode_61 = new lib.arm_lower();
	this.ikNode_61.setTransform(271.6,148.1,0.979,0.985,-95.7,0,0,4.8,3.6);

	this.ikNode_60 = new lib.arm_upper();
	this.ikNode_60.setTransform(238.2,109.6,0.981,0.981,-47.8,0,0,9.7,3.5);

	this.ikNode_68 = new lib.feet();
	this.ikNode_68.setTransform(290,360,0.986,0.986,0.8,0,0,1.7,5.4);

	this.ikNode_67 = new lib.leg_lower();
	this.ikNode_67.setTransform(289,268.7,0.987,0.987,-0.3,0,0,5.7,1.9);

	this.ikNode_66 = new lib.leg_upper();
	this.ikNode_66.setTransform(241,198.8,0.981,0.981,-32.1,0,0,5.5,4.2);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.ikNode_66,p:{regX:5.5,x:241,y:198.8}},{t:this.ikNode_67,p:{x:289,y:268.7}},{t:this.ikNode_68,p:{rotation:0.8,x:290,y:360}},{t:this.ikNode_60,p:{regY:3.5,rotation:-47.8,x:238.2,y:109.6}},{t:this.ikNode_61,p:{regX:4.8,rotation:-95.7,x:271.6,y:148.1}},{t:this.ikNode_62,p:{regY:16,rotation:-119.2,x:322.3,y:143.9}},{t:this.ikNode_52},{t:this.ikNode_53,p:{y:198,x:241.3}},{t:this.ikNode_55,p:{regX:5.6,rotation:20.3,x:244.5,y:101.5}},{t:this.ikNode_54,p:{regX:13.9,rotation:-2,x:232.5,y:113.6,regY:17.1}},{t:this.ikNode_56,p:{regX:23.8,rotation:21.3,x:253.7,y:69.2}},{t:this.ikNode_63,p:{scaleX:0.981,scaleY:0.981,rotation:6,x:241.4,y:198.4}},{t:this.ikNode_64,p:{rotation:23,x:239.4,y:283.1,regX:10.1}},{t:this.ikNode_65,p:{rotation:-3.1,x:203.7,y:366.4}},{t:this.ikNode_57,p:{regX:9.2,rotation:-19.5,x:236.3,regY:3.8,y:109.8}},{t:this.ikNode_58,p:{regX:4.1,rotation:-118.4,x:248.5,y:160.5,regY:4.3}},{t:this.ikNode_59,p:{regY:16,rotation:-137.4,x:299.8,y:134.9}}]},15).to({state:[{t:this.ikNode_66,p:{regX:5.4,x:241.1,y:199}},{t:this.ikNode_67,p:{x:289.2,y:268.7}},{t:this.ikNode_68,p:{rotation:0.9,x:290.2,y:360}},{t:this.ikNode_60,p:{regY:3.6,rotation:-40.5,x:241.8,y:109.6}},{t:this.ikNode_61,p:{regX:4.9,rotation:-88.3,x:270.2,y:151.8}},{t:this.ikNode_62,p:{regY:16.1,rotation:-122.9,x:321.1,y:153}},{t:this.ikNode_52},{t:this.ikNode_53,p:{y:198.1,x:241.3}},{t:this.ikNode_55,p:{regX:5.5,rotation:14.3,x:248.3,y:101.7}},{t:this.ikNode_54,p:{regX:14,rotation:0.2,x:236.2,y:113.4,regY:17.1}},{t:this.ikNode_56,p:{regX:23.7,rotation:15.6,x:254.3,y:68.7}},{t:this.ikNode_63,p:{scaleX:0.98,scaleY:0.98,rotation:7.1,x:241.4,y:198.4}},{t:this.ikNode_64,p:{rotation:24,x:237.7,y:283,regX:10.1}},{t:this.ikNode_65,p:{rotation:-2.1,x:200.7,y:365.7}},{t:this.ikNode_57,p:{regX:9.1,rotation:-42.6,x:240,regY:3.8,y:109.8}},{t:this.ikNode_58,p:{regX:4,rotation:-108.5,x:271.1,y:151.8,regY:4.3}},{t:this.ikNode_59,p:{regY:15.9,rotation:-123.9,x:323.6,y:135}}]},1).to({state:[{t:this.ikNode_66,p:{regX:5.4,x:241.3,y:199}},{t:this.ikNode_67,p:{x:289.3,y:268.8}},{t:this.ikNode_68,p:{rotation:0.9,x:290.3,y:360.1}},{t:this.ikNode_60,p:{regY:3.5,rotation:-33.2,x:245.3,y:109.7}},{t:this.ikNode_61,p:{regX:4.9,rotation:-80.8,x:268.2,y:155.2}},{t:this.ikNode_62,p:{regY:16,rotation:-126.6,x:318.5,y:161.8}},{t:this.ikNode_52},{t:this.ikNode_53,p:{y:198.2,x:241.3}},{t:this.ikNode_55,p:{regX:5.6,rotation:8.3,x:252.5,y:102.2}},{t:this.ikNode_54,p:{regX:13.9,rotation:2.5,x:239.6,y:113.2,regY:17}},{t:this.ikNode_56,p:{regX:23.7,rotation:9.9,x:254.8,y:68.8}},{t:this.ikNode_63,p:{scaleX:0.981,scaleY:0.981,rotation:8.1,x:241.4,y:198.4}},{t:this.ikNode_64,p:{rotation:25.1,x:236.1,y:283,regX:10.1}},{t:this.ikNode_65,p:{rotation:-1,x:197.6,y:364.9}},{t:this.ikNode_57,p:{regX:9.1,rotation:-65.7,x:243.7,regY:3.8,y:109.8}},{t:this.ikNode_58,p:{regX:4,rotation:-98.6,x:288.7,y:136.3,regY:4.3}},{t:this.ikNode_59,p:{regY:16,rotation:-110.4,x:341.1,y:127.9}}]},1).to({state:[{t:this.ikNode_66,p:{regX:5.4,x:241.4,y:199}},{t:this.ikNode_67,p:{x:289.5,y:268.8}},{t:this.ikNode_68,p:{rotation:0.9,x:290.5,y:360.2}},{t:this.ikNode_60,p:{regY:3.6,rotation:-25.9,x:249,y:109.9}},{t:this.ikNode_61,p:{regX:4.9,rotation:-73.3,x:266,y:158.1}},{t:this.ikNode_62,p:{regY:16,rotation:-130.4,x:315.3,y:169.7}},{t:this.ikNode_52},{t:this.ikNode_53,p:{y:198.2,x:241.4}},{t:this.ikNode_55,p:{regX:5.5,rotation:2.3,x:256.3,y:102.7}},{t:this.ikNode_54,p:{regX:13.9,rotation:4.9,x:243.1,y:113.3,regY:17.1}},{t:this.ikNode_56,p:{regX:23.7,rotation:4.2,x:255.3,y:69.4}},{t:this.ikNode_63,p:{scaleX:0.981,scaleY:0.981,rotation:9.2,x:241.4,y:198.4}},{t:this.ikNode_64,p:{rotation:26.2,x:234.5,y:282.9,regX:10.2}},{t:this.ikNode_65,p:{rotation:0,x:194.7,y:364.1}},{t:this.ikNode_57,p:{regX:9.2,rotation:-88.8,x:247.6,regY:3.9,y:109.9}},{t:this.ikNode_58,p:{regX:4,rotation:-88.7,x:299.3,y:116.9,regY:4.4}},{t:this.ikNode_59,p:{regY:16,rotation:-96.9,x:350,y:116.3}}]},1).to({state:[{t:this.ikNode_66,p:{regX:5.4,x:241.4,y:199}},{t:this.ikNode_67,p:{x:289.5,y:268.8}},{t:this.ikNode_68,p:{rotation:0.9,x:290.5,y:360.1}},{t:this.ikNode_60,p:{regY:3.5,rotation:-33.2,x:245.3,y:109.7}},{t:this.ikNode_61,p:{regX:4.9,rotation:-80.8,x:268.4,y:155.3}},{t:this.ikNode_62,p:{regY:16,rotation:-136.6,x:318.7,y:160.4}},{t:this.ikNode_52},{t:this.ikNode_53,p:{y:198.2,x:241.4}},{t:this.ikNode_55,p:{regX:5.6,rotation:8.3,x:252.6,y:102.3}},{t:this.ikNode_54,p:{regX:13.9,rotation:2.5,x:239.7,y:113.2,regY:17}},{t:this.ikNode_56,p:{regX:23.7,rotation:9.9,x:254.8,y:68.9}},{t:this.ikNode_63,p:{scaleX:0.981,scaleY:0.981,rotation:8.1,x:241.4,y:198.4}},{t:this.ikNode_64,p:{rotation:25.1,x:236.1,y:283,regX:10.1}},{t:this.ikNode_65,p:{rotation:-1,x:197.7,y:365}},{t:this.ikNode_57,p:{regX:9.1,rotation:-65.7,x:243.8,regY:3.8,y:109.9}},{t:this.ikNode_58,p:{regX:4,rotation:-98.6,x:288.8,y:136.4,regY:4.3}},{t:this.ikNode_59,p:{regY:16,rotation:-110.4,x:338.7,y:127.2}}]},1).to({state:[{t:this.ikNode_66,p:{regX:5.4,x:241.4,y:199}},{t:this.ikNode_67,p:{x:289.4,y:268.8}},{t:this.ikNode_68,p:{rotation:0.9,x:290.5,y:360.1}},{t:this.ikNode_60,p:{regY:3.6,rotation:-40.5,x:241.8,y:109.7}},{t:this.ikNode_61,p:{regX:4.9,rotation:-88.3,x:270.6,y:151.9}},{t:this.ikNode_62,p:{regY:16.1,rotation:-142.9,x:321.1,y:150.3}},{t:this.ikNode_52},{t:this.ikNode_53,p:{y:198.2,x:241.4}},{t:this.ikNode_55,p:{regX:5.5,rotation:14.3,x:248.6,y:101.9}},{t:this.ikNode_54,p:{regX:14,rotation:0.2,x:236.4,y:113.5,regY:17.1}},{t:this.ikNode_56,p:{regX:23.7,rotation:15.6,x:254.5,y:68.9}},{t:this.ikNode_63,p:{scaleX:0.981,scaleY:0.981,rotation:7.1,x:241.5,y:198.5}},{t:this.ikNode_64,p:{rotation:24,x:237.7,y:283.1,regX:10.1}},{t:this.ikNode_65,p:{rotation:-2.1,x:200.8,y:365.8}},{t:this.ikNode_57,p:{regX:9.1,rotation:-42.6,x:240.2,regY:3.8,y:109.8}},{t:this.ikNode_58,p:{regX:4,rotation:-108.5,x:271.2,y:151.9,regY:4.3}},{t:this.ikNode_59,p:{regY:15.9,rotation:-123.9,x:318.7,y:134.4}}]},1).to({state:[{t:this.ikNode_66,p:{regX:5.4,x:241.3,y:199.1}},{t:this.ikNode_67,p:{x:289.4,y:268.8}},{t:this.ikNode_68,p:{rotation:0.9,x:290.4,y:360.1}},{t:this.ikNode_60,p:{regY:3.6,rotation:-47.8,x:238.2,y:109.8}},{t:this.ikNode_61,p:{regX:4.8,rotation:-95.7,x:272.1,y:148}},{t:this.ikNode_62,p:{regY:16,rotation:-149.2,x:322,y:139.9}},{t:this.ikNode_52},{t:this.ikNode_53,p:{y:198.2,x:241.4}},{t:this.ikNode_55,p:{regX:5.6,rotation:20.4,x:244.8,y:101.7}},{t:this.ikNode_54,p:{regX:13.9,rotation:-2,x:232.8,y:113.8,regY:17.1}},{t:this.ikNode_56,p:{regX:23.8,rotation:21.3,x:254,y:69.6}},{t:this.ikNode_63,p:{scaleX:0.981,scaleY:0.981,rotation:6,x:241.5,y:198.5}},{t:this.ikNode_64,p:{rotation:22.9,x:239.3,y:283.2,regX:10.1}},{t:this.ikNode_65,p:{rotation:-3.1,x:203.9,y:366.5}},{t:this.ikNode_57,p:{regX:9.1,rotation:-19.5,x:236.6,regY:3.8,y:109.8}},{t:this.ikNode_58,p:{regX:4,rotation:-118.4,x:248.7,y:160.8,regY:4.3}},{t:this.ikNode_59,p:{regY:16,rotation:-137.4,x:292.3,y:135.2}}]},1).to({state:[]},1).wait(29));

	// ik_man
	this.ikNode_76 = new lib.hand();
	this.ikNode_76.setTransform(299.6,135.1,0.981,0.981,-137.4,0,0,5.5,15.8);

	this.ikNode_75 = new lib.arm_lower();
	this.ikNode_75.setTransform(248.2,160.6,0.98,0.985,-118.4,0,0,4,4.3);

	this.ikNode_74 = new lib.arm_upper();
	this.ikNode_74.setTransform(236,109.7,0.983,0.983,-19.5,0,0,9.2,3.7);

	this.ikNode_82 = new lib.feet();
	this.ikNode_82.setTransform(203.7,366.3,0.985,0.985,-3.1,0,0,3.8,4.7);

	this.ikNode_81 = new lib.leg_lower();
	this.ikNode_81.setTransform(239.1,283,0.986,0.986,23,0,0,10.1,2.5);

	this.ikNode_80 = new lib.leg_upper();
	this.ikNode_80.setTransform(241.2,198.3,0.981,0.981,6,0,0,5,3.2);

	this.ikNode_73 = new lib.head_1();
	this.ikNode_73.setTransform(253.5,69,0.986,0.986,21.3,0,0,23.7,24.4);

	this.ikNode_71 = new lib.torso_1();
	this.ikNode_71.setTransform(232.3,113.7,0.985,0.985,-2,0,0,13.9,17.1);

	this.ikNode_72 = new lib.neck();
	this.ikNode_72.setTransform(244.3,101.1,0.986,0.986,20.3,0,0,5.6,12.3);

	this.ikNode_70 = new lib.pelvis_1();
	this.ikNode_70.setTransform(241,198,0.988,0.988,-2,0,0,21.8,19.3);

	this.ikNode_69 = new lib.ghost();
	this.ikNode_69.setTransform(250.1,440.5,1,1,0,0,0,20.5,20.5);
	this.ikNode_69.alpha = 0;

	this.ikNode_79 = new lib.hand();
	this.ikNode_79.setTransform(322.5,144,0.979,0.979,-119.2,0,0,5.5,15.7);

	this.ikNode_78 = new lib.arm_lower();
	this.ikNode_78.setTransform(271.3,148.1,0.979,0.985,-95.7,0,0,4.9,3.8);

	this.ikNode_77 = new lib.arm_upper();
	this.ikNode_77.setTransform(238.2,109.7,0.981,0.981,-47.8,0,0,9.6,3.5);

	this.ikNode_85 = new lib.feet();
	this.ikNode_85.setTransform(290,360,0.986,0.986,0.9,0,0,1.7,5.5);

	this.ikNode_84 = new lib.leg_lower();
	this.ikNode_84.setTransform(289.2,268.8,0.987,0.987,-0.3,0,0,5.7,1.9);

	this.ikNode_83 = new lib.leg_upper();
	this.ikNode_83.setTransform(241.1,198.9,0.981,0.981,-32.1,0,0,5.2,4.3);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[]},15).to({state:[{t:this.ikNode_83,p:{rotation:-32.1,regY:4.3,x:241.1,y:198.9}},{t:this.ikNode_84,p:{regX:5.7,rotation:-0.3,x:289.2,y:268.8}},{t:this.ikNode_85,p:{rotation:0.9,x:290,y:360}},{t:this.ikNode_77,p:{regY:3.5,rotation:-47.8,x:238.2,y:109.7,regX:9.6}},{t:this.ikNode_78,p:{rotation:-95.7,x:271.3,y:148.1,regY:3.8}},{t:this.ikNode_79,p:{regX:5.5,rotation:-119.2,x:322.5,y:144}},{t:this.ikNode_69},{t:this.ikNode_70,p:{x:241,y:198}},{t:this.ikNode_72,p:{rotation:20.3,x:244.3,y:101.1,regX:5.6}},{t:this.ikNode_71,p:{rotation:-2,x:232.3,y:113.7}},{t:this.ikNode_73,p:{regX:23.7,rotation:21.3,x:253.5,y:69}},{t:this.ikNode_80,p:{regX:5,regY:3.2,x:241.2,y:198.3}},{t:this.ikNode_81,p:{regX:10.1,x:239.1,rotation:23,y:283}},{t:this.ikNode_82,p:{x:203.7,y:366.3}},{t:this.ikNode_74,p:{rotation:-19.5,x:236,y:109.7,regX:9.2,regY:3.7}},{t:this.ikNode_75,p:{rotation:-118.4,x:248.2,y:160.6,regY:4.3}},{t:this.ikNode_76,p:{regY:15.8,rotation:-137.4,x:299.6,y:135.1}}]},7).to({state:[{t:this.ikNode_83,p:{rotation:-31.1,regY:4.3,x:241.1,y:198.9}},{t:this.ikNode_84,p:{regX:5.8,rotation:0.6,x:288.2,y:269.6}},{t:this.ikNode_85,p:{rotation:1.8,x:287.4,y:360.9}},{t:this.ikNode_77,p:{regY:3.4,rotation:-62.3,x:240.3,y:109.6,regX:9.6}},{t:this.ikNode_78,p:{rotation:-92.2,x:282.4,y:138.4,regY:3.8}},{t:this.ikNode_79,p:{regX:5.6,rotation:-109.9,x:333.3,y:136}},{t:this.ikNode_69},{t:this.ikNode_70,p:{x:241.1,y:198}},{t:this.ikNode_72,p:{rotation:18.4,x:246.9,y:101.5,regX:5.6}},{t:this.ikNode_71,p:{rotation:-0.6,x:234.7,y:113.6}},{t:this.ikNode_73,p:{regX:23.8,rotation:22.2,x:255.2,y:69.1}},{t:this.ikNode_80,p:{regX:4.9,regY:3.3,x:241.1,y:198.4}},{t:this.ikNode_81,p:{regX:10,x:239.1,rotation:23,y:283}},{t:this.ikNode_82,p:{x:203.8,y:366.4}},{t:this.ikNode_74,p:{rotation:-2.8,x:238.6,y:109.7,regX:9.2,regY:3.7}},{t:this.ikNode_75,p:{rotation:-108.7,x:235.4,y:161.8,regY:4.3}},{t:this.ikNode_76,p:{regY:15.9,rotation:-127.7,x:287.9,y:144.9}}]},1).to({state:[{t:this.ikNode_83,p:{rotation:-30.1,regY:4.4,x:241.3,y:199.1}},{t:this.ikNode_84,p:{regX:5.8,rotation:1.5,x:287.1,y:270.4}},{t:this.ikNode_85,p:{rotation:2.8,x:284.6,y:361.8}},{t:this.ikNode_77,p:{regY:3.4,rotation:-76.7,x:242.7,y:109.5,regX:9.6}},{t:this.ikNode_78,p:{rotation:-88.7,x:290.7,y:126.9,regY:3.8}},{t:this.ikNode_79,p:{regX:5.7,rotation:-100.7,x:341.5,y:126.1}},{t:this.ikNode_69},{t:this.ikNode_70,p:{x:241.3,y:198.1}},{t:this.ikNode_72,p:{rotation:16.5,x:249.5,y:102,regX:5.7}},{t:this.ikNode_71,p:{rotation:0.8,x:236.9,y:113.4}},{t:this.ikNode_73,p:{regX:23.8,rotation:23.1,x:256.8,y:69.2}},{t:this.ikNode_80,p:{regX:4.9,regY:3.3,x:241.2,y:198.4}},{t:this.ikNode_81,p:{regX:10,x:239.3,rotation:23,y:283}},{t:this.ikNode_82,p:{x:203.9,y:366.4}},{t:this.ikNode_74,p:{rotation:13.9,x:240.9,y:109.6,regX:9.2,regY:3.7}},{t:this.ikNode_75,p:{rotation:-99,x:223.1,y:158.6,regY:4.4}},{t:this.ikNode_76,p:{regY:15.8,rotation:-118,x:274.9,y:150.1}}]},1).to({state:[{t:this.ikNode_83,p:{rotation:-29.2,regY:4.3,x:241.3,y:198.8}},{t:this.ikNode_84,p:{regX:5.7,rotation:2.5,x:285.8,y:271.2}},{t:this.ikNode_85,p:{rotation:3.8,x:282,y:362.5}},{t:this.ikNode_77,p:{regY:3.4,rotation:-91.2,x:244.9,y:109.7,regX:9.5}},{t:this.ikNode_78,p:{rotation:-85.2,x:295.9,y:114,regY:3.8}},{t:this.ikNode_79,p:{regX:5.6,rotation:-91.5,x:346.4,y:115.2}},{t:this.ikNode_69},{t:this.ikNode_70,p:{x:241.4,y:198.1}},{t:this.ikNode_72,p:{rotation:14.5,x:252.1,y:102.4,regX:5.7}},{t:this.ikNode_71,p:{rotation:2.2,x:239.2,y:113.3}},{t:this.ikNode_73,p:{regX:23.8,rotation:24,x:258.2,y:69.3}},{t:this.ikNode_80,p:{regX:4.9,regY:3.3,x:241.3,y:198.4}},{t:this.ikNode_81,p:{regX:10,x:239.3,rotation:22.9,y:283.1}},{t:this.ikNode_82,p:{x:204,y:366.5}},{t:this.ikNode_74,p:{rotation:30.6,x:243.3,y:109.6,regX:9.1,regY:3.7}},{t:this.ikNode_75,p:{rotation:-89.2,x:211.9,y:151.4,regY:4.3}},{t:this.ikNode_76,p:{regY:15.9,rotation:-108.3,x:262.5,y:150.4}}]},1).to({state:[{t:this.ikNode_83,p:{rotation:-30.1,regY:4.4,x:241.4,y:199}},{t:this.ikNode_84,p:{regX:5.8,rotation:1.5,x:287.2,y:270.4}},{t:this.ikNode_85,p:{rotation:2.8,x:284.7,y:361.9}},{t:this.ikNode_77,p:{regY:3.4,rotation:-76.7,x:242.7,y:109.5,regX:9.6}},{t:this.ikNode_78,p:{rotation:-88.7,x:291,y:126.7,regY:3.8}},{t:this.ikNode_79,p:{regX:5.6,rotation:-110.7,x:341.4,y:124.7}},{t:this.ikNode_69},{t:this.ikNode_70,p:{x:241.4,y:198.1}},{t:this.ikNode_72,p:{rotation:16.5,x:249.6,y:102.2,regX:5.7}},{t:this.ikNode_71,p:{rotation:0.8,x:237,y:113.4}},{t:this.ikNode_73,p:{regX:23.8,rotation:23.1,x:256.9,y:69.3}},{t:this.ikNode_80,p:{regX:4.9,regY:3.3,x:241.3,y:198.4}},{t:this.ikNode_81,p:{regX:10,x:239.3,rotation:22.9,y:283.1}},{t:this.ikNode_82,p:{x:204,y:366.5}},{t:this.ikNode_74,p:{rotation:13.9,x:241.1,y:109.6,regX:9.2,regY:3.7}},{t:this.ikNode_75,p:{rotation:-99,x:223.2,y:158.6,regY:4.4}},{t:this.ikNode_76,p:{regY:15.8,rotation:-118,x:272.6,y:149.2}}]},1).to({state:[{t:this.ikNode_83,p:{rotation:-31.1,regY:4.3,x:241.3,y:198.9}},{t:this.ikNode_84,p:{regX:5.8,rotation:0.6,x:288.4,y:269.6}},{t:this.ikNode_85,p:{rotation:1.8,x:287.7,y:361}},{t:this.ikNode_77,p:{regY:3.4,rotation:-62.3,x:240.3,y:109.6,regX:9.6}},{t:this.ikNode_78,p:{rotation:-92.2,x:282.9,y:138.2,regY:3.8}},{t:this.ikNode_79,p:{regX:5.7,rotation:-129.9,x:333,y:133.1}},{t:this.ikNode_69},{t:this.ikNode_70,p:{x:241.4,y:198.1}},{t:this.ikNode_72,p:{rotation:18.4,x:247.1,y:102,regX:5.6}},{t:this.ikNode_71,p:{rotation:-0.6,x:235,y:113.6}},{t:this.ikNode_73,p:{regX:23.8,rotation:22.2,x:255.6,y:69.4}},{t:this.ikNode_80,p:{regX:4.9,regY:3.3,x:241.3,y:198.4}},{t:this.ikNode_81,p:{regX:10,x:239.3,rotation:22.9,y:283.1}},{t:this.ikNode_82,p:{x:204,y:366.5}},{t:this.ikNode_74,p:{rotation:-2.8,x:238.9,y:109.8,regX:9.2,regY:3.7}},{t:this.ikNode_75,p:{rotation:-108.7,x:235.6,y:161.9,regY:4.3}},{t:this.ikNode_76,p:{regY:15.9,rotation:-127.7,x:283.1,y:144.1}}]},1).to({state:[{t:this.ikNode_83,p:{rotation:-32.1,regY:4.3,x:241.3,y:198.9}},{t:this.ikNode_84,p:{regX:5.7,rotation:-0.3,x:289.6,y:268.8}},{t:this.ikNode_85,p:{rotation:0.9,x:290.4,y:360.2}},{t:this.ikNode_77,p:{regY:3.5,rotation:-47.8,x:238.2,y:109.6,regX:9.6}},{t:this.ikNode_78,p:{rotation:-95.7,x:272,y:148.1,regY:3.7}},{t:this.ikNode_79,p:{regX:5.6,rotation:-149.2,x:321.8,y:140}},{t:this.ikNode_69},{t:this.ikNode_70,p:{x:241.4,y:198.1}},{t:this.ikNode_72,p:{rotation:20.3,x:244.8,y:101.9,regX:5.7}},{t:this.ikNode_71,p:{rotation:-2,x:232.8,y:113.8}},{t:this.ikNode_73,p:{regX:23.8,rotation:21.3,x:254.2,y:69.5}},{t:this.ikNode_80,p:{regX:4.9,regY:3.3,x:241.3,y:198.4}},{t:this.ikNode_81,p:{regX:10,x:239.3,rotation:22.9,y:283.1}},{t:this.ikNode_82,p:{x:204,y:366.5}},{t:this.ikNode_74,p:{rotation:-19.5,x:236.6,y:109.9,regX:9.1,regY:3.8}},{t:this.ikNode_75,p:{rotation:-118.4,x:248.6,y:160.7,regY:4.3}},{t:this.ikNode_76,p:{regY:15.9,rotation:-137.4,x:292.3,y:135.1}}]},1).to({state:[]},1).wait(22));

	// ik_man
	this.ikNode_93 = new lib.hand();
	this.ikNode_93.setTransform(300,135,0.981,0.981,-137.4,0,0,5.8,15.8);

	this.ikNode_92 = new lib.arm_lower();
	this.ikNode_92.setTransform(248.4,160.8,0.98,0.985,-118.4,0,0,3.9,4.3);

	this.ikNode_91 = new lib.arm_upper();
	this.ikNode_91.setTransform(236.5,109.9,0.983,0.983,-19.5,0,0,9.2,3.9);

	this.ikNode_99 = new lib.feet();
	this.ikNode_99.setTransform(203.8,366.5,0.985,0.985,-3.1,0,0,3.8,4.7);

	this.ikNode_98 = new lib.leg_lower();
	this.ikNode_98.setTransform(239.3,283,0.985,0.985,23,0,0,10,1.9);

	this.ikNode_97 = new lib.leg_upper();
	this.ikNode_97.setTransform(241.4,198.4,0.98,0.98,6,0,0,5,3);

	this.ikNode_90 = new lib.head_1();
	this.ikNode_90.setTransform(253.7,69.1,0.985,0.985,21.3,0,0,23.4,24.2);

	this.ikNode_88 = new lib.torso_1();
	this.ikNode_88.setTransform(232.6,113.7,0.984,0.984,-2,0,0,13.8,17.1);

	this.ikNode_89 = new lib.neck();
	this.ikNode_89.setTransform(244.5,101.6,0.985,0.985,20.3,0,0,5.6,12.2);

	this.ikNode_87 = new lib.pelvis_1();
	this.ikNode_87.setTransform(241.3,197.7,0.988,0.988,-2,0,0,21.6,18.2);

	this.ikNode_86 = new lib.ghost();
	this.ikNode_86.setTransform(250.1,440.5,1,1,0,0,0,20.5,20.5);
	this.ikNode_86.alpha = 0;

	this.ikNode_96 = new lib.hand();
	this.ikNode_96.setTransform(326.5,143.2,0.979,0.979,-104.2,0,0,5.4,16);

	this.ikNode_95 = new lib.arm_lower();
	this.ikNode_95.setTransform(271.7,148,0.979,0.985,-95.7,0,0,5,3.3);

	this.ikNode_94 = new lib.arm_upper();
	this.ikNode_94.setTransform(238.1,109.6,0.98,0.98,-47.8,0,0,9.6,3.3);

	this.ikNode_102 = new lib.feet();
	this.ikNode_102.setTransform(290,360,0.986,0.986,0.9,0,0,1.1,5.3);

	this.ikNode_101 = new lib.leg_lower();
	this.ikNode_101.setTransform(289.4,268.6,0.987,0.987,-0.3,0,0,5.5,1.9);

	this.ikNode_100 = new lib.leg_upper();
	this.ikNode_100.setTransform(241.3,198.9,0.981,0.981,-32.1,0,0,5.3,4.3);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[]},15).to({state:[]},7).to({state:[{t:this.ikNode_100,p:{rotation:-32.1,x:241.3,y:198.9,regX:5.3,regY:4.3}},{t:this.ikNode_101,p:{regY:1.9,rotation:-0.3,x:289.4,y:268.6,regX:5.5}},{t:this.ikNode_102,p:{regX:1.1,rotation:0.9,x:290,y:360,regY:5.3}},{t:this.ikNode_94,p:{rotation:-47.8,x:238.1,y:109.6,regX:9.6}},{t:this.ikNode_95,p:{rotation:-95.7,x:271.7,y:148}},{t:this.ikNode_96,p:{scaleX:0.979,scaleY:0.979,rotation:-104.2,x:326.5,y:143.2,regY:16}},{t:this.ikNode_86,p:{x:250.1}},{t:this.ikNode_87,p:{regX:21.6,regY:18.2,x:241.3,y:197.7}},{t:this.ikNode_89,p:{rotation:20.3,x:244.5,y:101.6,regX:5.6,regY:12.2}},{t:this.ikNode_88,p:{regX:13.8,rotation:-2,x:232.6,y:113.7,regY:17.1}},{t:this.ikNode_90,p:{rotation:21.3,x:253.7,y:69.1,regY:24.2}},{t:this.ikNode_97,p:{rotation:6,x:241.4,y:198.4,regX:5,regY:3}},{t:this.ikNode_98,p:{rotation:23,x:239.3,y:283,regY:1.9,regX:10}},{t:this.ikNode_99,p:{rotation:-3.1,x:203.8,y:366.5,regX:3.8,regY:4.7}},{t:this.ikNode_91,p:{rotation:-19.5,x:236.5,y:109.9,regX:9.2,regY:3.9}},{t:this.ikNode_92,p:{rotation:-118.4,x:248.4,regX:3.9,y:160.8}},{t:this.ikNode_93,p:{scaleX:0.981,scaleY:0.981,rotation:-137.4,x:300,y:135}}]},7).to({state:[{t:this.ikNode_100,p:{rotation:-23,x:245,y:198.9,regX:5.3,regY:4.3}},{t:this.ikNode_101,p:{regY:1.8,rotation:2.6,x:281.5,y:275.3,regX:5.5}},{t:this.ikNode_102,p:{regX:1,rotation:0.1,x:277.2,y:366.6,regY:5.3}},{t:this.ikNode_94,p:{rotation:-46.7,x:243.6,y:109.6,regX:9.6}},{t:this.ikNode_95,p:{rotation:-94.6,x:276.5,y:148.7}},{t:this.ikNode_96,p:{scaleX:0.978,scaleY:0.978,rotation:-108,x:328.7,y:144.9,regY:16}},{t:this.ikNode_86,p:{x:253.8}},{t:this.ikNode_87,p:{regX:21.5,regY:18.1,x:245,y:197.7}},{t:this.ikNode_89,p:{rotation:21.5,x:250.3,y:101.8,regX:5.6,regY:12.2}},{t:this.ikNode_88,p:{regX:13.9,rotation:-0.9,x:238.2,y:113.6,regY:17.1}},{t:this.ikNode_90,p:{rotation:22.4,x:260.1,y:69.5,regY:24.2}},{t:this.ikNode_97,p:{rotation:-8.7,x:245.2,y:198.5,regX:5,regY:3}},{t:this.ikNode_98,p:{rotation:28.9,x:264.7,y:280.8,regY:1.9,regX:10}},{t:this.ikNode_99,p:{rotation:10.7,x:220.7,y:360,regX:3.8,regY:4.7}},{t:this.ikNode_91,p:{rotation:-18.4,x:242.1,y:109.9,regX:9.2,regY:3.9}},{t:this.ikNode_92,p:{rotation:-117.2,x:252.9,regX:3.9,y:160.8}},{t:this.ikNode_93,p:{scaleX:0.98,scaleY:0.98,rotation:-136.3,x:302.5,y:136.2}}]},1).to({state:[{t:this.ikNode_100,p:{rotation:-13.9,x:248.7,y:199,regX:5.3,regY:4.3}},{t:this.ikNode_101,p:{regY:1.9,rotation:5.7,x:272.8,y:280.4,regX:5.6}},{t:this.ikNode_102,p:{regX:1,rotation:-0.6,x:263.6,y:371.1,regY:5.3}},{t:this.ikNode_94,p:{rotation:-45.5,x:249.1,y:109.5,regX:9.6}},{t:this.ikNode_95,p:{rotation:-93.4,x:281.3,y:149.3}},{t:this.ikNode_96,p:{scaleX:0.979,scaleY:0.979,rotation:-111.9,x:330.8,y:146.3,regY:16}},{t:this.ikNode_86,p:{x:257.5}},{t:this.ikNode_87,p:{regX:21.5,regY:18.1,x:248.7,y:197.8}},{t:this.ikNode_89,p:{rotation:22.7,x:256.1,y:102,regX:5.7,regY:12.2}},{t:this.ikNode_88,p:{regX:13.8,rotation:0.2,x:243.5,y:113.5,regY:17.1}},{t:this.ikNode_90,p:{rotation:23.6,x:266.6,y:69.9,regY:24.2}},{t:this.ikNode_97,p:{rotation:-23.4,x:248.9,y:198.5,regX:5,regY:3}},{t:this.ikNode_98,p:{rotation:34.9,x:288.8,y:273.1,regY:1.9,regX:10}},{t:this.ikNode_99,p:{rotation:24.6,x:236.7,y:347.4,regX:3.8,regY:4.7}},{t:this.ikNode_91,p:{rotation:-17.2,x:247.6,y:109.7,regX:9.2,regY:3.9}},{t:this.ikNode_92,p:{rotation:-116.1,x:257.4,regX:4,y:160.8}},{t:this.ikNode_93,p:{scaleX:0.981,scaleY:0.981,rotation:-135.1,x:304.8,y:137.3}}]},1).to({state:[{t:this.ikNode_100,p:{rotation:-4.9,x:252.4,y:198.9,regX:5.3,regY:4.3}},{t:this.ikNode_101,p:{regY:1.9,rotation:8.7,x:263.3,y:283.3,regX:5.5}},{t:this.ikNode_102,p:{regX:1.1,rotation:-1.5,x:249.5,y:373.1,regY:5.2}},{t:this.ikNode_94,p:{rotation:-44.4,x:254.7,y:109.5,regX:9.7}},{t:this.ikNode_95,p:{rotation:-92.3,x:286.1,y:150.1}},{t:this.ikNode_96,p:{scaleX:0.978,scaleY:0.978,rotation:-115.7,x:333.1,y:147.8,regY:16}},{t:this.ikNode_86,p:{x:261.2}},{t:this.ikNode_87,p:{regX:21.5,regY:18.1,x:252.4,y:197.9}},{t:this.ikNode_89,p:{rotation:23.8,x:261.8,y:102.2,regX:5.6,regY:12.2}},{t:this.ikNode_88,p:{regX:13.8,rotation:1.3,x:249,y:113.4,regY:17.1}},{t:this.ikNode_90,p:{rotation:24.8,x:272.9,y:70.3,regY:24.2}},{t:this.ikNode_97,p:{rotation:-38.1,x:252.7,y:198.6,regX:5,regY:3}},{t:this.ikNode_98,p:{rotation:40.9,x:310,y:260.5,regY:1.9,regX:10}},{t:this.ikNode_99,p:{rotation:38.5,x:250.8,y:329,regX:3.9,regY:4.7}},{t:this.ikNode_91,p:{rotation:-16.1,x:253.2,y:109.7,regX:9.2,regY:3.9}},{t:this.ikNode_92,p:{rotation:-114.9,x:262.1,regX:3.9,y:161}},{t:this.ikNode_93,p:{scaleX:0.98,scaleY:0.98,rotation:-134,x:307.1,y:138.3}}]},1).to({state:[{t:this.ikNode_100,p:{rotation:-0.7,x:250.6,y:199,regX:5.3,regY:4.3}},{t:this.ikNode_101,p:{regY:1.9,rotation:6,x:255.4,y:283.8,regX:5.6}},{t:this.ikNode_102,p:{regX:1,rotation:-2.2,x:245.7,y:374.4,regY:5.2}},{t:this.ikNode_94,p:{rotation:5.4,x:248.8,y:109.6,regX:9.6}},{t:this.ikNode_95,p:{rotation:-60.1,x:238.2,y:159.7}},{t:this.ikNode_96,p:{scaleX:0.978,scaleY:0.978,rotation:-98.5,x:281.3,y:182.5,regY:16}},{t:this.ikNode_86,p:{x:259.3}},{t:this.ikNode_87,p:{regX:21.5,regY:18.1,x:250.6,y:198}},{t:this.ikNode_89,p:{rotation:15.4,x:255.5,y:101.8,regX:5.6,regY:12.2}},{t:this.ikNode_88,p:{regX:13.8,rotation:-1.1,x:243.3,y:113.7,regY:17.1}},{t:this.ikNode_90,p:{rotation:16.3,x:262.1,y:68.7,regY:24.2}},{t:this.ikNode_97,p:{rotation:-56.6,x:250.9,y:198.5,regX:4.9,regY:3}},{t:this.ikNode_98,p:{rotation:-14.5,x:325,y:238.9,regY:1.8,regX:10}},{t:this.ikNode_99,p:{rotation:-20.9,x:347.8,y:326.8,regX:3.8,regY:4.7}},{t:this.ikNode_91,p:{rotation:8.5,x:247.5,y:109.7,regX:9.3,regY:3.9}},{t:this.ikNode_92,p:{rotation:-74.7,x:234,regX:3.9,y:160.2}},{t:this.ikNode_93,p:{scaleX:0.981,scaleY:0.981,rotation:-93.8,x:283.1,y:172.1}}]},1).to({state:[{t:this.ikNode_100,p:{rotation:3.3,x:248.7,y:199,regX:5.3,regY:4.3}},{t:this.ikNode_101,p:{regY:1.8,rotation:3.3,x:247.4,y:283.7,regX:5.6}},{t:this.ikNode_102,p:{regX:1.1,rotation:-3,x:242.2,y:375.1,regY:5.3}},{t:this.ikNode_94,p:{rotation:55.2,x:242.9,y:109.8,regX:9.6}},{t:this.ikNode_95,p:{rotation:-27.9,x:197.9,y:134.1}},{t:this.ikNode_96,p:{scaleX:0.978,scaleY:0.978,rotation:-81.3,x:224.3,y:177.2,regY:16.1}},{t:this.ikNode_86,p:{x:257.5}},{t:this.ikNode_87,p:{regX:21.5,regY:18.1,x:248.7,y:198.1}},{t:this.ikNode_89,p:{rotation:6.9,x:249.5,y:101.7,regX:5.6,regY:12.2}},{t:this.ikNode_88,p:{regX:13.8,rotation:-3.6,x:237.7,y:114.1,regY:17.1}},{t:this.ikNode_90,p:{rotation:7.8,x:250.9,y:68,regY:24.2}},{t:this.ikNode_97,p:{rotation:-75.1,x:249,y:198.4,regX:5,regY:3}},{t:this.ikNode_98,p:{rotation:-70.1,x:332.1,y:213.4,regY:1.8,regX:10}},{t:this.ikNode_99,p:{rotation:-80.4,x:417.3,y:244.1,regX:3.8,regY:4.6}},{t:this.ikNode_91,p:{rotation:33.2,x:241.5,y:109.8,regX:9.2,regY:3.9}},{t:this.ikNode_92,p:{rotation:-34.5,x:208.2,regX:3.9,y:150.3}},{t:this.ikNode_93,p:{scaleX:0.981,scaleY:0.981,rotation:-53.6,x:238.1,y:191.1}}]},1).to({state:[{t:this.ikNode_100,p:{rotation:-9.8,x:246.7,y:198.8,regX:5.2,regY:4.2}},{t:this.ikNode_101,p:{regY:1.9,rotation:3,x:265.1,y:281.9,regX:5.6}},{t:this.ikNode_102,p:{regX:1.1,rotation:-1.4,x:260.3,y:373.1,regY:5.2}},{t:this.ikNode_94,p:{rotation:29.4,x:241.8,y:109.6,regX:9.6}},{t:this.ikNode_95,p:{rotation:-44.8,x:211.8,y:151.2}},{t:this.ikNode_96,p:{scaleX:0.978,scaleY:0.978,rotation:-98.3,x:249.5,y:184.8,regY:16.1}},{t:this.ikNode_86,p:{x:255.6}},{t:this.ikNode_87,p:{regX:21.5,regY:18.1,x:246.9,y:198.1}},{t:this.ikNode_89,p:{rotation:10.3,x:248.3,y:101.7,regX:5.6,regY:12.2}},{t:this.ikNode_88,p:{regX:13.8,rotation:-3.2,x:236.5,y:114,regY:17.1}},{t:this.ikNode_90,p:{rotation:11.2,x:251.7,y:68.1,regY:24.2}},{t:this.ikNode_97,p:{rotation:-53.9,x:247.2,y:198.5,regX:5,regY:3}},{t:this.ikNode_98,p:{rotation:-27.4,x:319.3,y:242.4,regY:1.8,regX:10}},{t:this.ikNode_99,p:{rotation:-41.7,x:361.1,y:322.9,regX:3.8,regY:4.7}},{t:this.ikNode_91,p:{rotation:20,x:240.3,y:109.7,regX:9.2,regY:3.9}},{t:this.ikNode_92,p:{rotation:-55.5,x:217.1,regX:3.9,y:156.7}},{t:this.ikNode_93,p:{scaleX:0.981,scaleY:0.981,rotation:-74.5,x:259.6,y:184.1}}]},1).to({state:[{t:this.ikNode_100,p:{rotation:-23,x:245,y:199,regX:5.3,regY:4.3}},{t:this.ikNode_101,p:{regY:1.8,rotation:2.6,x:281.6,y:275.5,regX:5.5}},{t:this.ikNode_102,p:{regX:1,rotation:0.1,x:277.3,y:366.8,regY:5.3}},{t:this.ikNode_94,p:{rotation:3.6,x:240.5,y:109.7,regX:9.6}},{t:this.ikNode_95,p:{rotation:-61.8,x:231.6,y:160.2}},{t:this.ikNode_96,p:{scaleX:0.978,scaleY:0.978,rotation:-115.2,x:277.4,y:181.2,regY:16}},{t:this.ikNode_86,p:{x:253.8}},{t:this.ikNode_87,p:{regX:21.5,regY:18.1,x:245.1,y:198.1}},{t:this.ikNode_89,p:{rotation:13.6,x:247,y:101.7,regX:5.6,regY:12.2}},{t:this.ikNode_88,p:{regX:13.8,rotation:-2.8,x:235.2,y:114,regY:17.1}},{t:this.ikNode_90,p:{rotation:14.6,x:252.4,y:68.4,regY:24.2}},{t:this.ikNode_97,p:{rotation:-32.7,x:245.1,y:198.4,regX:5,regY:3}},{t:this.ikNode_98,p:{rotation:15.1,x:296.5,y:265.7,regY:1.9,regX:9.9}},{t:this.ikNode_99,p:{rotation:-3,x:272.8,y:353.1,regX:3.8,regY:4.7}},{t:this.ikNode_91,p:{rotation:6.8,x:239.2,y:109.6,regX:9.2,regY:3.9}},{t:this.ikNode_92,p:{rotation:-76.5,x:227.1,regX:3.9,y:160.7}},{t:this.ikNode_93,p:{scaleX:0.981,scaleY:0.981,rotation:-95.5,x:276.6,y:171.2}}]},1).to({state:[{t:this.ikNode_100,p:{rotation:-26.1,x:243.7,y:198.8,regX:5.3,regY:4.2}},{t:this.ikNode_101,p:{regY:1.8,rotation:1.6,x:284.4,y:273.5,regX:5.6}},{t:this.ikNode_102,p:{regX:1,rotation:0.3,x:281.8,y:364.9,regY:5.3}},{t:this.ikNode_94,p:{rotation:-13.5,x:239.7,y:109.7,regX:9.6}},{t:this.ikNode_95,p:{rotation:-73.1,x:246,y:160.5}},{t:this.ikNode_96,p:{scaleX:0.978,scaleY:0.978,rotation:-126.6,x:295.2,y:172.2,regY:16}},{t:this.ikNode_86,p:{x:252.5}},{t:this.ikNode_87,p:{regX:21.5,regY:18.1,x:243.7,y:198}},{t:this.ikNode_89,p:{rotation:15.9,x:246.3,y:101.7,regX:5.6,regY:12.1}},{t:this.ikNode_88,p:{regX:13.8,rotation:-2.6,x:234.3,y:113.8,regY:17}},{t:this.ikNode_90,p:{rotation:16.8,x:252.8,y:68.8,regY:24.3}},{t:this.ikNode_97,p:{rotation:-19.8,x:244,y:198.5,regX:5,regY:3}},{t:this.ikNode_98,p:{rotation:17.7,x:279,y:275.5,regY:1.9,regX:10}},{t:this.ikNode_99,p:{rotation:-3.1,x:251.2,y:361.7,regX:3.8,regY:4.7}},{t:this.ikNode_91,p:{rotation:-1.9,x:238.2,y:109.7,regX:9.2,regY:4}},{t:this.ikNode_92,p:{rotation:-90.4,x:234.3,regX:3.9,y:161.8}},{t:this.ikNode_93,p:{scaleX:0.981,scaleY:0.981,rotation:-109.5,x:284.7,y:160}}]},1).to({state:[{t:this.ikNode_100,p:{rotation:-29.1,x:242.6,y:198.9,regX:5.3,regY:4.3}},{t:this.ikNode_101,p:{regY:1.8,rotation:0.6,x:287,y:271.2,regX:5.6}},{t:this.ikNode_102,p:{regX:1,rotation:0.6,x:286.1,y:362.7,regY:5.3}},{t:this.ikNode_94,p:{rotation:-30.6,x:238.9,y:109.7,regX:9.6}},{t:this.ikNode_95,p:{rotation:-84.4,x:260,y:156.4}},{t:this.ikNode_96,p:{scaleX:0.978,scaleY:0.978,rotation:-137.9,x:310.5,y:158.1,regY:16}},{t:this.ikNode_86,p:{x:251.3}},{t:this.ikNode_87,p:{regX:21.5,regY:18.1,x:242.4,y:197.9}},{t:this.ikNode_89,p:{rotation:18.1,x:245.5,y:101.9,regX:5.7,regY:12.2}},{t:this.ikNode_88,p:{regX:13.8,rotation:-2.3,x:233.5,y:113.9,regY:17.1}},{t:this.ikNode_90,p:{rotation:19,x:253.3,y:69,regY:24.2}},{t:this.ikNode_97,p:{rotation:-6.8,x:242.6,y:198.4,regX:5,regY:2.9}},{t:this.ikNode_98,p:{rotation:20.3,x:259.6,y:281.3,regY:1.9,regX:10}},{t:this.ikNode_99,p:{rotation:-3.1,x:227.9,y:366.2,regX:3.8,regY:4.7}},{t:this.ikNode_91,p:{rotation:-10.7,x:237.3,y:109.6,regX:9.2,regY:3.9}},{t:this.ikNode_92,p:{rotation:-104.4,x:241.5,regX:3.9,y:161.9}},{t:this.ikNode_93,p:{scaleX:0.98,scaleY:0.98,rotation:-123.5,x:290,y:147.8}}]},1).to({state:[{t:this.ikNode_100,p:{rotation:-29.1,x:242.6,y:198.9,regX:5.3,regY:4.3}},{t:this.ikNode_101,p:{regY:1.8,rotation:0.6,x:287,y:271.2,regX:5.6}},{t:this.ikNode_102,p:{regX:1,rotation:0.6,x:286.1,y:362.7,regY:5.3}},{t:this.ikNode_94,p:{rotation:-30.6,x:238.9,y:109.7,regX:9.6}},{t:this.ikNode_95,p:{rotation:-84.4,x:260,y:156.4}},{t:this.ikNode_96,p:{scaleX:0.978,scaleY:0.978,rotation:-137.9,x:310.5,y:158.1,regY:16}},{t:this.ikNode_86,p:{x:251.3}},{t:this.ikNode_87,p:{regX:21.5,regY:18.1,x:242.4,y:197.9}},{t:this.ikNode_89,p:{rotation:18.1,x:245.5,y:101.9,regX:5.7,regY:12.2}},{t:this.ikNode_88,p:{regX:13.8,rotation:-2.3,x:233.5,y:113.9,regY:17.1}},{t:this.ikNode_90,p:{rotation:19,x:253.3,y:69,regY:24.2}},{t:this.ikNode_97,p:{rotation:-6.8,x:242.6,y:198.4,regX:5,regY:2.9}},{t:this.ikNode_98,p:{rotation:20.3,x:259.6,y:281.3,regY:1.9,regX:10}},{t:this.ikNode_99,p:{rotation:-3.1,x:227.9,y:366.2,regX:3.8,regY:4.7}},{t:this.ikNode_91,p:{rotation:-10.7,x:237.3,y:109.6,regX:9.2,regY:3.9}},{t:this.ikNode_92,p:{rotation:-104.4,x:241.5,regX:3.9,y:161.9}},{t:this.ikNode_93,p:{scaleX:0.98,scaleY:0.98,rotation:-123.5,x:290,y:147.8}}]},1).to({state:[]},1).wait(11));

	// ik_man
	this.ikNode_110 = new lib.hand();
	this.ikNode_110.setTransform(294.7,147.4,0.98,0.98,-123.6,0,0,5.4,15.8);

	this.ikNode_109 = new lib.arm_lower();
	this.ikNode_109.setTransform(240.9,161.7,0.98,0.985,-104.6,0,0,3.8,4);

	this.ikNode_108 = new lib.arm_upper();
	this.ikNode_108.setTransform(237,109.3,0.983,0.983,-10.7,0,0,8.8,3.6);

	this.ikNode_105 = new lib.torso_1();
	this.ikNode_105.setTransform(233,113.7,0.984,0.984,-2.3,0,0,13.5,17.3);

	this.ikNode_116 = new lib.feet();
	this.ikNode_116.setTransform(227.6,366,0.985,0.985,-3.1,0,0,4,4.7);

	this.ikNode_115 = new lib.leg_lower();
	this.ikNode_115.setTransform(259.2,281.1,0.985,0.985,20.3,0,0,10.1,2.3);

	this.ikNode_114 = new lib.leg_upper();
	this.ikNode_114.setTransform(242.7,198.2,0.98,0.98,-6.8,0,0,4.9,2.8);

	this.ikNode_107 = new lib.head_1();
	this.ikNode_107.setTransform(253.1,69,0.986,0.986,19,0,0,23.8,24.6);

	this.ikNode_106 = new lib.neck();
	this.ikNode_106.setTransform(245.2,101.7,0.985,0.985,18.1,0,0,6,12.1);

	this.ikNode_104 = new lib.pelvis_1();
	this.ikNode_104.setTransform(242,197.4,0.987,0.987,-2,0,0,20.9,17.9);

	this.ikNode_103 = new lib.ghost();
	this.ikNode_103.setTransform(251.3,440.5,1,1,0,0,0,20.5,20.5);
	this.ikNode_103.alpha = 0;

	this.ikNode_113 = new lib.hand();
	this.ikNode_113.setTransform(308.7,160.1,0.978,0.978,-92.9,0,0,5.5,15.6);

	this.ikNode_112 = new lib.arm_lower();
	this.ikNode_112.setTransform(259.8,156.3,0.979,0.985,-84.4,0,0,4.9,3.9);

	this.ikNode_111 = new lib.arm_upper();
	this.ikNode_111.setTransform(238.9,109.3,0.98,0.98,-30.6,0,0,9.8,3.3);

	this.ikNode_119 = new lib.feet();
	this.ikNode_119.setTransform(285.7,362.4,0.986,0.986,0.6,0,0,1.7,4.9);

	this.ikNode_118 = new lib.leg_lower();
	this.ikNode_118.setTransform(286.7,270.8,0.986,0.986,0.6,0,0,5.5,1.3);

	this.ikNode_117 = new lib.leg_upper();
	this.ikNode_117.setTransform(242.7,198.8,0.981,0.981,-29.1,0,0,5.5,4.4);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[]},15).to({state:[]},7).to({state:[]},7).to({state:[{t:this.ikNode_117,p:{rotation:-29.1,x:242.7,y:198.8}},{t:this.ikNode_118,p:{rotation:0.6,x:286.7,y:270.8,regY:1.3}},{t:this.ikNode_119,p:{regX:1.7,rotation:0.6,x:285.7,y:362.4,scaleX:0.986,scaleY:0.986}},{t:this.ikNode_111,p:{regX:9.8,rotation:-30.6,x:238.9,y:109.3}},{t:this.ikNode_112,p:{regY:3.9,rotation:-84.4,x:259.8,y:156.3,scaleX:0.979}},{t:this.ikNode_113,p:{regY:15.6,rotation:-92.9,x:308.7,y:160.1,regX:5.5}},{t:this.ikNode_103},{t:this.ikNode_104,p:{y:197.4,x:242}},{t:this.ikNode_106,p:{regY:12.1,rotation:18.1,x:245.2,y:101.7,regX:6}},{t:this.ikNode_107,p:{rotation:19,x:253.1,y:69,regY:24.6,regX:23.8}},{t:this.ikNode_114,p:{rotation:-6.8,x:242.7,y:198.2}},{t:this.ikNode_115,p:{regY:2.3,rotation:20.3,x:259.2,y:281.1,regX:10.1}},{t:this.ikNode_116,p:{rotation:-3.1,x:227.6,y:366}},{t:this.ikNode_105,p:{rotation:-2.3,x:233,y:113.7,regY:17.3,regX:13.5}},{t:this.ikNode_108,p:{rotation:-10.7,x:237,y:109.3,regY:3.6}},{t:this.ikNode_109,p:{regX:3.8,rotation:-104.6,x:240.9,y:161.7,regY:4}},{t:this.ikNode_110,p:{rotation:-123.6,x:294.7,y:147.4}}]},11).to({state:[{t:this.ikNode_117,p:{rotation:-30.4,x:242.7,y:198.8}},{t:this.ikNode_118,p:{rotation:5.3,x:288.4,y:269.9,regY:1.3}},{t:this.ikNode_119,p:{regX:1.8,rotation:4.9,x:280,y:361,scaleX:0.986,scaleY:0.986}},{t:this.ikNode_111,p:{regX:9.7,rotation:-17.9,x:241.7,y:109.2}},{t:this.ikNode_112,p:{regY:4,rotation:-86.4,x:251.9,y:159.7,scaleX:0.979}},{t:this.ikNode_113,p:{regY:15.7,rotation:-99.9,x:301.6,y:161.1,regX:5.5}},{t:this.ikNode_103},{t:this.ikNode_104,p:{y:197.5,x:242}},{t:this.ikNode_106,p:{regY:12.2,rotation:10.1,x:248.4,y:101.9,regX:6}},{t:this.ikNode_107,p:{rotation:14.3,x:251.7,y:68.4,regY:24.6,regX:23.8}},{t:this.ikNode_114,p:{rotation:-4.3,x:242.6,y:198.3}},{t:this.ikNode_115,p:{regY:2.4,rotation:16.2,x:255.6,y:282,regX:10.1}},{t:this.ikNode_116,p:{rotation:-3.3,x:230.3,y:368.8}},{t:this.ikNode_105,p:{rotation:-0.4,x:235.9,y:113.6,regY:17.3,regX:13.5}},{t:this.ikNode_108,p:{rotation:-4,x:239.9,y:109.3,regY:3.6}},{t:this.ikNode_109,p:{regX:3.7,rotation:-97.8,x:237.7,y:161.9,regY:4}},{t:this.ikNode_110,p:{rotation:-126.8,x:291.2,y:153.8}}]},1).to({state:[{t:this.ikNode_117,p:{rotation:-31.7,x:242.6,y:198.9}},{t:this.ikNode_118,p:{rotation:10,x:290,y:268.9,regY:1.3}},{t:this.ikNode_119,p:{regX:1.8,rotation:9.2,x:274.3,y:359,scaleX:0.986,scaleY:0.986}},{t:this.ikNode_111,p:{regX:9.7,rotation:-5.2,x:244.6,y:109.2}},{t:this.ikNode_112,p:{regY:3.9,rotation:-88.4,x:243.2,y:160.7,scaleX:0.979}},{t:this.ikNode_113,p:{regY:15.7,rotation:-106.9,x:293.6,y:159.6,regX:5.5}},{t:this.ikNode_103},{t:this.ikNode_104,p:{y:197.6,x:242}},{t:this.ikNode_106,p:{regY:12.1,rotation:2.2,x:251.5,y:102.1,regX:6}},{t:this.ikNode_107,p:{rotation:9.6,x:250.2,y:68.6,regY:24.6,regX:23.8}},{t:this.ikNode_114,p:{rotation:-1.8,x:242.6,y:198.4}},{t:this.ikNode_115,p:{regY:2.3,rotation:12.1,x:252.3,y:282.4,regX:10.2}},{t:this.ikNode_116,p:{rotation:-3.6,x:233.1,y:371}},{t:this.ikNode_105,p:{rotation:1.3,x:238.7,y:113.4,regY:17.2,regX:13.5}},{t:this.ikNode_108,p:{rotation:2.4,x:242.9,y:109.4,regY:3.6}},{t:this.ikNode_109,p:{regX:3.8,rotation:-90.4,x:234.9,y:161.2,regY:4}},{t:this.ikNode_110,p:{rotation:-129.4,x:287.3,y:159.9}}]},1).to({state:[{t:this.ikNode_117,p:{rotation:-32.9,x:242.5,y:199}},{t:this.ikNode_118,p:{rotation:14.8,x:291.5,y:268.1,regY:1.4}},{t:this.ikNode_119,p:{regX:1.8,rotation:13.5,x:268.6,y:356.3,scaleX:0.986,scaleY:0.986}},{t:this.ikNode_111,p:{regX:9.8,rotation:7.5,x:247.6,y:109.3}},{t:this.ikNode_112,p:{regY:3.9,rotation:-90.4,x:234.8,y:159.3,scaleX:0.979}},{t:this.ikNode_113,p:{regY:15.7,rotation:-113.9,x:285.7,y:155.7,regX:5.4}},{t:this.ikNode_103},{t:this.ikNode_104,p:{y:197.7,x:242}},{t:this.ikNode_106,p:{regY:12.1,rotation:-5.7,x:254.8,y:102.3,regX:6}},{t:this.ikNode_107,p:{rotation:4.9,x:248.7,y:69.5,regY:24.6,regX:23.8}},{t:this.ikNode_114,p:{rotation:0.6,x:242.5,y:198.3}},{t:this.ikNode_115,p:{regY:2.4,rotation:7.9,x:248.5,y:282.9,regX:10.1}},{t:this.ikNode_116,p:{rotation:-3.8,x:235.9,y:372.5}},{t:this.ikNode_105,p:{rotation:3.2,x:241.6,y:113.5,regY:17.3,regX:13.5}},{t:this.ikNode_108,p:{rotation:8.3,x:245.8,y:109.5,regY:3.6}},{t:this.ikNode_109,p:{regX:3.8,rotation:-82.4,x:232.7,y:160.3,regY:4}},{t:this.ikNode_110,p:{rotation:-131.4,x:283,y:165.6}}]},1).to({state:[{t:this.ikNode_117,p:{rotation:-58.2,x:242.6,y:198.8}},{t:this.ikNode_118,p:{rotation:-32.7,x:316.4,y:240.5,regY:1.3}},{t:this.ikNode_119,p:{regX:1.8,rotation:-33.9,x:366.1,y:317,scaleX:0.985,scaleY:0.985}},{t:this.ikNode_111,p:{regX:9.7,rotation:22.3,x:238.4,y:109.2}},{t:this.ikNode_112,p:{regY:3.9,rotation:-74.8,x:213.4,y:154.2,scaleX:0.979}},{t:this.ikNode_113,p:{regY:15.7,rotation:-113.2,x:263.2,y:164.4,regX:5.5}},{t:this.ikNode_103},{t:this.ikNode_104,p:{y:197.8,x:242.2}},{t:this.ikNode_106,p:{regY:12.1,rotation:0,x:244.8,y:101.6,regX:5.9}},{t:this.ikNode_107,p:{rotation:-2.7,x:242.3,y:68.1,regY:24.5,regX:23.8}},{t:this.ikNode_114,p:{rotation:0.8,x:242.5,y:198.4}},{t:this.ikNode_115,p:{regY:2.3,rotation:5.3,x:248.1,y:282.8,regX:10.1}},{t:this.ikNode_116,p:{rotation:-1.9,x:239.9,y:373.1}},{t:this.ikNode_105,p:{rotation:-2.6,x:233,y:114,regY:17.3,regX:13.5}},{t:this.ikNode_108,p:{rotation:15.5,x:236.8,y:109.4,regY:3.5}},{t:this.ikNode_109,p:{regX:3.7,rotation:-68.9,x:217.3,y:158.4,regY:4.1}},{t:this.ikNode_110,p:{rotation:-117.9,x:265,y:175.2}}]},1).to({state:[{t:this.ikNode_117,p:{rotation:-83.4,x:242.7,y:198.8}},{t:this.ikNode_118,p:{rotation:-80.2,x:327.2,y:205,regY:1.3}},{t:this.ikNode_119,p:{regX:1.8,rotation:-81.4,x:417.3,y:220.1,scaleX:0.986,scaleY:0.986}},{t:this.ikNode_111,p:{regX:9.8,rotation:37.2,x:229.6,y:110.2}},{t:this.ikNode_112,p:{regY:3.9,rotation:-59.2,x:193.7,y:147.3,scaleX:0.979}},{t:this.ikNode_113,p:{regY:15.7,rotation:-112.6,x:238.9,y:170.5,regX:5.4}},{t:this.ikNode_103},{t:this.ikNode_104,p:{y:197.8,x:242.3}},{t:this.ikNode_106,p:{regY:12.1,rotation:5.6,x:235,y:101.8,regX:6}},{t:this.ikNode_107,p:{rotation:-10.3,x:235.8,y:68.4,regY:24.6,regX:23.7}},{t:this.ikNode_114,p:{rotation:0.9,x:242.5,y:198.5}},{t:this.ikNode_115,p:{regY:2.3,rotation:2.6,x:247.8,y:282.7,regX:10.1}},{t:this.ikNode_116,p:{rotation:0,x:243.8,y:373.4}},{t:this.ikNode_105,p:{rotation:-8.5,x:224.6,y:115.3,regY:17.3,regX:13.6}},{t:this.ikNode_108,p:{rotation:20.8,x:227.7,y:110.7,regY:3.6}},{t:this.ikNode_109,p:{regX:3.7,rotation:-56.3,x:203.7,y:157.3,regY:4}},{t:this.ikNode_110,p:{rotation:-105.3,x:246.6,y:184.1}}]},1).to({state:[{t:this.ikNode_117,p:{rotation:-58.2,x:242.6,y:198.8}},{t:this.ikNode_118,p:{rotation:-32.7,x:316.5,y:240.6,regY:1.3}},{t:this.ikNode_119,p:{regX:1.8,rotation:-33.9,x:366.1,y:317,scaleX:0.985,scaleY:0.985}},{t:this.ikNode_111,p:{regX:9.7,rotation:22.3,x:238.4,y:109.3}},{t:this.ikNode_112,p:{regY:3.9,rotation:-74.8,x:213.5,y:154.3,scaleX:0.978}},{t:this.ikNode_113,p:{regY:15.7,rotation:-113.2,x:263.3,y:167.6,regX:5.5}},{t:this.ikNode_103},{t:this.ikNode_104,p:{y:197.8,x:242.1}},{t:this.ikNode_106,p:{regY:12.1,rotation:0,x:244.8,y:101.5,regX:5.9}},{t:this.ikNode_107,p:{rotation:0,x:242.4,y:68.1,regY:24.6,regX:23.7}},{t:this.ikNode_114,p:{rotation:0.8,x:242.5,y:198.5}},{t:this.ikNode_115,p:{regY:2.3,rotation:5.3,x:248,y:282.8,regX:10.1}},{t:this.ikNode_116,p:{rotation:-1.9,x:239.9,y:373.1}},{t:this.ikNode_105,p:{rotation:-2.6,x:233,y:113.9,regY:17.3,regX:13.5}},{t:this.ikNode_108,p:{rotation:15.5,x:236.7,y:109.5,regY:3.5}},{t:this.ikNode_109,p:{regX:3.7,rotation:-68.9,x:217.2,y:158.2,regY:4}},{t:this.ikNode_110,p:{rotation:-117.9,x:264.9,y:175.2}}]},1).to({state:[{t:this.ikNode_117,p:{rotation:-32.9,x:242.6,y:198.8}},{t:this.ikNode_118,p:{rotation:14.8,x:291.5,y:268.2,regY:1.4}},{t:this.ikNode_119,p:{regX:1.8,rotation:13.5,x:268.5,y:356.4,scaleX:0.986,scaleY:0.986}},{t:this.ikNode_111,p:{regX:9.8,rotation:7.5,x:247.6,y:109.4}},{t:this.ikNode_112,p:{regY:3.9,rotation:-90.4,x:235,y:159.3,scaleX:0.979}},{t:this.ikNode_113,p:{regY:15.7,rotation:-113.9,x:287.3,y:161.9,regX:5.4}},{t:this.ikNode_103},{t:this.ikNode_104,p:{y:197.7,x:242}},{t:this.ikNode_106,p:{regY:12.1,rotation:-5.7,x:254.9,y:102.3,regX:6}},{t:this.ikNode_107,p:{rotation:10.3,x:249.2,y:69.1,regY:24.6,regX:23.8}},{t:this.ikNode_114,p:{rotation:0.6,x:242.6,y:198.4}},{t:this.ikNode_115,p:{regY:2.4,rotation:7.9,x:248.2,y:282.9,regX:10.1}},{t:this.ikNode_116,p:{rotation:-3.8,x:236,y:372.5}},{t:this.ikNode_105,p:{rotation:3.2,x:241.6,y:113.4,regY:17.3,regX:13.5}},{t:this.ikNode_108,p:{rotation:8.2,x:245.8,y:109.6,regY:3.6}},{t:this.ikNode_109,p:{regX:3.7,rotation:-82.4,x:232.6,y:160.3,regY:4}},{t:this.ikNode_110,p:{rotation:-131.5,x:283,y:165.6}}]},1).to({state:[{t:this.ikNode_117,p:{rotation:-31.7,x:242.6,y:198.8}},{t:this.ikNode_118,p:{rotation:10,x:290,y:269.1,regY:1.3}},{t:this.ikNode_119,p:{regX:1.8,rotation:9.2,x:274.5,y:359.1,scaleX:0.986,scaleY:0.986}},{t:this.ikNode_111,p:{regX:9.7,rotation:-5.2,x:244.5,y:109.4}},{t:this.ikNode_112,p:{regY:3.9,rotation:-88.4,x:243.4,y:160.8,scaleX:0.978}},{t:this.ikNode_113,p:{regY:15.7,rotation:-111.9,x:295.2,y:164.1,regX:5.5}},{t:this.ikNode_103},{t:this.ikNode_104,p:{y:197.8,x:242.1}},{t:this.ikNode_106,p:{regY:12.1,rotation:2.2,x:251.6,y:102,regX:6}},{t:this.ikNode_107,p:{rotation:13.2,x:250.6,y:68.4,regY:24.6,regX:23.8}},{t:this.ikNode_114,p:{rotation:-1.8,x:242.6,y:198.4}},{t:this.ikNode_115,p:{regY:2.3,rotation:12.1,x:252.2,y:282.3,regX:10.2}},{t:this.ikNode_116,p:{rotation:-3.6,x:233.2,y:371.1}},{t:this.ikNode_105,p:{rotation:1.3,x:238.9,y:113.3,regY:17.2,regX:13.5}},{t:this.ikNode_108,p:{rotation:2.4,x:242.8,y:109.5,regY:3.6}},{t:this.ikNode_109,p:{regX:3.8,rotation:-89.8,x:234.9,y:161.2,regY:4}},{t:this.ikNode_110,p:{rotation:-128.8,x:285.6,y:160}}]},1).to({state:[{t:this.ikNode_117,p:{rotation:-30.4,x:242.6,y:198.8}},{t:this.ikNode_118,p:{rotation:5.3,x:288.5,y:270.1,regY:1.3}},{t:this.ikNode_119,p:{regX:1.8,rotation:4.9,x:280.3,y:361.1,scaleX:0.986,scaleY:0.986}},{t:this.ikNode_111,p:{regX:9.7,rotation:-17.9,x:241.5,y:109.4}},{t:this.ikNode_112,p:{regY:4,rotation:-86.4,x:252.1,y:159.8,scaleX:0.979}},{t:this.ikNode_113,p:{regY:15.7,rotation:-109.9,x:303.2,y:163.9,regX:5.5}},{t:this.ikNode_103},{t:this.ikNode_104,p:{y:197.8,x:242.2}},{t:this.ikNode_106,p:{regY:12.2,rotation:10.1,x:248.5,y:101.9,regX:6}},{t:this.ikNode_107,p:{rotation:16.1,x:252,y:68.3,regY:24.6,regX:23.8}},{t:this.ikNode_114,p:{rotation:-4.3,x:242.7,y:198.3}},{t:this.ikNode_115,p:{regY:2.4,rotation:16.2,x:255.7,y:281.9,regX:10.1}},{t:this.ikNode_116,p:{rotation:-3.3,x:230.5,y:368.9}},{t:this.ikNode_105,p:{rotation:-0.4,x:236.1,y:113.7,regY:17.3,regX:13.5}},{t:this.ikNode_108,p:{rotation:-3.9,x:240,y:109.5,regY:3.6}},{t:this.ikNode_109,p:{regX:3.7,rotation:-97.3,x:237.9,y:161.9,regY:4}},{t:this.ikNode_110,p:{rotation:-126.3,x:287.8,y:153.9}}]},1).to({state:[{t:this.ikNode_117,p:{rotation:-29.1,x:242.6,y:198.9}},{t:this.ikNode_118,p:{rotation:0.6,x:286.9,y:271.1,regY:1.3}},{t:this.ikNode_119,p:{regX:1.7,rotation:0.6,x:286.2,y:362.6,scaleX:0.986,scaleY:0.986}},{t:this.ikNode_111,p:{regX:9.7,rotation:-30.6,x:238.5,y:109.6}},{t:this.ikNode_112,p:{regY:3.9,rotation:-84.4,x:260,y:156.3,scaleX:0.979}},{t:this.ikNode_113,p:{regY:15.6,rotation:-107.9,x:310.6,y:161.4,regX:5.4}},{t:this.ikNode_103},{t:this.ikNode_104,p:{y:197.8,x:242.3}},{t:this.ikNode_106,p:{regY:12.1,rotation:18.1,x:245.3,y:101.6,regX:6}},{t:this.ikNode_107,p:{rotation:19,x:253.4,y:69,regY:24.6,regX:23.8}},{t:this.ikNode_114,p:{rotation:-6.8,x:242.7,y:198.1}},{t:this.ikNode_115,p:{regY:2.3,rotation:20.4,x:259.4,y:281,regX:10.1}},{t:this.ikNode_116,p:{rotation:-3.1,x:227.8,y:366.2}},{t:this.ikNode_105,p:{rotation:-2.3,x:233.3,y:113.8,regY:17.3,regX:13.5}},{t:this.ikNode_108,p:{rotation:-10.6,x:237.1,y:109.6,regY:3.6}},{t:this.ikNode_109,p:{regX:3.7,rotation:-104.4,x:241.2,y:162.1,regY:4}},{t:this.ikNode_110,p:{rotation:-123.4,x:289.8,y:147.8}}]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(192.5,27.1,152.1,433.9);


// symbols:
(lib.arm = function() {
	this.initialize(img.arm);
}).prototype = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,25,60);


(lib.fist_l = function() {
	this.initialize(img.fist_l);
}).prototype = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,24,32);


(lib.fist_r = function() {
	this.initialize(img.fist_r);
}).prototype = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,24,32);


(lib.foot = function() {
	this.initialize(img.foot);
}).prototype = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,45,20);


(lib.forearm = function() {
	this.initialize(img.forearm);
}).prototype = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,20,60);


(lib.head = function() {
	this.initialize(img.head);
}).prototype = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,64,64);


(lib.leg = function() {
	this.initialize(img.leg);
}).prototype = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,30,100);


(lib.pelvis = function() {
	this.initialize(img.pelvis);
}).prototype = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,32,32);


(lib.shin = function() {
	this.initialize(img.shin);
}).prototype = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,16,100);


(lib.torso = function() {
	this.initialize(img.torso);
}).prototype = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,50,100);


(lib.torso_1 = function() {
	this.initialize();

	// Layer 1
	this.instance = new lib.torso();
	this.instance.setTransform(0.6,0.7);

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0.6,0.7,50,100);


(lib.pelvis_1 = function() {
	this.initialize();

	// Layer 1
	this.instance_1 = new lib.pelvis();
	this.instance_1.setTransform(11.5,0);

	this.addChild(this.instance_1);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(11.5,0,32,32);


(lib.neck = function() {
	this.initialize();

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#000000").s().p("AhAhTIgEClQAAAXATATQAUAQAbAAQAbABAUgQQAUgRAAgXIAEimQAAgYgUgRQgSgRgdgBQgaAAgUARQgUAQAAAYIAAAA").cp();
	this.shape.setTransform(6.9,13.7);

	this.addChild(this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,-0.4,13.9,28.2);


(lib.leg_upper = function() {
	this.initialize();

	// Layer 1
	this.instance_2 = new lib.leg();
	this.instance_2.setTransform(-4.8,0);

	this.addChild(this.instance_2);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-4.8,0,30,100);


(lib.leg_lower = function() {
	this.initialize();

	// Layer 1
	this.instance_3 = new lib.shin();

	this.addChild(this.instance_3);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,16,100);


(lib.head_1 = function() {
	this.initialize();

	// Layer 1
	this.instance_4 = new lib.head();
	this.instance_4.setTransform(0,-12);

	this.addChild(this.instance_4);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,-12,64,64);


(lib.hand = function() {
	this.initialize();

	// Layer 1
	this.instance_5 = new lib.fist_l();
	this.instance_5.setTransform(23.8,8.2,1.001,1,0,105,103.1);

	this.addChild(this.instance_5);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-12.5,0,36.4,31.7);


(lib.ghost = function() {
	this.initialize();

	// Layer 1
	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#000000").s().p("AiQiQQg8A8AABUQAABVA8A8QA8A8BUAAQBVAAA8g8QA8g8AAhVQAAhUg8g8Qg8g8hVAAQhUAAg8A8IAAAA").cp();
	this.shape_1.setTransform(20.5,20.5);

	this.addChild(this.shape_1);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,41,41);


(lib.feet = function() {
	this.initialize();

	// Layer 1
	this.instance_6 = new lib.foot();
	this.instance_6.setTransform(-6.3,-1.1,1,0.805);

	this.addChild(this.instance_6);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-6.3,-1.1,45,16.1);


(lib.arm_upper = function() {
	this.initialize();

	// Layer 1
	this.instance_7 = new lib.arm();
	this.instance_7.setTransform(-5.3,0.6);

	this.addChild(this.instance_7);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-5.3,0.6,25,60);


(lib.arm_lower = function() {
	this.initialize();

	// Layer 1
	this.instance_8 = new lib.forearm();
	this.instance_8.setTransform(-8,-0.6,1,1.09);

	this.addChild(this.instance_8);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-8,-0.6,20,65.4);

})(lib = lib||{}, images = images||{}, createjs = createjs||{});
var lib, images, createjs;