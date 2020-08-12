function changeAnimation(animation, index, value, Id){
	animation[Id][index[Id]].stop();
    index[Id] = value;
    animation[Id][index[Id]].start();
}



// IDLE ANIMATION 
function animation_Idle(player,Id, pose){

	pose = pose_Bend(Id);

	var tween = new TWEEN.Tween(pose)
		.to(pose_Stance(Id), 300)
		.delay(100)		
		//.easing(TWEEN.Easing.Elastic.InOut)
		.onUpdate(function(){set_Pose(player,pose);})
	;
	var tweenBack = new TWEEN.Tween(pose)
		.to(pose_Bend(Id), 300)
		.delay(200)
		//.easing(TWEEN.Easing.Elastic.InOut)
		.onUpdate(function(){set_Pose(player,pose);})
	;
	tween.chain(tweenBack);
	tweenBack.chain(tween);

	return tween;
}



// BACK-DASH ANIMATION
function animation_Back(player,Id, pose, duration){

	pose = pose_Bend(Id);

	var tween = new TWEEN.Tween(pose)
		.to(pose_Back(Id), duration *(2/3))	
		.onUpdate(function(){set_Pose(player,pose);})
	;
	var tweenBack = new TWEEN.Tween(pose)
		.to(pose_Bend(Id), duration *(1/3)) //ALWAYS END WITH "pose_Bend"
		.onUpdate(function(){set_Pose(player,pose);})

		.onComplete(function(){reset(player,Id);})
    ;
    
	tween.chain(tweenBack);

	return tween;
}



// FORWARD-DASH ANIMATION
function animation_Forward(player,Id, pose, duration){

	pose = pose_Stance(Id);

	var tween = new TWEEN.Tween(pose)
		.to(pose_Forward(Id), duration *(1/2) )	
		.onUpdate(function(){set_Pose(player,pose);})
	;
	var tweenBack = new TWEEN.Tween(pose) 
		.to(pose_Bend(Id), duration *(1/2) ) //ALWAYS END WITH "pose_Bend"
		.onUpdate(function(){set_Pose(player,pose);})

		.onComplete(function(){reset(player,Id);})
    ;
    
	tween.chain(tweenBack);
	
	return tween;
}



// KICK ANIMATION
function animation_Kick(player, Id, pose, duration){
	pose = pose_Stance(Id);

	var tween1 = new TWEEN.Tween(pose)
		.to(pose_Kick_Bend(Id), duration *(2/10) )	
		.onUpdate(function(){set_Pose(player,pose);})
		// the Kick can do damage
		.onComplete(function(){setHitFlag(Id,true);})
	;
	var tween2 = new TWEEN.Tween(pose)
		.to(pose_Kick(Id), duration *(1/10))
		.onUpdate(function(){set_Pose(player,pose);})
	;
	var tween3 = new TWEEN.Tween(pose)
		.delay(duration*(2/10))
		.onStart(function(){setHitFlag(Id,false);})
		.to(pose_Kick_Bend(Id), duration *(2.5/10) )
		.onUpdate(function(){set_Pose(player,pose);})
	;
	var tweenBack = new TWEEN.Tween(pose) 
		.to(pose_Bend(Id), duration *(2.5/10) ) //ALWAYS END WITH "pose_Bend"
		.onUpdate(function(){set_Pose(player,pose);})

		.onComplete(function(){reset(player,Id);})
	;
	
	tween1.chain(tween2);
	tween2.chain(tween3);
	tween3.chain(tweenBack);
	
	return tween1;
}



// PUNCH ANIMATION
function animation_Punch(player, Id, pose, duration){
	pose = pose_Stance(Id);

	var tween1 = new TWEEN.Tween(pose)
		.to(pose_Punch_Bend(Id), duration *(2/10) )	
		.onUpdate(function(){set_Pose(player,pose);})
		// the Kick can do damage
		.onComplete(function(){setHitFlag(Id,true);})
	;
	var tween2 = new TWEEN.Tween(pose)
		.to(pose_Punch(Id), duration *(1/10))
		.onUpdate(function(){set_Pose(player,pose);})
	;
	var tween3 = new TWEEN.Tween(pose)
		.delay(duration*(2/10))
		.onStart(function(){setHitFlag(Id,false);})
		.to(pose_Punch_Bend(Id), duration *(2.5/10) )
		.onUpdate(function(){set_Pose(player,pose);})
	;
	var tweenBack = new TWEEN.Tween(pose) 
		.to(pose_Bend(Id), duration *(2.5/10) ) //ALWAYS END WITH "pose_Bend"
		.onUpdate(function(){set_Pose(player,pose);})

		.onComplete(function(){reset(player,Id);})
	;
	
	tween1.chain(tween2);
	tween2.chain(tween3);
	tween3.chain(tweenBack);
	
	return tween1;
}



// DAMAGE ANIMATION
function animation_HitByKick(player,Id, pose, duration){

	pose = pose_HitByKick(Id);

	var tween = new TWEEN.Tween(pose)
		.to(pose_HitByKick(Id), duration *(3/4))	
		.onUpdate(function(){set_Pose(player,pose);})	
		.onComplete(function(){action[Id] = "idle";})
	;
	var tweenBack = new TWEEN.Tween(pose)
		.to(pose_Bend(Id), duration *(2/4)) //ALWAYS END WITH "pose_Bend"
		.onUpdate(function(){set_Pose(player,pose);})

		.onComplete(function(){reset(player,Id);})
    ;
    
	tween.chain(tweenBack);

	return tween;
}



// KO ANIMATION 
function animation_KO(player,Id, pose, duration){

	pose = pose_Bend(Id);

	var tween = new TWEEN.Tween(pose)
		.to(pose_KO_Hit(Id), duration*(1/5))
		.onUpdate(function(){set_Pose(player,pose);})
	;
	var tween2 = new TWEEN.Tween(pose)
		.to(pose_KO_Fall(Id), duration*(2/5))
		.onUpdate(function(){set_Pose(player,pose);})
		.onComplete(function(){endGame(Id);})
	;
	var tween3 = new TWEEN.Tween(pose)
		.to(pose_KO_Down(Id), duration*(2/5))
		.onUpdate(function(){set_Pose(player,pose);})
	;
	tween.chain(tween2);
	tween2.chain(tween3);

	return tween;
}