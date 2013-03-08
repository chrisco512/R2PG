(function (lib, img, cjs) {

var p; // shortcut to reference prototypes

// stage content:
(lib.idle = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{},true);

	// ik_man copy
	this.ikNode_14 = new lib.hand();
	this.ikNode_14.setTransform(292.2,135.2,0.981,0.981,-137.4,0,0,4.4,2.8);

	this.ikNode_6 = new lib.arm_lower();
	this.ikNode_6.setTransform(248.7,160.7,0.98,0.985,-118.4,0,0,4.1,4.3);

	this.ikNode_5 = new lib.arm_upper();
	this.ikNode_5.setTransform(236.7,109.7,0.983,0.983,-19.5,0,0,9.3,3.8);

	this.ikNode_15 = new lib.feet();
	this.ikNode_15.setTransform(204,366.4,0.985,0.985,-3.1,0,0,3.8,4.7);

	this.ikNode_10 = new lib.leg_lower();
	this.ikNode_10.setTransform(239.3,283,0.986,0.986,22.9,0,0,9.8,2.4);

	this.ikNode_9 = new lib.leg_upper();
	this.ikNode_9.setTransform(241.2,198.2,0.981,0.981,6,0,0,5.1,3);

	this.ikNode_4 = new lib.head();
	this.ikNode_4.setTransform(254.2,69.5,0.986,0.986,21.3,0,0,23.8,24.4);

	this.ikNode_3 = new lib.neck();
	this.ikNode_3.setTransform(244.7,101.8,0.986,0.986,20.3,0,0,5.7,12.3);

	this.ikNode_1 = new lib.pelvis();
	this.ikNode_1.setTransform(241.3,198.2,0.988,0.988,-2,0,0,21.9,19.4);

	this.ikNode_2 = new lib.torso();
	this.ikNode_2.setTransform(232.8,113.7,0.985,0.985,-2,0,0,13.9,17.1);

	this.ikNode_0 = new lib.ghost();
	this.ikNode_0.setTransform(250.1,440.5,1,1,0,0,0,20.5,20.5);
	this.ikNode_0.alpha = 0;

	this.ikNode_14_1 = new lib.hand();
	this.ikNode_14_1.setTransform(322.2,140.1,0.979,0.979,-149.2,0,0,3.7,3.7);

	this.ikNode_6_1 = new lib.arm_lower();
	this.ikNode_6_1.setTransform(271.8,148.1,0.979,0.985,-95.7,0,0,4.9,3.8);

	this.ikNode_5_1 = new lib.arm_upper();
	this.ikNode_5_1.setTransform(238.3,109.6,0.981,0.981,-47.8,0,0,9.8,3.6);

	this.ikNode_15_1 = new lib.feet();
	this.ikNode_15_1.setTransform(269,363.6,0.986,0.986,4.5,0,0,1.8,5.4);

	this.ikNode_10_1 = new lib.leg_lower();
	this.ikNode_10_1.setTransform(282.4,273.2,0.987,0.987,8.5,0,0,5.9,1.9);

	this.ikNode_9_1 = new lib.leg_upper();
	this.ikNode_9_1.setTransform(241.3,199,0.981,0.981,-26.5,0,0,5.4,4.3);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.ikNode_9_1,p:{regX:5.4,rotation:-26.5,x:241.3,y:199}},{t:this.ikNode_10_1,p:{rotation:8.5,x:282.4,y:273.2,regY:1.9}},{t:this.ikNode_15_1,p:{regX:1.8,rotation:4.5,x:269,y:363.6}},{t:this.ikNode_5_1,p:{regX:9.8,rotation:-47.8,x:238.3,y:109.6}},{t:this.ikNode_6_1,p:{rotation:-95.7,x:271.8,y:148.1,regY:3.8}},{t:this.ikNode_14_1,p:{regX:3.7,rotation:-149.2,x:322.2,y:140.1,regY:3.7}},{t:this.ikNode_0,p:{x:250.1,y:440.5}},{t:this.ikNode_2,p:{regX:13.9,scaleX:0.985,scaleY:0.985,rotation:-2,x:232.8,y:113.7,regY:17.1}},{t:this.ikNode_1,p:{x:241.3,y:198.2}},{t:this.ikNode_3,p:{regY:12.3,rotation:20.3,x:244.7,y:101.8,regX:5.7}},{t:this.ikNode_4,p:{regY:24.4,rotation:21.3,x:254.2,y:69.5,regX:23.8}},{t:this.ikNode_9,p:{rotation:6,x:241.2,y:198.2}},{t:this.ikNode_10,p:{rotation:22.9,x:239.3,y:283,regY:2.4}},{t:this.ikNode_15,p:{rotation:-3.1,y:366.4,regY:4.7,x:204,regX:3.8}},{t:this.ikNode_5,p:{regY:3.8,rotation:-19.5,x:236.7,y:109.7,regX:9.3}},{t:this.ikNode_6,p:{regX:4.1,regY:4.3,rotation:-118.4,x:248.7,y:160.7}},{t:this.ikNode_14,p:{rotation:-137.4,x:292.2,y:135.2,regX:4.4}}]}).to({state:[{t:this.ikNode_9_1,p:{regX:5.5,rotation:-27.6,x:241.2,y:200.5}},{t:this.ikNode_10_1,p:{rotation:8.9,x:283.7,y:274,regY:1.9}},{t:this.ikNode_15_1,p:{regX:1.7,rotation:3.7,x:269.6,y:364.2}},{t:this.ikNode_5_1,p:{regX:9.7,rotation:-45.9,x:238.5,y:111.2}},{t:this.ikNode_6_1,p:{rotation:-98.6,x:271,y:150.7,regY:3.8}},{t:this.ikNode_14_1,p:{regX:3.6,rotation:-149.3,x:320.9,y:140.3,regY:3.7}},{t:this.ikNode_0,p:{x:249.9,y:442}},{t:this.ikNode_2,p:{regX:14,scaleX:0.984,scaleY:0.984,rotation:-1.7,x:233.3,y:115.3,regY:17.1}},{t:this.ikNode_1,p:{x:241.2,y:199.7}},{t:this.ikNode_3,p:{regY:12.4,rotation:20.7,x:245.2,y:103.5,regX:5.7}},{t:this.ikNode_4,p:{regY:24.3,rotation:21.6,x:254.9,y:71.1,regX:23.8}},{t:this.ikNode_9,p:{rotation:4.5,x:241,y:200}},{t:this.ikNode_10,p:{rotation:24.3,x:241.3,y:284.6,regY:2.4}},{t:this.ikNode_15,p:{rotation:-2.3,y:367.2,regY:4.7,x:204,regX:3.8}},{t:this.ikNode_5,p:{regY:3.7,rotation:-21.5,x:237,y:111.2,regX:9.3}},{t:this.ikNode_6,p:{regX:4.2,regY:4.2,rotation:-115.8,x:250.6,y:161.7}},{t:this.ikNode_14,p:{rotation:-139.6,x:295.5,y:138.2,regX:4.4}}]},1).to({state:[{t:this.ikNode_9_1,p:{regX:5.5,rotation:-28.7,x:241.2,y:202}},{t:this.ikNode_10_1,p:{rotation:9.3,x:284.9,y:274.7,regY:1.9}},{t:this.ikNode_15_1,p:{regX:1.8,rotation:2.9,x:270.4,y:364.8}},{t:this.ikNode_5_1,p:{regX:9.7,rotation:-44,x:238.9,y:112.7}},{t:this.ikNode_6_1,p:{rotation:-101.4,x:269.9,y:153.3,regY:3.8}},{t:this.ikNode_14_1,p:{regX:3.6,rotation:-149.5,x:319.4,y:140.4,regY:3.7}},{t:this.ikNode_0,p:{x:249.8,y:443.6}},{t:this.ikNode_2,p:{regX:14,scaleX:0.984,scaleY:0.984,rotation:-1.4,x:233.7,y:116.9,regY:17.2}},{t:this.ikNode_1,p:{x:241.1,y:201.2}},{t:this.ikNode_3,p:{regY:12.3,rotation:21,x:245.6,y:104.9,regX:5.7}},{t:this.ikNode_4,p:{regY:24.3,rotation:21.9,x:255.3,y:72.6,regX:23.7}},{t:this.ikNode_9,p:{rotation:3.1,x:241.1,y:201.5}},{t:this.ikNode_10,p:{rotation:25.7,x:243.3,y:286.1,regY:2.4}},{t:this.ikNode_15,p:{rotation:-1.4,y:367.7,regY:4.6,x:204,regX:3.8}},{t:this.ikNode_5,p:{regY:3.8,rotation:-23.5,x:237.5,y:112.8,regX:9.3}},{t:this.ikNode_6,p:{regX:4.2,regY:4.3,rotation:-113.3,x:252.9,y:162.6}},{t:this.ikNode_14,p:{rotation:-141.7,x:298.5,y:141.3,regX:4.4}}]},1).to({state:[{t:this.ikNode_9_1,p:{regX:5.5,rotation:-29.8,x:241,y:203.5}},{t:this.ikNode_10_1,p:{rotation:9.6,x:286.1,y:275.3,regY:1.8}},{t:this.ikNode_15_1,p:{regX:1.7,rotation:2,x:271,y:365.4}},{t:this.ikNode_5_1,p:{regX:9.7,rotation:-42.1,x:239.3,y:114.2}},{t:this.ikNode_6_1,p:{rotation:-104.2,x:269.1,y:155.7,regY:3.9}},{t:this.ikNode_14_1,p:{regX:3.7,rotation:-149.6,x:317.6,y:140.4,regY:3.8}},{t:this.ikNode_0,p:{x:249.7,y:445.1}},{t:this.ikNode_2,p:{regX:14,scaleX:0.984,scaleY:0.984,rotation:-1.1,x:234,y:118.2,regY:17.1}},{t:this.ikNode_1,p:{x:240.9,y:202.7}},{t:this.ikNode_3,p:{regY:12.3,rotation:21.3,x:246.1,y:106.6,regX:5.8}},{t:this.ikNode_4,p:{regY:24.3,rotation:22.2,x:255.9,y:74.3,regX:23.8}},{t:this.ikNode_9,p:{rotation:1.7,x:241.1,y:203.1}},{t:this.ikNode_10,p:{rotation:27,x:245.4,y:287.6,regY:2.4}},{t:this.ikNode_15,p:{rotation:-0.5,y:368.3,regY:4.6,x:204.2,regX:3.8}},{t:this.ikNode_5,p:{regY:3.7,rotation:-25.6,x:237.7,y:114.3,regX:9.2}},{t:this.ikNode_6,p:{regX:4.2,regY:4.1,rotation:-110.7,x:254.8,y:163.7}},{t:this.ikNode_14,p:{rotation:-143.8,x:301.4,y:144.3,regX:4.4}}]},1).to({state:[{t:this.ikNode_9_1,p:{regX:5.5,rotation:-30.8,x:240.8,y:205.1}},{t:this.ikNode_10_1,p:{rotation:10,x:287.4,y:276.1,regY:1.9}},{t:this.ikNode_15_1,p:{regX:1.8,rotation:1.2,x:271.8,y:366}},{t:this.ikNode_5_1,p:{regX:9.7,rotation:-40.2,x:239.6,y:115.8}},{t:this.ikNode_6_1,p:{rotation:-107.1,x:268.1,y:158.2,regY:3.9}},{t:this.ikNode_14_1,p:{regX:3.8,rotation:-149.8,x:315.7,y:140.6,regY:3.8}},{t:this.ikNode_0,p:{x:249.5,y:446.6}},{t:this.ikNode_2,p:{regX:13.9,scaleX:0.984,scaleY:0.984,rotation:-0.7,x:234.3,y:119.7,regY:17.1}},{t:this.ikNode_1,p:{x:240.8,y:204.2}},{t:this.ikNode_3,p:{regY:12.3,rotation:21.6,x:246.5,y:108,regX:5.7}},{t:this.ikNode_4,p:{regY:24.3,rotation:22.6,x:256.5,y:75.9,regX:23.7}},{t:this.ikNode_9,p:{rotation:0.3,x:241,y:204.5}},{t:this.ikNode_10,p:{rotation:28.4,x:247.5,y:289,regY:2.4}},{t:this.ikNode_15,p:{rotation:0.2,y:368.7,regY:4.6,x:204.2,regX:3.8}},{t:this.ikNode_5,p:{regY:3.8,rotation:-27.6,x:238.1,y:115.8,regX:9.3}},{t:this.ikNode_6,p:{regX:4.2,regY:4.2,rotation:-108.1,x:257,y:164.5}},{t:this.ikNode_14,p:{rotation:-146,x:304.4,y:147.3,regX:4.4}}]},1).to({state:[{t:this.ikNode_9_1,p:{regX:5.5,rotation:-31.9,x:240.8,y:206.7}},{t:this.ikNode_10_1,p:{rotation:10.4,x:288.5,y:276.8,regY:1.9}},{t:this.ikNode_15_1,p:{regX:1.8,rotation:0.4,x:272.4,y:366.5}},{t:this.ikNode_5_1,p:{regX:9.7,rotation:-38.3,x:239.9,y:117.2}},{t:this.ikNode_6_1,p:{rotation:-109.9,x:266.9,y:160.6,regY:3.8}},{t:this.ikNode_14_1,p:{regX:3.7,rotation:-150,x:313.7,y:140.8,regY:3.7}},{t:this.ikNode_0,p:{x:249.4,y:448.1}},{t:this.ikNode_2,p:{regX:13.9,scaleX:0.984,scaleY:0.984,rotation:-0.4,x:234.7,y:121.3,regY:17.2}},{t:this.ikNode_1,p:{x:240.7,y:205.7}},{t:this.ikNode_3,p:{regY:12.3,rotation:22,x:246.9,y:109.6,regX:5.7}},{t:this.ikNode_4,p:{regY:24.3,rotation:22.9,x:257.1,y:77.5,regX:23.8}},{t:this.ikNode_9,p:{rotation:-1.1,x:240.9,y:206.1}},{t:this.ikNode_10,p:{rotation:29.8,x:249.5,y:290.1,regY:2.3}},{t:this.ikNode_15,p:{rotation:1.1,y:369,regY:4.6,x:204.3,regX:3.8}},{t:this.ikNode_5,p:{regY:3.8,rotation:-29.6,x:238.4,y:117.3,regX:9.3}},{t:this.ikNode_6,p:{regX:4.1,regY:4.2,rotation:-105.6,x:259,y:165.4}},{t:this.ikNode_14,p:{rotation:-148.1,x:307.1,y:150.3,regX:4.4}}]},1).to({state:[{t:this.ikNode_9_1,p:{regX:5.5,rotation:-33,x:240.6,y:208.2}},{t:this.ikNode_10_1,p:{rotation:10.7,x:289.8,y:277.5,regY:2}},{t:this.ikNode_15_1,p:{regX:1.8,rotation:-0.4,x:273,y:367}},{t:this.ikNode_5_1,p:{regX:9.7,rotation:-36.4,x:240.2,y:118.8}},{t:this.ikNode_6_1,p:{rotation:-112.8,x:265.8,y:163.1,regY:3.8}},{t:this.ikNode_14_1,p:{regX:3.7,rotation:-150.1,x:311.6,y:140.9,regY:3.7}},{t:this.ikNode_0,p:{x:249.3,y:449.7}},{t:this.ikNode_2,p:{regX:13.9,scaleX:0.984,scaleY:0.984,rotation:-0.1,x:235.1,y:122.8,regY:17.1}},{t:this.ikNode_1,p:{x:240.5,y:207.2}},{t:this.ikNode_3,p:{regY:12.3,rotation:22.3,x:247.3,y:111.2,regX:5.7}},{t:this.ikNode_4,p:{regY:24.3,rotation:23.2,x:257.6,y:79,regX:23.7}},{t:this.ikNode_9,p:{rotation:-2.5,x:240.9,y:207.6}},{t:this.ikNode_10,p:{rotation:31.1,x:251.3,y:291.6,regY:2.4}},{t:this.ikNode_15,p:{rotation:2,y:369.4,regY:4.7,x:204.4,regX:3.8}},{t:this.ikNode_5,p:{regY:3.8,rotation:-31.6,x:238.9,y:119,regX:9.3}},{t:this.ikNode_6,p:{regX:4.2,regY:4.2,rotation:-103,x:261.1,y:166}},{t:this.ikNode_14,p:{rotation:-150.2,x:309.7,y:153.1,regX:4.4}}]},1).to({state:[{t:this.ikNode_9_1,p:{regX:5.5,rotation:-34.1,x:240.5,y:209.8}},{t:this.ikNode_10_1,p:{rotation:11.1,x:290.9,y:278,regY:1.9}},{t:this.ikNode_15_1,p:{regX:1.8,rotation:-1.2,x:273.5,y:367.5}},{t:this.ikNode_5_1,p:{regX:9.8,rotation:-34.5,x:240.7,y:120.2}},{t:this.ikNode_6_1,p:{rotation:-115.6,x:264.6,y:165.5,regY:3.8}},{t:this.ikNode_14_1,p:{regX:3.7,rotation:-150.3,x:309.3,y:141,regY:3.7}},{t:this.ikNode_0,p:{x:249.2,y:451.2}},{t:this.ikNode_2,p:{regX:13.9,scaleX:0.984,scaleY:0.984,rotation:0.1,x:235.5,y:124.3,regY:17.2}},{t:this.ikNode_1,p:{x:240.4,y:208.7}},{t:this.ikNode_3,p:{regY:12.3,rotation:22.6,x:247.8,y:112.7,regX:5.7}},{t:this.ikNode_4,p:{regY:24.3,rotation:23.5,x:258.3,y:80.6,regX:23.8}},{t:this.ikNode_9,p:{rotation:-3.9,x:240.8,y:209}},{t:this.ikNode_10,p:{rotation:32.5,x:253.3,y:292.7,regY:2.4}},{t:this.ikNode_15,p:{rotation:2.8,y:369.4,regY:4.7,x:204.6,regX:3.9}},{t:this.ikNode_5,p:{regY:3.7,rotation:-33.6,x:239.1,y:120.4,regX:9.3}},{t:this.ikNode_6,p:{regX:4.2,regY:4.2,rotation:-100.5,x:263,y:166.7}},{t:this.ikNode_14,p:{rotation:-152.4,x:312.1,y:156,regX:4.5}}]},1).to({state:[{t:this.ikNode_9_1,p:{regX:5.5,rotation:-33,x:240.6,y:208.2}},{t:this.ikNode_10_1,p:{rotation:10.7,x:289.8,y:277.5,regY:2}},{t:this.ikNode_15_1,p:{regX:1.8,rotation:-0.4,x:273,y:367}},{t:this.ikNode_5_1,p:{regX:9.7,rotation:-36.4,x:240.2,y:118.8}},{t:this.ikNode_6_1,p:{rotation:-112.8,x:265.8,y:163.1,regY:3.8}},{t:this.ikNode_14_1,p:{regX:3.7,rotation:-150.1,x:311.6,y:140.9,regY:3.7}},{t:this.ikNode_0,p:{x:249.3,y:449.7}},{t:this.ikNode_2,p:{regX:13.9,scaleX:0.984,scaleY:0.984,rotation:-0.1,x:235.1,y:122.8,regY:17.1}},{t:this.ikNode_1,p:{x:240.5,y:207.2}},{t:this.ikNode_3,p:{regY:12.3,rotation:22.3,x:247.3,y:111.2,regX:5.7}},{t:this.ikNode_4,p:{regY:24.3,rotation:23.2,x:257.6,y:79,regX:23.7}},{t:this.ikNode_9,p:{rotation:-2.5,x:240.9,y:207.6}},{t:this.ikNode_10,p:{rotation:31.1,x:251.3,y:291.6,regY:2.4}},{t:this.ikNode_15,p:{rotation:2,y:369.4,regY:4.7,x:204.4,regX:3.8}},{t:this.ikNode_5,p:{regY:3.8,rotation:-31.6,x:238.9,y:119,regX:9.3}},{t:this.ikNode_6,p:{regX:4.2,regY:4.2,rotation:-103,x:261.1,y:166}},{t:this.ikNode_14,p:{rotation:-150.2,x:309.7,y:153.1,regX:4.4}}]},1).to({state:[{t:this.ikNode_9_1,p:{regX:5.5,rotation:-31.9,x:240.8,y:206.7}},{t:this.ikNode_10_1,p:{rotation:10.4,x:288.5,y:276.8,regY:1.9}},{t:this.ikNode_15_1,p:{regX:1.8,rotation:0.4,x:272.4,y:366.5}},{t:this.ikNode_5_1,p:{regX:9.7,rotation:-38.3,x:239.9,y:117.2}},{t:this.ikNode_6_1,p:{rotation:-109.9,x:266.9,y:160.6,regY:3.8}},{t:this.ikNode_14_1,p:{regX:3.7,rotation:-150,x:313.7,y:140.8,regY:3.7}},{t:this.ikNode_0,p:{x:249.4,y:448.1}},{t:this.ikNode_2,p:{regX:13.9,scaleX:0.984,scaleY:0.984,rotation:-0.4,x:234.7,y:121.3,regY:17.2}},{t:this.ikNode_1,p:{x:240.7,y:205.7}},{t:this.ikNode_3,p:{regY:12.3,rotation:22,x:246.9,y:109.6,regX:5.7}},{t:this.ikNode_4,p:{regY:24.3,rotation:22.9,x:257.1,y:77.5,regX:23.8}},{t:this.ikNode_9,p:{rotation:-1.1,x:240.9,y:206.1}},{t:this.ikNode_10,p:{rotation:29.8,x:249.5,y:290.1,regY:2.3}},{t:this.ikNode_15,p:{rotation:1.1,y:369,regY:4.6,x:204.3,regX:3.8}},{t:this.ikNode_5,p:{regY:3.8,rotation:-29.6,x:238.4,y:117.3,regX:9.3}},{t:this.ikNode_6,p:{regX:4.1,regY:4.2,rotation:-105.6,x:259,y:165.4}},{t:this.ikNode_14,p:{rotation:-148.1,x:307.1,y:150.3,regX:4.4}}]},1).to({state:[{t:this.ikNode_9_1,p:{regX:5.5,rotation:-30.8,x:240.8,y:205.1}},{t:this.ikNode_10_1,p:{rotation:10,x:287.4,y:276.1,regY:1.9}},{t:this.ikNode_15_1,p:{regX:1.8,rotation:1.2,x:271.8,y:366}},{t:this.ikNode_5_1,p:{regX:9.7,rotation:-40.2,x:239.6,y:115.8}},{t:this.ikNode_6_1,p:{rotation:-107.1,x:268.1,y:158.2,regY:3.9}},{t:this.ikNode_14_1,p:{regX:3.8,rotation:-149.8,x:315.7,y:140.6,regY:3.8}},{t:this.ikNode_0,p:{x:249.5,y:446.6}},{t:this.ikNode_2,p:{regX:13.9,scaleX:0.984,scaleY:0.984,rotation:-0.7,x:234.3,y:119.7,regY:17.1}},{t:this.ikNode_1,p:{x:240.8,y:204.2}},{t:this.ikNode_3,p:{regY:12.3,rotation:21.6,x:246.5,y:108,regX:5.7}},{t:this.ikNode_4,p:{regY:24.3,rotation:22.6,x:256.5,y:75.9,regX:23.7}},{t:this.ikNode_9,p:{rotation:0.3,x:241,y:204.5}},{t:this.ikNode_10,p:{rotation:28.4,x:247.5,y:289,regY:2.4}},{t:this.ikNode_15,p:{rotation:0.2,y:368.7,regY:4.6,x:204.2,regX:3.8}},{t:this.ikNode_5,p:{regY:3.8,rotation:-27.6,x:238.1,y:115.8,regX:9.3}},{t:this.ikNode_6,p:{regX:4.2,regY:4.2,rotation:-108.1,x:257,y:164.5}},{t:this.ikNode_14,p:{rotation:-146,x:304.4,y:147.3,regX:4.4}}]},1).to({state:[{t:this.ikNode_9_1,p:{regX:5.5,rotation:-29.8,x:241,y:203.5}},{t:this.ikNode_10_1,p:{rotation:9.6,x:286.1,y:275.3,regY:1.8}},{t:this.ikNode_15_1,p:{regX:1.7,rotation:2,x:271,y:365.4}},{t:this.ikNode_5_1,p:{regX:9.7,rotation:-42.1,x:239.3,y:114.2}},{t:this.ikNode_6_1,p:{rotation:-104.2,x:269.1,y:155.7,regY:3.9}},{t:this.ikNode_14_1,p:{regX:3.7,rotation:-149.6,x:317.6,y:140.4,regY:3.8}},{t:this.ikNode_0,p:{x:249.7,y:445.1}},{t:this.ikNode_2,p:{regX:14,scaleX:0.984,scaleY:0.984,rotation:-1.1,x:234,y:118.2,regY:17.1}},{t:this.ikNode_1,p:{x:240.9,y:202.7}},{t:this.ikNode_3,p:{regY:12.3,rotation:21.3,x:246.1,y:106.6,regX:5.8}},{t:this.ikNode_4,p:{regY:24.3,rotation:22.2,x:255.9,y:74.3,regX:23.8}},{t:this.ikNode_9,p:{rotation:1.7,x:241.1,y:203.1}},{t:this.ikNode_10,p:{rotation:27,x:245.4,y:287.6,regY:2.4}},{t:this.ikNode_15,p:{rotation:-0.5,y:368.3,regY:4.6,x:204.2,regX:3.8}},{t:this.ikNode_5,p:{regY:3.7,rotation:-25.6,x:237.7,y:114.3,regX:9.2}},{t:this.ikNode_6,p:{regX:4.2,regY:4.1,rotation:-110.7,x:254.8,y:163.7}},{t:this.ikNode_14,p:{rotation:-143.8,x:301.4,y:144.3,regX:4.4}}]},1).to({state:[{t:this.ikNode_9_1,p:{regX:5.5,rotation:-28.7,x:241.2,y:202}},{t:this.ikNode_10_1,p:{rotation:9.3,x:284.9,y:274.7,regY:1.9}},{t:this.ikNode_15_1,p:{regX:1.8,rotation:2.9,x:270.4,y:364.8}},{t:this.ikNode_5_1,p:{regX:9.7,rotation:-44,x:238.9,y:112.7}},{t:this.ikNode_6_1,p:{rotation:-101.4,x:269.9,y:153.3,regY:3.8}},{t:this.ikNode_14_1,p:{regX:3.6,rotation:-149.5,x:319.4,y:140.4,regY:3.7}},{t:this.ikNode_0,p:{x:249.8,y:443.6}},{t:this.ikNode_2,p:{regX:14,scaleX:0.984,scaleY:0.984,rotation:-1.4,x:233.7,y:116.9,regY:17.2}},{t:this.ikNode_1,p:{x:241.1,y:201.2}},{t:this.ikNode_3,p:{regY:12.3,rotation:21,x:245.6,y:104.9,regX:5.7}},{t:this.ikNode_4,p:{regY:24.3,rotation:21.9,x:255.3,y:72.6,regX:23.7}},{t:this.ikNode_9,p:{rotation:3.1,x:241.1,y:201.5}},{t:this.ikNode_10,p:{rotation:25.7,x:243.3,y:286.1,regY:2.4}},{t:this.ikNode_15,p:{rotation:-1.4,y:367.7,regY:4.6,x:204,regX:3.8}},{t:this.ikNode_5,p:{regY:3.8,rotation:-23.5,x:237.5,y:112.8,regX:9.3}},{t:this.ikNode_6,p:{regX:4.2,regY:4.3,rotation:-113.3,x:252.9,y:162.6}},{t:this.ikNode_14,p:{rotation:-141.7,x:298.5,y:141.3,regX:4.4}}]},1).to({state:[{t:this.ikNode_9_1,p:{regX:5.5,rotation:-27.6,x:241.2,y:200.5}},{t:this.ikNode_10_1,p:{rotation:8.9,x:283.7,y:274,regY:1.9}},{t:this.ikNode_15_1,p:{regX:1.7,rotation:3.7,x:269.6,y:364.2}},{t:this.ikNode_5_1,p:{regX:9.7,rotation:-45.9,x:238.5,y:111.2}},{t:this.ikNode_6_1,p:{rotation:-98.6,x:271,y:150.7,regY:3.8}},{t:this.ikNode_14_1,p:{regX:3.6,rotation:-149.3,x:320.9,y:140.3,regY:3.7}},{t:this.ikNode_0,p:{x:249.9,y:442}},{t:this.ikNode_2,p:{regX:14,scaleX:0.984,scaleY:0.984,rotation:-1.7,x:233.3,y:115.3,regY:17.1}},{t:this.ikNode_1,p:{x:241.2,y:199.7}},{t:this.ikNode_3,p:{regY:12.4,rotation:20.7,x:245.2,y:103.5,regX:5.7}},{t:this.ikNode_4,p:{regY:24.3,rotation:21.6,x:254.9,y:71.1,regX:23.8}},{t:this.ikNode_9,p:{rotation:4.5,x:241,y:200}},{t:this.ikNode_10,p:{rotation:24.3,x:241.3,y:284.6,regY:2.4}},{t:this.ikNode_15,p:{rotation:-2.3,y:367.2,regY:4.7,x:204,regX:3.8}},{t:this.ikNode_5,p:{regY:3.7,rotation:-21.5,x:237,y:111.2,regX:9.3}},{t:this.ikNode_6,p:{regX:4.2,regY:4.2,rotation:-115.8,x:250.6,y:161.7}},{t:this.ikNode_14,p:{rotation:-139.6,x:295.5,y:138.2,regX:4.4}}]},1).to({state:[{t:this.ikNode_9_1,p:{regX:5.5,rotation:-26.5,x:241.5,y:198.9}},{t:this.ikNode_10_1,p:{rotation:8.5,x:282.4,y:273.3,regY:1.9}},{t:this.ikNode_15_1,p:{regX:1.8,rotation:4.5,x:269,y:363.6}},{t:this.ikNode_5_1,p:{regX:9.7,rotation:-47.8,x:238.2,y:109.8}},{t:this.ikNode_6_1,p:{rotation:-95.7,x:271.8,y:148.1,regY:3.8}},{t:this.ikNode_14_1,p:{regX:3.7,rotation:-149.2,x:322.3,y:140.1,regY:3.7}},{t:this.ikNode_0,p:{x:250.1,y:440.5}},{t:this.ikNode_2,p:{regX:13.9,scaleX:0.985,scaleY:0.985,rotation:-2,x:232.8,y:113.8,regY:17.1}},{t:this.ikNode_1,p:{x:241.3,y:198.2}},{t:this.ikNode_3,p:{regY:12.3,rotation:20.3,x:244.7,y:101.8,regX:5.7}},{t:this.ikNode_4,p:{regY:24.4,rotation:21.3,x:254.2,y:69.5,regX:23.8}},{t:this.ikNode_9,p:{rotation:6,x:241.2,y:198.2}},{t:this.ikNode_10,p:{rotation:23,x:239.3,y:283,regY:2.4}},{t:this.ikNode_15,p:{rotation:-3.1,y:366.4,regY:4.7,x:204,regX:3.8}},{t:this.ikNode_5,p:{regY:3.8,rotation:-19.5,x:236.7,y:109.7,regX:9.3}},{t:this.ikNode_6,p:{regX:4.2,regY:4.2,rotation:-118.4,x:248.6,y:160.7}},{t:this.ikNode_14,p:{rotation:-137.4,x:292.2,y:135.2,regX:4.4}}]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(195.5,2,139.5,459.1);


// symbols:
(lib.test = function() {
	this.initialize(img.test);
}).prototype = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,42,94);


(lib.torso = function() {
	this.initialize();

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#000000").s().p("AAAnVQBXAAA9CKQA+CKAADBQAADCg+CKQg9CKhXAAQhWAAg9iKQg+iKAAjCQAAjBA+iKQA9iKBWAAIAAAA").cp();
	this.shape.setTransform(21,47);

	this.addChild(this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,42,94);


(lib.pelvis = function() {
	this.initialize();

	// Layer 1
	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#000000").s().p("ACVBLQgcArgSAOQgcAWgwABQhFAChAg0Qg4glAEhAQgDhJA6gtQA0gsBLAEQA8AHAoA5QAZAjAKA1QADA0gNAZIAAAA").cp();
	this.shape_1.setTransform(24,15.6);

	this.addChild(this.shape_1);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(8,0,32,31.2);


(lib.neck = function() {
	this.initialize();

	// Layer 1
	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#000000").s().p("AhAhTIgEClQAAAXATATQAUAQAbAAQAbABAUgQQAUgRAAgXIAEimQAAgYgUgRQgSgRgdgBQgaAAgUARQgUAQAAAYIAAAA").cp();
	this.shape_2.setTransform(6.9,13.7);

	this.addChild(this.shape_2);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,-0.4,13.9,28.2);


(lib.leg_upper = function() {
	this.initialize();

	// Layer 1
	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#000000").s().p("AgMnhQgxAAgSAKQgZALgKANQgNASAEAcQBLGggFGOQgCAbAYAWQARAPAgAGQAbgIAWgQQAQgZAHgaQAwmagSnFQAAgNgVgFQgRgEgcgDQgSgDgwACIAAAA").cp();
	this.shape_3.setTransform(9.3,48);

	this.addChild(this.shape_3);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-3.2,-0.2,25.1,96.6);


(lib.leg_lower = function() {
	this.initialize();

	// Layer 1
	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#000000").s().p("AgLnXQAmgJAPAGQARARAHAwQANBwADDaQAABpgKGLQAAACgBAOQAAALgFAHQgOAWhAABQgOAAgGgPQgFgLABgOQgEjqgZizQgShRADi7QAEi1APgYQAIgOAqgJIAAAA").cp();
	this.shape_4.setTransform(9.2,47.6);

	this.addChild(this.shape_4);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(1,-0.1,16.4,95.6);


(lib.head = function() {
	this.initialize();

	// Layer 1
	this.instance = new lib.test();
	this.instance.setTransform(5.4,-41.9);

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(5.4,-41.9,42,94);


(lib.hand = function() {
	this.initialize();

	// Layer 1
	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#000000").s().p("AAcBRQgMAigQAAQgPAAgMgiQgMgiAAgvQAAguAMgiQAMgiAPAAQAQAAAMAiQAMAiAAAuQAAAvgMAiIAAAA").cp();
	this.shape_5.setTransform(4,11.5);

	this.addChild(this.shape_5);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,8,23);


(lib.ghost = function() {
	this.initialize();

	// Layer 1
	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#000000").s().p("AiQiQQg8A8AABUQAABVA8A8QA8A8BUAAQBVAAA8g8QA8g8AAhVQAAhUg8g8Qg8g8hVAAQhUAAg8A8IAAAA").cp();
	this.shape_6.setTransform(20.5,20.5);

	this.addChild(this.shape_6);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,41,41);


(lib.feet = function() {
	this.initialize();

	// Layer 1
	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#000000").s().p("AB2gRQA0ATgMAYQgMAZhcADQhaAEg3ABQg3ABgLgwQgLgtAsgKQArgLAPgDQAPgDA6ALQA7AKA0AWIAAAA").cp();
	this.shape_7.setTransform(16.9,5.1);

	this.addChild(this.shape_7);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0.9,-0.7,32.1,11.9);


(lib.arm_upper = function() {
	this.initialize();

	// Layer 1
	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#000000").s().p("AA/kSQgNgRgXgCQgVgCgPAPQgRAOgBAWIgvHfQgCAWAOASQAOARAVABQAXADAOgPQARgOACgWIAunfQACgXgOgRIAAAA").cp();
	this.shape_8.setTransform(6.6,30.4);

	this.addChild(this.shape_8);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-0.9,1,15.2,58.9);


(lib.arm_lower = function() {
	this.initialize();

	// Layer 1
	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#000000").s().p("AgJkiQgTADgMAUQgOAWACAfIAgHVQAAACAAACQACANALAKQAJAJAQAAQACAAACAAQAMgCAIgJQALgLAAgPIgDnSQgBgFAAgDQgCgagOgUQgQgXgVgBQgDAAgCAAIAAAA").cp();
	this.shape_9.setTransform(5.4,29.5);

	this.addChild(this.shape_9);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0.1,0.4,10.8,58.3);

})(lib = lib||{}, images = images||{}, createjs = createjs||{});
var lib, images, createjs;