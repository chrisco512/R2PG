(function (lib, img, cjs) {

var p; // shortcut to reference prototypes

var cstImg;

// stage content:
// stage content:
(lib.robot_frame = function(mode,startPosition,loop, cstImages) {
	this.initialize(mode,startPosition,loop,{idle:0,punch_r:15,punch_l:22,kick_r:29,kick_l:40,block_upper:51,block_lower:55,kick_flip:62,takehit_upper:72,takehit_lower:75,headbutt:82,falldown:89},true);
	
	if(which === 0) {
		cstImg = cstImages || {
			arm: img["arm1"],
			fist_l: img["claw"],
			fist_r: img["claw"],
			foot: img["foot"],
			forearm: img["forearm1"],
			head: img["head1"],
			leg: img["leg1a"],
			pelvis: img["pelvis"],
			shin: img["shin1"],
			torso: img["torso1"]
		};
		which++;
	} else {
		cstImg = cstImages || {
			arm: img["arm1a"],
			fist_l: img["claw1a"],
			fist_r: img["claw1a"],
			foot: img["foot"],
			forearm: img["forearm2"],
			head: img["head1a"],
			leg: img["leg2a"],
			pelvis: img["pelvis"],
			shin: img["shin1a"],
			torso: img["torso1a"]
		};
	}

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
	this.frame_54 = function() {
		this.gotoAndPlay("idle");
	}
	this.frame_61 = function() {
		this.gotoAndPlay("idle");
	}
	this.frame_71 = function() {
		this.gotoAndPlay("idle");
	}
	this.frame_74 = function() {
		this.gotoAndPlay("idle");
	}
	this.frame_81 = function() {
		this.gotoAndPlay("idle");
	}
	this.frame_88 = function() {
		this.gotoAndPlay("idle");
	}
	this.frame_107 = function() {
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).wait(14).call(this.frame_14).wait(7).call(this.frame_21).wait(7).call(this.frame_28).wait(11).call(this.frame_39).wait(11).call(this.frame_50).wait(4).call(this.frame_54).wait(7).call(this.frame_61).wait(10).call(this.frame_71).wait(3).call(this.frame_74).wait(7).call(this.frame_81).wait(7).call(this.frame_88).wait(19).call(this.frame_107));

	// ik_man copy
	this.ikNode_25 = new lib.hand();
	this.ikNode_25.setTransform(292,143.4,0.981,0.981,-137.4,0,0,5.5,16.1);

	this.ikNode_23 = new lib.arm_upper();
	this.ikNode_23.setTransform(235.9,109.7,0.983,0.983,-19.5,0,0,9.1,3.8);

	this.ikNode_24 = new lib.arm_lower();
	this.ikNode_24.setTransform(248.4,160.4,0.98,0.985,-118.4,0,0,4.2,4.3);

	this.ikNode_31 = new lib.feet();
	this.ikNode_31.setTransform(203.6,366.3,0.985,0.985,-3.1,0,0,3.5,4.7);

	this.ikNode_30 = new lib.leg_lower();
	this.ikNode_30.setTransform(239.2,283.1,0.985,0.985,23,0,0,10.1,2.4);

	this.ikNode_29 = new lib.leg_upper();
	this.ikNode_29.setTransform(241.2,198.2,0.98,0.98,6,0,0,5,3);

	this.ikNode_22 = new lib.head_1();
	this.ikNode_22.setTransform(253.5,69,0.986,0.986,21.3,0,0,23.5,24.4);

	this.ikNode_20 = new lib.torso_1();
	this.ikNode_20.setTransform(232.4,113.6,0.984,0.984,-2,0,0,13.8,17.1);

	this.ikNode_21 = new lib.neck();
	this.ikNode_21.setTransform(244.4,101.3,0.985,0.985,20.4,0,0,5.6,12.2);

	this.ikNode_19 = new lib.pelvis_1();
	this.ikNode_19.setTransform(241,198,0.988,0.988,-2,0,0,21.5,19.5);

	this.ikNode_18 = new lib.ghost();
	this.ikNode_18.setTransform(250.1,440.5,1,1,0,0,0,20.5,20.5);
	this.ikNode_18.alpha = 0;

	this.ikNode_28 = new lib.hand();
	this.ikNode_28.setTransform(312.7,151.4,0.979,0.979,-119.2,0,0,3.9,3.6);

	this.ikNode_27 = new lib.arm_lower();
	this.ikNode_27.setTransform(271.6,148,0.979,0.985,-95.7,0,0,4.8,3.8);

	this.ikNode_26 = new lib.arm_upper();
	this.ikNode_26.setTransform(238,109.6,0.98,0.98,-47.8,0,0,9.7,3.4);

	this.ikNode_34 = new lib.feet();
	this.ikNode_34.setTransform(290,359.9,0.986,0.986,0.9,0,0,1.7,5.3);

	this.ikNode_33 = new lib.leg_lower();
	this.ikNode_33.setTransform(289,268.7,0.987,0.987,-0.3,0,0,5.5,1.9);

	this.ikNode_32 = new lib.leg_upper();
	this.ikNode_32.setTransform(241.2,198.7,0.981,0.981,-32.1,0,0,5.4,4);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.ikNode_32,p:{rotation:-32.1,x:241.2,y:198.7,regY:4}},{t:this.ikNode_33,p:{regX:5.5,rotation:-0.3,x:289,y:268.7}},{t:this.ikNode_34,p:{regX:1.7,rotation:0.9,x:290,y:359.9}},{t:this.ikNode_26,p:{regX:9.7,rotation:-47.8,x:238,y:109.6,regY:3.4}},{t:this.ikNode_27,p:{regY:3.8,rotation:-95.7,x:271.6,y:148}},{t:this.ikNode_28,p:{regX:3.9,regY:3.6,rotation:-119.2,x:312.7,y:151.4}},{t:this.ikNode_18,p:{x:250.1,y:440.5}},{t:this.ikNode_19,p:{regX:21.5,x:241,y:198}},{t:this.ikNode_21,p:{rotation:20.4,x:244.4,y:101.3,regX:5.6}},{t:this.ikNode_20,p:{regX:13.8,rotation:-2,x:232.4,y:113.6}},{t:this.ikNode_22,p:{rotation:21.3,x:253.5,y:69}},{t:this.ikNode_29,p:{rotation:6,y:198.2,x:241.2,regY:3}},{t:this.ikNode_30,p:{rotation:23,x:239.2,y:283.1,regX:10.1,regY:2.4}},{t:this.ikNode_31,p:{regY:4.7,rotation:-3.1,x:203.6,y:366.3}},{t:this.ikNode_24,p:{regY:4.3,rotation:-118.4,x:248.4,y:160.4}},{t:this.ikNode_23,p:{rotation:-19.5,x:235.9,y:109.7}},{t:this.ikNode_25,p:{rotation:-137.4,x:292,y:143.4}}]}).to({state:[{t:this.ikNode_32,p:{rotation:-32.2,x:241,y:200.2,regY:4}},{t:this.ikNode_33,p:{regX:5.6,rotation:1.9,x:289.3,y:270.2}},{t:this.ikNode_34,p:{regX:1.8,rotation:0.2,x:286.4,y:361.4}},{t:this.ikNode_26,p:{regX:9.8,rotation:-45.9,x:238.5,y:110.9,regY:3.4}},{t:this.ikNode_27,p:{regY:3.7,rotation:-98.6,x:270.6,y:150.6}},{t:this.ikNode_28,p:{regX:4,regY:3.8,rotation:-121.5,x:312.9,y:151.3}},{t:this.ikNode_18,p:{x:249.9,y:442}},{t:this.ikNode_19,p:{regX:21.4,x:240.8,y:199.5}},{t:this.ikNode_21,p:{rotation:20.7,x:244.9,y:103,regX:5.6}},{t:this.ikNode_20,p:{regX:13.9,rotation:-1.7,x:232.9,y:115.1}},{t:this.ikNode_22,p:{rotation:21.6,x:254.2,y:70.6}},{t:this.ikNode_29,p:{rotation:5,y:199.8,x:241.2,regY:3}},{t:this.ikNode_30,p:{rotation:25.3,x:240.5,y:284.6,regX:10.1,regY:2.4}},{t:this.ikNode_31,p:{regY:4.8,rotation:-0.8,x:201.5,y:366.5}},{t:this.ikNode_24,p:{regY:4.2,rotation:-115.8,x:250.4,y:161.5}},{t:this.ikNode_23,p:{rotation:-21.5,x:236.3,y:111.3}},{t:this.ikNode_25,p:{rotation:-135.3,x:295.7,y:145}}]},1).to({state:[{t:this.ikNode_32,p:{rotation:-32.4,x:240.8,y:201.8,regY:4}},{t:this.ikNode_33,p:{regX:5.6,rotation:4.3,x:289.4,y:271.7}},{t:this.ikNode_34,p:{regX:1.8,rotation:-0.3,x:282.6,y:362.6}},{t:this.ikNode_26,p:{regX:9.8,rotation:-44,x:238.8,y:112.4,regY:3.4}},{t:this.ikNode_27,p:{regY:3.7,rotation:-101.4,x:269.6,y:153.2}},{t:this.ikNode_28,p:{regX:4,regY:3.7,rotation:-123.8,x:312.7,y:151.4}},{t:this.ikNode_18,p:{x:249.8,y:443.5}},{t:this.ikNode_19,p:{regX:21.4,x:240.7,y:201.1}},{t:this.ikNode_21,p:{rotation:21,x:245.4,y:104.7,regX:5.6}},{t:this.ikNode_20,p:{regX:13.9,rotation:-1.4,x:233.4,y:116.7}},{t:this.ikNode_22,p:{rotation:21.9,x:254.8,y:72.2}},{t:this.ikNode_29,p:{rotation:4,y:201.3,x:241.1,regY:3}},{t:this.ikNode_30,p:{rotation:27.7,x:241.8,y:286.2,regX:10.1,regY:2.4}},{t:this.ikNode_31,p:{regY:4.8,rotation:1.5,x:199.4,y:366.4}},{t:this.ikNode_24,p:{regY:4.3,rotation:-113.3,x:252.7,y:162.4}},{t:this.ikNode_23,p:{rotation:-23.6,x:236.8,y:112.8}},{t:this.ikNode_25,p:{rotation:-133.1,x:299.3,y:146.8}}]},1).to({state:[{t:this.ikNode_32,p:{rotation:-32.5,x:240.6,y:203.3,regY:3.9}},{t:this.ikNode_33,p:{regX:5.7,rotation:6.7,x:289.5,y:273.1}},{t:this.ikNode_34,p:{regX:1.8,rotation:-0.9,x:278.8,y:363.7}},{t:this.ikNode_26,p:{regX:9.8,rotation:-42.1,x:239.2,y:114,regY:3.4}},{t:this.ikNode_27,p:{regY:3.7,rotation:-104.2,x:268.8,y:155.8}},{t:this.ikNode_28,p:{regX:4,regY:3.6,rotation:-126.1,x:312.3,y:151.3}},{t:this.ikNode_18,p:{x:249.7,y:445.1}},{t:this.ikNode_19,p:{regX:21.4,x:240.6,y:202.6}},{t:this.ikNode_21,p:{rotation:21.3,x:245.9,y:106.3,regX:5.7}},{t:this.ikNode_20,p:{regX:13.9,rotation:-1.1,x:233.8,y:118.2}},{t:this.ikNode_22,p:{rotation:22.2,x:255.5,y:73.7}},{t:this.ikNode_29,p:{rotation:3.1,y:202.8,x:241,regY:3}},{t:this.ikNode_30,p:{rotation:30,x:243,y:287.8,regX:10,regY:2.4}},{t:this.ikNode_31,p:{regY:4.8,rotation:3.8,x:197.5,y:366.1}},{t:this.ikNode_24,p:{regY:4.3,rotation:-110.7,x:254.7,y:163.3}},{t:this.ikNode_23,p:{rotation:-25.6,x:237.1,y:114.3}},{t:this.ikNode_25,p:{rotation:-131,x:302.9,y:148.6}}]},1).to({state:[{t:this.ikNode_32,p:{rotation:-32.6,x:240.4,y:205,regY:3.9}},{t:this.ikNode_33,p:{regX:5.6,rotation:9.1,x:289.5,y:274.5}},{t:this.ikNode_34,p:{regX:1.8,rotation:-1.5,x:275.1,y:364.6}},{t:this.ikNode_26,p:{regX:9.8,rotation:-40.2,x:239.6,y:115.5,regY:3.4}},{t:this.ikNode_27,p:{regY:3.8,rotation:-107.1,x:267.8,y:158.3}},{t:this.ikNode_28,p:{regX:4,regY:3.8,rotation:-128.4,x:311.9,y:151.1}},{t:this.ikNode_18,p:{x:249.5,y:446.6}},{t:this.ikNode_19,p:{regX:21.4,x:240.6,y:204.1}},{t:this.ikNode_21,p:{rotation:21.6,x:246.3,y:107.9,regX:5.6}},{t:this.ikNode_20,p:{regX:13.8,rotation:-0.7,x:234.1,y:119.7}},{t:this.ikNode_22,p:{rotation:22.6,x:256.1,y:75.4}},{t:this.ikNode_29,p:{rotation:2.1,y:204.5,x:241,regY:3.1}},{t:this.ikNode_30,p:{rotation:32.4,x:244.4,y:289.2,regX:10.1,regY:2.4}},{t:this.ikNode_31,p:{regY:4.7,rotation:6.2,x:195.7,y:365.5}},{t:this.ikNode_24,p:{regY:4.3,rotation:-108.1,x:256.7,y:164.2}},{t:this.ikNode_23,p:{rotation:-27.6,x:237.6,y:115.8}},{t:this.ikNode_25,p:{rotation:-128.8,x:306.6,y:150.4}}]},1).to({state:[{t:this.ikNode_32,p:{rotation:-32.7,x:240.3,y:206.6,regY:3.9}},{t:this.ikNode_33,p:{regX:5.6,rotation:11.5,x:289.7,y:275.9}},{t:this.ikNode_34,p:{regX:1.7,rotation:-2.1,x:271.2,y:365.4}},{t:this.ikNode_26,p:{regX:9.8,rotation:-38.3,x:239.9,y:117,regY:3.4}},{t:this.ikNode_27,p:{regY:3.6,rotation:-109.9,x:266.6,y:160.8}},{t:this.ikNode_28,p:{regX:4,regY:3.8,rotation:-130.7,x:311.2,y:150.8}},{t:this.ikNode_18,p:{x:249.4,y:448.1}},{t:this.ikNode_19,p:{regX:21.4,x:240.5,y:205.7}},{t:this.ikNode_21,p:{rotation:22,x:246.7,y:109.5,regX:5.5}},{t:this.ikNode_20,p:{regX:13.8,rotation:-0.4,x:234.6,y:121.2}},{t:this.ikNode_22,p:{rotation:22.9,x:256.8,y:77}},{t:this.ikNode_29,p:{rotation:1.1,y:206,x:240.9,regY:3}},{t:this.ikNode_30,p:{rotation:34.7,x:245.8,y:290.8,regX:10.1,regY:2.4}},{t:this.ikNode_31,p:{regY:4.8,rotation:8.5,x:193.8,y:365.1}},{t:this.ikNode_24,p:{regY:4.3,rotation:-105.6,x:258.9,y:165.1}},{t:this.ikNode_23,p:{rotation:-29.6,x:238,y:117.3}},{t:this.ikNode_25,p:{rotation:-126.7,x:310.1,y:152.3}}]},1).to({state:[{t:this.ikNode_32,p:{rotation:-32.9,x:240.2,y:208.2,regY:3.9}},{t:this.ikNode_33,p:{regX:5.5,rotation:13.8,x:289.6,y:277.2}},{t:this.ikNode_34,p:{regX:1.7,rotation:-2.7,x:267.5,y:366}},{t:this.ikNode_26,p:{regX:9.8,rotation:-36.4,x:240.2,y:118.5,regY:3.4}},{t:this.ikNode_27,p:{regY:3.7,rotation:-112.8,x:265.6,y:163.2}},{t:this.ikNode_28,p:{regX:3.9,regY:3.6,rotation:-133,x:310.1,y:150.6}},{t:this.ikNode_18,p:{x:249.3,y:449.6}},{t:this.ikNode_19,p:{regX:21.4,x:240.4,y:207.2}},{t:this.ikNode_21,p:{rotation:22.3,x:247.2,y:111.2,regX:5.6}},{t:this.ikNode_20,p:{regX:13.8,rotation:-0.1,x:235,y:122.7}},{t:this.ikNode_22,p:{rotation:23.2,x:257.3,y:78.7}},{t:this.ikNode_29,p:{rotation:0.2,y:207.4,x:240.8,regY:3}},{t:this.ikNode_30,p:{rotation:37.1,x:247.1,y:292.3,regX:10.1,regY:2.4}},{t:this.ikNode_31,p:{regY:4.8,rotation:10.9,x:192.1,y:364.4}},{t:this.ikNode_24,p:{regY:4.3,rotation:-103,x:260.8,y:165.9}},{t:this.ikNode_23,p:{rotation:-31.6,x:238.4,y:118.9}},{t:this.ikNode_25,p:{rotation:-124.5,x:313.7,y:154.3}}]},1).to({state:[{t:this.ikNode_32,p:{rotation:-33,x:239.9,y:209.8,regY:3.9}},{t:this.ikNode_33,p:{regX:5.6,rotation:16.2,x:289.8,y:278.7}},{t:this.ikNode_34,p:{regX:1.7,rotation:-3.3,x:263.8,y:366.4}},{t:this.ikNode_26,p:{regX:9.8,rotation:-34.5,x:240.5,y:119.9,regY:3.3}},{t:this.ikNode_27,p:{regY:3.8,rotation:-115.6,x:264.6,y:165.6}},{t:this.ikNode_28,p:{regX:4,regY:3.7,rotation:-135.3,x:309,y:150}},{t:this.ikNode_18,p:{x:249.2,y:451.2}},{t:this.ikNode_19,p:{regX:21.4,x:240.3,y:208.7}},{t:this.ikNode_21,p:{rotation:22.6,x:247.7,y:112.8,regX:5.6}},{t:this.ikNode_20,p:{regX:13.8,rotation:0.1,x:235.4,y:124.2}},{t:this.ikNode_22,p:{rotation:23.5,x:258,y:80.2}},{t:this.ikNode_29,p:{rotation:-0.7,y:209.1,x:240.7,regY:3.1}},{t:this.ikNode_30,p:{rotation:39.4,x:248.3,y:293.8,regX:10.1,regY:2.5}},{t:this.ikNode_31,p:{regY:4.8,rotation:13.2,x:190.5,y:363.5}},{t:this.ikNode_24,p:{regY:4.3,rotation:-100.5,x:262.8,y:166.5}},{t:this.ikNode_23,p:{rotation:-33.6,x:238.9,y:120.5}},{t:this.ikNode_25,p:{rotation:-122.4,x:317.1,y:156.3}}]},1).to({state:[{t:this.ikNode_32,p:{rotation:-32.9,x:240.2,y:208.2,regY:3.9}},{t:this.ikNode_33,p:{regX:5.5,rotation:13.8,x:289.6,y:277.2}},{t:this.ikNode_34,p:{regX:1.7,rotation:-2.7,x:267.5,y:366}},{t:this.ikNode_26,p:{regX:9.8,rotation:-36.4,x:240.2,y:118.5,regY:3.4}},{t:this.ikNode_27,p:{regY:3.7,rotation:-112.8,x:265.7,y:163.2}},{t:this.ikNode_28,p:{regX:3.9,regY:3.6,rotation:-133,x:310.6,y:150.2}},{t:this.ikNode_18,p:{x:249.3,y:449.6}},{t:this.ikNode_19,p:{regX:21.4,x:240.4,y:207.2}},{t:this.ikNode_21,p:{rotation:22.3,x:247.2,y:111.3,regX:5.6}},{t:this.ikNode_20,p:{regX:13.8,rotation:-0.1,x:235.1,y:122.7}},{t:this.ikNode_22,p:{rotation:23.2,x:257.4,y:78.8}},{t:this.ikNode_29,p:{rotation:0.2,y:207.5,x:240.9,regY:3}},{t:this.ikNode_30,p:{rotation:37.1,x:247.1,y:292.3,regX:10.1,regY:2.4}},{t:this.ikNode_31,p:{regY:4.8,rotation:10.9,x:192.2,y:364.4}},{t:this.ikNode_24,p:{regY:4.3,rotation:-103,x:260.9,y:166}},{t:this.ikNode_23,p:{rotation:-31.6,x:238.5,y:118.9}},{t:this.ikNode_25,p:{rotation:-124.5,x:313.8,y:154.5}}]},1).to({state:[{t:this.ikNode_32,p:{rotation:-32.7,x:240.3,y:206.6,regY:3.9}},{t:this.ikNode_33,p:{regX:5.6,rotation:11.5,x:289.8,y:275.9}},{t:this.ikNode_34,p:{regX:1.7,rotation:-2.1,x:271.3,y:365.5}},{t:this.ikNode_26,p:{regX:9.8,rotation:-38.3,x:239.9,y:117,regY:3.4}},{t:this.ikNode_27,p:{regY:3.6,rotation:-109.9,x:266.7,y:160.9}},{t:this.ikNode_28,p:{regX:4,regY:3.8,rotation:-130.7,x:312.1,y:150}},{t:this.ikNode_18,p:{x:249.4,y:448.1}},{t:this.ikNode_19,p:{regX:21.4,x:240.6,y:205.7}},{t:this.ikNode_21,p:{rotation:22,x:246.7,y:109.7,regX:5.5}},{t:this.ikNode_20,p:{regX:13.8,rotation:-0.4,x:234.7,y:121.2}},{t:this.ikNode_22,p:{rotation:22.9,x:256.9,y:77.1}},{t:this.ikNode_29,p:{rotation:1.1,y:206,x:241,regY:3}},{t:this.ikNode_30,p:{rotation:34.7,x:245.8,y:290.8,regX:10.1,regY:2.4}},{t:this.ikNode_31,p:{regY:4.8,rotation:8.5,x:193.9,y:365.2}},{t:this.ikNode_24,p:{regY:4.3,rotation:-105.6,x:258.9,y:165.2}},{t:this.ikNode_23,p:{rotation:-29.6,x:238.2,y:117.4}},{t:this.ikNode_25,p:{rotation:-126.7,x:310.2,y:152.9}}]},1).to({state:[{t:this.ikNode_32,p:{rotation:-32.6,x:240.5,y:205,regY:3.9}},{t:this.ikNode_33,p:{regX:5.6,rotation:9.1,x:289.6,y:274.5}},{t:this.ikNode_34,p:{regX:1.8,rotation:-1.5,x:275.1,y:364.8}},{t:this.ikNode_26,p:{regX:9.8,rotation:-40.2,x:239.6,y:115.5,regY:3.4}},{t:this.ikNode_27,p:{regY:3.8,rotation:-107.1,x:268,y:158.3}},{t:this.ikNode_28,p:{regX:4,regY:3.8,rotation:-128.4,x:313.4,y:150.1}},{t:this.ikNode_18,p:{x:249.5,y:446.6}},{t:this.ikNode_19,p:{regX:21.4,x:240.7,y:204.2}},{t:this.ikNode_21,p:{rotation:21.6,x:246.3,y:108.2,regX:5.6}},{t:this.ikNode_20,p:{regX:13.8,rotation:-0.7,x:234.3,y:119.7}},{t:this.ikNode_22,p:{rotation:22.6,x:256.2,y:75.6}},{t:this.ikNode_29,p:{rotation:2.1,y:204.6,x:241.1,regY:3.1}},{t:this.ikNode_30,p:{rotation:32.4,x:244.5,y:289.3,regX:10.1,regY:2.4}},{t:this.ikNode_31,p:{regY:4.7,rotation:6.2,x:195.7,y:365.6}},{t:this.ikNode_24,p:{regY:4.3,rotation:-108.1,x:256.8,y:164.3}},{t:this.ikNode_23,p:{rotation:-27.6,x:237.8,y:115.9}},{t:this.ikNode_25,p:{rotation:-128.8,x:306.8,y:151.2}}]},1).to({state:[{t:this.ikNode_32,p:{rotation:-32.5,x:240.6,y:203.4,regY:3.9}},{t:this.ikNode_33,p:{regX:5.7,rotation:6.7,x:289.7,y:273.1}},{t:this.ikNode_34,p:{regX:1.8,rotation:-0.9,x:278.9,y:363.8}},{t:this.ikNode_26,p:{regX:9.8,rotation:-42.1,x:239.2,y:113.9,regY:3.4}},{t:this.ikNode_27,p:{regY:3.7,rotation:-104.2,x:269,y:155.9}},{t:this.ikNode_28,p:{regX:4,regY:3.6,rotation:-126.1,x:314.4,y:150}},{t:this.ikNode_18,p:{x:249.7,y:445.1}},{t:this.ikNode_19,p:{regX:21.4,x:240.8,y:202.6}},{t:this.ikNode_21,p:{rotation:21.3,x:246,y:106.7,regX:5.7}},{t:this.ikNode_20,p:{regX:13.9,rotation:-1.1,x:233.9,y:118.3}},{t:this.ikNode_22,p:{rotation:22.2,x:255.6,y:74}},{t:this.ikNode_29,p:{rotation:3.1,y:203,x:241.2,regY:3}},{t:this.ikNode_30,p:{rotation:30,x:243.1,y:287.8,regX:10,regY:2.4}},{t:this.ikNode_31,p:{regY:4.8,rotation:3.8,x:197.6,y:366.2}},{t:this.ikNode_24,p:{regY:4.3,rotation:-110.7,x:254.7,y:163.5}},{t:this.ikNode_23,p:{rotation:-25.6,x:237.4,y:114.3}},{t:this.ikNode_25,p:{rotation:-131,x:303.2,y:149.7}}]},1).to({state:[{t:this.ikNode_32,p:{rotation:-32.4,x:240.8,y:201.8,regY:4}},{t:this.ikNode_33,p:{regX:5.6,rotation:4.3,x:289.6,y:271.7}},{t:this.ikNode_34,p:{regX:1.8,rotation:-0.3,x:282.8,y:362.8}},{t:this.ikNode_26,p:{regX:9.8,rotation:-44,x:238.8,y:112.4,regY:3.4}},{t:this.ikNode_27,p:{regY:3.7,rotation:-101.4,x:269.9,y:153.3}},{t:this.ikNode_28,p:{regX:4,regY:3.7,rotation:-123.8,x:315.3,y:149.9}},{t:this.ikNode_18,p:{x:249.8,y:443.5}},{t:this.ikNode_19,p:{regX:21.4,x:240.9,y:201.1}},{t:this.ikNode_21,p:{rotation:21,x:245.5,y:105.1,regX:5.6}},{t:this.ikNode_20,p:{regX:13.9,rotation:-1.4,x:233.6,y:116.8}},{t:this.ikNode_22,p:{rotation:21.9,x:255,y:72.5}},{t:this.ikNode_29,p:{rotation:4,y:201.5,x:241.4,regY:3}},{t:this.ikNode_30,p:{rotation:27.7,x:241.9,y:286.2,regX:10.1,regY:2.4}},{t:this.ikNode_31,p:{regY:4.8,rotation:1.5,x:199.7,y:366.6}},{t:this.ikNode_24,p:{regY:4.3,rotation:-113.3,x:252.7,y:162.6}},{t:this.ikNode_23,p:{rotation:-23.6,x:237.1,y:112.8}},{t:this.ikNode_25,p:{rotation:-133.1,x:299.6,y:148.1}}]},1).to({state:[{t:this.ikNode_32,p:{rotation:-32.2,x:241,y:200.3,regY:4}},{t:this.ikNode_33,p:{regX:5.6,rotation:1.9,x:289.5,y:270.2}},{t:this.ikNode_34,p:{regX:1.8,rotation:0.3,x:286.7,y:361.7}},{t:this.ikNode_26,p:{regX:9.8,rotation:-45.9,x:238.5,y:110.9,regY:3.4}},{t:this.ikNode_27,p:{regY:3.7,rotation:-98.6,x:270.9,y:150.7}},{t:this.ikNode_28,p:{regX:4,regY:3.8,rotation:-121.5,x:316.2,y:149.6}},{t:this.ikNode_18,p:{x:249.9,y:442}},{t:this.ikNode_19,p:{regX:21.4,x:241.1,y:199.6}},{t:this.ikNode_21,p:{rotation:20.7,x:245,y:103.5,regX:5.6}},{t:this.ikNode_20,p:{regX:13.9,rotation:-1.7,x:233.2,y:115.2}},{t:this.ikNode_22,p:{rotation:21.6,x:254.4,y:71}},{t:this.ikNode_29,p:{rotation:5,y:200,x:241.5,regY:3}},{t:this.ikNode_30,p:{rotation:25.3,x:240.6,y:284.6,regX:10.1,regY:2.4}},{t:this.ikNode_31,p:{regY:4.8,rotation:-0.8,x:201.8,y:366.7}},{t:this.ikNode_24,p:{regY:4.2,rotation:-115.8,x:250.5,y:161.7}},{t:this.ikNode_23,p:{rotation:-21.5,x:236.8,y:111.4}},{t:this.ikNode_25,p:{rotation:-135.3,x:296.1,y:146.6}}]},1).to({state:[{t:this.ikNode_32,p:{rotation:-32.1,x:241.2,y:198.7,regY:3.9}},{t:this.ikNode_33,p:{regX:5.5,rotation:-0.3,x:289.4,y:268.8}},{t:this.ikNode_34,p:{regX:1.7,rotation:0.9,x:290.3,y:360.3}},{t:this.ikNode_26,p:{regX:9.8,rotation:-47.8,x:238.2,y:109.3,regY:3.4}},{t:this.ikNode_27,p:{regY:3.8,rotation:-95.7,x:272,y:148.1}},{t:this.ikNode_28,p:{regX:3.9,regY:3.6,rotation:-119.2,x:316.8,y:149.5}},{t:this.ikNode_18,p:{x:250.1,y:440.5}},{t:this.ikNode_19,p:{regX:21.4,x:241.2,y:198.1}},{t:this.ikNode_21,p:{rotation:20.4,x:244.5,y:101.9,regX:5.5}},{t:this.ikNode_20,p:{regX:13.8,rotation:-2,x:232.7,y:113.9}},{t:this.ikNode_22,p:{rotation:21.3,x:253.8,y:69.4}},{t:this.ikNode_29,p:{rotation:6,y:198.4,x:241.5,regY:3}},{t:this.ikNode_30,p:{rotation:23,x:239.3,y:283.1,regX:10.1,regY:2.4}},{t:this.ikNode_31,p:{regY:4.7,rotation:-3.1,x:203.9,y:366.5}},{t:this.ikNode_24,p:{regY:4.3,rotation:-118.4,x:248.4,y:160.7}},{t:this.ikNode_23,p:{rotation:-19.5,x:236.3,y:109.8}},{t:this.ikNode_25,p:{rotation:-137.4,x:292.5,y:145.1}}]},1).to({state:[]},1).wait(93));

	// ik_man
	this.ikNode_59 = new lib.hand();
	this.ikNode_59.setTransform(299.7,134.9,0.981,0.981,-137.4,0,0,5.5,16.1);

	this.ikNode_58 = new lib.arm_lower();
	this.ikNode_58.setTransform(248.6,160.6,0.98,0.985,0,-118.4,-118.4,4,4.4);

	this.ikNode_57 = new lib.arm_upper();
	this.ikNode_57.setTransform(236.4,109.8,0.983,0.983,-19.5,0,0,9,3.9);

	this.ikNode_65 = new lib.feet();
	this.ikNode_65.setTransform(203.7,366.3,0.985,0.985,-3.1,0,0,3.8,4.7);

	this.ikNode_64 = new lib.leg_lower();
	this.ikNode_64.setTransform(239.4,283,0.985,0.985,23,0,0,10.1,2.6);

	this.ikNode_63 = new lib.leg_upper();
	this.ikNode_63.setTransform(241.4,198.4,0.98,0.98,6,0,0,5.2,3.1);

	this.ikNode_56 = new lib.head_1();
	this.ikNode_56.setTransform(253.7,69.1,0.986,0.986,21.3,0,0,23.6,24.4);

	this.ikNode_54 = new lib.torso_1();
	this.ikNode_54.setTransform(232.5,113.6,0.985,0.985,-2,0,0,13.9,17.1);

	this.ikNode_55 = new lib.neck();
	this.ikNode_55.setTransform(244.4,101.5,0.986,0.986,20.3,0,0,5.5,12.1);

	this.ikNode_53 = new lib.pelvis_1();
	this.ikNode_53.setTransform(241.3,197.9,0.988,0.988,-2,0,0,21.8,19.3);

	this.ikNode_52 = new lib.ghost();
	this.ikNode_52.setTransform(250.1,440.5,1,1,0,0,0,20.5,20.5);
	this.ikNode_52.alpha = 0;

	this.ikNode_62 = new lib.hand();
	this.ikNode_62.setTransform(322.4,144,0.979,0.979,-119.2,0,0,5.7,15.9);

	this.ikNode_61 = new lib.arm_lower();
	this.ikNode_61.setTransform(271.6,148.1,0.979,0.985,-95.7,0,0,4.7,3.6);

	this.ikNode_60 = new lib.arm_upper();
	this.ikNode_60.setTransform(238.1,109.5,0.981,0.981,-47.8,0,0,9.7,3.6);

	this.ikNode_68 = new lib.feet();
	this.ikNode_68.setTransform(290,360,0.986,0.986,0.8,0,0,1.6,5.4);

	this.ikNode_67 = new lib.leg_lower();
	this.ikNode_67.setTransform(289.1,268.7,0.987,0.987,-0.3,0,0,5.7,1.9);

	this.ikNode_66 = new lib.leg_upper();
	this.ikNode_66.setTransform(241,198.8,0.981,0.981,-32.1,0,0,5.4,4.2);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.ikNode_66,p:{regX:5.4,rotation:-32.1,x:241,y:198.8}},{t:this.ikNode_67,p:{rotation:-0.3,x:289.1,y:268.7,regX:5.7}},{t:this.ikNode_68,p:{regY:5.4,rotation:0.8,x:290,y:360}},{t:this.ikNode_60,p:{regX:9.7,rotation:-47.8,x:238.1,y:109.5,regY:3.6}},{t:this.ikNode_61,p:{regX:4.7,rotation:-95.7,x:271.6,y:148.1}},{t:this.ikNode_62,p:{regX:5.7,rotation:-119.2,x:322.4,y:144,regY:15.9}},{t:this.ikNode_52,p:{x:250.1,y:440.5}},{t:this.ikNode_53,p:{x:241.3,y:197.9}},{t:this.ikNode_55,p:{regX:5.5,rotation:20.3,x:244.4,y:101.5}},{t:this.ikNode_54,p:{scaleX:0.985,scaleY:0.985,rotation:-2,x:232.5,y:113.6}},{t:this.ikNode_56,p:{regY:24.4,rotation:21.3,x:253.7,y:69.1}},{t:this.ikNode_63,p:{rotation:6,x:241.4,y:198.4}},{t:this.ikNode_64,p:{rotation:23,x:239.4,y:283,regX:10.1}},{t:this.ikNode_65,p:{rotation:-3.1,x:203.7,y:366.3,regY:4.7}},{t:this.ikNode_57,p:{regY:3.9,rotation:-19.5,x:236.4,y:109.8}},{t:this.ikNode_58,p:{rotation:0,skewX:-118.4,skewY:-118.4,x:248.6,y:160.6}},{t:this.ikNode_59,p:{rotation:-137.4,x:299.7,y:134.9,regY:16.1}}]},15).to({state:[{t:this.ikNode_66,p:{regX:5.5,rotation:-32.8,x:245.7,y:198.1}},{t:this.ikNode_67,p:{rotation:0.3,x:294.5,y:267.5,regX:5.7}},{t:this.ikNode_68,p:{regY:5.5,rotation:1.6,x:294.3,y:359}},{t:this.ikNode_60,p:{regX:9.6,rotation:-32.2,x:258.8,y:109.8,regY:3.6}},{t:this.ikNode_61,p:{regX:4.8,rotation:-79.9,x:280.9,y:155.8}},{t:this.ikNode_62,p:{regX:5.8,rotation:-114.6,x:330.9,y:164.4,regY:15.9}},{t:this.ikNode_52,p:{x:254.5,y:439.8}},{t:this.ikNode_53,p:{x:245.7,y:197.3}},{t:this.ikNode_55,p:{regX:5.6,rotation:22.7,x:266.6,y:103.2}},{t:this.ikNode_54,p:{scaleX:0.984,scaleY:0.984,rotation:8.5,x:252.6,y:112.8}},{t:this.ikNode_56,p:{regY:24.5,rotation:23.9,x:277.2,y:71.3}},{t:this.ikNode_63,p:{rotation:10.8,x:245.8,y:197.7}},{t:this.ikNode_64,p:{rotation:22.6,x:236.8,y:281.7,regX:10.1}},{t:this.ikNode_65,p:{rotation:-1.1,x:201.7,y:365.4,regY:4.7}},{t:this.ikNode_57,p:{regY:4,rotation:-48.7,x:257.2,y:109.7}},{t:this.ikNode_58,p:{rotation:-114.6,skewX:0,skewY:0,x:292.5,y:148.2}},{t:this.ikNode_59,p:{rotation:-126.6,x:342.8,y:125.8,regY:16.1}}]},1).to({state:[{t:this.ikNode_66,p:{regX:5.4,rotation:-33.4,x:250.2,y:197.5}},{t:this.ikNode_67,p:{rotation:1,x:299.8,y:266.2,regX:5.6}},{t:this.ikNode_68,p:{regY:5.4,rotation:2.3,x:298.5,y:357.6}},{t:this.ikNode_60,p:{regX:9.7,rotation:-16.5,x:279.7,y:113.2,regY:3.7}},{t:this.ikNode_61,p:{regX:4.7,rotation:-64.1,x:288.5,y:163.6}},{t:this.ikNode_62,p:{regX:5.8,rotation:-110,x:334.8,y:184,regY:15.9}},{t:this.ikNode_52,p:{x:258.9,y:439.1}},{t:this.ikNode_53,p:{x:250.2,y:196.7}},{t:this.ikNode_55,p:{regX:5.6,rotation:25,x:288.6,y:108.2}},{t:this.ikNode_54,p:{scaleX:0.985,scaleY:0.985,rotation:19.2,x:273,y:115}},{t:this.ikNode_56,p:{regY:24.4,rotation:26.6,x:300.5,y:76.6}},{t:this.ikNode_63,p:{rotation:15.6,x:250.3,y:197.1}},{t:this.ikNode_64,p:{rotation:22.3,x:234,y:280,regX:10}},{t:this.ikNode_65,p:{rotation:0.7,x:199.6,y:363.9,regY:4.7}},{t:this.ikNode_57,p:{regY:3.9,rotation:-77.8,x:278.1,y:112.7}},{t:this.ikNode_58,p:{rotation:-110.8,skewX:0,skewY:0,x:327.6,y:129.2}},{t:this.ikNode_59,p:{rotation:-115.7,x:376.8,y:110,regY:16}}]},1).to({state:[{t:this.ikNode_66,p:{regX:5.4,rotation:-34.1,x:254.7,y:196.8}},{t:this.ikNode_67,p:{rotation:1.7,x:305.3,y:264.9,regX:5.7}},{t:this.ikNode_68,p:{regY:5.5,rotation:3,x:302.8,y:356.4}},{t:this.ikNode_60,p:{regX:9.6,rotation:-0.9,x:298.8,y:119.3,regY:3.7}},{t:this.ikNode_61,p:{regX:4.7,rotation:-48.3,x:294,y:170.3}},{t:this.ikNode_62,p:{regX:5.8,rotation:-105.4,x:333.6,y:201.5,regY:15.9}},{t:this.ikNode_52,p:{x:263.3,y:438.4}},{t:this.ikNode_53,p:{x:254.6,y:196.1}},{t:this.ikNode_55,p:{regX:5.6,rotation:27.3,x:308.6,y:116.1}},{t:this.ikNode_54,p:{scaleX:0.984,scaleY:0.984,rotation:29.9,x:292,y:119.9}},{t:this.ikNode_56,p:{regY:24.4,rotation:29.2,x:321.8,y:85.1}},{t:this.ikNode_63,p:{rotation:20.5,x:254.7,y:196.3}},{t:this.ikNode_64,p:{rotation:22,x:231.6,y:277.7,regX:10.1}},{t:this.ikNode_65,p:{rotation:2.7,x:197.6,y:361.8,regY:4.8}},{t:this.ikNode_57,p:{regY:3.9,rotation:-107,x:297.5,y:118.5}},{t:this.ikNode_58,p:{rotation:-107,skewX:0,skewY:0,x:348.8,y:108.9}},{t:this.ikNode_59,p:{rotation:-104.8,x:396.7,y:92.6,regY:16}}]},1).to({state:[{t:this.ikNode_66,p:{regX:5.4,rotation:-33.4,x:250.3,y:197.5}},{t:this.ikNode_67,p:{rotation:1,x:299.9,y:266.3,regX:5.6}},{t:this.ikNode_68,p:{regY:5.4,rotation:2.3,x:298.7,y:357.6}},{t:this.ikNode_60,p:{regX:9.6,rotation:-16.5,x:279.5,y:113.1,regY:3.6}},{t:this.ikNode_61,p:{regX:4.7,rotation:-64.1,x:288.7,y:163.7}},{t:this.ikNode_62,p:{regX:5.8,rotation:-120,x:335.3,y:182.8,regY:15.9}},{t:this.ikNode_52,p:{x:258.9,y:439.1}},{t:this.ikNode_53,p:{x:250.2,y:196.8}},{t:this.ikNode_55,p:{regX:5.6,rotation:25,x:288.7,y:108.3}},{t:this.ikNode_54,p:{scaleX:0.985,scaleY:0.985,rotation:19.2,x:273.1,y:115}},{t:this.ikNode_56,p:{regY:24.4,rotation:26.6,x:300.5,y:76.7}},{t:this.ikNode_63,p:{rotation:15.6,x:250.3,y:197.1}},{t:this.ikNode_64,p:{rotation:22.3,x:234,y:280,regX:10}},{t:this.ikNode_65,p:{rotation:0.7,x:199.7,y:363.9,regY:4.7}},{t:this.ikNode_57,p:{regY:3.9,rotation:-77.8,x:278.2,y:112.7}},{t:this.ikNode_58,p:{rotation:-110.8,skewX:0,skewY:0,x:327.7,y:129.3}},{t:this.ikNode_59,p:{rotation:-115.7,x:374.4,y:109.8,regY:16}}]},1).to({state:[{t:this.ikNode_66,p:{regX:5.5,rotation:-32.8,x:245.9,y:198.2}},{t:this.ikNode_67,p:{rotation:0.3,x:294.8,y:267.6,regX:5.7}},{t:this.ikNode_68,p:{regY:5.5,rotation:1.6,x:294.6,y:359}},{t:this.ikNode_60,p:{regX:9.6,rotation:-32.2,x:258.7,y:109.8,regY:3.6}},{t:this.ikNode_61,p:{regX:4.8,rotation:-79.9,x:281.2,y:155.9}},{t:this.ikNode_62,p:{regX:5.8,rotation:-134.6,x:331.3,y:161.7,regY:15.9}},{t:this.ikNode_52,p:{x:254.5,y:439.8}},{t:this.ikNode_53,p:{x:245.8,y:197.5}},{t:this.ikNode_55,p:{regX:5.6,rotation:22.7,x:266.8,y:103.4}},{t:this.ikNode_54,p:{scaleX:0.984,scaleY:0.984,rotation:8.5,x:252.8,y:112.9}},{t:this.ikNode_56,p:{regY:24.5,rotation:23.9,x:277.4,y:71.5}},{t:this.ikNode_63,p:{rotation:10.8,x:246,y:197.8}},{t:this.ikNode_64,p:{rotation:22.6,x:236.7,y:281.9,regX:10.1}},{t:this.ikNode_65,p:{rotation:-1.1,x:201.9,y:365.5,regY:4.7}},{t:this.ikNode_57,p:{regY:4,rotation:-48.7,x:257.4,y:109.7}},{t:this.ikNode_58,p:{rotation:-114.6,skewX:0,skewY:0,x:292.6,y:148.4}},{t:this.ikNode_59,p:{rotation:-126.6,x:337.9,y:125.8,regY:16.1}}]},1).to({state:[{t:this.ikNode_66,p:{regX:5.4,rotation:-32.1,x:241.4,y:198.9}},{t:this.ikNode_67,p:{rotation:-0.3,x:289.4,y:268.8,regX:5.7}},{t:this.ikNode_68,p:{regY:5.4,rotation:0.9,x:290.3,y:360.1}},{t:this.ikNode_60,p:{regX:9.7,rotation:-47.8,x:238.1,y:109.6,regY:3.6}},{t:this.ikNode_61,p:{regX:4.7,rotation:-95.7,x:272.2,y:148.2}},{t:this.ikNode_62,p:{regX:5.8,rotation:-149.2,x:321.9,y:139.9,regY:16}},{t:this.ikNode_52,p:{x:250.1,y:440.5}},{t:this.ikNode_53,p:{x:241.4,y:198.2}},{t:this.ikNode_55,p:{regX:5.6,rotation:20.4,x:244.9,y:101.7}},{t:this.ikNode_54,p:{scaleX:0.985,scaleY:0.985,rotation:-2,x:232.7,y:113.8}},{t:this.ikNode_56,p:{regY:24.4,rotation:21.3,x:254,y:69.5}},{t:this.ikNode_63,p:{rotation:6,x:241.6,y:198.5}},{t:this.ikNode_64,p:{rotation:22.9,x:239.4,y:283.1,regX:10.1}},{t:this.ikNode_65,p:{rotation:-3.1,x:204,y:366.6,regY:4.7}},{t:this.ikNode_57,p:{regY:3.9,rotation:-19.5,x:236.6,y:109.8}},{t:this.ikNode_58,p:{rotation:-118.4,skewX:0,skewY:0,x:248.7,y:160.7}},{t:this.ikNode_59,p:{rotation:-137.4,x:292.3,y:135.2,regY:16.1}}]},1).to({state:[]},1).wait(86));

	// ik_man
	this.ikNode_76 = new lib.hand();
	this.ikNode_76.setTransform(299.6,135.1,0.981,0.981,-137.4,0,0,5.5,15.8);

	this.ikNode_75 = new lib.arm_lower();
	this.ikNode_75.setTransform(248.3,160.5,0.98,0.985,-118.4,0,0,4,4.3);

	this.ikNode_74 = new lib.arm_upper();
	this.ikNode_74.setTransform(236.1,109.8,0.983,0.983,-19.5,0,0,9.1,3.8);

	this.ikNode_82 = new lib.feet();
	this.ikNode_82.setTransform(203.6,366.3,0.985,0.985,-3.1,0,0,3.8,4.7);

	this.ikNode_81 = new lib.leg_lower();
	this.ikNode_81.setTransform(239.1,283,0.986,0.986,23,0,0,10,2.5);

	this.ikNode_80 = new lib.leg_upper();
	this.ikNode_80.setTransform(241.1,198.4,0.981,0.981,6,0,0,4.9,3.3);

	this.ikNode_73 = new lib.head_1();
	this.ikNode_73.setTransform(253.5,69,0.986,0.986,21.3,0,0,23.7,24.4);

	this.ikNode_71 = new lib.torso_1();
	this.ikNode_71.setTransform(232.3,113.7,0.985,0.985,-2,0,0,13.9,17.1);

	this.ikNode_72 = new lib.neck();
	this.ikNode_72.setTransform(244.4,101.2,0.986,0.986,20.3,0,0,5.7,12.3);

	this.ikNode_70 = new lib.pelvis_1();
	this.ikNode_70.setTransform(241,198,0.988,0.988,-2,0,0,21.8,19.3);

	this.ikNode_69 = new lib.ghost();
	this.ikNode_69.setTransform(250.1,440.5,1,1,0,0,0,20.5,20.5);
	this.ikNode_69.alpha = 0;

	this.ikNode_79 = new lib.hand();
	this.ikNode_79.setTransform(322.5,143.9,0.979,0.979,-119.2,0,0,5.6,15.7);

	this.ikNode_78 = new lib.arm_lower();
	this.ikNode_78.setTransform(271.3,148.1,0.979,0.985,-95.7,0,0,4.9,3.7);

	this.ikNode_77 = new lib.arm_upper();
	this.ikNode_77.setTransform(238.2,109.7,0.981,0.981,-47.8,0,0,9.6,3.5);

	this.ikNode_85 = new lib.feet();
	this.ikNode_85.setTransform(290,360,0.986,0.986,0.9,0,0,1.7,5.5);

	this.ikNode_84 = new lib.leg_lower();
	this.ikNode_84.setTransform(289.2,268.8,0.987,0.987,-0.3,0,0,5.7,1.9);

	this.ikNode_83 = new lib.leg_upper();
	this.ikNode_83.setTransform(241,198.9,0.981,0.981,-32.1,0,0,5.2,4.3);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[]},15).to({state:[{t:this.ikNode_83,p:{rotation:-32.1,x:241,y:198.9}},{t:this.ikNode_84,p:{regX:5.7,rotation:-0.3,x:289.2,y:268.8}},{t:this.ikNode_85,p:{regX:1.7,rotation:0.9,x:290,y:360,regY:5.5}},{t:this.ikNode_77,p:{rotation:-47.8,x:238.2,y:109.7}},{t:this.ikNode_78,p:{regX:4.9,regY:3.7,rotation:-95.7,x:271.3,y:148.1}},{t:this.ikNode_79,p:{rotation:-119.2,x:322.5,y:143.9,regX:5.6}},{t:this.ikNode_69,p:{x:250.1,y:440.5}},{t:this.ikNode_70,p:{x:241,y:198}},{t:this.ikNode_72,p:{rotation:20.3,x:244.4,y:101.2,regX:5.7}},{t:this.ikNode_71,p:{scaleX:0.985,scaleY:0.985,rotation:-2,x:232.3,y:113.7}},{t:this.ikNode_73,p:{regX:23.7,rotation:21.3,x:253.5,y:69}},{t:this.ikNode_80,p:{scaleX:0.981,scaleY:0.981,rotation:6,x:241.1,y:198.4,regX:4.9,regY:3.3}},{t:this.ikNode_81,p:{regX:10,scaleX:0.986,scaleY:0.986,rotation:23,x:239.1,y:283}},{t:this.ikNode_82,p:{regY:4.7,rotation:-3.1,x:203.6,y:366.3}},{t:this.ikNode_74,p:{regX:9.1,rotation:-19.5,x:236.1,y:109.8}},{t:this.ikNode_75,p:{rotation:-118.4,x:248.3,y:160.5}},{t:this.ikNode_76,p:{rotation:-137.4,x:299.6,y:135.1,regX:5.5}}]},7).to({state:[{t:this.ikNode_83,p:{rotation:-34.1,x:245.7,y:198.5}},{t:this.ikNode_84,p:{regX:5.8,rotation:5.1,x:296.4,y:266.6}},{t:this.ikNode_85,p:{regX:1.6,rotation:6.4,x:288.2,y:357.7,regY:5.5}},{t:this.ikNode_77,p:{rotation:-67.9,x:264.1,y:111}},{t:this.ikNode_78,p:{regX:5,regY:3.6,rotation:-98,x:308.5,y:135.6}},{t:this.ikNode_79,p:{rotation:-121.8,x:359.1,y:128.3,regX:5.6}},{t:this.ikNode_69,p:{x:254.7,y:440.1}},{t:this.ikNode_70,p:{x:245.7,y:197.6}},{t:this.ikNode_72,p:{rotation:24,x:272.2,y:104.7,regX:5.7}},{t:this.ikNode_71,p:{scaleX:0.984,scaleY:0.984,rotation:12,x:257.5,y:113.6}},{t:this.ikNode_73,p:{regX:23.8,rotation:14.6,x:283.5,y:73.1}},{t:this.ikNode_80,p:{scaleX:0.98,scaleY:0.98,rotation:11,x:245.9,y:198.1,regX:4.9,regY:3.3}},{t:this.ikNode_81,p:{regX:10.1,scaleX:0.985,scaleY:0.985,rotation:27.6,x:236.5,y:282.1}},{t:this.ikNode_82,p:{regY:4.6,rotation:8.9,x:194.3,y:362.2}},{t:this.ikNode_74,p:{regX:9,rotation:9.8,x:262.1,y:110.8}},{t:this.ikNode_75,p:{rotation:-96,x:247.7,y:161}},{t:this.ikNode_76,p:{rotation:-115,x:302.6,y:156.1,regX:5.5}}]},1).to({state:[{t:this.ikNode_83,p:{rotation:-36.1,x:250.4,y:198.1}},{t:this.ikNode_84,p:{regX:5.8,rotation:10.7,x:303.4,y:264.5}},{t:this.ikNode_85,p:{regX:1.7,rotation:12,x:286.6,y:354.4,regY:5.5}},{t:this.ikNode_77,p:{rotation:-88,x:290,y:118}},{t:this.ikNode_78,p:{regX:4.9,regY:3.8,rotation:-100.3,x:340.8,y:125.6}},{t:this.ikNode_79,p:{rotation:-124.4,x:390.2,y:114.8,regX:5.7}},{t:this.ikNode_69,p:{x:259.3,y:439.7}},{t:this.ikNode_70,p:{x:250.5,y:197.3}},{t:this.ikNode_72,p:{rotation:27.7,x:299.6,y:114.1,regX:5.7}},{t:this.ikNode_71,p:{scaleX:0.984,scaleY:0.984,rotation:26.2,x:283.3,y:119}},{t:this.ikNode_73,p:{regX:23.8,rotation:7.9,x:313,y:83.3}},{t:this.ikNode_80,p:{scaleX:0.98,scaleY:0.98,rotation:16,x:250.5,y:197.6,regX:4.8,regY:3.3}},{t:this.ikNode_81,p:{regX:10,scaleX:0.985,scaleY:0.985,rotation:32.2,x:233.8,y:280.6}},{t:this.ikNode_82,p:{regY:4.7,rotation:21.1,x:185.4,y:357.2}},{t:this.ikNode_74,p:{regX:9.1,rotation:39.3,x:288.6,y:117.4}},{t:this.ikNode_75,p:{rotation:-73.6,x:251.1,y:154}},{t:this.ikNode_76,p:{rotation:-92.6,x:302,y:168.4,regX:5.6}}]},1).to({state:[{t:this.ikNode_83,p:{rotation:-38.1,x:255.2,y:197.7}},{t:this.ikNode_84,p:{regX:5.8,rotation:16.3,x:310.4,y:262.3}},{t:this.ikNode_85,p:{regX:1.6,rotation:17.6,x:284.9,y:350,regY:5.5}},{t:this.ikNode_77,p:{rotation:-108,x:312.5,y:129.2}},{t:this.ikNode_78,p:{regX:5,regY:3.7,rotation:-102.6,x:362.8,y:118.7}},{t:this.ikNode_79,p:{rotation:-127,x:411.3,y:104.7,regX:5.7}},{t:this.ikNode_69,p:{x:263.9,y:439.3}},{t:this.ikNode_70,p:{x:255.2,y:196.9}},{t:this.ikNode_72,p:{rotation:31.3,x:322.6,y:128.1,regX:5.6}},{t:this.ikNode_71,p:{scaleX:0.984,scaleY:0.984,rotation:40.3,x:305.8,y:128.8}},{t:this.ikNode_73,p:{regX:23.7,rotation:1.3,x:338,y:98.1}},{t:this.ikNode_80,p:{scaleX:0.98,scaleY:0.98,rotation:21,x:255.3,y:197.2,regX:4.9,regY:3.2}},{t:this.ikNode_81,p:{regX:10,scaleX:0.985,scaleY:0.985,rotation:36.9,x:231.2,y:278.4}},{t:this.ikNode_82,p:{regY:4.7,rotation:33.3,x:176.8,y:350.9}},{t:this.ikNode_74,p:{regX:9.1,rotation:68.7,x:311.3,y:128.5}},{t:this.ikNode_75,p:{rotation:-51.2,x:260.7,y:141.8}},{t:this.ikNode_76,p:{rotation:-70.2,x:301.3,y:172.3,regX:5.6}}]},1).to({state:[{t:this.ikNode_83,p:{rotation:-36.1,x:250.5,y:198.1}},{t:this.ikNode_84,p:{regX:5.8,rotation:10.7,x:303.5,y:264.5}},{t:this.ikNode_85,p:{regX:1.7,rotation:12,x:286.8,y:354.4,regY:5.5}},{t:this.ikNode_77,p:{rotation:-88,x:290.1,y:117.8}},{t:this.ikNode_78,p:{regX:4.9,regY:3.8,rotation:-100.3,x:341,y:125.4}},{t:this.ikNode_79,p:{rotation:-134.4,x:389.8,y:113.2,regX:5.7}},{t:this.ikNode_69,p:{x:259.3,y:439.7}},{t:this.ikNode_70,p:{x:250.6,y:197.3}},{t:this.ikNode_72,p:{rotation:27.7,x:299.6,y:114.3,regX:5.7}},{t:this.ikNode_71,p:{scaleX:0.984,scaleY:0.984,rotation:26.2,x:283.4,y:119}},{t:this.ikNode_73,p:{regX:23.8,rotation:7.9,x:313.1,y:83.4}},{t:this.ikNode_80,p:{scaleX:0.98,scaleY:0.98,rotation:16,x:250.6,y:197.6,regX:4.8,regY:3.3}},{t:this.ikNode_81,p:{regX:10,scaleX:0.985,scaleY:0.985,rotation:32.2,x:233.9,y:280.6}},{t:this.ikNode_82,p:{regY:4.7,rotation:21.1,x:185.5,y:357.2}},{t:this.ikNode_74,p:{regX:9.1,rotation:39.3,x:288.7,y:117.4}},{t:this.ikNode_75,p:{rotation:-73.6,x:251.2,y:154}},{t:this.ikNode_76,p:{rotation:-92.6,x:300.3,y:166.6,regX:5.6}}]},1).to({state:[{t:this.ikNode_83,p:{rotation:-34.1,x:245.9,y:198.5}},{t:this.ikNode_84,p:{regX:5.8,rotation:5.1,x:296.6,y:266.6}},{t:this.ikNode_85,p:{regX:1.6,rotation:6.4,x:288.5,y:357.8,regY:5.5}},{t:this.ikNode_77,p:{rotation:-67.9,x:264.1,y:110.9}},{t:this.ikNode_78,p:{regX:5,regY:3.6,rotation:-98,x:309,y:135.3}},{t:this.ikNode_79,p:{rotation:-141.8,x:358.5,y:125.3,regX:5.7}},{t:this.ikNode_69,p:{x:254.7,y:440.1}},{t:this.ikNode_70,p:{x:246,y:197.7}},{t:this.ikNode_72,p:{rotation:24,x:272.3,y:105.1,regX:5.7}},{t:this.ikNode_71,p:{scaleX:0.984,scaleY:0.984,rotation:12,x:257.9,y:113.7}},{t:this.ikNode_73,p:{regX:23.8,rotation:14.6,x:283.8,y:73.4}},{t:this.ikNode_80,p:{scaleX:0.98,scaleY:0.98,rotation:11,x:246.1,y:198.1,regX:4.9,regY:3.3}},{t:this.ikNode_81,p:{regX:10.1,scaleX:0.985,scaleY:0.985,rotation:27.6,x:236.7,y:282.2}},{t:this.ikNode_82,p:{regY:4.6,rotation:8.9,x:194.5,y:362.4}},{t:this.ikNode_74,p:{regX:9,rotation:9.8,x:262.4,y:110.9}},{t:this.ikNode_75,p:{rotation:-96,x:247.9,y:161}},{t:this.ikNode_76,p:{rotation:-115,x:298.1,y:154.1,regX:5.5}}]},1).to({state:[{t:this.ikNode_83,p:{rotation:-32.1,x:241.3,y:198.9}},{t:this.ikNode_84,p:{regX:5.7,rotation:-0.3,x:289.5,y:268.8}},{t:this.ikNode_85,p:{regX:1.6,rotation:0.9,x:290.4,y:360,regY:5.4}},{t:this.ikNode_77,p:{rotation:-47.8,x:238.2,y:109.6}},{t:this.ikNode_78,p:{regX:4.9,regY:3.7,rotation:-95.7,x:272.1,y:148.1}},{t:this.ikNode_79,p:{rotation:-149.2,x:321.9,y:139.9,regX:5.7}},{t:this.ikNode_69,p:{x:250.1,y:440.5}},{t:this.ikNode_70,p:{x:241.4,y:198.1}},{t:this.ikNode_72,p:{rotation:20.4,x:244.8,y:101.9,regX:5.7}},{t:this.ikNode_71,p:{scaleX:0.985,scaleY:0.985,rotation:-2,x:232.8,y:113.8}},{t:this.ikNode_73,p:{regX:23.8,rotation:21.3,x:254.2,y:69.5}},{t:this.ikNode_80,p:{scaleX:0.981,scaleY:0.981,rotation:6,x:241.4,y:198.5,regX:4.9,regY:3.3}},{t:this.ikNode_81,p:{regX:10,scaleX:0.986,scaleY:0.986,rotation:23,x:239.3,y:283.1}},{t:this.ikNode_82,p:{regY:4.7,rotation:-3.1,x:204,y:366.5}},{t:this.ikNode_74,p:{regX:9.1,rotation:-19.5,x:236.7,y:109.9}},{t:this.ikNode_75,p:{rotation:-118.4,x:248.6,y:160.7}},{t:this.ikNode_76,p:{rotation:-137.4,x:292.3,y:135.2,regX:5.5}}]},1).to({state:[]},1).wait(79));

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

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[]},15).to({state:[]},7).to({state:[{t:this.ikNode_100,p:{rotation:-32.1,x:241.3,y:198.9,regX:5.3,regY:4.3}},{t:this.ikNode_101,p:{regY:1.9,rotation:-0.3,x:289.4,y:268.6,regX:5.5}},{t:this.ikNode_102,p:{regX:1.1,rotation:0.9,x:290,y:360,regY:5.3}},{t:this.ikNode_94,p:{regY:3.3,rotation:-47.8,x:238.1,y:109.6,regX:9.6}},{t:this.ikNode_95,p:{rotation:-95.7,x:271.7,y:148}},{t:this.ikNode_96,p:{scaleX:0.979,scaleY:0.979,rotation:-104.2,x:326.5,y:143.2,regY:16}},{t:this.ikNode_86,p:{x:250.1}},{t:this.ikNode_87,p:{regX:21.6,regY:18.2,x:241.3,y:197.7}},{t:this.ikNode_89,p:{rotation:20.3,x:244.5,y:101.6,regX:5.6,regY:12.2}},{t:this.ikNode_88,p:{regX:13.8,rotation:-2,x:232.6,y:113.7,regY:17.1}},{t:this.ikNode_90,p:{rotation:21.3,x:253.7,y:69.1,regY:24.2}},{t:this.ikNode_97,p:{rotation:6,x:241.4,y:198.4,regX:5,regY:3}},{t:this.ikNode_98,p:{rotation:23,x:239.3,y:283,regY:1.9,regX:10}},{t:this.ikNode_99,p:{rotation:-3.1,x:203.8,y:366.5,regX:3.8,regY:4.7}},{t:this.ikNode_91,p:{rotation:-19.5,x:236.5,y:109.9,regY:3.9}},{t:this.ikNode_92,p:{rotation:-118.4,x:248.4,regX:3.9,y:160.8}},{t:this.ikNode_93,p:{scaleX:0.981,scaleY:0.981,rotation:-137.4,x:300,y:135}}]},7).to({state:[{t:this.ikNode_100,p:{rotation:-23,x:245,y:198.9,regX:5.3,regY:4.3}},{t:this.ikNode_101,p:{regY:1.8,rotation:2.6,x:281.5,y:275.3,regX:5.5}},{t:this.ikNode_102,p:{regX:1,rotation:0.1,x:277.2,y:366.6,regY:5.3}},{t:this.ikNode_94,p:{regY:3.2,rotation:-46.7,x:243.5,y:109.5,regX:9.6}},{t:this.ikNode_95,p:{rotation:-94.6,x:276.5,y:148.7}},{t:this.ikNode_96,p:{scaleX:0.978,scaleY:0.978,rotation:-108,x:328.7,y:144.9,regY:16}},{t:this.ikNode_86,p:{x:253.8}},{t:this.ikNode_87,p:{regX:21.5,regY:18.1,x:245,y:197.7}},{t:this.ikNode_89,p:{rotation:21.5,x:250.3,y:101.8,regX:5.6,regY:12.2}},{t:this.ikNode_88,p:{regX:13.9,rotation:-0.9,x:238.2,y:113.6,regY:17.1}},{t:this.ikNode_90,p:{rotation:22.4,x:260.1,y:69.5,regY:24.2}},{t:this.ikNode_97,p:{rotation:-8.7,x:245.2,y:198.5,regX:5,regY:3}},{t:this.ikNode_98,p:{rotation:28.9,x:264.7,y:280.8,regY:1.9,regX:10}},{t:this.ikNode_99,p:{rotation:10.7,x:220.7,y:360,regX:3.8,regY:4.7}},{t:this.ikNode_91,p:{rotation:-18.4,x:242.1,y:109.9,regY:3.9}},{t:this.ikNode_92,p:{rotation:-117.2,x:252.9,regX:3.9,y:160.8}},{t:this.ikNode_93,p:{scaleX:0.98,scaleY:0.98,rotation:-136.3,x:302.5,y:136.2}}]},1).to({state:[{t:this.ikNode_100,p:{rotation:-13.9,x:248.7,y:199,regX:5.3,regY:4.3}},{t:this.ikNode_101,p:{regY:1.9,rotation:5.7,x:272.8,y:280.4,regX:5.6}},{t:this.ikNode_102,p:{regX:1,rotation:-0.6,x:263.6,y:371.1,regY:5.3}},{t:this.ikNode_94,p:{regY:3.3,rotation:-45.5,x:249.1,y:109.5,regX:9.6}},{t:this.ikNode_95,p:{rotation:-93.4,x:281.3,y:149.3}},{t:this.ikNode_96,p:{scaleX:0.979,scaleY:0.979,rotation:-111.9,x:330.8,y:146.3,regY:16}},{t:this.ikNode_86,p:{x:257.5}},{t:this.ikNode_87,p:{regX:21.5,regY:18.1,x:248.7,y:197.8}},{t:this.ikNode_89,p:{rotation:22.7,x:256.1,y:102,regX:5.7,regY:12.2}},{t:this.ikNode_88,p:{regX:13.8,rotation:0.2,x:243.5,y:113.5,regY:17.1}},{t:this.ikNode_90,p:{rotation:23.6,x:266.6,y:69.9,regY:24.2}},{t:this.ikNode_97,p:{rotation:-23.4,x:248.9,y:198.5,regX:5,regY:3}},{t:this.ikNode_98,p:{rotation:34.9,x:288.8,y:273.1,regY:1.9,regX:10}},{t:this.ikNode_99,p:{rotation:24.6,x:236.7,y:347.4,regX:3.8,regY:4.7}},{t:this.ikNode_91,p:{rotation:-17.2,x:247.6,y:109.7,regY:3.9}},{t:this.ikNode_92,p:{rotation:-116.1,x:257.4,regX:4,y:160.8}},{t:this.ikNode_93,p:{scaleX:0.981,scaleY:0.981,rotation:-135.1,x:304.8,y:137.3}}]},1).to({state:[{t:this.ikNode_100,p:{rotation:-4.9,x:252.4,y:198.9,regX:5.3,regY:4.3}},{t:this.ikNode_101,p:{regY:1.9,rotation:8.7,x:263.3,y:283.3,regX:5.5}},{t:this.ikNode_102,p:{regX:1.1,rotation:-1.5,x:249.5,y:373.1,regY:5.2}},{t:this.ikNode_94,p:{regY:3.2,rotation:-44.4,x:254.6,y:109.5,regX:9.6}},{t:this.ikNode_95,p:{rotation:-92.3,x:286.1,y:150.1}},{t:this.ikNode_96,p:{scaleX:0.978,scaleY:0.978,rotation:-115.7,x:333.1,y:147.8,regY:16}},{t:this.ikNode_86,p:{x:261.2}},{t:this.ikNode_87,p:{regX:21.5,regY:18.1,x:252.4,y:197.9}},{t:this.ikNode_89,p:{rotation:23.8,x:261.8,y:102.2,regX:5.6,regY:12.2}},{t:this.ikNode_88,p:{regX:13.8,rotation:1.3,x:249,y:113.4,regY:17.1}},{t:this.ikNode_90,p:{rotation:24.8,x:272.9,y:70.3,regY:24.2}},{t:this.ikNode_97,p:{rotation:-38.1,x:252.7,y:198.6,regX:5,regY:3}},{t:this.ikNode_98,p:{rotation:40.9,x:310,y:260.5,regY:1.9,regX:10}},{t:this.ikNode_99,p:{rotation:38.5,x:250.8,y:329,regX:3.9,regY:4.7}},{t:this.ikNode_91,p:{rotation:-16.1,x:253.2,y:109.7,regY:3.9}},{t:this.ikNode_92,p:{rotation:-114.9,x:262.1,regX:3.9,y:161}},{t:this.ikNode_93,p:{scaleX:0.98,scaleY:0.98,rotation:-134,x:307.1,y:138.3}}]},1).to({state:[{t:this.ikNode_100,p:{rotation:-0.7,x:250.6,y:199,regX:5.3,regY:4.3}},{t:this.ikNode_101,p:{regY:1.9,rotation:6,x:255.4,y:283.8,regX:5.6}},{t:this.ikNode_102,p:{regX:1,rotation:-2.2,x:245.7,y:374.4,regY:5.2}},{t:this.ikNode_94,p:{regY:3.2,rotation:5.4,x:248.8,y:109.5,regX:9.6}},{t:this.ikNode_95,p:{rotation:-60.1,x:238.2,y:159.7}},{t:this.ikNode_96,p:{scaleX:0.978,scaleY:0.978,rotation:-98.5,x:281.3,y:182.5,regY:16}},{t:this.ikNode_86,p:{x:259.3}},{t:this.ikNode_87,p:{regX:21.5,regY:18.1,x:250.6,y:198}},{t:this.ikNode_89,p:{rotation:15.4,x:255.5,y:101.8,regX:5.6,regY:12.2}},{t:this.ikNode_88,p:{regX:13.8,rotation:-1.1,x:243.3,y:113.7,regY:17.1}},{t:this.ikNode_90,p:{rotation:16.3,x:262.1,y:68.7,regY:24.2}},{t:this.ikNode_97,p:{rotation:-56.6,x:250.9,y:198.5,regX:4.9,regY:3}},{t:this.ikNode_98,p:{rotation:-14.5,x:325,y:238.9,regY:1.8,regX:10}},{t:this.ikNode_99,p:{rotation:-20.9,x:347.8,y:326.8,regX:3.8,regY:4.7}},{t:this.ikNode_91,p:{rotation:8.5,x:247.4,y:109.7,regY:3.9}},{t:this.ikNode_92,p:{rotation:-74.7,x:234,regX:3.9,y:160.2}},{t:this.ikNode_93,p:{scaleX:0.981,scaleY:0.981,rotation:-93.8,x:283.1,y:172.1}}]},1).to({state:[{t:this.ikNode_100,p:{rotation:3.3,x:248.7,y:199,regX:5.3,regY:4.3}},{t:this.ikNode_101,p:{regY:1.8,rotation:3.3,x:247.4,y:283.7,regX:5.6}},{t:this.ikNode_102,p:{regX:1.1,rotation:-3,x:242.2,y:375.1,regY:5.3}},{t:this.ikNode_94,p:{regY:3.2,rotation:55.2,x:243.1,y:109.8,regX:9.7}},{t:this.ikNode_95,p:{rotation:-27.9,x:197.9,y:134.1}},{t:this.ikNode_96,p:{scaleX:0.978,scaleY:0.978,rotation:-81.3,x:224.3,y:177.2,regY:16.1}},{t:this.ikNode_86,p:{x:257.5}},{t:this.ikNode_87,p:{regX:21.5,regY:18.1,x:248.7,y:198.1}},{t:this.ikNode_89,p:{rotation:6.9,x:249.5,y:101.7,regX:5.6,regY:12.2}},{t:this.ikNode_88,p:{regX:13.8,rotation:-3.6,x:237.7,y:114.1,regY:17.1}},{t:this.ikNode_90,p:{rotation:7.8,x:250.9,y:68,regY:24.2}},{t:this.ikNode_97,p:{rotation:-75.1,x:249,y:198.4,regX:5,regY:3}},{t:this.ikNode_98,p:{rotation:-70.1,x:332.1,y:213.4,regY:1.8,regX:10}},{t:this.ikNode_99,p:{rotation:-80.4,x:417.3,y:244.1,regX:3.8,regY:4.6}},{t:this.ikNode_91,p:{rotation:33.2,x:241.5,y:109.8,regY:3.9}},{t:this.ikNode_92,p:{rotation:-34.5,x:208.2,regX:3.9,y:150.3}},{t:this.ikNode_93,p:{scaleX:0.981,scaleY:0.981,rotation:-53.6,x:238.1,y:191.1}}]},1).to({state:[{t:this.ikNode_100,p:{rotation:-9.8,x:246.7,y:198.8,regX:5.2,regY:4.2}},{t:this.ikNode_101,p:{regY:1.9,rotation:3,x:265.1,y:281.9,regX:5.6}},{t:this.ikNode_102,p:{regX:1.1,rotation:-1.4,x:260.3,y:373.1,regY:5.2}},{t:this.ikNode_94,p:{regY:3.2,rotation:29.4,x:241.8,y:109.6,regX:9.6}},{t:this.ikNode_95,p:{rotation:-44.8,x:211.8,y:151.2}},{t:this.ikNode_96,p:{scaleX:0.978,scaleY:0.978,rotation:-98.3,x:249.5,y:184.8,regY:16.1}},{t:this.ikNode_86,p:{x:255.6}},{t:this.ikNode_87,p:{regX:21.5,regY:18.1,x:246.9,y:198.1}},{t:this.ikNode_89,p:{rotation:10.3,x:248.3,y:101.7,regX:5.6,regY:12.2}},{t:this.ikNode_88,p:{regX:13.8,rotation:-3.2,x:236.5,y:114,regY:17.1}},{t:this.ikNode_90,p:{rotation:11.2,x:251.7,y:68.1,regY:24.2}},{t:this.ikNode_97,p:{rotation:-53.9,x:247.2,y:198.5,regX:5,regY:3}},{t:this.ikNode_98,p:{rotation:-27.4,x:319.3,y:242.4,regY:1.8,regX:10}},{t:this.ikNode_99,p:{rotation:-41.7,x:361.1,y:322.9,regX:3.8,regY:4.7}},{t:this.ikNode_91,p:{rotation:20,x:240.3,y:109.7,regY:3.9}},{t:this.ikNode_92,p:{rotation:-55.5,x:217.1,regX:3.9,y:156.7}},{t:this.ikNode_93,p:{scaleX:0.981,scaleY:0.981,rotation:-74.5,x:259.6,y:184.1}}]},1).to({state:[{t:this.ikNode_100,p:{rotation:-23,x:245,y:199,regX:5.3,regY:4.3}},{t:this.ikNode_101,p:{regY:1.8,rotation:2.6,x:281.6,y:275.5,regX:5.5}},{t:this.ikNode_102,p:{regX:1,rotation:0.1,x:277.3,y:366.8,regY:5.3}},{t:this.ikNode_94,p:{regY:3.2,rotation:3.6,x:240.5,y:109.6,regX:9.6}},{t:this.ikNode_95,p:{rotation:-61.8,x:231.6,y:160.2}},{t:this.ikNode_96,p:{scaleX:0.978,scaleY:0.978,rotation:-115.2,x:277.4,y:181.2,regY:16}},{t:this.ikNode_86,p:{x:253.8}},{t:this.ikNode_87,p:{regX:21.5,regY:18.1,x:245.1,y:198.1}},{t:this.ikNode_89,p:{rotation:13.6,x:247,y:101.7,regX:5.6,regY:12.2}},{t:this.ikNode_88,p:{regX:13.8,rotation:-2.8,x:235.2,y:114,regY:17.1}},{t:this.ikNode_90,p:{rotation:14.6,x:252.4,y:68.4,regY:24.2}},{t:this.ikNode_97,p:{rotation:-32.7,x:245.1,y:198.4,regX:5,regY:3}},{t:this.ikNode_98,p:{rotation:15.1,x:296.5,y:265.7,regY:1.9,regX:9.9}},{t:this.ikNode_99,p:{rotation:-3,x:272.8,y:353.1,regX:3.8,regY:4.7}},{t:this.ikNode_91,p:{rotation:6.8,x:239.2,y:109.6,regY:3.9}},{t:this.ikNode_92,p:{rotation:-76.5,x:227.1,regX:3.9,y:160.7}},{t:this.ikNode_93,p:{scaleX:0.981,scaleY:0.981,rotation:-95.5,x:276.6,y:171.2}}]},1).to({state:[{t:this.ikNode_100,p:{rotation:-26.1,x:243.8,y:198.9,regX:5.3,regY:4.3}},{t:this.ikNode_101,p:{regY:1.8,rotation:1.6,x:284.4,y:273.5,regX:5.6}},{t:this.ikNode_102,p:{regX:1,rotation:0.3,x:281.8,y:364.9,regY:5.3}},{t:this.ikNode_94,p:{regY:3.2,rotation:-13.5,x:239.7,y:109.6,regX:9.6}},{t:this.ikNode_95,p:{rotation:-73.1,x:246,y:160.5}},{t:this.ikNode_96,p:{scaleX:0.978,scaleY:0.978,rotation:-126.6,x:295.2,y:172.2,regY:16}},{t:this.ikNode_86,p:{x:252.5}},{t:this.ikNode_87,p:{regX:21.5,regY:18.1,x:243.7,y:198}},{t:this.ikNode_89,p:{rotation:15.9,x:246.3,y:101.7,regX:5.6,regY:12.1}},{t:this.ikNode_88,p:{regX:13.8,rotation:-2.6,x:234.3,y:113.8,regY:17}},{t:this.ikNode_90,p:{rotation:16.8,x:252.8,y:68.8,regY:24.3}},{t:this.ikNode_97,p:{rotation:-19.8,x:244,y:198.5,regX:5,regY:3}},{t:this.ikNode_98,p:{rotation:17.7,x:279,y:275.5,regY:1.9,regX:10}},{t:this.ikNode_99,p:{rotation:-3.1,x:251.2,y:361.7,regX:3.8,regY:4.7}},{t:this.ikNode_91,p:{rotation:-1.9,x:238.2,y:109.7,regY:4}},{t:this.ikNode_92,p:{rotation:-90.4,x:234.3,regX:3.9,y:161.8}},{t:this.ikNode_93,p:{scaleX:0.981,scaleY:0.981,rotation:-109.5,x:284.7,y:160}}]},1).to({state:[{t:this.ikNode_100,p:{rotation:-29.1,x:242.6,y:198.9,regX:5.3,regY:4.3}},{t:this.ikNode_101,p:{regY:1.8,rotation:0.6,x:287,y:271.2,regX:5.6}},{t:this.ikNode_102,p:{regX:1,rotation:0.6,x:286.1,y:362.7,regY:5.3}},{t:this.ikNode_94,p:{regY:3.2,rotation:-30.6,x:238.8,y:109.6,regX:9.6}},{t:this.ikNode_95,p:{rotation:-84.4,x:260,y:156.4}},{t:this.ikNode_96,p:{scaleX:0.978,scaleY:0.978,rotation:-137.9,x:310.5,y:158.1,regY:16}},{t:this.ikNode_86,p:{x:251.3}},{t:this.ikNode_87,p:{regX:21.5,regY:18.1,x:242.4,y:197.9}},{t:this.ikNode_89,p:{rotation:18.1,x:245.5,y:101.9,regX:5.7,regY:12.2}},{t:this.ikNode_88,p:{regX:13.8,rotation:-2.3,x:233.5,y:113.9,regY:17.1}},{t:this.ikNode_90,p:{rotation:19,x:253.3,y:69,regY:24.2}},{t:this.ikNode_97,p:{rotation:-6.8,x:242.6,y:198.4,regX:5,regY:2.9}},{t:this.ikNode_98,p:{rotation:20.3,x:259.6,y:281.3,regY:1.9,regX:10}},{t:this.ikNode_99,p:{rotation:-3.1,x:227.9,y:366.2,regX:3.8,regY:4.7}},{t:this.ikNode_91,p:{rotation:-10.7,x:237.3,y:109.6,regY:3.9}},{t:this.ikNode_92,p:{rotation:-104.4,x:241.5,regX:3.9,y:161.9}},{t:this.ikNode_93,p:{scaleX:0.98,scaleY:0.98,rotation:-123.5,x:290,y:147.8}}]},1).to({state:[{t:this.ikNode_100,p:{rotation:-29.1,x:242.6,y:198.9,regX:5.3,regY:4.3}},{t:this.ikNode_101,p:{regY:1.8,rotation:0.6,x:287,y:271.2,regX:5.6}},{t:this.ikNode_102,p:{regX:1,rotation:0.6,x:286.1,y:362.7,regY:5.3}},{t:this.ikNode_94,p:{regY:3.2,rotation:-30.6,x:238.8,y:109.6,regX:9.6}},{t:this.ikNode_95,p:{rotation:-84.4,x:260,y:156.4}},{t:this.ikNode_96,p:{scaleX:0.978,scaleY:0.978,rotation:-137.9,x:310.5,y:158.1,regY:16}},{t:this.ikNode_86,p:{x:251.3}},{t:this.ikNode_87,p:{regX:21.5,regY:18.1,x:242.4,y:197.9}},{t:this.ikNode_89,p:{rotation:18.1,x:245.5,y:101.9,regX:5.7,regY:12.2}},{t:this.ikNode_88,p:{regX:13.8,rotation:-2.3,x:233.5,y:113.9,regY:17.1}},{t:this.ikNode_90,p:{rotation:19,x:253.3,y:69,regY:24.2}},{t:this.ikNode_97,p:{rotation:-6.8,x:242.6,y:198.4,regX:5,regY:2.9}},{t:this.ikNode_98,p:{rotation:20.3,x:259.6,y:281.3,regY:1.9,regX:10}},{t:this.ikNode_99,p:{rotation:-3.1,x:227.9,y:366.2,regX:3.8,regY:4.7}},{t:this.ikNode_91,p:{rotation:-10.7,x:237.3,y:109.6,regY:3.9}},{t:this.ikNode_92,p:{rotation:-104.4,x:241.5,regX:3.9,y:161.9}},{t:this.ikNode_93,p:{scaleX:0.98,scaleY:0.98,rotation:-123.5,x:290,y:147.8}}]},1).to({state:[]},1).wait(68));

	// ik_man
	this.ikNode_110 = new lib.hand();
	this.ikNode_110.setTransform(294.8,147.4,0.98,0.98,-123.6,0,0,5.5,15.8);

	this.ikNode_109 = new lib.arm_lower();
	this.ikNode_109.setTransform(240.9,161.7,0.98,0.985,-104.6,0,0,3.8,4);

	this.ikNode_108 = new lib.arm_upper();
	this.ikNode_108.setTransform(237,109.3,0.982,0.982,-10.7,0,0,8.8,3.6);

	this.ikNode_105 = new lib.torso_1();
	this.ikNode_105.setTransform(233.1,113.7,0.984,0.984,-2.3,0,0,13.4,17.3);

	this.ikNode_116 = new lib.feet();
	this.ikNode_116.setTransform(227.6,366,0.985,0.985,-3.1,0,0,4,4.8);

	this.ikNode_115 = new lib.leg_lower();
	this.ikNode_115.setTransform(259.3,281.2,0.985,0.985,20.3,0,0,10.1,2.3);

	this.ikNode_114 = new lib.leg_upper();
	this.ikNode_114.setTransform(242.7,198.2,0.98,0.98,-6.8,0,0,4.8,2.8);

	this.ikNode_107 = new lib.head_1();
	this.ikNode_107.setTransform(253.1,68.9,0.985,0.985,19,0,0,23.7,24.6);

	this.ikNode_106 = new lib.neck();
	this.ikNode_106.setTransform(245.2,101.7,0.985,0.985,18.1,0,0,5.9,12.1);

	this.ikNode_104 = new lib.pelvis_1();
	this.ikNode_104.setTransform(242,197.4,0.987,0.987,-2,0,0,20.8,18);

	this.ikNode_103 = new lib.ghost();
	this.ikNode_103.setTransform(251.3,440.5,1,1,0,0,0,20.5,20.5);
	this.ikNode_103.alpha = 0;

	this.ikNode_113 = new lib.hand();
	this.ikNode_113.setTransform(308.8,160.1,0.978,0.978,-92.9,0,0,5.4,15.9);

	this.ikNode_112 = new lib.arm_lower();
	this.ikNode_112.setTransform(259.8,156.3,0.978,0.985,-84.4,0,0,4.9,3.8);

	this.ikNode_111 = new lib.arm_upper();
	this.ikNode_111.setTransform(238.8,109.3,0.98,0.98,-30.6,0,0,9.7,3.3);

	this.ikNode_119 = new lib.feet();
	this.ikNode_119.setTransform(285.8,362.4,0.985,0.985,0.6,0,0,1.8,5);

	this.ikNode_118 = new lib.leg_lower();
	this.ikNode_118.setTransform(286.8,270.8,0.986,0.986,0.6,0,0,5.5,1.3);

	this.ikNode_117 = new lib.leg_upper();
	this.ikNode_117.setTransform(242.7,198.8,0.981,0.981,-29.1,0,0,5.7,4.4);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[]},15).to({state:[]},7).to({state:[]},7).to({state:[{t:this.ikNode_117,p:{rotation:-29.1,x:242.7,y:198.8,regX:5.7}},{t:this.ikNode_118,p:{rotation:0.6,x:286.8,y:270.8,regX:5.5}},{t:this.ikNode_119,p:{regX:1.8,regY:5,rotation:0.6,x:285.8,y:362.4}},{t:this.ikNode_111,p:{regY:3.3,rotation:-30.6,x:238.8,y:109.3}},{t:this.ikNode_112,p:{regX:4.9,regY:3.8,rotation:-84.4,x:259.8,y:156.3}},{t:this.ikNode_113,p:{rotation:-92.9,x:308.8,y:160.1,regX:5.4}},{t:this.ikNode_103},{t:this.ikNode_104,p:{regX:20.8,y:197.4,x:242}},{t:this.ikNode_106,p:{rotation:18.1,x:245.2,y:101.7,regX:5.9}},{t:this.ikNode_107,p:{rotation:19,x:253.1,y:68.9,regY:24.6,regX:23.7,scaleX:0.985,scaleY:0.985}},{t:this.ikNode_114,p:{rotation:-6.8,y:198.2,x:242.7,regX:4.8}},{t:this.ikNode_115,p:{regX:10.1,rotation:20.3,x:259.3,y:281.2}},{t:this.ikNode_116,p:{regY:4.8,rotation:-3.1,x:227.6,y:366}},{t:this.ikNode_105,p:{rotation:-2.3,x:233.1,y:113.7,regY:17.3}},{t:this.ikNode_108,p:{rotation:-10.7,x:237,y:109.3}},{t:this.ikNode_109,p:{regX:3.8,regY:4,rotation:-104.6,x:240.9,y:161.7}},{t:this.ikNode_110,p:{rotation:-123.6,x:294.8,y:147.4,regY:15.8}}]},11).to({state:[{t:this.ikNode_117,p:{rotation:-30.4,x:242.7,y:198.8,regX:5.7}},{t:this.ikNode_118,p:{rotation:5.3,x:288.5,y:269.9,regX:5.5}},{t:this.ikNode_119,p:{regX:1.7,regY:5.1,rotation:4.9,x:279.9,y:361.1}},{t:this.ikNode_111,p:{regY:3.4,rotation:-17.9,x:241.8,y:109.2}},{t:this.ikNode_112,p:{regX:4.8,regY:3.9,rotation:-86.4,x:251.9,y:159.9}},{t:this.ikNode_113,p:{rotation:-99.9,x:301.4,y:161.1,regX:5.4}},{t:this.ikNode_103},{t:this.ikNode_104,p:{regX:20.7,y:197.5,x:242}},{t:this.ikNode_106,p:{rotation:10.2,x:248.4,y:101.9,regX:5.9}},{t:this.ikNode_107,p:{rotation:14.3,x:251.7,y:68.4,regY:24.6,regX:23.7,scaleX:0.985,scaleY:0.985}},{t:this.ikNode_114,p:{rotation:-4.3,y:198.3,x:242.7,regX:4.8}},{t:this.ikNode_115,p:{regX:10.2,rotation:16.2,x:255.8,y:281.9}},{t:this.ikNode_116,p:{regY:4.7,rotation:-3.3,x:230.3,y:368.7}},{t:this.ikNode_105,p:{rotation:-0.4,x:236,y:113.6,regY:17.3}},{t:this.ikNode_108,p:{rotation:-3.9,x:240,y:109.3}},{t:this.ikNode_109,p:{regX:3.7,regY:4.1,rotation:-97.8,x:237.9,y:161.9}},{t:this.ikNode_110,p:{rotation:-126.8,x:291.2,y:153.7,regY:15.8}}]},1).to({state:[{t:this.ikNode_117,p:{rotation:-31.7,x:242.6,y:198.8,regX:5.7}},{t:this.ikNode_118,p:{rotation:10,x:290.1,y:268.9,regX:5.5}},{t:this.ikNode_119,p:{regX:1.7,regY:5,rotation:9.2,x:274.2,y:358.9}},{t:this.ikNode_111,p:{regY:3.3,rotation:-5.2,x:244.8,y:109.1}},{t:this.ikNode_112,p:{regX:4.8,regY:3.9,rotation:-88.4,x:243.3,y:160.9}},{t:this.ikNode_113,p:{rotation:-106.9,x:293.6,y:159.7,regX:5.4}},{t:this.ikNode_103},{t:this.ikNode_104,p:{regX:20.7,y:197.6,x:242}},{t:this.ikNode_106,p:{rotation:2.2,x:251.6,y:102,regX:5.9}},{t:this.ikNode_107,p:{rotation:9.6,x:250.2,y:68.5,regY:24.6,regX:23.7,scaleX:0.985,scaleY:0.985}},{t:this.ikNode_114,p:{rotation:-1.8,y:198.3,x:242.7,regX:4.8}},{t:this.ikNode_115,p:{regX:10.2,rotation:12.1,x:252.3,y:282.5}},{t:this.ikNode_116,p:{regY:4.8,rotation:-3.6,x:233.1,y:371}},{t:this.ikNode_105,p:{rotation:1.3,x:238.9,y:113.4,regY:17.2}},{t:this.ikNode_108,p:{rotation:2.3,x:242.9,y:109.4}},{t:this.ikNode_109,p:{regX:3.7,regY:4.1,rotation:-90.4,x:235.1,y:161.4}},{t:this.ikNode_110,p:{rotation:-129.4,x:287.4,y:159.7,regY:15.9}}]},1).to({state:[{t:this.ikNode_117,p:{rotation:-32.9,x:242.5,y:198.8,regX:5.7}},{t:this.ikNode_118,p:{rotation:14.8,x:291.7,y:268,regX:5.5}},{t:this.ikNode_119,p:{regX:1.7,regY:5.1,rotation:13.5,x:268.6,y:356.6}},{t:this.ikNode_111,p:{regY:3.3,rotation:7.5,x:247.7,y:109.3}},{t:this.ikNode_112,p:{regX:4.8,regY:3.9,rotation:-90.4,x:234.9,y:159.4}},{t:this.ikNode_113,p:{rotation:-113.9,x:285.6,y:155.6,regX:5.4}},{t:this.ikNode_103},{t:this.ikNode_104,p:{regX:20.7,y:197.7,x:242}},{t:this.ikNode_106,p:{rotation:-5.7,x:254.9,y:102.3,regX:5.9}},{t:this.ikNode_107,p:{rotation:4.9,x:248.7,y:69.5,regY:24.6,regX:23.7,scaleX:0.985,scaleY:0.985}},{t:this.ikNode_114,p:{rotation:0.6,y:198.4,x:242.6,regX:4.8}},{t:this.ikNode_115,p:{regX:10.1,rotation:8,x:248.6,y:282.9}},{t:this.ikNode_116,p:{regY:4.8,rotation:-3.8,x:236,y:372.6}},{t:this.ikNode_105,p:{rotation:3.2,x:241.6,y:113.6,regY:17.3}},{t:this.ikNode_108,p:{rotation:8.3,x:245.9,y:109.5}},{t:this.ikNode_109,p:{regX:3.7,regY:4,rotation:-82.4,x:232.7,y:160.3}},{t:this.ikNode_110,p:{rotation:-131.4,x:283.2,y:165.4,regY:15.9}}]},1).to({state:[{t:this.ikNode_117,p:{rotation:-58.2,x:242.6,y:198.8,regX:5.7}},{t:this.ikNode_118,p:{rotation:-32.7,x:316.5,y:240.4,regX:5.4}},{t:this.ikNode_119,p:{regX:1.7,regY:5.1,rotation:-33.9,x:366.2,y:317.2}},{t:this.ikNode_111,p:{regY:3.3,rotation:22.3,x:238.6,y:109.3}},{t:this.ikNode_112,p:{regX:4.8,regY:3.9,rotation:-74.8,x:213.5,y:154.4}},{t:this.ikNode_113,p:{rotation:-113.2,x:263.2,y:164.5,regX:5.4}},{t:this.ikNode_103},{t:this.ikNode_104,p:{regX:20.7,y:197.8,x:242.1}},{t:this.ikNode_106,p:{rotation:0,x:244.9,y:101.7,regX:5.8}},{t:this.ikNode_107,p:{rotation:-2.7,x:242.3,y:68,regY:24.5,regX:23.7,scaleX:0.985,scaleY:0.985}},{t:this.ikNode_114,p:{rotation:4.7,y:198.5,x:242.7,regX:4.9}},{t:this.ikNode_115,p:{regX:10.1,rotation:10,x:242.4,y:283.1}},{t:this.ikNode_116,p:{regY:4.8,rotation:-2.4,x:226.6,y:372.3}},{t:this.ikNode_105,p:{rotation:-2.6,x:233.2,y:114,regY:17.3}},{t:this.ikNode_108,p:{rotation:15.5,x:236.8,y:109.5}},{t:this.ikNode_109,p:{regX:3.7,regY:4.1,rotation:-68.9,x:217.3,y:158.4}},{t:this.ikNode_110,p:{rotation:-117.9,x:265,y:175.1,regY:15.8}}]},1).to({state:[{t:this.ikNode_117,p:{rotation:-83.4,x:242.7,y:198.8,regX:5.7}},{t:this.ikNode_118,p:{rotation:-80.2,x:327.2,y:204.8,regX:5.5}},{t:this.ikNode_119,p:{regX:1.7,regY:5.1,rotation:-81.4,x:417.2,y:220.2}},{t:this.ikNode_111,p:{regY:3.3,rotation:37.2,x:229.5,y:110.3}},{t:this.ikNode_112,p:{regX:4.8,regY:3.9,rotation:-59.2,x:193.8,y:147.4}},{t:this.ikNode_113,p:{rotation:-112.6,x:238.9,y:170.5,regX:5.4}},{t:this.ikNode_103},{t:this.ikNode_104,p:{regX:20.7,y:197.8,x:242.2}},{t:this.ikNode_106,p:{rotation:5.6,x:235,y:101.9,regX:5.9}},{t:this.ikNode_107,p:{rotation:-10.3,x:235.9,y:68.4,regY:24.6,regX:23.7,scaleX:0.985,scaleY:0.985}},{t:this.ikNode_114,p:{rotation:8.9,y:198.5,x:242.7,regX:4.8}},{t:this.ikNode_115,p:{regX:10.2,rotation:12.1,x:236.1,y:282.7}},{t:this.ikNode_116,p:{regY:4.8,rotation:-0.9,x:217.2,y:371.5}},{t:this.ikNode_105,p:{rotation:-8.5,x:224.7,y:115.4,regY:17.3}},{t:this.ikNode_108,p:{rotation:20.9,x:227.8,y:110.6}},{t:this.ikNode_109,p:{regX:3.6,regY:4.1,rotation:-56.3,x:203.7,y:157.4}},{t:this.ikNode_110,p:{rotation:-105.3,x:246.7,y:184.2,regY:15.8}}]},1).to({state:[{t:this.ikNode_117,p:{rotation:-58.2,x:242.6,y:198.8,regX:5.7}},{t:this.ikNode_118,p:{rotation:-32.7,x:316.5,y:240.4,regX:5.4}},{t:this.ikNode_119,p:{regX:1.7,regY:5.1,rotation:-33.9,x:366.1,y:317.2}},{t:this.ikNode_111,p:{regY:3.3,rotation:22.3,x:238.6,y:109.3}},{t:this.ikNode_112,p:{regX:4.8,regY:3.8,rotation:-74.8,x:213.5,y:154.5}},{t:this.ikNode_113,p:{rotation:-113.2,x:263.3,y:167.7,regX:5.4}},{t:this.ikNode_103},{t:this.ikNode_104,p:{regX:20.7,y:197.8,x:242.1}},{t:this.ikNode_106,p:{rotation:0,x:244.9,y:101.6,regX:5.8}},{t:this.ikNode_107,p:{rotation:0,x:242.4,y:68.1,regY:24.6,regX:23.7,scaleX:0.985,scaleY:0.985}},{t:this.ikNode_114,p:{rotation:4.7,y:198.6,x:242.7,regX:4.9}},{t:this.ikNode_115,p:{regX:10.1,rotation:10,x:242.3,y:283.1}},{t:this.ikNode_116,p:{regY:4.8,rotation:-2.4,x:226.6,y:372.3}},{t:this.ikNode_105,p:{rotation:-2.6,x:233.2,y:113.9,regY:17.3}},{t:this.ikNode_108,p:{rotation:15.5,x:236.8,y:109.6}},{t:this.ikNode_109,p:{regX:3.7,regY:4,rotation:-68.9,x:217.2,y:158.3}},{t:this.ikNode_110,p:{rotation:-117.9,x:265,y:175.2,regY:15.8}}]},1).to({state:[{t:this.ikNode_117,p:{rotation:-32.9,x:242.6,y:198.7,regX:5.7}},{t:this.ikNode_118,p:{rotation:14.8,x:291.7,y:268,regX:5.5}},{t:this.ikNode_119,p:{regX:1.7,regY:5.1,rotation:13.5,x:268.6,y:356.5}},{t:this.ikNode_111,p:{regY:3.3,rotation:7.5,x:247.6,y:109.5}},{t:this.ikNode_112,p:{regX:4.8,regY:3.9,rotation:-90.4,x:235.1,y:159.4}},{t:this.ikNode_113,p:{rotation:-113.9,x:287.2,y:161.8,regX:5.4}},{t:this.ikNode_103},{t:this.ikNode_104,p:{regX:20.7,y:197.7,x:241.9}},{t:this.ikNode_106,p:{rotation:-5.7,x:254.9,y:102.3,regX:5.9}},{t:this.ikNode_107,p:{rotation:10.3,x:249.1,y:69.1,regY:24.6,regX:23.7,scaleX:0.985,scaleY:0.985}},{t:this.ikNode_114,p:{rotation:0.6,y:198.4,x:242.6,regX:4.8}},{t:this.ikNode_115,p:{regX:10.1,rotation:7.9,x:248.3,y:282.8}},{t:this.ikNode_116,p:{regY:4.8,rotation:-3.8,x:236.1,y:372.6}},{t:this.ikNode_105,p:{rotation:3.2,x:241.7,y:113.5,regY:17.3}},{t:this.ikNode_108,p:{rotation:8.2,x:245.8,y:109.5}},{t:this.ikNode_109,p:{regX:3.7,regY:4.1,rotation:-82.4,x:232.7,y:160.3}},{t:this.ikNode_110,p:{rotation:-131.4,x:283.2,y:165.4,regY:15.9}}]},1).to({state:[{t:this.ikNode_117,p:{rotation:-31.7,x:242.6,y:198.8,regX:5.7}},{t:this.ikNode_118,p:{rotation:10,x:290.2,y:269,regX:5.5}},{t:this.ikNode_119,p:{regX:1.7,regY:5,rotation:9.2,x:274.3,y:359}},{t:this.ikNode_111,p:{regY:3.3,rotation:-5.2,x:244.6,y:109.3}},{t:this.ikNode_112,p:{regX:4.8,regY:3.9,rotation:-88.4,x:243.5,y:161}},{t:this.ikNode_113,p:{rotation:-111.9,x:295.2,y:164.3,regX:5.4}},{t:this.ikNode_103},{t:this.ikNode_104,p:{regX:20.7,y:197.8,x:242}},{t:this.ikNode_106,p:{rotation:2.2,x:251.7,y:102,regX:5.9}},{t:this.ikNode_107,p:{rotation:13.2,x:250.6,y:68.4,regY:24.6,regX:23.7,scaleX:0.985,scaleY:0.985}},{t:this.ikNode_114,p:{rotation:-1.8,y:198.3,x:242.7,regX:4.8}},{t:this.ikNode_115,p:{regX:10.2,rotation:12.1,x:252.2,y:282.4}},{t:this.ikNode_116,p:{regY:4.8,rotation:-3.6,x:233.2,y:371.1}},{t:this.ikNode_105,p:{rotation:1.3,x:239,y:113.3,regY:17.2}},{t:this.ikNode_108,p:{rotation:2.4,x:242.9,y:109.5}},{t:this.ikNode_109,p:{regX:3.7,regY:4.1,rotation:-89.8,x:235.1,y:161.3}},{t:this.ikNode_110,p:{rotation:-128.8,x:285.7,y:159.8,regY:15.9}}]},1).to({state:[{t:this.ikNode_117,p:{rotation:-30.4,x:242.6,y:198.7,regX:5.7}},{t:this.ikNode_118,p:{rotation:5.3,x:288.7,y:270.1,regX:5.5}},{t:this.ikNode_119,p:{regX:1.7,regY:5.1,rotation:4.9,x:280.2,y:361.2}},{t:this.ikNode_111,p:{regY:3.4,rotation:-17.9,x:241.7,y:109.5}},{t:this.ikNode_112,p:{regX:4.8,regY:3.9,rotation:-86.4,x:252,y:159.9}},{t:this.ikNode_113,p:{rotation:-109.9,x:303.1,y:164,regX:5.4}},{t:this.ikNode_103},{t:this.ikNode_104,p:{regX:20.7,y:197.8,x:242.1}},{t:this.ikNode_106,p:{rotation:10.2,x:248.5,y:101.8,regX:5.9}},{t:this.ikNode_107,p:{rotation:16.1,x:252.1,y:68.4,regY:24.6,regX:23.8,scaleX:0.986,scaleY:0.986}},{t:this.ikNode_114,p:{rotation:-4.3,y:198.3,x:242.7,regX:4.8}},{t:this.ikNode_115,p:{regX:10.2,rotation:16.2,x:255.8,y:281.9}},{t:this.ikNode_116,p:{regY:4.7,rotation:-3.3,x:230.5,y:368.9}},{t:this.ikNode_105,p:{rotation:-0.4,x:236.2,y:113.7,regY:17.3}},{t:this.ikNode_108,p:{rotation:-3.9,x:240,y:109.5}},{t:this.ikNode_109,p:{regX:3.7,regY:4.1,rotation:-97.3,x:238,y:162}},{t:this.ikNode_110,p:{rotation:-126.3,x:288.1,y:153.8,regY:15.9}}]},1).to({state:[{t:this.ikNode_117,p:{rotation:-29.1,x:242.7,y:198.7,regX:5.8}},{t:this.ikNode_118,p:{rotation:0.6,x:287.1,y:271.1,regX:5.5}},{t:this.ikNode_119,p:{regX:1.8,regY:5.1,rotation:0.6,x:286.3,y:362.6}},{t:this.ikNode_111,p:{regY:3.3,rotation:-30.6,x:238.6,y:109.6}},{t:this.ikNode_112,p:{regX:4.8,regY:3.9,rotation:-84.4,x:260,y:156.4}},{t:this.ikNode_113,p:{rotation:-107.9,x:310.5,y:161.3,regX:5.5}},{t:this.ikNode_103},{t:this.ikNode_104,p:{regX:20.7,y:197.8,x:242.2}},{t:this.ikNode_106,p:{rotation:18.1,x:245.3,y:101.6,regX:5.9}},{t:this.ikNode_107,p:{rotation:19,x:253.4,y:68.9,regY:24.5,regX:23.7,scaleX:0.985,scaleY:0.985}},{t:this.ikNode_114,p:{rotation:-6.8,y:198.2,x:242.8,regX:4.8}},{t:this.ikNode_115,p:{regX:10.2,rotation:20.3,x:259.5,y:281.1}},{t:this.ikNode_116,p:{regY:4.8,rotation:-3.1,x:227.7,y:366.2}},{t:this.ikNode_105,p:{rotation:-2.3,x:233.4,y:113.8,regY:17.3}},{t:this.ikNode_108,p:{rotation:-10.7,x:237.1,y:109.5}},{t:this.ikNode_109,p:{regX:3.7,regY:4.1,rotation:-104.5,x:241.4,y:162.1}},{t:this.ikNode_110,p:{rotation:-123.5,x:290,y:147.6,regY:15.9}}]},1).to({state:[]},1).wait(57));

	// ik_man
	this.ikNode_144 = new lib.hand();
	this.ikNode_144.setTransform(293.7,82,0.979,0.979,-135.1,0,0,5.5,16);

	this.ikNode_143 = new lib.arm_lower();
	this.ikNode_143.setTransform(273,133.9,0.979,0.985,-156.9,0,0,3.6,4.5);

	this.ikNode_142 = new lib.arm_upper();
	this.ikNode_142.setTransform(225.8,110,0.982,0.982,-68.9,0,0,8.6,3.6);

	this.ikNode_139 = new lib.torso_1();
	this.ikNode_139.setTransform(222.8,114.8,0.983,0.983,-8.9,0,0,12.9,17);

	this.ikNode_150 = new lib.feet();
	this.ikNode_150.setTransform(227.7,365.6,0.985,0.985,-3.1,0,0,4.2,4.4);

	this.ikNode_149 = new lib.leg_lower();
	this.ikNode_149.setTransform(259.2,281.1,0.985,0.985,20.3,0,0,10.1,2.3);

	this.ikNode_148 = new lib.leg_upper();
	this.ikNode_148.setTransform(242.6,198,0.979,0.979,-6.8,0,0,4.5,2.6);

	this.ikNode_141 = new lib.head_1();
	this.ikNode_141.setTransform(221.8,70.4,0.985,0.985,-4.9,0,0,24.3,24.4);

	this.ikNode_140 = new lib.neck();
	this.ikNode_140.setTransform(234.4,101.9,0.984,0.984,-17.8,0,0,6,12.4);

	this.ikNode_138 = new lib.pelvis_1();
	this.ikNode_138.setTransform(241.2,197.4,0.987,0.987,-2,0,0,19.9,18.2);

	this.ikNode_137 = new lib.ghost();
	this.ikNode_137.setTransform(251.3,440.5,1,1,0,0,0,20.5,20.5);
	this.ikNode_137.alpha = 0;

	this.ikNode_147 = new lib.hand();
	this.ikNode_147.setTransform(306.4,70,0.977,0.978,-139.2,0,0,5.2,16.1);

	this.ikNode_146 = new lib.arm_lower();
	this.ikNode_146.setTransform(280.3,111.2,0.978,0.984,-146.6,0,0,4.9,3.7);

	this.ikNode_145 = new lib.arm_upper();
	this.ikNode_145.setTransform(228.5,110.3,0.979,0.979,-95.4,0,0,9.5,3.1);

	this.ikNode_153 = new lib.feet();
	this.ikNode_153.setTransform(285.7,362.2,0.985,0.985,0.6,0,0,1.7,4.9);

	this.ikNode_152 = new lib.leg_lower();
	this.ikNode_152.setTransform(286.6,270.9,0.986,0.986,0.6,0,0,5.4,1.3);

	this.ikNode_151 = new lib.leg_upper();
	this.ikNode_151.setTransform(243.1,198.6,0.981,0.981,-29.1,0,0,6.1,4.4);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[]},15).to({state:[]},7).to({state:[]},7).to({state:[]},11).to({state:[{t:this.ikNode_151,p:{x:243.1,y:198.6}},{t:this.ikNode_152,p:{x:286.6,y:270.9}},{t:this.ikNode_153,p:{x:285.7,y:362.2}},{t:this.ikNode_145,p:{rotation:-95.4,x:228.5,y:110.3}},{t:this.ikNode_146,p:{regX:4.9,rotation:-146.6,x:280.3,y:111.2,regY:3.7}},{t:this.ikNode_147,p:{rotation:-139.2,x:306.4,y:70}},{t:this.ikNode_137},{t:this.ikNode_138,p:{x:241.2,y:197.4}},{t:this.ikNode_140,p:{rotation:-17.8,x:234.4,y:101.9}},{t:this.ikNode_141,p:{regY:24.4,rotation:-4.9,x:221.8,y:70.4}},{t:this.ikNode_148,p:{rotation:-6.8,x:242.6,y:198}},{t:this.ikNode_149,p:{x:259.2}},{t:this.ikNode_150,p:{y:365.6}},{t:this.ikNode_139,p:{rotation:-8.9,x:222.8,y:114.8,regY:17}},{t:this.ikNode_142,p:{regX:8.6,regY:3.6,rotation:-68.9,x:225.8,y:110}},{t:this.ikNode_143,p:{rotation:-156.9,x:273,y:133.9}},{t:this.ikNode_144,p:{rotation:-135.1,x:293.7,y:82}}]},11).to({state:[{t:this.ikNode_151,p:{x:243,y:198.7}},{t:this.ikNode_152,p:{x:286.8,y:270.9}},{t:this.ikNode_153,p:{x:285.8,y:362.4}},{t:this.ikNode_145,p:{rotation:-73.8,x:232,y:109.7}},{t:this.ikNode_146,p:{regX:4.8,rotation:-125.9,x:279.8,y:129.8,regY:3.7}},{t:this.ikNode_147,p:{rotation:-123.7,x:318.7,y:100.3}},{t:this.ikNode_137},{t:this.ikNode_138,p:{x:241.4,y:197.4}},{t:this.ikNode_140,p:{rotation:-5.8,x:237.9,y:101.8}},{t:this.ikNode_141,p:{regY:24.3,rotation:3,x:232.2,y:68.4}},{t:this.ikNode_148,p:{rotation:-6.9,x:242.6,y:198}},{t:this.ikNode_149,p:{x:259.2}},{t:this.ikNode_150,p:{y:365.8}},{t:this.ikNode_139,p:{rotation:-6.7,x:226.2,y:114.3,regY:17}},{t:this.ikNode_142,p:{regX:8.4,regY:3.5,rotation:-49.5,x:229.3,y:109.7}},{t:this.ikNode_143,p:{rotation:-139.5,x:265.9,y:147.9}},{t:this.ikNode_144,p:{rotation:-131.3,x:301.5,y:104.8}}]},1).to({state:[{t:this.ikNode_151,p:{x:242.9,y:198.8}},{t:this.ikNode_152,p:{x:286.9,y:270.8}},{t:this.ikNode_153,p:{x:285.8,y:362.4}},{t:this.ikNode_145,p:{rotation:-52.2,x:235.4,y:109.4}},{t:this.ikNode_146,p:{regX:4.8,rotation:-105.1,x:272.3,y:145.6,regY:3.6}},{t:this.ikNode_147,p:{rotation:-108.3,x:319.4,y:131.8}},{t:this.ikNode_137},{t:this.ikNode_138,p:{x:241.6,y:197.4}},{t:this.ikNode_140,p:{rotation:6.1,x:241.5,y:101.7}},{t:this.ikNode_141,p:{regY:24.3,rotation:11,x:242.7,y:67.8}},{t:this.ikNode_148,p:{rotation:-6.9,x:242.7,y:198.1}},{t:this.ikNode_149,p:{x:259.3}},{t:this.ikNode_150,p:{y:365.9}},{t:this.ikNode_139,p:{rotation:-4.5,x:229.7,y:113.8,regY:17}},{t:this.ikNode_142,p:{regX:8.5,regY:3.5,rotation:-30.1,x:233.2,y:109.3}},{t:this.ikNode_143,p:{rotation:-122,x:254.8,y:157.5}},{t:this.ikNode_144,p:{rotation:-127.4,x:301.7,y:127.4}}]},1).to({state:[{t:this.ikNode_151,p:{x:242.7,y:198.8}},{t:this.ikNode_152,p:{x:286.9,y:270.8}},{t:this.ikNode_153,p:{x:285.8,y:362.4}},{t:this.ikNode_145,p:{rotation:-30.6,x:238.8,y:109.1}},{t:this.ikNode_146,p:{regX:4.8,rotation:-84.4,x:259.9,y:156.5,regY:3.8}},{t:this.ikNode_147,p:{rotation:-92.9,x:308.7,y:160.1}},{t:this.ikNode_137},{t:this.ikNode_138,p:{x:241.8,y:197.3}},{t:this.ikNode_140,p:{rotation:18.1,x:245.1,y:101.7}},{t:this.ikNode_141,p:{regY:24.3,rotation:19,x:253.3,y:68.9}},{t:this.ikNode_148,p:{rotation:-6.9,x:242.7,y:198.1}},{t:this.ikNode_149,p:{x:259.3}},{t:this.ikNode_150,p:{y:366}},{t:this.ikNode_139,p:{rotation:-2.3,x:233.1,y:113.5,regY:16.9}},{t:this.ikNode_142,p:{regX:8.5,regY:3.6,rotation:-10.7,x:237,y:109.2}},{t:this.ikNode_143,p:{rotation:-104.6,x:241.1,y:161.7}},{t:this.ikNode_144,p:{rotation:-123.6,x:294.9,y:147.2}}]},1).to({state:[]},1).wait(53));

	// ik_man
	this.ikNode_161 = new lib.hand();
	this.ikNode_161.setTransform(322.4,197.5,0.978,0.979,-76.8,0,0,5.7,15.2);

	this.ikNode_160 = new lib.arm_lower();
	this.ikNode_160.setTransform(282.1,159.6,0.978,0.984,-46.7,0,0,4.3,4.2);

	this.ikNode_159 = new lib.arm_upper();
	this.ikNode_159.setTransform(262.3,110,0.981,0.981,-29.3,0,0,9.5,3.8);

	this.ikNode_156 = new lib.torso_1();
	this.ikNode_156.setTransform(257.4,112.6,0.983,0.983,14.1,0,0,13.3,16.5);

	this.ikNode_167 = new lib.feet();
	this.ikNode_167.setTransform(225.8,365.6,0.984,0.984,-2.3,0,0,4.6,4.5);

	this.ikNode_166 = new lib.leg_lower();
	this.ikNode_166.setTransform(258.1,281.1,0.984,0.984,21.2,0,0,10,2.3);

	this.ikNode_165 = new lib.leg_upper();
	this.ikNode_165.setTransform(242.7,197.5,0.979,0.979,-6,0,0,4.5,2);

	this.ikNode_158 = new lib.head_1();
	this.ikNode_158.setTransform(288.8,77.2,0.984,0.984,35.5,0,0,23.4,24.3);

	this.ikNode_157 = new lib.neck();
	this.ikNode_157.setTransform(271.9,106.7,0.983,0.983,34.6,0,0,5.7,12.2);

	this.ikNode_155 = new lib.pelvis_1();
	this.ikNode_155.setTransform(241.8,196.8,0.986,0.986,-2,0,0,19.9,16.8);

	this.ikNode_154 = new lib.ghost();
	this.ikNode_154.setTransform(251.3,440.5,1,1,0,0,0,20.5,20.5);
	this.ikNode_154.alpha = 0;

	this.ikNode_164 = new lib.hand();
	this.ikNode_164.setTransform(310.7,199.5,0.977,0.978,-49.4,0,0,5.3,16.1);

	this.ikNode_163 = new lib.arm_lower();
	this.ikNode_163.setTransform(281.7,160.4,0.977,0.984,-35.8,0,0,5,3.6);

	this.ikNode_162 = new lib.arm_upper();
	this.ikNode_162.setTransform(264.1,111.7,0.979,0.979,-26.8,0,0,10.2,3.1);

	this.ikNode_170 = new lib.feet();
	this.ikNode_170.setTransform(285.6,362.3,0.985,0.985,0.6,0,0,1.6,4.9);

	this.ikNode_169 = new lib.leg_lower();
	this.ikNode_169.setTransform(286.6,270.4,0.985,0.985,0.6,0,0,5.2,0.6);

	this.ikNode_168 = new lib.leg_upper();
	this.ikNode_168.setTransform(242.8,198.7,0.98,0.98,-29.1,0,0,6.1,4.4);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[]},15).to({state:[]},7).to({state:[]},7).to({state:[]},11).to({state:[]},11).to({state:[{t:this.ikNode_168,p:{y:198.7}},{t:this.ikNode_169,p:{x:286.6,y:270.4}},{t:this.ikNode_170,p:{x:285.6,y:362.3}},{t:this.ikNode_162,p:{regX:10.2,rotation:-26.8,x:264.1,y:111.7}},{t:this.ikNode_163,p:{rotation:-35.8,x:281.7,y:160.4,regY:3.6}},{t:this.ikNode_164,p:{rotation:-49.4,x:310.7,y:199.5}},{t:this.ikNode_154},{t:this.ikNode_155,p:{regY:16.8,x:241.8,y:196.8}},{t:this.ikNode_157,p:{rotation:34.6,x:271.9,y:106.7,regY:12.2,regX:5.7}},{t:this.ikNode_158,p:{rotation:35.5,x:288.8,y:77.2}},{t:this.ikNode_165,p:{regX:4.5,regY:2,x:242.7,y:197.5,rotation:-6}},{t:this.ikNode_166,p:{regX:10,rotation:21.2,x:258.1,y:281.1}},{t:this.ikNode_167,p:{regX:4.6,x:225.8,rotation:-2.3,y:365.6,regY:4.5}},{t:this.ikNode_156,p:{rotation:14.1,x:257.4,y:112.6,regY:16.5,regX:13.3}},{t:this.ikNode_159,p:{rotation:-29.3,x:262.3,y:110,regY:3.8}},{t:this.ikNode_160,p:{rotation:-46.7,x:282.1,y:159.6,regY:4.2}},{t:this.ikNode_161,p:{rotation:-76.8,x:322.4,y:197.5,regX:5.7}}]},4).to({state:[{t:this.ikNode_168,p:{y:198.6}},{t:this.ikNode_169,p:{x:286.6,y:270.4}},{t:this.ikNode_170,p:{x:285.6,y:362.3}},{t:this.ikNode_162,p:{regX:10.3,rotation:7.9,x:285.4,y:120.3}},{t:this.ikNode_163,p:{rotation:-33.3,x:271.9,y:170.2,regY:3.6}},{t:this.ikNode_164,p:{rotation:-80.7,x:299.2,y:210.5}},{t:this.ikNode_154},{t:this.ikNode_155,p:{regY:16.7,x:241.7,y:196.7}},{t:this.ikNode_157,p:{rotation:47.3,x:294.1,y:117.4,regY:12.2,regX:5.7}},{t:this.ikNode_158,p:{rotation:26.9,x:317.1,y:92.5}},{t:this.ikNode_165,p:{regX:4.7,regY:1.9,x:242.8,y:197.3,rotation:-6}},{t:this.ikNode_166,p:{regX:10,rotation:21.2,x:258.1,y:281.1}},{t:this.ikNode_167,p:{regX:4.5,x:225.7,rotation:-2.3,y:365.6,regY:4.5}},{t:this.ikNode_156,p:{rotation:29,x:278.4,y:119.4,regY:16.5,regX:13.3}},{t:this.ikNode_159,p:{rotation:5.2,x:284,y:118.1,regY:3.8}},{t:this.ikNode_160,p:{rotation:-40.8,x:272.2,y:170.2,regY:4.2}},{t:this.ikNode_161,p:{rotation:-75.8,x:308.2,y:212.1,regX:5.7}}]},1).to({state:[{t:this.ikNode_168,p:{y:198.6}},{t:this.ikNode_169,p:{x:286.6,y:270.4}},{t:this.ikNode_170,p:{x:285.6,y:362.3}},{t:this.ikNode_162,p:{regX:10.2,rotation:-9.4,x:275,y:115.3}},{t:this.ikNode_163,p:{rotation:-34.6,x:277,y:166.8,regY:3.5}},{t:this.ikNode_164,p:{rotation:-65.1,x:305.3,y:206.7}},{t:this.ikNode_154},{t:this.ikNode_155,p:{regY:16.7,x:241.7,y:196.7}},{t:this.ikNode_157,p:{rotation:40.9,x:283.3,y:111.4,regY:12.3,regX:5.7}},{t:this.ikNode_158,p:{rotation:31.2,x:303.5,y:84}},{t:this.ikNode_165,p:{regX:4.7,regY:1.9,x:242.9,y:197.3,rotation:-6}},{t:this.ikNode_166,p:{regX:10,rotation:21.2,x:258.1,y:281.1}},{t:this.ikNode_167,p:{regX:4.5,x:225.7,rotation:-2.3,y:365.6,regY:4.5}},{t:this.ikNode_156,p:{rotation:21.5,x:268.1,y:115.4,regY:16.6,regX:13.3}},{t:this.ikNode_159,p:{rotation:-12,x:273.4,y:113.4,regY:3.8}},{t:this.ikNode_160,p:{rotation:-43.8,x:277.7,y:166.6,regY:4.2}},{t:this.ikNode_161,p:{rotation:-76.3,x:315.8,y:206.6,regX:5.7}}]},1).to({state:[{t:this.ikNode_168,p:{y:198.6}},{t:this.ikNode_169,p:{x:286.6,y:270.4}},{t:this.ikNode_170,p:{x:285.6,y:362.3}},{t:this.ikNode_162,p:{regX:10.2,rotation:-26.8,x:264.1,y:111.7}},{t:this.ikNode_163,p:{rotation:-35.8,x:281.7,y:160.4,regY:3.6}},{t:this.ikNode_164,p:{rotation:-49.4,x:310.6,y:199.5}},{t:this.ikNode_154},{t:this.ikNode_155,p:{regY:16.7,x:241.7,y:196.7}},{t:this.ikNode_157,p:{rotation:34.6,x:271.9,y:106.8,regY:12.3,regX:5.7}},{t:this.ikNode_158,p:{rotation:35.5,x:288.9,y:77.2}},{t:this.ikNode_165,p:{regX:4.7,regY:1.9,x:242.9,y:197.3,rotation:-6}},{t:this.ikNode_166,p:{regX:10,rotation:21.2,x:258.1,y:281.1}},{t:this.ikNode_167,p:{regX:4.5,x:225.7,rotation:-2.3,y:365.6,regY:4.5}},{t:this.ikNode_156,p:{rotation:14.1,x:257.4,y:112.6,regY:16.5,regX:13.3}},{t:this.ikNode_159,p:{rotation:-29.3,x:262.3,y:110,regY:3.8}},{t:this.ikNode_160,p:{rotation:-46.7,x:282.2,y:159.6,regY:4.2}},{t:this.ikNode_161,p:{rotation:-76.8,x:322.4,y:197.4,regX:5.8}}]},1).to({state:[{t:this.ikNode_168,p:{y:198.7}},{t:this.ikNode_169,p:{x:286.7,y:270.5}},{t:this.ikNode_170,p:{x:285.7,y:362.4}},{t:this.ikNode_162,p:{regX:10.2,rotation:-28.1,x:256,y:110}},{t:this.ikNode_163,p:{rotation:-52,x:274.7,y:158.2,regY:3.6}},{t:this.ikNode_164,p:{rotation:-63.9,x:313.5,y:187.6}},{t:this.ikNode_154},{t:this.ikNode_155,p:{regY:16.7,x:241.8,y:196.9}},{t:this.ikNode_157,p:{rotation:29.1,x:263.3,y:104.2,regY:12.3,regX:5.8}},{t:this.ikNode_158,p:{rotation:30,x:277.5,y:73.4}},{t:this.ikNode_165,p:{regX:4.6,regY:1.9,x:242.8,y:197.6,rotation:-6.3}},{t:this.ikNode_166,p:{regX:10.1,rotation:20.9,x:258.6,y:281.2}},{t:this.ikNode_167,p:{regX:4.5,x:226.2,rotation:-2.6,y:365.7,regY:4.5}},{t:this.ikNode_156,p:{rotation:8.6,x:249.3,y:112.2,regY:16.5,regX:13.3}},{t:this.ikNode_159,p:{rotation:-23.1,x:254,y:109,regY:3.8}},{t:this.ikNode_160,p:{rotation:-66,x:268.8,y:159.9,regY:4.3}},{t:this.ikNode_161,p:{rotation:-92.4,x:319.2,y:182.5,regX:5.7}}]},1).to({state:[{t:this.ikNode_168,p:{y:198.8}},{t:this.ikNode_169,p:{x:286.8,y:270.7}},{t:this.ikNode_170,p:{x:285.7,y:362.4}},{t:this.ikNode_162,p:{regX:10.2,rotation:-29.3,x:247.5,y:109.3}},{t:this.ikNode_163,p:{rotation:-68.2,x:267.3,y:156.8,regY:3.6}},{t:this.ikNode_164,p:{rotation:-78.4,x:313.1,y:174.2}},{t:this.ikNode_154},{t:this.ikNode_155,p:{regY:16.7,x:241.9,y:197.1}},{t:this.ikNode_157,p:{rotation:23.6,x:254.4,y:102.6,regY:12.3,regX:5.8}},{t:this.ikNode_158,p:{rotation:24.5,x:265.4,y:70.6}},{t:this.ikNode_165,p:{regX:4.5,regY:1.9,x:242.7,y:197.9,rotation:-6.6}},{t:this.ikNode_166,p:{regX:10,rotation:20.6,x:258.9,y:281.1}},{t:this.ikNode_167,p:{regX:4.5,x:226.8,rotation:-2.8,y:365.8,regY:4.4}},{t:this.ikNode_156,p:{rotation:3.1,x:241.1,y:112.5,regY:16.5,regX:13.2}},{t:this.ikNode_159,p:{rotation:-16.9,x:245.5,y:108.5,regY:3.7}},{t:this.ikNode_160,p:{rotation:-85.3,x:254.8,y:160.6,regY:4.2}},{t:this.ikNode_161,p:{rotation:-108,x:310.1,y:165.1,regX:5.7}}]},1).to({state:[{t:this.ikNode_168,p:{y:198.8}},{t:this.ikNode_169,p:{x:286.8,y:270.8}},{t:this.ikNode_170,p:{x:285.8,y:362.4}},{t:this.ikNode_162,p:{regX:10.3,rotation:-30.6,x:239,y:109.2}},{t:this.ikNode_163,p:{rotation:-84.4,x:259.8,y:156.4,regY:3.6}},{t:this.ikNode_164,p:{rotation:-92.9,x:308.7,y:160.2}},{t:this.ikNode_154},{t:this.ikNode_155,p:{regY:16.7,x:242,y:197.3}},{t:this.ikNode_157,p:{rotation:18.1,x:245.1,y:101.8,regY:12.3,regX:5.7}},{t:this.ikNode_158,p:{rotation:19,x:253.2,y:69}},{t:this.ikNode_165,p:{regX:4.6,regY:1.9,x:242.7,y:198.1,rotation:-6.8}},{t:this.ikNode_166,p:{regX:10.1,rotation:20.3,x:259.3,y:281.2}},{t:this.ikNode_167,p:{regX:4.5,x:227.4,rotation:-3.1,y:366,regY:4.5}},{t:this.ikNode_156,p:{rotation:-2.3,x:233,y:113.7,regY:16.5,regX:13.2}},{t:this.ikNode_159,p:{rotation:-10.7,x:237,y:109.3,regY:3.8}},{t:this.ikNode_160,p:{rotation:-104.6,x:241,y:161.6,regY:4.2}},{t:this.ikNode_161,p:{rotation:-123.6,x:294.7,y:147.4,regX:5.7}}]},1).to({state:[]},1).wait(46));

	// ik_man
	this.ikNode_178 = new lib.hand();
	this.ikNode_178.setTransform(294.7,147.4,0.977,0.978,-123.6,0,0,5.8,15.3);

	this.ikNode_177 = new lib.arm_lower();
	this.ikNode_177.setTransform(241,161.8,0.977,0.983,-104.6,0,0,4,4.3);

	this.ikNode_176 = new lib.arm_upper();
	this.ikNode_176.setTransform(237.1,109.2,0.98,0.98,-10.7,0,0,10.2,3.5);

	this.ikNode_173 = new lib.torso_1();
	this.ikNode_173.setTransform(233,113.7,0.982,0.983,-2.3,0,0,12.1,16.4);

	this.ikNode_184 = new lib.feet();
	this.ikNode_184.setTransform(227.5,366,0.983,0.984,-3.1,0,0,4.5,4);

	this.ikNode_183 = new lib.leg_lower();
	this.ikNode_183.setTransform(259.3,281.1,0.983,0.983,20.3,0,0,9.8,2.1);

	this.ikNode_182 = new lib.leg_upper();
	this.ikNode_182.setTransform(242.7,198.1,0.978,0.978,-6.8,0,0,4.3,2.4);

	this.ikNode_175 = new lib.head_1();
	this.ikNode_175.setTransform(253.1,69,0.983,0.983,19,0,0,22.9,23.7);

	this.ikNode_174 = new lib.neck();
	this.ikNode_174.setTransform(245.1,101.6,0.982,0.982,18.1,0,0,5.6,11.6);

	this.ikNode_172 = new lib.pelvis_1();
	this.ikNode_172.setTransform(242.1,197.4,0.985,0.985,-2,0,0,18.3,16.6);

	this.ikNode_171 = new lib.ghost();
	this.ikNode_171.setTransform(251.3,440.6,1,1,0,0,0,21.5,20.6);
	this.ikNode_171.alpha = 0;

	this.ikNode_181 = new lib.hand();
	this.ikNode_181.setTransform(308.6,160.1,0.976,0.977,-92.8,0,0,4.8,16);

	this.ikNode_180 = new lib.arm_lower();
	this.ikNode_180.setTransform(259.9,156.4,0.976,0.984,-84.4,0,0,4.3,3.6);

	this.ikNode_179 = new lib.arm_upper();
	this.ikNode_179.setTransform(238.9,109.2,0.977,0.978,-30.7,0,0,10.2,3.3);

	this.ikNode_187 = new lib.feet();
	this.ikNode_187.setTransform(285.7,362.5,0.984,0.984,0.6,0,0,1.5,4.5);

	this.ikNode_186 = new lib.leg_lower();
	this.ikNode_186.setTransform(286.8,270.8,0.984,0.984,0.6,0,0,4.8,1.6);

	this.ikNode_185 = new lib.leg_upper();
	this.ikNode_185.setTransform(242.8,198.8,0.979,0.979,-29.1,0,0,6.9,4.4);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[]},15).to({state:[]},7).to({state:[]},7).to({state:[]},11).to({state:[]},11).to({state:[]},4).to({state:[{t:this.ikNode_185,p:{rotation:-29.1,x:242.8,y:198.8,regX:6.9,regY:4.4}},{t:this.ikNode_186,p:{rotation:0.6,x:286.8,y:270.8,regY:1.6}},{t:this.ikNode_187,p:{rotation:0.6,x:285.7,y:362.5,regX:1.5,regY:4.5}},{t:this.ikNode_179,p:{regX:10.2,regY:3.3,rotation:-30.7,x:238.9,y:109.2,scaleY:0.978}},{t:this.ikNode_180,p:{rotation:-84.4,x:259.9,y:156.4,scaleY:0.984}},{t:this.ikNode_181,p:{rotation:-92.8,x:308.6,y:160.1,regX:4.8}},{t:this.ikNode_171,p:{x:251.3,y:440.6,regX:21.5,rotation:0}},{t:this.ikNode_172,p:{regX:18.3,x:242.1,y:197.4,rotation:-2}},{t:this.ikNode_174,p:{regX:5.6,rotation:18.1,x:245.1,y:101.6,regY:11.6}},{t:this.ikNode_175,p:{rotation:19,x:253.1,y:69,regY:23.7,regX:22.9}},{t:this.ikNode_182,p:{rotation:-6.8,x:242.7,y:198.1,scaleX:0.978,scaleY:0.978}},{t:this.ikNode_183,p:{rotation:20.3,x:259.3,y:281.1,regY:2.1}},{t:this.ikNode_184,p:{regX:4.5,rotation:-3.1,x:227.5,y:366}},{t:this.ikNode_173,p:{rotation:-2.3,x:233,y:113.7}},{t:this.ikNode_176,p:{regX:10.2,rotation:-10.7,x:237.1,y:109.2}},{t:this.ikNode_177,p:{regX:4,rotation:-104.6,x:241,y:161.8,regY:4.3}},{t:this.ikNode_178,p:{regX:5.8,rotation:-123.6,x:294.7,y:147.4,scaleX:0.977}}]},7).to({state:[{t:this.ikNode_185,p:{rotation:-38.4,x:239.4,y:213.6,regX:6.9,regY:4.4}},{t:this.ikNode_186,p:{rotation:7.2,x:294.8,y:277.4,regY:1.6}},{t:this.ikNode_187,p:{rotation:-1.2,x:283.3,y:368.3,regX:1.5,regY:4.5}},{t:this.ikNode_179,p:{regX:10.1,regY:3.4,rotation:-22.2,x:248.1,y:124.8,scaleY:0.978}},{t:this.ikNode_180,p:{rotation:-76,x:262.1,y:174.4,scaleY:0.984}},{t:this.ikNode_181,p:{rotation:-84.4,x:309.6,y:185.3,regX:4.8}},{t:this.ikNode_171,p:{x:251.5,y:440.6,regX:21.5,rotation:0}},{t:this.ikNode_172,p:{regX:18.2,x:238.2,y:212.2,rotation:-2}},{t:this.ikNode_174,p:{regX:5.5,rotation:26.5,x:255.3,y:117.9,regY:11.6}},{t:this.ikNode_175,p:{rotation:27.5,x:267.6,y:86.8,regY:23.7,regX:22.9}},{t:this.ikNode_182,p:{rotation:-27.8,x:239.2,y:211.9,scaleX:0.978,scaleY:0.978}},{t:this.ikNode_183,p:{rotation:18.2,x:284.2,y:283.5,regY:2.1}},{t:this.ikNode_184,p:{regX:4.6,rotation:-1.1,x:256.3,y:369.4}},{t:this.ikNode_173,p:{rotation:6,x:241.3,y:128.2}},{t:this.ikNode_176,p:{regX:10.1,rotation:-46,x:245.8,y:124}},{t:this.ikNode_177,p:{regX:4.1,rotation:-158.2,x:280,y:164.6,regY:4.3}},{t:this.ikNode_178,p:{regX:5.7,rotation:-177.2,x:300.3,y:113.4,scaleX:0.977}}]},1).to({state:[{t:this.ikNode_185,p:{rotation:-31.4,x:242.3,y:172.3,regX:6.8,regY:4.4}},{t:this.ikNode_186,p:{rotation:0.2,x:289.5,y:242.4,regY:1.6}},{t:this.ikNode_187,p:{rotation:44.5,x:289,y:334.1,regX:1.6,regY:4.4}},{t:this.ikNode_179,p:{regX:10.1,regY:3.3,rotation:-55.9,x:200.7,y:92.6,scaleY:0.978}},{t:this.ikNode_180,p:{rotation:-109.7,x:240.1,y:126.1,scaleY:0.984}},{t:this.ikNode_181,p:{rotation:-118.1,x:285.6,y:108.9,regX:4.8}},{t:this.ikNode_171,p:{x:254.5,y:399.3,regX:21.5,rotation:0}},{t:this.ikNode_172,p:{regX:18.2,x:241,y:170.9,rotation:-2}},{t:this.ikNode_174,p:{regX:5.6,rotation:-7,x:203.2,y:82.9,regY:11.6}},{t:this.ikNode_175,p:{rotation:-6.1,x:196.2,y:50,regY:23.6,regX:22.9}},{t:this.ikNode_182,p:{rotation:-6,x:242.2,y:170.6,scaleX:0.977,scaleY:0.977}},{t:this.ikNode_183,p:{rotation:3.1,x:257.3,y:253.7,regY:2.1}},{t:this.ikNode_184,p:{regX:4.6,rotation:61,x:252.7,y:343.9}},{t:this.ikNode_173,p:{rotation:-27.5,x:197,y:99.3}},{t:this.ikNode_176,p:{regX:10.1,rotation:-79.6,x:198.6,y:93.2}},{t:this.ikNode_177,p:{regX:4,rotation:168.1,x:249.7,y:108.2,regY:4.3}},{t:this.ikNode_178,p:{regX:5.7,rotation:149.1,x:238,y:54.2,scaleX:0.977}}]},1).to({state:[{t:this.ikNode_185,p:{rotation:-77.6,x:225.6,y:151.2,regX:6.9,regY:4.4}},{t:this.ikNode_186,p:{rotation:-70.3,x:309,y:165.9,regY:1.7}},{t:this.ikNode_187,p:{rotation:-55.4,x:395.1,y:196.7,regX:1.5,regY:4.5}},{t:this.ikNode_179,p:{regX:10.1,regY:3.4,rotation:-65.8,x:170.8,y:79.8,scaleY:0.978}},{t:this.ikNode_180,p:{rotation:-119.6,x:215.4,y:105.9,scaleY:0.984}},{t:this.ikNode_181,p:{rotation:-128,x:257.4,y:81.1,regX:4.8}},{t:this.ikNode_171,p:{x:295.9,y:370.8,regX:21.4,rotation:-14.9}},{t:this.ikNode_172,p:{regX:18.2,x:223.9,y:150.6,rotation:-17}},{t:this.ikNode_174,p:{regX:5.6,rotation:-17,x:171.5,y:69.6,regY:11.7}},{t:this.ikNode_175,p:{rotation:-16.1,x:158.9,y:39.2,regY:23.7,regX:22.9}},{t:this.ikNode_182,p:{rotation:-32.6,x:225,y:150.3,scaleX:0.978,scaleY:0.978}},{t:this.ikNode_183,p:{rotation:-15.9,x:275.8,y:217.4,regY:2.2}},{t:this.ikNode_184,p:{regX:4.6,rotation:27.7,x:301,y:304.6}},{t:this.ikNode_173,p:{rotation:-37.5,x:168.3,y:86.9}},{t:this.ikNode_176,p:{regX:10.1,rotation:-80.9,x:169,y:81.4}},{t:this.ikNode_177,p:{regX:4,rotation:170.5,x:219.8,y:95,regY:4.3}},{t:this.ikNode_178,p:{regX:5.7,rotation:151.5,x:210.8,y:40.6,scaleX:0.977}}]},1).to({state:[{t:this.ikNode_185,p:{rotation:-102.8,x:232.2,y:147.3,regX:6.9,regY:4.4}},{t:this.ikNode_186,p:{rotation:-102.8,x:313.8,y:125.2,regY:1.6}},{t:this.ikNode_187,p:{rotation:-117.2,x:403,y:104.9,regX:1.6,regY:4.5}},{t:this.ikNode_179,p:{regX:10.1,regY:3.4,rotation:-75.8,x:165.7,y:86.3,scaleY:0.977}},{t:this.ikNode_180,p:{rotation:-129.6,x:214.5,y:103.9,scaleY:0.983}},{t:this.ikNode_181,p:{rotation:-138,x:251.4,y:72,regX:4.9}},{t:this.ikNode_171,p:{x:357.9,y:344.3,regX:21.4,rotation:-29.9}},{t:this.ikNode_172,p:{regX:18.3,x:230.6,y:147,rotation:-32}},{t:this.ikNode_174,p:{regX:5.6,rotation:-26.9,x:165,y:75.7,regY:11.6}},{t:this.ikNode_175,p:{rotation:-26,x:147.2,y:48.7,regY:23.7,regX:22.9}},{t:this.ikNode_182,p:{rotation:-59.1,x:231.7,y:147,scaleX:0.977,scaleY:0.977}},{t:this.ikNode_183,p:{rotation:-35,x:306.8,y:183.7,regY:2.1}},{t:this.ikNode_184,p:{regX:4.6,rotation:-5.6,x:359.5,y:258.2}},{t:this.ikNode_173,p:{rotation:-47.4,x:164.8,y:93.3}},{t:this.ikNode_176,p:{regX:10.1,rotation:-82.1,x:164.5,y:88.5}},{t:this.ikNode_177,p:{regX:4,rotation:173,x:215,y:100.6,regY:4.3}},{t:this.ikNode_178,p:{regX:5.7,rotation:154,x:208.8,y:46.3,scaleX:0.976}}]},1).to({state:[{t:this.ikNode_185,p:{rotation:163.4,x:198.1,y:163.2,regX:6.9,regY:4.4}},{t:this.ikNode_186,p:{rotation:-109.3,x:171,y:83.3,regY:1.6}},{t:this.ikNode_187,p:{rotation:-116.5,x:257,y:52.9,regX:1.6,regY:4.4}},{t:this.ikNode_179,p:{regX:10.1,regY:3.4,rotation:-158.2,x:127.9,y:221.1,scaleY:0.978}},{t:this.ikNode_180,p:{rotation:147.9,x:151.4,y:174.6,scaleY:0.984}},{t:this.ikNode_181,p:{rotation:139.5,x:124.8,y:134,regX:4.8}},{t:this.ikNode_171,p:{x:392.7,y:300.9,regX:21.5,rotation:-52.4}},{t:this.ikNode_172,p:{regX:18.2,x:196.5,y:164,rotation:-54.5}},{t:this.ikNode_174,p:{regX:5.6,rotation:-122.7,x:116.7,y:220.2,regY:11.6}},{t:this.ikNode_175,p:{rotation:-140.4,x:92.8,y:240.5,regY:23.7,regX:22.9}},{t:this.ikNode_182,p:{rotation:-117.9,x:197.7,y:163.5,scaleX:0.978,scaleY:0.978}},{t:this.ikNode_183,p:{rotation:-93.4,x:267.3,y:118.4,regY:2.1}},{t:this.ikNode_184,p:{regX:4.6,rotation:-83.3,x:359.3,y:112.7}},{t:this.ikNode_173,p:{rotation:-129.8,x:134.2,y:222.7}},{t:this.ikNode_176,p:{regX:10.1,rotation:-161.7,x:130.7,y:222.3}},{t:this.ikNode_177,p:{regX:4,rotation:98.9,x:150.9,y:175.4,regY:4.3}},{t:this.ikNode_178,p:{regX:5.8,rotation:79.9,x:97.6,y:166.2,scaleX:0.977}}]},1).to({state:[{t:this.ikNode_185,p:{rotation:130.2,x:211.7,y:205,regX:6.9,regY:4.4}},{t:this.ikNode_186,p:{rotation:-171,x:145.4,y:152.8,regY:1.6}},{t:this.ikNode_187,p:{rotation:-171,x:159.3,y:62.6,regX:1.6,regY:4.5}},{t:this.ikNode_179,p:{regX:10.1,regY:3.4,rotation:119.3,x:256.9,y:282.8,scaleY:0.978}},{t:this.ikNode_180,p:{rotation:65.5,x:213.4,y:253.4,scaleY:0.984}},{t:this.ikNode_181,p:{rotation:57.1,x:169.6,y:274.5,regX:4.8}},{t:this.ikNode_171,p:{x:447.7,y:259.4,regX:21.5,rotation:-74.9}},{t:this.ikNode_172,p:{regX:18.2,x:210.1,y:205.7,rotation:-77}},{t:this.ikNode_174,p:{regX:5.6,rotation:141.4,x:254.2,y:294,regY:11.6}},{t:this.ikNode_175,p:{rotation:105.1,x:276.4,y:314.7,regY:23.7,regX:23}},{t:this.ikNode_182,p:{rotation:142.6,x:211.7,y:205.4,scaleX:0.977,scaleY:0.977}},{t:this.ikNode_183,p:{rotation:-129.1,x:156.2,y:145,regY:2.2}},{t:this.ikNode_184,p:{regX:4.6,rotation:-94.4,x:228.1,y:86.4}},{t:this.ikNode_173,p:{rotation:147.7,x:259,y:276.9}},{t:this.ikNode_176,p:{regX:10.1,rotation:118.6,x:258.1,y:279.2}},{t:this.ikNode_177,p:{regX:4.1,rotation:24.8,x:216.4,y:251.6,regY:4.3}},{t:this.ikNode_178,p:{regX:5.7,rotation:5.8,x:192.3,y:299.6,scaleX:0.977}}]},1).to({state:[{t:this.ikNode_185,p:{rotation:-26,x:196,y:244.9,regX:6.8,regY:4.3}},{t:this.ikNode_186,p:{rotation:59.5,x:235.8,y:319.4,regY:1.6}},{t:this.ikNode_187,p:{rotation:27,x:157.3,y:365.8,regX:1.6,regY:4.5}},{t:this.ikNode_179,p:{regX:10.1,regY:3.4,rotation:16.8,x:260.8,y:184.8,scaleY:0.978}},{t:this.ikNode_180,p:{rotation:-36.9,x:241.7,y:233.6,scaleY:0.984}},{t:this.ikNode_181,p:{rotation:-45.3,x:271.6,y:271.5,regX:4.8}},{t:this.ikNode_171,p:{x:433.5,y:300.3,regX:21.5,rotation:-74.9}},{t:this.ikNode_172,p:{regX:18.2,x:195.9,y:247,rotation:-77}},{t:this.ikNode_174,p:{regX:5.6,rotation:39,x:272.6,y:184.9,regY:11.6}},{t:this.ikNode_175,p:{rotation:2.6,x:287.9,y:158.7,regY:23.7,regX:23}},{t:this.ikNode_182,p:{rotation:8.9,x:194.4,y:246.1,scaleX:0.978,scaleY:0.978}},{t:this.ikNode_183,p:{rotation:77.7,x:189.1,y:328.1,regY:2.1}},{t:this.ikNode_184,p:{regX:4.7,rotation:67.4,x:98.6,y:347.8}},{t:this.ikNode_173,p:{rotation:45.2,x:254.6,y:184}},{t:this.ikNode_176,p:{regX:10.1,rotation:16.2,x:257.1,y:184.3}},{t:this.ikNode_177,p:{regX:4,rotation:-77.6,x:239.5,y:231.1,regY:4.4}},{t:this.ikNode_178,p:{regX:5.8,rotation:-96.6,x:291.2,y:244,scaleX:0.977}}]},1).to({state:[{t:this.ikNode_185,p:{rotation:-50,x:232.7,y:221.8,regX:6.9,regY:4.4}},{t:this.ikNode_186,p:{rotation:12.6,x:299.3,y:273.6,regY:1.7}},{t:this.ikNode_187,p:{rotation:-5.8,x:279.4,y:363,regX:1.6,regY:4.5}},{t:this.ikNode_179,p:{regX:10.1,regY:3.4,rotation:-30.7,x:228.6,y:132.6,scaleY:0.978}},{t:this.ikNode_180,p:{rotation:-84.4,x:249.6,y:179.5,scaleY:0.983}},{t:this.ikNode_181,p:{rotation:-92.8,x:298.4,y:183.3,regX:4.8}},{t:this.ikNode_171,p:{x:241,y:463.7,regX:21.5,rotation:0}},{t:this.ikNode_172,p:{regX:18.2,x:231.7,y:220.6,rotation:-2}},{t:this.ikNode_174,p:{regX:5.6,rotation:18.1,x:235,y:124.7,regY:11.6}},{t:this.ikNode_175,p:{rotation:19,x:242.8,y:92,regY:23.7,regX:22.9}},{t:this.ikNode_182,p:{rotation:25.7,x:232.5,y:221.2,scaleX:0.977,scaleY:0.977}},{t:this.ikNode_183,p:{rotation:35.5,x:201.7,y:300,regY:2.1}},{t:this.ikNode_184,p:{regX:4.6,rotation:11.9,x:148.9,y:373.7}},{t:this.ikNode_173,p:{rotation:-2.3,x:222.7,y:136.9}},{t:this.ikNode_176,p:{regX:10.1,rotation:-10.7,x:226.8,y:132.4}},{t:this.ikNode_177,p:{regX:4,rotation:-104.6,x:230.8,y:184.9,regY:4.3}},{t:this.ikNode_178,p:{regX:5.8,rotation:-123.6,x:284.5,y:170.6,scaleX:0.976}}]},1).to({state:[{t:this.ikNode_185,p:{rotation:-29.1,x:242.8,y:198.8,regX:6.9,regY:4.4}},{t:this.ikNode_186,p:{rotation:0.6,x:286.8,y:270.8,regY:1.6}},{t:this.ikNode_187,p:{rotation:0.6,x:285.7,y:362.5,regX:1.5,regY:4.5}},{t:this.ikNode_179,p:{regX:10.1,regY:3.4,rotation:-30.7,x:238.9,y:109.4,scaleY:0.978}},{t:this.ikNode_180,p:{rotation:-84.4,x:259.9,y:156.4,scaleY:0.984}},{t:this.ikNode_181,p:{rotation:-92.8,x:308.6,y:160.1,regX:4.8}},{t:this.ikNode_171,p:{x:251.3,y:440.6,regX:21.5,rotation:0}},{t:this.ikNode_172,p:{regX:18.2,x:242,y:197.4,rotation:-2}},{t:this.ikNode_174,p:{regX:5.6,rotation:18.1,x:245.2,y:101.6,regY:11.6}},{t:this.ikNode_175,p:{rotation:19,x:253,y:68.9,regY:23.7,regX:22.9}},{t:this.ikNode_182,p:{rotation:-6.8,x:242.7,y:198.2,scaleX:0.978,scaleY:0.978}},{t:this.ikNode_183,p:{rotation:20.3,x:259.3,y:281.1,regY:2.1}},{t:this.ikNode_184,p:{regX:4.5,rotation:-3.1,x:227.5,y:366}},{t:this.ikNode_173,p:{rotation:-2.3,x:233,y:113.7}},{t:this.ikNode_176,p:{regX:10.1,rotation:-10.7,x:237,y:109.2}},{t:this.ikNode_177,p:{regX:4,rotation:-104.6,x:241.1,y:161.8,regY:4.3}},{t:this.ikNode_178,p:{regX:5.8,rotation:-123.6,x:294.7,y:147.4,scaleX:0.977}}]},1).to({state:[]},1).wait(36));

	// ik_man
	this.ikNode_195 = new lib.hand();
	this.ikNode_195.setTransform(262.6,164.6,0.976,0.977,-97.3,0,0,5.5,15.1);

	this.ikNode_194 = new lib.arm_lower();
	this.ikNode_194.setTransform(208.2,153.6,0.977,0.983,-78.3,0,0,4,4.4);

	this.ikNode_193 = new lib.arm_upper();
	this.ikNode_193.setTransform(227.8,104.8,0.98,0.98,15.4,0,0,10,3.3);

	this.ikNode_190 = new lib.torso_1();
	this.ikNode_190.setTransform(224.4,109.6,0.981,0.983,-9.2,0,0,11.9,15.6);

	this.ikNode_201 = new lib.feet();
	this.ikNode_201.setTransform(245.8,367.3,0.983,0.983,3,0,0,4.8,4.2);

	this.ikNode_200 = new lib.leg_lower();
	this.ikNode_200.setTransform(250.9,276.8,0.982,0.982,3.1,0,0,9.8,2.2);

	this.ikNode_199 = new lib.leg_upper();
	this.ikNode_199.setTransform(243.8,192.5,0.977,0.977,-0.3,0,0,4.2,2.6);

	this.ikNode_192 = new lib.head_1();
	this.ikNode_192.setTransform(221.9,65.1,0.982,0.982,-44.3,0,0,22.8,23.5);

	this.ikNode_191 = new lib.neck();
	this.ikNode_191.setTransform(234.8,96.3,0.981,0.981,-18.2,0,0,5.5,11.6);

	this.ikNode_189 = new lib.pelvis_1();
	this.ikNode_189.setTransform(243.4,191.7,0.985,0.985,-2,0,0,17.7,17.1);

	this.ikNode_188 = new lib.ghost();
	this.ikNode_188.setTransform(252.6,434.8,1,1,0,0,0,21.5,20.6);
	this.ikNode_188.alpha = 0;

	this.ikNode_198 = new lib.hand();
	this.ikNode_198.setTransform(310.7,126.6,0.975,0.977,-126.4,0,0,4.9,15.9);

	this.ikNode_197 = new lib.arm_lower();
	this.ikNode_197.setTransform(264.4,142.4,0.975,0.983,-107.7,0,0,4.3,3.6);

	this.ikNode_196 = new lib.arm_upper();
	this.ikNode_196.setTransform(229.5,104.5,0.977,0.977,-49.2,0,0,10.1,3.2);

	this.ikNode_204 = new lib.feet();
	this.ikNode_204.setTransform(274.1,363.4,0.983,0.983,0.2,0,0,1.5,4.2);

	this.ikNode_203 = new lib.leg_lower();
	this.ikNode_203.setTransform(274.5,271.8,0.984,0.984,0.2,0,0,4.7,1.5);

	this.ikNode_202 = new lib.leg_upper();
	this.ikNode_202.setTransform(244,193.2,0.979,0.979,-18.8,0,0,6.8,4.3);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[]},15).to({state:[]},7).to({state:[]},7).to({state:[]},11).to({state:[]},11).to({state:[]},4).to({state:[]},7).to({state:[{t:this.ikNode_202,p:{regX:6.8,regY:4.3,rotation:-18.8,x:244,y:193.2}},{t:this.ikNode_203,p:{regY:1.5,rotation:0.2,x:274.5,y:271.8}},{t:this.ikNode_204,p:{rotation:0.2,x:274.1,y:363.4}},{t:this.ikNode_196,p:{regX:10.1,rotation:-49.2,x:229.5,y:104.5}},{t:this.ikNode_197,p:{rotation:-107.7,x:264.4,y:142.4}},{t:this.ikNode_198,p:{rotation:-126.4,x:310.7,y:126.6}},{t:this.ikNode_188,p:{x:252.6,y:434.8}},{t:this.ikNode_189,p:{x:243.4,y:191.7}},{t:this.ikNode_191,p:{regY:11.6,rotation:-18.2,x:234.8,y:96.3}},{t:this.ikNode_192,p:{regX:22.8,regY:23.5,rotation:-44.3,x:221.9,y:65.1}},{t:this.ikNode_199,p:{rotation:-0.3,x:243.8,y:192.5,regY:2.6}},{t:this.ikNode_200,p:{regY:2.2,rotation:3.1,x:250.9,y:276.8}},{t:this.ikNode_201,p:{regY:4.2,rotation:3,x:245.8,y:367.3}},{t:this.ikNode_190,p:{regX:11.9,rotation:-9.2,x:224.4,y:109.6}},{t:this.ikNode_193,p:{regX:10,rotation:15.4,x:227.8,y:104.8}},{t:this.ikNode_194,p:{rotation:-78.3,x:208.2,y:153.6}},{t:this.ikNode_195,p:{rotation:-97.3,x:262.6,y:164.6,regY:15.1}}]},10).to({state:[{t:this.ikNode_202,p:{regX:6.9,regY:4.4,rotation:-23.9,x:243.4,y:196.1}},{t:this.ikNode_203,p:{regY:1.6,rotation:0.4,x:280.8,y:271.7}},{t:this.ikNode_204,p:{rotation:0.4,x:280,y:363.2}},{t:this.ikNode_196,p:{regX:10,rotation:-39.9,x:234.1,y:106.7}},{t:this.ikNode_197,p:{rotation:-96.1,x:262.5,y:149.7}},{t:this.ikNode_198,p:{rotation:-109.6,x:311,y:143.7}},{t:this.ikNode_188,p:{x:251.9,y:437.7}},{t:this.ikNode_189,p:{x:242.8,y:194.6}},{t:this.ikNode_191,p:{regY:11.7,rotation:0,x:239.9,y:99}},{t:this.ikNode_192,p:{regX:22.7,regY:23.4,rotation:-12.6,x:237.3,y:65.2}},{t:this.ikNode_199,p:{rotation:-3.6,x:243.2,y:195.4,regY:2.6}},{t:this.ikNode_200,p:{regY:2.1,rotation:11.7,x:255.2,y:278.9}},{t:this.ikNode_201,p:{regY:4.3,rotation:0,x:236.5,y:367.8}},{t:this.ikNode_190,p:{regX:12,rotation:-5.7,x:228.8,y:111.5}},{t:this.ikNode_193,p:{regX:10.1,rotation:2.3,x:232.5,y:106.9}},{t:this.ikNode_194,p:{rotation:-91.4,x:224.4,y:158.9}},{t:this.ikNode_195,p:{rotation:-110.5,x:279.9,y:157.1,regY:15.1}}]},1).to({state:[{t:this.ikNode_202,p:{regX:6.8,regY:4.4,rotation:-29.1,x:242.7,y:198.9}},{t:this.ikNode_203,p:{regY:1.6,rotation:0.6,x:286.8,y:270.9}},{t:this.ikNode_204,p:{rotation:0.6,x:285.8,y:362.5}},{t:this.ikNode_196,p:{regX:10,rotation:-30.6,x:238.8,y:109.4}},{t:this.ikNode_197,p:{rotation:-84.4,x:259.8,y:156.4}},{t:this.ikNode_198,p:{rotation:-92.8,x:308.7,y:160.2}},{t:this.ikNode_188,p:{x:251.3,y:440.5}},{t:this.ikNode_189,p:{x:242.1,y:197.4}},{t:this.ikNode_191,p:{regY:11.6,rotation:18.1,x:245.1,y:101.7}},{t:this.ikNode_192,p:{regX:22.7,regY:23.4,rotation:19,x:253.1,y:68.9}},{t:this.ikNode_199,p:{rotation:-6.9,x:242.6,y:198.1,regY:2.5}},{t:this.ikNode_200,p:{regY:2.2,rotation:20.3,x:259.2,y:281.1}},{t:this.ikNode_201,p:{regY:4.2,rotation:-3.1,x:227.6,y:365.9}},{t:this.ikNode_190,p:{regX:12,rotation:-2.3,x:233.2,y:113.7}},{t:this.ikNode_193,p:{regX:10,rotation:-10.7,x:237.1,y:109.3}},{t:this.ikNode_194,p:{rotation:-104.6,x:241,y:161.6}},{t:this.ikNode_195,p:{rotation:-123.6,x:294.8,y:147.4,regY:15.2}}]},1).to({state:[]},1).wait(33));

	// ik_man
	this.ikNode_212 = new lib.hand();
	this.ikNode_212.setTransform(294.7,147.4,0.975,0.977,-123.6,0,0,5.5,15.1);

	this.ikNode_211 = new lib.arm_lower();
	this.ikNode_211.setTransform(241,161.6,0.977,0.983,-104.6,0,0,4,4.4);

	this.ikNode_210 = new lib.arm_upper();
	this.ikNode_210.setTransform(237.1,109.3,0.98,0.98,-10.7,0,0,9.9,3.3);

	this.ikNode_207 = new lib.torso_1();
	this.ikNode_207.setTransform(233,113.6,0.981,0.982,-2.3,0,0,11.8,15);

	this.ikNode_218 = new lib.feet();
	this.ikNode_218.setTransform(227.6,366,0.983,0.983,-3.1,0,0,5,4.1);

	this.ikNode_217 = new lib.leg_lower();
	this.ikNode_217.setTransform(259.3,281.1,0.982,0.982,20.3,0,0,10,2.2);

	this.ikNode_216 = new lib.leg_upper();
	this.ikNode_216.setTransform(242.7,198.1,0.977,0.977,-6.8,0,0,4.2,2.5);

	this.ikNode_209 = new lib.head_1();
	this.ikNode_209.setTransform(253.2,68.9,0.982,0.982,19,0,0,22.7,23.4);

	this.ikNode_208 = new lib.neck();
	this.ikNode_208.setTransform(245.2,101.7,0.981,0.981,18.1,0,0,5.7,11.5);

	this.ikNode_206 = new lib.pelvis_1();
	this.ikNode_206.setTransform(242.1,197.4,0.984,0.984,-2,0,0,17.9,17.1);

	this.ikNode_205 = new lib.ghost();
	this.ikNode_205.setTransform(251.3,440.5,1,1,0,0,0,21.5,20.6);
	this.ikNode_205.alpha = 0;

	this.ikNode_215 = new lib.hand();
	this.ikNode_215.setTransform(308.7,160.1,0.975,0.976,-92.8,0,0,4.8,15.8);

	this.ikNode_214 = new lib.arm_lower();
	this.ikNode_214.setTransform(259.9,156.4,0.975,0.983,-84.4,0,0,4.2,3.6);

	this.ikNode_213 = new lib.arm_upper();
	this.ikNode_213.setTransform(238.9,109.3,0.976,0.977,-30.6,0,0,9.8,3);

	this.ikNode_221 = new lib.feet();
	this.ikNode_221.setTransform(285.7,362.4,0.983,0.983,0.6,0,0,1.5,3.8);

	this.ikNode_220 = new lib.leg_lower();
	this.ikNode_220.setTransform(286.8,270.8,0.984,0.984,0.6,0,0,4.6,1.6);

	this.ikNode_219 = new lib.leg_upper();
	this.ikNode_219.setTransform(242.7,198.9,0.979,0.979,-29.1,0,0,6.8,4.3);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[]},15).to({state:[]},7).to({state:[]},7).to({state:[]},11).to({state:[]},11).to({state:[]},4).to({state:[]},7).to({state:[]},10).to({state:[{t:this.ikNode_219,p:{rotation:-29.1,x:242.7,y:198.9,regX:6.8}},{t:this.ikNode_220,p:{regX:4.6,rotation:0.6,x:286.8,y:270.8,regY:1.6}},{t:this.ikNode_221,p:{regX:1.5,rotation:0.6,x:285.7,y:362.4,regY:3.8}},{t:this.ikNode_213,p:{regY:3,rotation:-30.6,x:238.9,y:109.3}},{t:this.ikNode_214,p:{regX:4.2,rotation:-84.4,x:259.9,y:156.4,regY:3.6}},{t:this.ikNode_215,p:{rotation:-92.8,x:308.7,y:160.1,regX:4.8}},{t:this.ikNode_205,p:{x:251.3,y:440.5}},{t:this.ikNode_206,p:{x:242.1,y:197.4}},{t:this.ikNode_208,p:{rotation:18.1,x:245.2,y:101.7,regX:5.7}},{t:this.ikNode_209,p:{rotation:19,x:253.2,y:68.9,regX:22.7,regY:23.4}},{t:this.ikNode_216,p:{regX:4.2,rotation:-6.8,x:242.7,y:198.1,regY:2.5}},{t:this.ikNode_217,p:{regX:10,regY:2.2,rotation:20.3,x:259.3,y:281.1}},{t:this.ikNode_218,p:{regX:5,regY:4.1,rotation:-3.1,x:227.6,y:366,scaleX:0.983}},{t:this.ikNode_207,p:{x:233,y:113.6,rotation:-2.3,regX:11.8}},{t:this.ikNode_210,p:{rotation:-10.7,x:237.1,y:109.3,regY:3.3,regX:9.9}},{t:this.ikNode_211,p:{rotation:-104.6,x:241,y:161.6,regY:4.4}},{t:this.ikNode_212,p:{regX:5.5,rotation:-123.6,x:294.7,y:147.4,scaleX:0.975,regY:15.1}}]},3).to({state:[{t:this.ikNode_219,p:{rotation:-16.1,x:243.4,y:194.1,regX:6.8}},{t:this.ikNode_220,p:{regX:4.5,rotation:-13.4,x:270,y:274.2,regY:1.6}},{t:this.ikNode_221,p:{regX:1.4,rotation:-7.2,x:291.4,y:363.2,regY:3.8}},{t:this.ikNode_213,p:{regY:2.9,rotation:-33.4,x:239.5,y:104.5}},{t:this.ikNode_214,p:{regX:4.3,rotation:-74.8,x:262.8,y:150.5,regY:3.6}},{t:this.ikNode_215,p:{rotation:-82.6,x:310.4,y:162.4,regX:4.8}},{t:this.ikNode_205,p:{x:252,y:435.8}},{t:this.ikNode_206,p:{x:242.9,y:192.6}},{t:this.ikNode_208,p:{rotation:32.4,x:245.8,y:97.1,regX:5.7}},{t:this.ikNode_209,p:{rotation:31.9,x:261.7,y:67.1,regX:22.7,regY:23.4}},{t:this.ikNode_216,p:{regX:4.1,rotation:3.5,x:243.4,y:193.4,regY:2.5}},{t:this.ikNode_217,p:{regX:10.1,regY:2.3,rotation:6.6,x:244.8,y:278.1}},{t:this.ikNode_218,p:{regX:5.1,regY:4,rotation:5.4,x:234.3,y:367.8,scaleX:0.983}},{t:this.ikNode_207,p:{x:233.7,y:108.8,rotation:-2.3,regX:11.8}},{t:this.ikNode_210,p:{rotation:4,x:237.8,y:104.5,regY:3.3,regX:9.9}},{t:this.ikNode_211,p:{rotation:-70.2,x:228.1,y:156.2,regY:4.4}},{t:this.ikNode_212,p:{regX:5.4,rotation:-89.2,x:280.6,y:174.9,scaleX:0.975,regY:15.1}}]},1).to({state:[{t:this.ikNode_219,p:{rotation:-16,x:248.4,y:159.6,regX:6.8}},{t:this.ikNode_220,p:{regX:4.5,rotation:2.2,x:274.8,y:239.6,regY:1.5}},{t:this.ikNode_221,p:{regX:1.5,rotation:17.5,x:271.2,y:331,regY:3.8}},{t:this.ikNode_213,p:{regY:2.9,rotation:-24.3,x:260.2,y:70.8}},{t:this.ikNode_214,p:{regX:4.3,rotation:-35.2,x:276,y:120,regY:3.6}},{t:this.ikNode_215,p:{rotation:-41.1,x:305,y:159.5,regX:4.8}},{t:this.ikNode_205,p:{x:256.8,y:401.2}},{t:this.ikNode_206,p:{x:247.6,y:158}},{t:this.ikNode_208,p:{rotation:30.9,x:267.9,y:64.5,regX:5.6}},{t:this.ikNode_209,p:{rotation:36.6,x:283.2,y:34.3,regX:22.8,regY:23.3}},{t:this.ikNode_216,p:{regX:4.1,rotation:-1.7,x:248.1,y:158.8,regY:2.5}},{t:this.ikNode_217,p:{regX:10.1,regY:2.3,rotation:7.6,x:257.5,y:243}},{t:this.ikNode_218,p:{regX:5.1,regY:4.1,rotation:32.6,x:245.3,y:332.6,scaleX:0.983}},{t:this.ikNode_207,p:{x:253.8,y:73.9,rotation:8.1,regX:11.8}},{t:this.ikNode_210,p:{rotation:31.5,x:258.6,y:70.3,regY:3.2,regX:9.9}},{t:this.ikNode_211,p:{rotation:21.2,x:226.3,y:111.9,regY:4.4}},{t:this.ikNode_212,p:{regX:5.4,rotation:-80.5,x:206.1,y:163.8,scaleX:0.975,regY:15.1}}]},1).to({state:[{t:this.ikNode_219,p:{rotation:-19.3,x:247,y:169.3,regX:6.9}},{t:this.ikNode_220,p:{regX:4.5,rotation:1.8,x:277.9,y:247.8,regY:1.6}},{t:this.ikNode_221,p:{regX:1.5,rotation:13.3,x:275,y:339.4,regY:3.9}},{t:this.ikNode_213,p:{regY:2.9,rotation:-25.9,x:254.9,y:80.1}},{t:this.ikNode_214,p:{regX:4.3,rotation:-47.5,x:272.1,y:128.8,regY:3.6}},{t:this.ikNode_215,p:{rotation:-54.1,x:308.8,y:161.3,regX:4.8}},{t:this.ikNode_205,p:{x:255.4,y:411}},{t:this.ikNode_206,p:{x:246.2,y:167.8}},{t:this.ikNode_208,p:{rotation:27.7,x:262.1,y:73.5,regX:5.6}},{t:this.ikNode_209,p:{rotation:32.2,x:275.7,y:42.5,regX:22.8,regY:23.4}},{t:this.ikNode_216,p:{regX:4.1,rotation:-3,x:246.7,y:168.8,regY:2.6}},{t:this.ikNode_217,p:{regX:10.1,regY:2.3,rotation:10.8,x:258,y:252.5}},{t:this.ikNode_218,p:{regX:5.1,regY:4.1,rotation:23.7,x:240.7,y:341.4,scaleX:0.982}},{t:this.ikNode_207,p:{x:248.7,y:83.6,rotation:5.4,regX:11.8}},{t:this.ikNode_210,p:{rotation:20.9,x:253.2,y:79.8,regY:3.2,regX:9.8}},{t:this.ikNode_211,p:{rotation:-10.2,x:229,y:126.5,regY:4.4}},{t:this.ikNode_212,p:{regX:5.4,rotation:-91.3,x:239,y:181.3,scaleX:0.976,regY:15.1}}]},1).to({state:[{t:this.ikNode_219,p:{rotation:-22.5,x:245.5,y:179.2,regX:6.8}},{t:this.ikNode_220,p:{regX:4.5,rotation:1.4,x:280.9,y:255.6,regY:1.5}},{t:this.ikNode_221,p:{regX:1.5,rotation:9,x:278.7,y:347.2,regY:3.8}},{t:this.ikNode_213,p:{regY:2.9,rotation:-27.5,x:249.7,y:89.6}},{t:this.ikNode_214,p:{regX:4.3,rotation:-59.8,x:268,y:137.9,regY:3.6}},{t:this.ikNode_215,p:{rotation:-67,x:310.8,y:161.7,regX:4.7}},{t:this.ikNode_205,p:{x:254,y:420.9}},{t:this.ikNode_206,p:{x:244.9,y:177.7}},{t:this.ikNode_208,p:{rotation:24.5,x:256.5,y:82.7,regX:5.6}},{t:this.ikNode_209,p:{rotation:27.8,x:268.3,y:51.1,regX:22.8,regY:23.4}},{t:this.ikNode_216,p:{regX:4.1,rotation:-4.3,x:245.4,y:178.5,regY:2.5}},{t:this.ikNode_217,p:{regX:10.1,regY:2.3,rotation:14,x:258.5,y:262.2}},{t:this.ikNode_218,p:{regX:5.1,regY:4,rotation:14.7,x:236.4,y:349.7,scaleX:0.983}},{t:this.ikNode_207,p:{x:243.5,y:93.4,rotation:2.8,regX:11.8}},{t:this.ikNode_210,p:{rotation:10.4,x:247.9,y:89.4,regY:3.3,regX:10}},{t:this.ikNode_211,p:{rotation:-41.7,x:232.6,y:139.9,regY:4.5}},{t:this.ikNode_212,p:{regX:5.4,rotation:-102,x:269.7,y:181.2,scaleX:0.975,regY:15.1}}]},1).to({state:[{t:this.ikNode_219,p:{rotation:-25.8,x:244.1,y:189,regX:6.8}},{t:this.ikNode_220,p:{regX:4.5,rotation:1,x:283.9,y:263.5,regY:1.6}},{t:this.ikNode_221,p:{regX:1.5,rotation:4.8,x:282.3,y:354.9,regY:3.8}},{t:this.ikNode_213,p:{regY:3,rotation:-29.1,x:244.3,y:99.5}},{t:this.ikNode_214,p:{regX:4.3,rotation:-72.1,x:263.9,y:146.9,regY:3.5}},{t:this.ikNode_215,p:{rotation:-79.9,x:310.9,y:161.1,regX:4.8}},{t:this.ikNode_205,p:{x:252.6,y:430.7}},{t:this.ikNode_206,p:{x:243.5,y:187.5}},{t:this.ikNode_208,p:{rotation:21.3,x:250.7,y:92,regX:5.5}},{t:this.ikNode_209,p:{rotation:23.4,x:260.8,y:59.9,regX:22.8,regY:23.4}},{t:this.ikNode_216,p:{regX:4.1,rotation:-5.6,x:244,y:188.3,regY:2.5}},{t:this.ikNode_217,p:{regX:10.1,regY:2.2,rotation:17.2,x:258.9,y:271.6}},{t:this.ikNode_218,p:{regX:5.1,regY:4.1,rotation:5.7,x:232,y:358,scaleX:0.983}},{t:this.ikNode_207,p:{x:238.4,y:103.5,rotation:0.2,regX:11.9}},{t:this.ikNode_210,p:{rotation:-0.1,x:242.4,y:99.3,regY:3.3,regX:9.9}},{t:this.ikNode_211,p:{rotation:-73.1,x:236.8,y:151.6,regY:4.4}},{t:this.ikNode_212,p:{regX:5.4,rotation:-112.8,x:290,y:167.5,scaleX:0.975,regY:15.1}}]},1).to({state:[{t:this.ikNode_219,p:{rotation:-29.1,x:242.7,y:198.9,regX:6.8}},{t:this.ikNode_220,p:{regX:4.6,rotation:0.6,x:286.8,y:270.9,regY:1.6}},{t:this.ikNode_221,p:{regX:1.5,rotation:0.6,x:285.7,y:362.4,regY:3.8}},{t:this.ikNode_213,p:{regY:2.9,rotation:-30.6,x:238.8,y:109.3}},{t:this.ikNode_214,p:{regX:4.2,rotation:-84.4,x:259.9,y:156.4,regY:3.6}},{t:this.ikNode_215,p:{rotation:-92.9,x:308.7,y:160.1,regX:4.8}},{t:this.ikNode_205,p:{x:251.3,y:440.5}},{t:this.ikNode_206,p:{x:242.1,y:197.3}},{t:this.ikNode_208,p:{rotation:18.1,x:245.1,y:101.7,regX:5.6}},{t:this.ikNode_209,p:{rotation:19,x:253.1,y:68.8,regX:22.7,regY:23.4}},{t:this.ikNode_216,p:{regX:4.2,rotation:-6.8,x:242.7,y:198.1,regY:2.5}},{t:this.ikNode_217,p:{regX:10.1,regY:2.3,rotation:20.3,x:259.3,y:281.2}},{t:this.ikNode_218,p:{regX:5.1,regY:4.1,rotation:-3.1,x:227.7,y:365.9,scaleX:0.983}},{t:this.ikNode_207,p:{x:233,y:113.6,rotation:-2.3,regX:11.8}},{t:this.ikNode_210,p:{rotation:-10.7,x:237.1,y:109.3,regY:3.3,regX:9.9}},{t:this.ikNode_211,p:{rotation:-104.6,x:241,y:161.6,regY:4.4}},{t:this.ikNode_212,p:{regX:5.4,rotation:-123.6,x:294.8,y:147.4,scaleX:0.975,regY:15.2}}]},1).to({state:[]},1).wait(26));

	// ik_man copy 2
	this.ikNode_229 = new lib.hand();
	this.ikNode_229.setTransform(299.7,135.1,0.981,0.981,-137.4,0,0,5.5,15.8);

	this.ikNode_228 = new lib.arm_lower();
	this.ikNode_228.setTransform(248.3,160.5,0.98,0.985,-118.4,0,0,4,4.3);

	this.ikNode_227 = new lib.arm_upper();
	this.ikNode_227.setTransform(236.1,109.7,0.983,0.983,-19.5,0,0,9.1,3.8);

	this.ikNode_235 = new lib.feet();
	this.ikNode_235.setTransform(203.7,366.3,0.985,0.985,-3.1,0,0,3.8,4.7);

	this.ikNode_234 = new lib.leg_lower();
	this.ikNode_234.setTransform(239.1,283,0.985,0.985,23,0,0,10,2.5);

	this.ikNode_233 = new lib.leg_upper();
	this.ikNode_233.setTransform(241.2,198.4,0.981,0.981,6,0,0,4.9,3.3);

	this.ikNode_226 = new lib.head_1();
	this.ikNode_226.setTransform(253.5,69,0.986,0.986,21.3,0,0,23.7,24.4);

	this.ikNode_224 = new lib.torso_1();
	this.ikNode_224.setTransform(232.2,113.7,0.985,0.985,-2,0,0,13.9,17.1);

	this.ikNode_225 = new lib.neck();
	this.ikNode_225.setTransform(244.4,101.2,0.986,0.986,20.3,0,0,5.7,12.3);

	this.ikNode_223 = new lib.pelvis_1();
	this.ikNode_223.setTransform(241,198,0.988,0.988,-2,0,0,21.8,19.3);

	this.ikNode_222 = new lib.ghost();
	this.ikNode_222.setTransform(250.1,440.5,1,1,0,0,0,20.5,20.5);
	this.ikNode_222.alpha = 0;

	this.ikNode_232 = new lib.hand();
	this.ikNode_232.setTransform(322.4,143.9,0.979,0.979,-119.2,0,0,5.7,15.7);

	this.ikNode_231 = new lib.arm_lower();
	this.ikNode_231.setTransform(271.4,148.2,0.979,0.985,-95.7,0,0,4.9,3.7);

	this.ikNode_230 = new lib.arm_upper();
	this.ikNode_230.setTransform(238.1,109.6,0.981,0.981,-47.8,0,0,9.6,3.5);

	this.ikNode_238 = new lib.feet();
	this.ikNode_238.setTransform(290,360,0.986,0.986,0.9,0,0,1.6,5.4);

	this.ikNode_237 = new lib.leg_lower();
	this.ikNode_237.setTransform(289.2,268.8,0.987,0.987,-0.3,0,0,5.7,1.9);

	this.ikNode_236 = new lib.leg_upper();
	this.ikNode_236.setTransform(241,198.9,0.981,0.981,-32.1,0,0,5.2,4.3);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[]},15).to({state:[]},7).to({state:[]},7).to({state:[]},11).to({state:[]},11).to({state:[]},4).to({state:[]},7).to({state:[]},10).to({state:[]},3).to({state:[{t:this.ikNode_236,p:{regY:4.3,rotation:-32.1,x:241,y:198.9}},{t:this.ikNode_237,p:{regX:5.7,rotation:-0.3,x:289.2,y:268.8}},{t:this.ikNode_238,p:{regY:5.4,rotation:0.9,x:290,y:360,regX:1.6}},{t:this.ikNode_230,p:{regY:3.5,rotation:-47.8,x:238.1,y:109.6}},{t:this.ikNode_231,p:{regY:3.7,rotation:-95.7,x:271.4,y:148.2}},{t:this.ikNode_232,p:{rotation:-119.2,x:322.4,y:143.9,regX:5.7,regY:15.7}},{t:this.ikNode_222,p:{x:250.1,y:440.5}},{t:this.ikNode_223,p:{x:241,y:198}},{t:this.ikNode_225,p:{rotation:20.3,x:244.4,y:101.2}},{t:this.ikNode_224,p:{regY:17.1,scaleX:0.985,scaleY:0.985,rotation:-2,x:232.2,y:113.7}},{t:this.ikNode_226,p:{regX:23.7,rotation:21.3,x:253.5,y:69}},{t:this.ikNode_233,p:{regX:4.9,regY:3.3,scaleX:0.981,scaleY:0.981,rotation:6,x:241.2,y:198.4}},{t:this.ikNode_234,p:{rotation:23,x:239.1,y:283,regY:2.5}},{t:this.ikNode_235,p:{regY:4.7,rotation:-3.1,x:203.7,y:366.3}},{t:this.ikNode_227,p:{rotation:-19.5,x:236.1,y:109.7,regX:9.1}},{t:this.ikNode_228,p:{rotation:-118.4,x:248.3,y:160.5,regY:4.3}},{t:this.ikNode_229,p:{rotation:-137.4,x:299.7,y:135.1,regX:5.5,regY:15.8}}]},7).to({state:[{t:this.ikNode_236,p:{regY:4.4,rotation:-37.6,x:250.1,y:197.7}},{t:this.ikNode_237,p:{regX:5.8,rotation:9.1,x:304.7,y:262.5}},{t:this.ikNode_238,p:{regY:5.5,rotation:10.4,x:290.3,y:352.7,regX:1.6}},{t:this.ikNode_230,p:{regY:3.6,rotation:-18.8,x:268.3,y:110.2}},{t:this.ikNode_231,p:{regY:3.6,rotation:-69.7,x:278.9,y:159.9}},{t:this.ikNode_232,p:{rotation:-105.6,x:326.9,y:177.3,regX:5.7,regY:15.7}},{t:this.ikNode_222,p:{x:258.8,y:439.2}},{t:this.ikNode_223,p:{x:249.9,y:196.7}},{t:this.ikNode_225,p:{rotation:29.4,x:276.4,y:103.8}},{t:this.ikNode_224,p:{regY:17,scaleX:0.984,scaleY:0.984,rotation:12.1,x:261.7,y:112.7}},{t:this.ikNode_226,p:{regX:23.8,rotation:33.6,x:290.7,y:73.5}},{t:this.ikNode_233,p:{regX:4.8,regY:3.2,scaleX:0.98,scaleY:0.98,rotation:6.3,x:250.1,y:197}},{t:this.ikNode_234,p:{rotation:23.3,x:247.6,y:281.6,regY:2.5}},{t:this.ikNode_235,p:{regY:4.6,rotation:-2.8,x:211.6,y:364.7}},{t:this.ikNode_227,p:{rotation:5.4,x:266.3,y:109.8,regX:9.1}},{t:this.ikNode_228,p:{rotation:-82.9,x:255.8,y:161,regY:4.3}},{t:this.ikNode_229,p:{rotation:-101.9,x:310.4,y:168.6,regX:5.5,regY:15.8}}]},1).to({state:[{t:this.ikNode_236,p:{regY:4.3,rotation:-43.2,x:258.9,y:196.2}},{t:this.ikNode_237,p:{regX:5.7,rotation:18.7,x:319.5,y:255.6}},{t:this.ikNode_238,p:{regY:5.4,rotation:20,x:290.6,y:342.1,regX:1.7}},{t:this.ikNode_230,p:{regY:3.6,rotation:10.1,x:298.6,y:116.2}},{t:this.ikNode_231,p:{regY:3.7,rotation:-43.7,x:283.9,y:165.1}},{t:this.ikNode_232,p:{rotation:-92.1,x:320.2,y:200.5,regX:5.8,regY:15.7}},{t:this.ikNode_222,p:{x:267.6,y:437.8}},{t:this.ikNode_223,p:{x:258.9,y:195.4}},{t:this.ikNode_225,p:{rotation:38.5,x:308,y:112.3}},{t:this.ikNode_224,p:{regY:17.1,scaleX:0.984,scaleY:0.984,rotation:26.2,x:291.7,y:117.2}},{t:this.ikNode_226,p:{regX:23.8,rotation:45.9,x:327,y:84.5}},{t:this.ikNode_233,p:{regX:4.8,regY:3.3,scaleX:0.98,scaleY:0.98,rotation:6.7,x:258.8,y:195.8}},{t:this.ikNode_234,p:{rotation:23.6,x:255.9,y:280.3,regY:2.5}},{t:this.ikNode_235,p:{regY:4.7,rotation:-2.5,x:219.5,y:363.3}},{t:this.ikNode_227,p:{rotation:30.4,x:296.9,y:115.5,regX:9.1}},{t:this.ikNode_228,p:{rotation:-47.4,x:265.7,y:157.4,regY:4.3}},{t:this.ikNode_229,p:{rotation:-66.4,x:304.8,y:192.9,regX:5.5,regY:15.8}}]},1).to({state:[{t:this.ikNode_236,p:{regY:4.3,rotation:-48.7,x:267.7,y:194.9}},{t:this.ikNode_237,p:{regX:5.8,rotation:28.3,x:333.9,y:248.1}},{t:this.ikNode_238,p:{regY:5.5,rotation:29.6,x:290.6,y:328.7,regX:1.6}},{t:this.ikNode_230,p:{regY:3.6,rotation:39.1,x:325.3,y:126.7}},{t:this.ikNode_231,p:{regY:3.7,rotation:-17.7,x:288.8,y:162.4}},{t:this.ikNode_232,p:{rotation:-78.5,x:307.1,y:209.6,regX:5.7,regY:15.7}},{t:this.ikNode_222,p:{x:276.4,y:436.5}},{t:this.ikNode_223,p:{x:267.8,y:194.1}},{t:this.ikNode_225,p:{rotation:47.6,x:335.3,y:125.4}},{t:this.ikNode_224,p:{regY:17.1,scaleX:0.984,scaleY:0.984,rotation:40.4,x:318.5,y:126}},{t:this.ikNode_226,p:{regX:23.8,rotation:58.2,x:358.6,y:100.9}},{t:this.ikNode_233,p:{regX:4.8,regY:3.2,scaleX:0.98,scaleY:0.98,rotation:7,x:267.7,y:194.3}},{t:this.ikNode_234,p:{rotation:24,x:264.3,y:279,regY:2.5}},{t:this.ikNode_235,p:{regY:4.6,rotation:-2.1,x:227.4,y:361.6}},{t:this.ikNode_227,p:{rotation:55.5,x:323.9,y:125.6,regX:9.1}},{t:this.ikNode_228,p:{rotation:-11.8,x:278,y:150.4,regY:4.4}},{t:this.ikNode_229,p:{rotation:-30.9,x:289.9,y:199.5,regX:5.5,regY:15.8}}]},1).to({state:[{t:this.ikNode_236,p:{regY:4.3,rotation:-43.2,x:258.9,y:196.2}},{t:this.ikNode_237,p:{regX:5.7,rotation:18.7,x:319.5,y:255.6}},{t:this.ikNode_238,p:{regY:5.4,rotation:20,x:290.6,y:342.1,regX:1.7}},{t:this.ikNode_230,p:{regY:3.6,rotation:10.1,x:298.6,y:116.2}},{t:this.ikNode_231,p:{regY:3.7,rotation:-43.7,x:283.9,y:165.1}},{t:this.ikNode_232,p:{rotation:-92.1,x:320.2,y:200.5,regX:5.8,regY:15.7}},{t:this.ikNode_222,p:{x:267.6,y:437.8}},{t:this.ikNode_223,p:{x:258.9,y:195.4}},{t:this.ikNode_225,p:{rotation:38.5,x:308,y:112.3}},{t:this.ikNode_224,p:{regY:17.1,scaleX:0.984,scaleY:0.984,rotation:26.2,x:291.7,y:117.2}},{t:this.ikNode_226,p:{regX:23.8,rotation:45.9,x:327,y:84.5}},{t:this.ikNode_233,p:{regX:4.8,regY:3.3,scaleX:0.98,scaleY:0.98,rotation:6.7,x:258.8,y:195.8}},{t:this.ikNode_234,p:{rotation:23.6,x:255.9,y:280.3,regY:2.5}},{t:this.ikNode_235,p:{regY:4.7,rotation:-2.5,x:219.5,y:363.3}},{t:this.ikNode_227,p:{rotation:30.4,x:296.9,y:115.5,regX:9.1}},{t:this.ikNode_228,p:{rotation:-47.4,x:265.7,y:157.4,regY:4.3}},{t:this.ikNode_229,p:{rotation:-66.4,x:304.8,y:192.9,regX:5.5,regY:15.8}}]},1).to({state:[{t:this.ikNode_236,p:{regY:4.4,rotation:-37.6,x:250.1,y:197.7}},{t:this.ikNode_237,p:{regX:5.8,rotation:9.1,x:304.7,y:262.5}},{t:this.ikNode_238,p:{regY:5.5,rotation:10.4,x:290.3,y:352.7,regX:1.6}},{t:this.ikNode_230,p:{regY:3.6,rotation:-18.8,x:268.3,y:110.2}},{t:this.ikNode_231,p:{regY:3.6,rotation:-69.7,x:278.9,y:159.9}},{t:this.ikNode_232,p:{rotation:-105.6,x:326.9,y:177.3,regX:5.7,regY:15.7}},{t:this.ikNode_222,p:{x:258.8,y:439.2}},{t:this.ikNode_223,p:{x:249.9,y:196.7}},{t:this.ikNode_225,p:{rotation:29.4,x:276.4,y:103.8}},{t:this.ikNode_224,p:{regY:17,scaleX:0.984,scaleY:0.984,rotation:12.1,x:261.7,y:112.7}},{t:this.ikNode_226,p:{regX:23.8,rotation:33.6,x:290.7,y:73.5}},{t:this.ikNode_233,p:{regX:4.8,regY:3.2,scaleX:0.98,scaleY:0.98,rotation:6.3,x:250.1,y:197}},{t:this.ikNode_234,p:{rotation:23.3,x:247.6,y:281.6,regY:2.5}},{t:this.ikNode_235,p:{regY:4.6,rotation:-2.8,x:211.6,y:364.7}},{t:this.ikNode_227,p:{rotation:5.4,x:266.3,y:109.8,regX:9.1}},{t:this.ikNode_228,p:{rotation:-82.9,x:255.8,y:161,regY:4.3}},{t:this.ikNode_229,p:{rotation:-101.9,x:310.4,y:168.6,regX:5.5,regY:15.8}}]},1).to({state:[{t:this.ikNode_236,p:{regY:4.3,rotation:-32.1,x:241.1,y:198.9}},{t:this.ikNode_237,p:{regX:5.7,rotation:-0.3,x:289.2,y:268.8}},{t:this.ikNode_238,p:{regY:5.4,rotation:0.9,x:290,y:360,regX:1.6}},{t:this.ikNode_230,p:{regY:3.6,rotation:-47.8,x:238.2,y:109.7}},{t:this.ikNode_231,p:{regY:3.7,rotation:-95.7,x:271.4,y:148.2}},{t:this.ikNode_232,p:{rotation:-119.2,x:322.3,y:144,regX:5.7,regY:15.6}},{t:this.ikNode_222,p:{x:250.1,y:440.5}},{t:this.ikNode_223,p:{x:241,y:198}},{t:this.ikNode_225,p:{rotation:20.3,x:244.4,y:101.3}},{t:this.ikNode_224,p:{regY:17.1,scaleX:0.985,scaleY:0.985,rotation:-2,x:232.2,y:113.7}},{t:this.ikNode_226,p:{regX:23.8,rotation:21.3,x:253.6,y:69}},{t:this.ikNode_233,p:{regX:4.8,regY:3.3,scaleX:0.981,scaleY:0.981,rotation:6,x:241.1,y:198.4}},{t:this.ikNode_234,p:{rotation:23,x:239.2,y:282.9,regY:2.4}},{t:this.ikNode_235,p:{regY:4.7,rotation:-3.1,x:203.7,y:366.3}},{t:this.ikNode_227,p:{rotation:-19.5,x:236.2,y:109.7,regX:9.2}},{t:this.ikNode_228,p:{rotation:-118.4,x:248.3,y:160.5,regY:4.3}},{t:this.ikNode_229,p:{rotation:-137.4,x:299.7,y:134.9,regX:5.6,regY:15.9}}]},1).to({state:[]},1).wait(19));

	// ik_man copy 3
	this.ikNode_246 = new lib.hand();
	this.ikNode_246.setTransform(299.5,135.1,0.98,0.98,-137.4,0,0,5.8,15.8);

	this.ikNode_245 = new lib.arm_lower();
	this.ikNode_245.setTransform(248.2,160.6,0.98,0.985,0,-118.3,-118.4,3.8,4.3);

	this.ikNode_244 = new lib.arm_upper();
	this.ikNode_244.setTransform(235.9,109.7,0.983,0.983,-19.5,0,0,9,3.7);

	this.ikNode_252 = new lib.feet();
	this.ikNode_252.setTransform(203.7,366.3,0.985,0.985,-3.1,0,0,3.8,4.7);

	this.ikNode_251 = new lib.leg_lower();
	this.ikNode_251.setTransform(239.3,283.1,0.985,0.985,23,0,0,10,2.4);

	this.ikNode_250 = new lib.leg_upper();
	this.ikNode_250.setTransform(241.1,198.4,0.98,0.98,6,0,0,4.4,3.2);

	this.ikNode_243 = new lib.head_1();
	this.ikNode_243.setTransform(240.5,67.9,0.986,0.986,3.5,0,0,23.8,24.3);

	this.ikNode_241 = new lib.torso_1();
	this.ikNode_241.setTransform(232.3,113.6,0.984,0.984,-2,0,0,13.9,17);

	this.ikNode_242 = new lib.neck();
	this.ikNode_242.setTransform(244.4,100.9,0.985,0.985,-2.3,0,0,5.7,11.6);

	this.ikNode_240 = new lib.pelvis_1();
	this.ikNode_240.setTransform(241,198,0.988,0.988,-2,0,0,21.8,19.3);

	this.ikNode_239 = new lib.ghost();
	this.ikNode_239.setTransform(250.1,440.5,1,1,0,0,0,20.5,20.5);
	this.ikNode_239.alpha = 0;

	this.ikNode_249 = new lib.hand();
	this.ikNode_249.setTransform(322.5,143.8,0.978,0.978,-119.2,0,0,5.7,15.6);

	this.ikNode_248 = new lib.arm_lower();
	this.ikNode_248.setTransform(271.3,148.2,0.979,0.985,-95.7,0,0,4.7,3.7);

	this.ikNode_247 = new lib.arm_upper();
	this.ikNode_247.setTransform(237.9,109.8,0.98,0.98,-47.8,0,0,9.3,3.4);

	this.ikNode_255 = new lib.feet();
	this.ikNode_255.setTransform(290,360,0.986,0.986,0.9,0,0,1.2,5.2);

	this.ikNode_254 = new lib.leg_lower();
	this.ikNode_254.setTransform(289.2,268.7,0.986,0.986,-0.3,0,0,5.5,1.8);

	this.ikNode_253 = new lib.leg_upper();
	this.ikNode_253.setTransform(241,199,0.981,0.981,-32.1,0,0,5,4.2);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[]},15).to({state:[]},7).to({state:[]},7).to({state:[]},11).to({state:[]},11).to({state:[]},4).to({state:[]},7).to({state:[]},10).to({state:[]},3).to({state:[]},7).to({state:[{t:this.ikNode_253,p:{rotation:-32.1,x:241,y:199,regY:4.2}},{t:this.ikNode_254,p:{regY:1.8,rotation:-0.3,x:289.2,y:268.7,regX:5.5}},{t:this.ikNode_255,p:{rotation:0.9,x:290,y:360,regY:5.2,regX:1.2}},{t:this.ikNode_247,p:{rotation:-47.8,x:237.9,y:109.8,regY:3.4,regX:9.3}},{t:this.ikNode_248,p:{rotation:-95.7,x:271.3,y:148.2,regY:3.7,regX:4.7}},{t:this.ikNode_249,p:{rotation:-119.2,x:322.5,y:143.8,regY:15.6}},{t:this.ikNode_239,p:{x:250.1,y:440.5}},{t:this.ikNode_240,p:{x:241,y:198}},{t:this.ikNode_242,p:{regX:5.7,rotation:-2.3,x:244.4,y:100.9,regY:11.6}},{t:this.ikNode_241,p:{x:232.3,y:113.6,rotation:-2,regY:17,regX:13.9}},{t:this.ikNode_243,p:{regY:24.3,rotation:3.5,x:240.5,y:67.9,regX:23.8}},{t:this.ikNode_250,p:{regX:4.4,rotation:6,x:241.1,y:198.4,regY:3.2}},{t:this.ikNode_251,p:{rotation:23,x:239.3,y:283.1,regY:2.4,regX:10}},{t:this.ikNode_252,p:{regY:4.7,rotation:-3.1,x:203.7,y:366.3,regX:3.8}},{t:this.ikNode_244,p:{rotation:-19.5,x:235.9,y:109.7,regX:9,regY:3.7}},{t:this.ikNode_245,p:{regX:3.8,skewX:-118.3,skewY:-118.4,x:248.2,y:160.6,regY:4.3}},{t:this.ikNode_246,p:{regX:5.8,rotation:-137.4,x:299.5,y:135.1,regY:15.8}}]},7).to({state:[{t:this.ikNode_253,p:{rotation:-20.4,x:237.5,y:192,regY:4.2}},{t:this.ikNode_254,p:{regY:1.9,rotation:6.1,x:270.5,y:270.2,regX:5.5}},{t:this.ikNode_255,p:{rotation:0.8,x:261.1,y:360.9,regY:5.2,regX:1.2}},{t:this.ikNode_247,p:{rotation:-28.2,x:234.6,y:102.8,regY:3.4,regX:9.3}},{t:this.ikNode_248,p:{rotation:-53,x:253.1,y:150.1,regY:3.7,regX:4.7}},{t:this.ikNode_249,p:{rotation:-61.6,x:293.7,y:181.8,regY:15.6}},{t:this.ikNode_239,p:{x:246.6,y:433.5}},{t:this.ikNode_240,p:{x:237.6,y:191}},{t:this.ikNode_242,p:{regX:5.8,rotation:-6.7,x:241.1,y:94.1,regY:11.6}},{t:this.ikNode_241,p:{x:228.9,y:106.7,rotation:-2,regY:17,regX:13.9}},{t:this.ikNode_243,p:{regY:24.4,rotation:-34.9,x:234.6,y:61.4,regX:23.8}},{t:this.ikNode_250,p:{regX:4.3,rotation:8.1,x:237.5,y:191.3,regY:3.2}},{t:this.ikNode_251,p:{rotation:16.6,x:232.7,y:275.9,regY:2.4,regX:10}},{t:this.ikNode_252,p:{regY:4.6,rotation:-0.7,x:206.5,y:362.5,regX:3.8}},{t:this.ikNode_244,p:{rotation:-12.7,x:232.5,y:102.7,regX:9,regY:3.7}},{t:this.ikNode_245,p:{regX:3.7,skewX:-62.1,skewY:-62.2,x:238.7,y:154.8,regY:4.3}},{t:this.ikNode_246,p:{regX:5.9,rotation:-78.8,x:288.5,y:183,regY:15.8}}]},1).to({state:[{t:this.ikNode_253,p:{rotation:-8.7,x:234,y:184.8,regY:4.1}},{t:this.ikNode_254,p:{regY:1.9,rotation:12.5,x:250.5,y:268.3,regX:5.5}},{t:this.ikNode_255,p:{rotation:0.8,x:230.8,y:357.3,regY:5.2,regX:1.2}},{t:this.ikNode_247,p:{rotation:-8.7,x:231.3,y:95.7,regY:3.4,regX:9.3}},{t:this.ikNode_248,p:{rotation:-10.3,x:232.9,y:146.7,regY:3.8,regX:4.7}},{t:this.ikNode_249,p:{rotation:-4,x:241,y:197.1,regY:15.6}},{t:this.ikNode_239,p:{x:243.2,y:426.5}},{t:this.ikNode_240,p:{x:234.2,y:184}},{t:this.ikNode_242,p:{regX:5.7,rotation:-11,x:237.6,y:87.1,regY:11.6}},{t:this.ikNode_241,p:{x:225.4,y:99.8,rotation:-2,regY:17,regX:13.9}},{t:this.ikNode_243,p:{regY:24.4,rotation:-73.4,x:228.7,y:54.8,regX:23.8}},{t:this.ikNode_250,p:{regX:4.4,rotation:10.3,x:234.3,y:184.4,regY:3.2}},{t:this.ikNode_251,p:{rotation:10.3,x:226.1,y:268.6,regY:2.4,regX:10}},{t:this.ikNode_252,p:{regY:4.6,rotation:1.6,x:209.7,y:357.7,regX:3.8}},{t:this.ikNode_244,p:{rotation:-5.9,x:229.3,y:95.6,regX:9,regY:3.7}},{t:this.ikNode_245,p:{regX:3.8,skewX:-5.8,skewY:-5.9,x:229.1,y:148.1,regY:4.3}},{t:this.ikNode_246,p:{regX:5.8,rotation:-20.2,x:233.1,y:205.3,regY:15.8}}]},1).to({state:[{t:this.ikNode_253,p:{rotation:-12.4,x:233.9,y:184.9,regY:4.2}},{t:this.ikNode_254,p:{regY:1.8,rotation:13.9,x:255.6,y:266.9,regX:5.5}},{t:this.ikNode_255,p:{rotation:2.1,x:233.9,y:355.4,regY:5.2,regX:1.2}},{t:this.ikNode_247,p:{rotation:-4.3,x:210.1,y:98.9,regY:3.4,regX:9.3}},{t:this.ikNode_248,p:{rotation:-14.4,x:207.7,y:149.7,regY:3.7,regX:4.7}},{t:this.ikNode_249,p:{rotation:18.7,x:219.8,y:199.6,regY:15.5}},{t:this.ikNode_239,p:{x:243.2,y:426.5}},{t:this.ikNode_240,p:{x:234.2,y:184}},{t:this.ikNode_242,p:{regX:5.7,rotation:-24.8,x:214.3,y:89.1,regY:11.6}},{t:this.ikNode_241,p:{x:205.5,y:104.4,rotation:-15.9,regY:17,regX:13.9}},{t:this.ikNode_243,p:{regY:24.4,rotation:-79.5,x:198.1,y:59.8,regX:23.8}},{t:this.ikNode_250,p:{regX:4.4,rotation:4.8,x:234.1,y:184.3,regY:3.2}},{t:this.ikNode_251,p:{rotation:12.9,x:234.2,y:269.1,regY:2.4,regX:10}},{t:this.ikNode_252,p:{regY:4.5,rotation:4.2,x:213.7,y:357.1,regX:3.8}},{t:this.ikNode_244,p:{rotation:-2.7,x:208.3,y:99.5,regX:9,regY:3.7}},{t:this.ikNode_245,p:{regX:3.7,skewX:-2.7,skewY:-2.7,x:204.9,y:151.8,regY:4.3}},{t:this.ikNode_246,p:{regX:5.8,rotation:-11,x:205.9,y:209.1,regY:15.8}}]},1).to({state:[{t:this.ikNode_253,p:{rotation:-16.1,x:234,y:185,regY:4.2}},{t:this.ikNode_254,p:{regY:1.9,rotation:15.2,x:261,y:265.5,regX:5.5}},{t:this.ikNode_255,p:{rotation:3.4,x:237.1,y:353.2,regY:5.1,regX:1.2}},{t:this.ikNode_247,p:{rotation:0,x:190.5,y:107.1,regY:3.4,regX:9.3}},{t:this.ikNode_248,p:{rotation:-18.5,x:184.2,y:157.7,regY:3.7,regX:4.6}},{t:this.ikNode_249,p:{rotation:41.4,x:199.8,y:206.5,regY:15.5}},{t:this.ikNode_239,p:{x:243.2,y:426.5}},{t:this.ikNode_240,p:{x:234.2,y:184}},{t:this.ikNode_242,p:{regX:5.7,rotation:-34.9,x:192.2,y:96.6,regY:11.6}},{t:this.ikNode_241,p:{x:187.2,y:113.5,rotation:-29.7,regY:16.9,regX:13.9}},{t:this.ikNode_243,p:{regY:24.4,rotation:-115,x:171,y:70.7,regX:23.8}},{t:this.ikNode_250,p:{regX:4.4,rotation:-0.7,x:234.2,y:184.3,regY:3.2}},{t:this.ikNode_251,p:{rotation:15.5,x:242.3,y:268.7,regY:2.5,regX:10}},{t:this.ikNode_252,p:{regY:4.6,rotation:6.9,x:217.7,y:355.8,regX:3.7}},{t:this.ikNode_244,p:{rotation:0.3,x:188.8,y:108.2,regX:9,regY:3.7}},{t:this.ikNode_245,p:{regX:3.7,skewX:0.4,skewY:0.3,x:182.7,y:160.3,regY:4.3}},{t:this.ikNode_246,p:{regX:5.8,rotation:-1.8,x:180.4,y:217.6,regY:15.8}}]},1).to({state:[{t:this.ikNode_253,p:{rotation:-29.5,x:229,y:185,regY:4.2}},{t:this.ikNode_254,p:{regY:1.8,rotation:1.8,x:273.7,y:256.9,regX:5.5}},{t:this.ikNode_255,p:{rotation:-9.9,x:270.9,y:348,regY:5.2,regX:1.2}},{t:this.ikNode_247,p:{rotation:9.5,x:172.5,y:115.9,regY:3.4,regX:9.3}},{t:this.ikNode_248,p:{rotation:-49.8,x:158,y:164.8,regY:3.7,regX:4.7}},{t:this.ikNode_249,p:{rotation:10.1,x:196.5,y:198.5,regY:15.6}},{t:this.ikNode_239,p:{x:238.1,y:426.5}},{t:this.ikNode_240,p:{x:229,y:184}},{t:this.ikNode_242,p:{regX:5.8,rotation:-47.4,x:172.2,y:105.4,regY:11.6}},{t:this.ikNode_241,p:{x:170.5,y:122.8,rotation:-39.9,regY:17,regX:13.9}},{t:this.ikNode_243,p:{regY:24.4,rotation:-90.6,x:146.1,y:84.7,regX:23.8}},{t:this.ikNode_250,p:{regX:4.4,rotation:-0.7,x:228.9,y:184.3,regY:3.2}},{t:this.ikNode_251,p:{rotation:15.5,x:237.1,y:268.6,regY:2.5,regX:10}},{t:this.ikNode_252,p:{regY:4.6,rotation:6.9,x:212.6,y:355.8,regX:3.7}},{t:this.ikNode_244,p:{rotation:-1.8,x:170.9,y:117.3,regX:9,regY:3.7}},{t:this.ikNode_245,p:{regX:3.8,skewX:-50.7,skewY:-50.7,x:167.2,y:169.7,regY:4.3}},{t:this.ikNode_246,p:{regX:5.8,rotation:-53,x:210.1,y:207.3,regY:15.8}}]},1).to({state:[{t:this.ikNode_253,p:{rotation:-42.9,x:224,y:184.9,regY:4.2}},{t:this.ikNode_254,p:{regY:1.9,rotation:-11.5,x:284.2,y:244.6,regX:5.5}},{t:this.ikNode_255,p:{rotation:-23.3,x:302.6,y:333.8,regY:5.2,regX:1.2}},{t:this.ikNode_247,p:{rotation:19,x:156.2,y:127,regY:3.4,regX:9.3}},{t:this.ikNode_248,p:{rotation:-81.1,x:133.9,y:172.7,regY:3.7,regX:4.7}},{t:this.ikNode_249,p:{rotation:-21.1,x:184.3,y:181.6,regY:15.6}},{t:this.ikNode_239,p:{x:233,y:426.4}},{t:this.ikNode_240,p:{x:223.9,y:183.9}},{t:this.ikNode_242,p:{regX:5.8,rotation:-58.4,x:154.3,y:116.5,regY:11.6}},{t:this.ikNode_241,p:{x:155.3,y:134.1,rotation:-50,regY:17,regX:13.9}},{t:this.ikNode_243,p:{regY:24.4,rotation:-119.1,x:124.5,y:101.3,regX:23.8}},{t:this.ikNode_250,p:{regX:4.4,rotation:-0.7,x:223.9,y:184.2,regY:3.2}},{t:this.ikNode_251,p:{rotation:15.5,x:232,y:268.6,regY:2.5,regX:10}},{t:this.ikNode_252,p:{regY:4.6,rotation:6.9,x:207.4,y:355.7,regX:3.7}},{t:this.ikNode_244,p:{rotation:-4,x:154.9,y:128.6,regX:8.9,regY:3.7}},{t:this.ikNode_245,p:{regX:3.8,skewX:-101.8,skewY:-101.9,x:153.2,y:180.9,regY:4.4}},{t:this.ikNode_246,p:{regX:5.8,rotation:-104.1,x:209.5,y:171.2,regY:15.8}}]},1).to({state:[{t:this.ikNode_253,p:{rotation:-56.1,x:213.6,y:201.4,regY:4.2}},{t:this.ikNode_254,p:{regY:1.8,rotation:0.1,x:285.9,y:245.7,regX:5.5}},{t:this.ikNode_255,p:{rotation:-9.7,x:285.6,y:336.7,regY:5.2,regX:1.1}},{t:this.ikNode_247,p:{rotation:-6.4,x:137.6,y:155,regY:3.3,regX:9.3}},{t:this.ikNode_248,p:{rotation:-99.1,x:137.1,y:205.9,regY:3.7,regX:4.7}},{t:this.ikNode_249,p:{rotation:-51,x:187.7,y:198.8,regY:15.6}},{t:this.ikNode_239,p:{x:222.6,y:442.8}},{t:this.ikNode_240,p:{x:213.5,y:200.3}},{t:this.ikNode_242,p:{regX:5.7,rotation:-61.9,x:133.9,y:145.2,regY:11.6}},{t:this.ikNode_241,p:{x:137.8,y:162.2,rotation:-59.1,regY:17,regX:13.9}},{t:this.ikNode_243,p:{regY:24.3,rotation:-120.7,x:103.3,y:131.8,regX:23.8}},{t:this.ikNode_250,p:{regX:4.4,rotation:-45.1,x:213.6,y:200.6,regY:3.2}},{t:this.ikNode_251,p:{rotation:-11.2,x:278.3,y:255.2,regY:2.4,regX:9.9}},{t:this.ikNode_252,p:{regY:4.6,rotation:-22.4,x:295.9,y:343.9,regX:3.8}},{t:this.ikNode_244,p:{rotation:-22.1,x:136.6,y:156.9,regX:9,regY:3.7}},{t:this.ikNode_245,p:{regX:3.8,skewX:-120.1,skewY:-120.2,x:151.1,y:207.2,regY:4.3}},{t:this.ikNode_246,p:{regX:5.8,rotation:-124.8,x:201.7,y:180.3,regY:15.8}}]},1).to({state:[{t:this.ikNode_253,p:{rotation:-69.2,x:203.3,y:217.8,regY:4.2}},{t:this.ikNode_254,p:{regY:1.9,rotation:11.9,x:283.7,y:244.6,regX:5.5}},{t:this.ikNode_255,p:{rotation:3.9,x:265.1,y:333.5,regY:5.2,regX:1.2}},{t:this.ikNode_247,p:{rotation:-31.8,x:121,y:184.4,regY:3.4,regX:9.4}},{t:this.ikNode_248,p:{rotation:-117.1,x:142.4,y:230.5,regY:3.7,regX:4.7}},{t:this.ikNode_249,p:{rotation:-80.9,x:188.3,y:208.1,regY:15.6}},{t:this.ikNode_239,p:{x:212.2,y:459.3}},{t:this.ikNode_240,p:{x:203.1,y:216.8}},{t:this.ikNode_242,p:{regX:5.7,rotation:-65.4,x:115.7,y:175.1,regY:11.6}},{t:this.ikNode_241,p:{x:122.3,y:191.4,rotation:-68.1,regY:17,regX:13.9}},{t:this.ikNode_243,p:{regY:24.4,rotation:-122.4,x:84.5,y:163.5,regX:23.8}},{t:this.ikNode_250,p:{regX:4.4,rotation:-89.6,x:203.2,y:217,regY:3.2}},{t:this.ikNode_251,p:{rotation:-38,x:287.6,y:210.6,regY:2.4,regX:10}},{t:this.ikNode_252,p:{regY:4.6,rotation:-51.7,x:343.3,y:282,regX:3.8}},{t:this.ikNode_244,p:{rotation:-40.2,x:120.2,y:186.2,regX:9,regY:3.6}},{t:this.ikNode_245,p:{regX:3.8,skewX:-138.3,skewY:-138.4,x:149.6,y:229.5,regY:4.3}},{t:this.ikNode_246,p:{regX:5.8,rotation:-145.4,x:189.2,y:188.2,regY:15.8}}]},1).to({state:[{t:this.ikNode_253,p:{rotation:-80.8,x:189.4,y:247.5,regY:4.2}},{t:this.ikNode_254,p:{regY:1.9,rotation:-29.8,x:273.7,y:257.5,regX:5.5}},{t:this.ikNode_255,p:{rotation:-37.9,x:319.1,y:336.4,regY:5.2,regX:1.2}},{t:this.ikNode_247,p:{rotation:-56,x:107,y:214.2,regY:3.4,regX:9.3}},{t:this.ikNode_248,p:{rotation:-134.6,x:145.5,y:247.4,regY:3.7,regX:4.7}},{t:this.ikNode_249,p:{rotation:-98.4,x:182.5,y:212.1,regY:15.6}},{t:this.ikNode_239,p:{x:198.3,y:488.9}},{t:this.ikNode_240,p:{x:189.2,y:246.4}},{t:this.ikNode_242,p:{regX:5.7,rotation:-63.2,x:101.7,y:204.9,regY:11.6}},{t:this.ikNode_241,p:{x:108.4,y:221.1,rotation:-68.1,regY:17,regX:13.9}},{t:this.ikNode_243,p:{regY:24.4,rotation:-113.8,x:71.1,y:192.2,regX:23.7}},{t:this.ikNode_250,p:{regX:4.4,rotation:-93.3,x:189.3,y:246.7,regY:3.2}},{t:this.ikNode_251,p:{rotation:-47,x:273.1,y:235,regY:2.4,regX:10}},{t:this.ikNode_252,p:{regY:4.6,rotation:-60.7,x:339.3,y:296.7,regX:3.8}},{t:this.ikNode_244,p:{rotation:-54.3,x:106.3,y:215.9,regX:9,regY:3.6}},{t:this.ikNode_245,p:{regX:3.8,skewX:-154,skewY:-154,x:145.3,y:250.8,regY:4.3}},{t:this.ikNode_246,p:{regX:5.8,rotation:-161.1,x:172.3,y:200.3,regY:15.8}}]},1).to({state:[{t:this.ikNode_253,p:{rotation:-92.3,x:175.5,y:277.2,regY:4.2}},{t:this.ikNode_254,p:{regY:1.9,rotation:-71.7,x:260.3,y:270.1,regX:5.5}},{t:this.ikNode_255,p:{rotation:-79.7,x:346.7,y:298.6,regY:5.2,regX:1.2}},{t:this.ikNode_247,p:{rotation:-80.2,x:93.3,y:243.9,regY:3.4,regX:9.3}},{t:this.ikNode_248,p:{rotation:-152.1,x:141.8,y:258.4,regY:3.6,regX:4.7}},{t:this.ikNode_249,p:{rotation:-115.9,x:166.5,y:213.7,regY:15.5}},{t:this.ikNode_239,p:{x:184.4,y:518.6}},{t:this.ikNode_240,p:{x:175.4,y:276.1}},{t:this.ikNode_242,p:{regX:5.7,rotation:-61.1,x:87.9,y:234.4,regY:11.6}},{t:this.ikNode_241,p:{x:94.5,y:250.7,rotation:-68.1,regY:17,regX:13.9}},{t:this.ikNode_243,p:{regY:24.4,rotation:-105.2,x:57.7,y:220.6,regX:23.8}},{t:this.ikNode_250,p:{regX:4.4,rotation:-96.9,x:175.3,y:276.4,regY:3.2}},{t:this.ikNode_251,p:{rotation:-55.9,x:258.3,y:259.3,regY:2.4,regX:10}},{t:this.ikNode_252,p:{regY:4.6,rotation:-69.6,x:333.3,y:310,regX:3.8}},{t:this.ikNode_244,p:{rotation:-68.3,x:92.5,y:245.6,regX:9,regY:3.7}},{t:this.ikNode_245,p:{regX:3.8,skewX:-169.6,skewY:-169.7,x:138.8,y:270.1,regY:4.3}},{t:this.ikNode_246,p:{regX:5.9,rotation:-176.7,x:151,y:214.2,regY:15.7}}]},1).to({state:[{t:this.ikNode_253,p:{rotation:-92.3,x:170.2,y:314.5,regY:4.2}},{t:this.ikNode_254,p:{regY:1.9,rotation:-71.7,x:254.9,y:307.4,regX:5.5}},{t:this.ikNode_255,p:{rotation:-79.7,x:341.3,y:335.8,regY:5.2,regX:1.2}},{t:this.ikNode_247,p:{rotation:-95,x:84.2,y:292.8,regY:3.4,regX:9.4}},{t:this.ikNode_248,p:{rotation:-159.8,x:134.9,y:294.6,regY:3.6,regX:4.6}},{t:this.ikNode_249,p:{rotation:-140.9,x:153.5,y:246.9,regY:15.6}},{t:this.ikNode_239,p:{x:179.1,y:555.9}},{t:this.ikNode_240,p:{x:170,y:313.4}},{t:this.ikNode_242,p:{regX:5.7,rotation:-71.7,x:77.6,y:284.3,regY:11.6}},{t:this.ikNode_241,p:{x:86.4,y:299.6,rotation:-76.1,regY:17,regX:13.9}},{t:this.ikNode_243,p:{regY:24.4,rotation:-79.4,x:45.4,y:276.4,regX:23.8}},{t:this.ikNode_250,p:{regX:4.4,rotation:-101,x:170.2,y:313.7,regY:3.3}},{t:this.ikNode_251,p:{rotation:-60,x:251.6,y:290.8,regY:2.5,regX:10}},{t:this.ikNode_252,p:{regY:4.6,rotation:-73.7,x:330.1,y:335.9,regX:3.8}},{t:this.ikNode_244,p:{rotation:-89.6,x:83.7,y:294.7,regX:9,regY:3.7}},{t:this.ikNode_245,p:{regX:3.7,skewX:-179.4,skewY:-179.4,x:135.8,y:300.6,regY:4.4}},{t:this.ikNode_246,p:{regX:5.8,rotation:-169.1,x:138.4,y:243.5,regY:15.7}}]},1).to({state:[{t:this.ikNode_253,p:{rotation:-92.3,x:164.8,y:351.8,regY:4.2}},{t:this.ikNode_254,p:{regY:1.9,rotation:-71.7,x:249.4,y:344.7,regX:5.5}},{t:this.ikNode_255,p:{rotation:-79.7,x:335.9,y:373.1,regY:5.2,regX:1.2}},{t:this.ikNode_247,p:{rotation:-109.7,x:76.8,y:342.4,regY:3.4,regX:9.3}},{t:this.ikNode_248,p:{rotation:-167.4,x:126.2,y:331,regY:3.7,regX:4.7}},{t:this.ikNode_249,p:{rotation:-165.9,x:138.5,y:281.3,regY:15.6}},{t:this.ikNode_239,p:{x:173.7,y:593.2}},{t:this.ikNode_240,p:{x:164.7,y:350.7}},{t:this.ikNode_242,p:{regX:5.7,rotation:-82.4,x:69.1,y:334.8,regY:11.7}},{t:this.ikNode_241,p:{x:79.9,y:348.8,rotation:-84.1,regY:17,regX:13.8}},{t:this.ikNode_243,p:{regY:24.4,rotation:-53.7,x:36,y:332.9,regX:23.8}},{t:this.ikNode_250,p:{regX:4.3,rotation:-105.1,x:165,y:351.1,regY:3.3}},{t:this.ikNode_251,p:{rotation:-64.2,x:244.4,y:322.2,regY:2.4,regX:10}},{t:this.ikNode_252,p:{regY:4.6,rotation:-77.8,x:326,y:361.7,regX:3.8}},{t:this.ikNode_244,p:{rotation:-110.9,x:76.6,y:344.3,regX:9,regY:3.7}},{t:this.ikNode_245,p:{regX:3.8,skewX:170.8,skewY:170.7,x:127.3,y:331,regY:4.3}},{t:this.ikNode_246,p:{regX:5.8,rotation:-161.5,x:120.3,y:274,regY:15.8}}]},1).to({state:[{t:this.ikNode_253,p:{rotation:-92.3,x:166.2,y:340.8,regY:4.2}},{t:this.ikNode_254,p:{regY:1.9,rotation:-71.7,x:250.9,y:333.6,regX:5.5}},{t:this.ikNode_255,p:{rotation:-79.7,x:337.4,y:362,regY:5.2,regX:1.2}},{t:this.ikNode_247,p:{rotation:-109.7,x:78.3,y:331.3,regY:3.4,regX:9.3}},{t:this.ikNode_248,p:{rotation:-167.4,x:127.7,y:319.9,regY:3.7,regX:4.7}},{t:this.ikNode_249,p:{rotation:-165.9,x:140,y:270.2,regY:15.6}},{t:this.ikNode_239,p:{x:175.2,y:582.1}},{t:this.ikNode_240,p:{x:166.1,y:339.6}},{t:this.ikNode_242,p:{regX:5.7,rotation:-87.8,x:70.4,y:323.7,regY:11.6}},{t:this.ikNode_241,p:{x:81.3,y:337.7,rotation:-84.1,regY:17,regX:13.8}},{t:this.ikNode_243,p:{regY:24.3,rotation:-78.3,x:37.3,y:324.8,regX:23.8}},{t:this.ikNode_250,p:{regX:4.3,rotation:-105.1,x:166.4,y:340,regY:3.3}},{t:this.ikNode_251,p:{rotation:-64.2,x:245.8,y:311.1,regY:2.4,regX:10}},{t:this.ikNode_252,p:{regY:4.6,rotation:-77.8,x:327.4,y:350.7,regX:3.8}},{t:this.ikNode_244,p:{rotation:-97.2,x:78.1,y:333.2,regX:8.9,regY:3.7}},{t:this.ikNode_245,p:{regX:3.8,skewX:-159.7,skewY:-159.7,x:130.4,y:332.2,regY:4.3}},{t:this.ikNode_246,p:{regX:5.8,rotation:-132,x:152.4,y:279.1,regY:15.8}}]},1).to({state:[{t:this.ikNode_253,p:{rotation:-92.3,x:167.7,y:329.7,regY:4.2}},{t:this.ikNode_254,p:{regY:1.9,rotation:-71.7,x:252.5,y:322.5,regX:5.5}},{t:this.ikNode_255,p:{rotation:-79.7,x:338.7,y:350.9,regY:5.2,regX:1.2}},{t:this.ikNode_247,p:{rotation:-109.7,x:79.6,y:320.1,regY:3.4,regX:9.3}},{t:this.ikNode_248,p:{rotation:-167.4,x:129.1,y:308.7,regY:3.7,regX:4.7}},{t:this.ikNode_249,p:{rotation:-165.9,x:141.4,y:259,regY:15.6}},{t:this.ikNode_239,p:{x:176.6,y:571}},{t:this.ikNode_240,p:{x:167.5,y:328.5}},{t:this.ikNode_242,p:{regX:5.7,rotation:-93.1,x:71.8,y:312.5,regY:11.6}},{t:this.ikNode_241,p:{x:82.7,y:326.5,rotation:-84.1,regY:17,regX:13.8}},{t:this.ikNode_243,p:{regY:24.4,rotation:-102.9,x:39.1,y:316.9,regX:23.8}},{t:this.ikNode_250,p:{regX:4.3,rotation:-105.1,x:167.8,y:328.9,regY:3.3}},{t:this.ikNode_251,p:{rotation:-64.2,x:247.2,y:300,regY:2.4,regX:10}},{t:this.ikNode_252,p:{regY:4.6,rotation:-77.8,x:328.8,y:339.6,regX:3.8}},{t:this.ikNode_244,p:{rotation:-83.5,x:79.5,y:322,regX:9,regY:3.7}},{t:this.ikNode_245,p:{regX:3.8,skewX:-130.2,skewY:-130.3,x:130.7,y:333.4,regY:4.3}},{t:this.ikNode_246,p:{regX:5.8,rotation:-102.6,x:175.7,y:298.1,regY:15.8}}]},1).to({state:[{t:this.ikNode_253,p:{rotation:-93.2,x:168.1,y:335.8,regY:4.1}},{t:this.ikNode_254,p:{regY:1.9,rotation:-77.3,x:252.8,y:327.3,regX:5.5}},{t:this.ikNode_255,p:{rotation:-85.4,x:341.6,y:347.1,regY:5.2,regX:1.2}},{t:this.ikNode_247,p:{rotation:-108.8,x:79.9,y:328.3,regY:3.4,regX:9.3}},{t:this.ikNode_248,p:{rotation:-150.5,x:129.7,y:317.9,regY:3.7,regX:4.6}},{t:this.ikNode_249,p:{rotation:-149.1,x:155.7,y:273.8,regY:15.6}},{t:this.ikNode_239,p:{x:177,y:577.2}},{t:this.ikNode_240,p:{x:168,y:334.7}},{t:this.ikNode_242,p:{regX:5.7,rotation:-94.4,x:71.9,y:320.9,regY:11.6}},{t:this.ikNode_241,p:{x:83.2,y:334.6,rotation:-85.5,regY:17,regX:13.9}},{t:this.ikNode_243,p:{regY:24.4,rotation:-102.4,x:39.3,y:326.1,regX:23.8}},{t:this.ikNode_250,p:{regX:4.4,rotation:-99.3,x:168.2,y:335,regY:3.2}},{t:this.ikNode_251,p:{rotation:-68.6,x:250.2,y:314.3,regY:2.4,regX:10}},{t:this.ikNode_252,p:{regY:4.6,rotation:-82.3,x:334.6,y:347.3,regX:3.8}},{t:this.ikNode_244,p:{rotation:-82.5,x:79.9,y:330.2,regX:9,regY:3.7}},{t:this.ikNode_245,p:{regX:3.8,skewX:-118.1,skewY:-118.2,x:130.7,y:342.7,regY:4.3}},{t:this.ikNode_246,p:{regX:5.8,rotation:-99,x:182.3,y:317.4,regY:15.8}}]},1).to({state:[{t:this.ikNode_253,p:{rotation:-94,x:168.6,y:342,regY:4.2}},{t:this.ikNode_254,p:{regY:1.8,rotation:-82.9,x:253,y:332.1,regX:5.6}},{t:this.ikNode_255,p:{rotation:-91,x:343.5,y:343.3,regY:5.2,regX:1.2}},{t:this.ikNode_247,p:{rotation:-107.8,x:80.3,y:336.7,regY:3.4,regX:9.3}},{t:this.ikNode_248,p:{rotation:-133.7,x:130.1,y:326.9,regY:3.7,regX:4.7}},{t:this.ikNode_249,p:{rotation:-132.3,x:167.9,y:292.3,regY:15.6}},{t:this.ikNode_239,p:{x:177.5,y:583.3}},{t:this.ikNode_240,p:{x:168.4,y:340.8}},{t:this.ikNode_242,p:{regX:5.7,rotation:-95.8,x:72.1,y:329.4,regY:11.6}},{t:this.ikNode_241,p:{x:83.7,y:342.7,rotation:-86.8,regY:17,regX:13.9}},{t:this.ikNode_243,p:{regY:24.4,rotation:-101.9,x:39.6,y:335.1,regX:23.8}},{t:this.ikNode_250,p:{regX:4.4,rotation:-93.6,x:168.7,y:341.2,regY:3.3}},{t:this.ikNode_251,p:{rotation:-73.1,x:252.2,y:328.8,regY:2.4,regX:10}},{t:this.ikNode_252,p:{regY:4.6,rotation:-86.8,x:339.1,y:355.2,regX:3.8}},{t:this.ikNode_244,p:{rotation:-81.4,x:80.3,y:338.5,regX:9,regY:3.7}},{t:this.ikNode_245,p:{regX:3.8,skewX:-106,skewY:-106.1,x:130.8,y:351.9,regY:4.3}},{t:this.ikNode_246,p:{regX:5.8,rotation:-95.4,x:186.4,y:338.1,regY:15.7}}]},1).to({state:[{t:this.ikNode_253,p:{rotation:-94.8,x:169.2,y:348.1,regY:4.2}},{t:this.ikNode_254,p:{regY:1.9,rotation:-88.6,x:253.5,y:337.1,regX:5.5}},{t:this.ikNode_255,p:{rotation:-96.6,x:344.5,y:339.4,regY:5.2,regX:1.2}},{t:this.ikNode_247,p:{rotation:-106.8,x:80.7,y:344.9,regY:3.4,regX:9.3}},{t:this.ikNode_248,p:{rotation:-116.9,x:130.7,y:336,regY:3.7,regX:4.7}},{t:this.ikNode_249,p:{rotation:-115.4,x:176.8,y:313.8,regY:15.6}},{t:this.ikNode_239,p:{x:178,y:589.5}},{t:this.ikNode_240,p:{x:168.9,y:347}},{t:this.ikNode_242,p:{regX:5.7,rotation:-97.1,x:72.4,y:337.8,regY:11.6}},{t:this.ikNode_241,p:{x:84.1,y:350.8,rotation:-88.1,regY:17,regX:13.9}},{t:this.ikNode_243,p:{regY:24.4,rotation:-101.3,x:40,y:344.4,regX:23.8}},{t:this.ikNode_250,p:{regX:4.4,rotation:-87.8,x:169.1,y:347.3,regY:3.2}},{t:this.ikNode_251,p:{rotation:-77.5,x:253.5,y:343.4,regY:2.4,regX:10}},{t:this.ikNode_252,p:{regY:4.6,rotation:-91.2,x:342.1,y:363,regX:3.8}},{t:this.ikNode_244,p:{rotation:-80.3,x:80.7,y:346.7,regX:9,regY:3.7}},{t:this.ikNode_245,p:{regX:3.8,skewX:-93.9,skewY:-93.9,x:131.1,y:361,regY:4.4}},{t:this.ikNode_246,p:{regX:5.8,rotation:-91.8,x:188.4,y:359.2,regY:15.8}}]},1).to({state:[{t:this.ikNode_253,p:{rotation:-95.7,x:169.7,y:354.3,regY:4.2}},{t:this.ikNode_254,p:{regY:1.9,rotation:-94.2,x:253.9,y:342,regX:5.5}},{t:this.ikNode_255,p:{rotation:-102.2,x:344.7,y:335.3,regY:5.2,regX:1.2}},{t:this.ikNode_247,p:{rotation:-105.8,x:81,y:353.2,regY:3.4,regX:9.3}},{t:this.ikNode_248,p:{rotation:-100,x:131.3,y:344.9,regY:3.7,regX:4.7}},{t:this.ikNode_249,p:{rotation:-98.6,x:181.8,y:337.2,regY:15.6}},{t:this.ikNode_239,p:{x:178.4,y:595.6}},{t:this.ikNode_240,p:{x:169.4,y:353.1}},{t:this.ikNode_242,p:{regX:5.7,rotation:-98.5,x:72.6,y:346.2,regY:11.6}},{t:this.ikNode_241,p:{x:84.7,y:358.9,rotation:-89.5,regY:17,regX:13.9}},{t:this.ikNode_243,p:{regY:24.3,rotation:-100.8,x:40.3,y:353.5,regX:23.8}},{t:this.ikNode_250,p:{regX:4.3,rotation:-82,x:169.6,y:353.5,regY:3.2}},{t:this.ikNode_251,p:{rotation:-82,x:253.9,y:358.2,regY:2.4,regX:9.9}},{t:this.ikNode_252,p:{regY:4.6,rotation:-95.7,x:343.7,y:370.7,regX:3.8}},{t:this.ikNode_244,p:{rotation:-79.3,x:81.1,y:354.9,regX:9,regY:3.6}},{t:this.ikNode_245,p:{regX:3.8,skewX:-81.8,skewY:-81.8,x:131.2,y:370.1,regY:4.3}},{t:this.ikNode_246,p:{regX:5.9,rotation:-88.2,x:187.6,y:380.2,regY:15.8}}]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(192.5,26.8,152,434.2);


// symbols:
(lib.arm = function() {
	this.initialize(cstImg.arm);
}).prototype = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,25,60);


(lib.fist_l = function() {
	this.initialize(cstImg.fist_l);
}).prototype = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,24,32);


(lib.fist_r = function() {
	this.initialize(cstImg.fist_r);
}).prototype = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,24,32);


(lib.foot = function() {
	this.initialize(cstImg.foot);
}).prototype = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,45,20);


(lib.forearm = function() {
	this.initialize(cstImg.forearm);
}).prototype = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,20,60);


(lib.head = function() {
	this.initialize(cstImg.head);
}).prototype = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,64,64);


(lib.leg = function() {
	this.initialize(cstImg.leg);
}).prototype = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,30,100);


(lib.pelvis = function() {
	this.initialize(cstImg.pelvis);
}).prototype = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,32,32);


(lib.shin = function() {
	this.initialize(cstImg.shin);
}).prototype = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,16,100);


(lib.torso = function() {
	this.initialize(cstImg.torso);
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
	this.instance_4.setTransform(-0.9,-12);

	this.addChild(this.instance_4);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-0.9,-12,64,64);


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
	this.type = "lib.ghost";
	
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