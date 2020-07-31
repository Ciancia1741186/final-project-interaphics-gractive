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
		.to(pose_Kick_Bend(Id), duration *(1.5/10) )	
		.onUpdate(function(){set_Pose(player,pose);})
	;
	var tween2 = new TWEEN.Tween(pose)
		.to(pose_Kick(Id), duration *(1/10))
		.onUpdate(function(){set_Pose(player,pose);})
	;
	var tween3 = new TWEEN.Tween(pose)
		.delay(duration*(2.5/10))
		.to(pose_Kick_Bend(Id), duration *(3/10) )
		.onUpdate(function(){set_Pose(player,pose);})
	;
	var tweenBack = new TWEEN.Tween(pose) 
		.to(pose_Bend(Id), duration *(2/10) ) //ALWAYS END WITH "pose_Bend"
		.onUpdate(function(){set_Pose(player,pose);})

		.onComplete(function(){reset(player,Id);})
	;
	
	tween1.chain(tween2);
	tween2.chain(tween3);
	tween3.chain(tweenBack);
	
	return tween1;
}



// DAMAGE ANIMATION
function animation_Damage(player,Id, pose, duration){

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