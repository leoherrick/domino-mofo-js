
function Announcer(){
}

Announcer.prototype.welcome = function(){
	return "Hope you ready to throw some bones playa! Let's do this!"
}

Announcer.prototype.ask_for_opponents = function(){
	return "How many playas you wanna to play dawg? One, two, or tre?"
}

Announcer.prototype.ask_for_houses = function(){
	return "And how many houses you down for? Three, Four, or Five?"
}

Announcer.prototype.say_game_is_ready = function(){
	return "A'ight Playa. Let's do this thing."
}

Announcer.prototype.tell_user_to_lead_with_highest_pair = function(){
	return "Looks like you've got the highest double. Go ahead and lead-out dawg!"
}

Announcer.prototype.please_play_double = function(){
	return "You have the highest double. Please lead out with your highest double."
}

Announcer.prototype.cpu_has_highest_double = function(){
	return "The computer has the highest double."
}

Announcer.prototype.cpu_has_made_move = function(){
	return "The computer just made a play."
}

Announcer.prototype.tell_player_it_is_their_turn = function(){
	return "It's your turn, please make a play."
}