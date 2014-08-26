function countSubtextingOccur(array) {
	// The function finds how many times a substring is contained in a given text (perform case insensitive search).
	var key = array[0];
	var text = array[1];
	var index = 0;
	var count = -1;
	var temp = 0;
	text = text.toLowerCase();
	while (temp != -1) {
		temp = text.indexOf(key, index);
		index = temp + 1;
		count++;
	}
	console.log("text: " + array[1]);
	console.log("Key word: " + key);
	console.log("Key word repetitions:" + count);
}

countSubtextingOccur(['in', 'We are living in a yellow submarine.We don\'t have anything else.Inside the submarine is very tight.So we are drinking all the day. We will move out of it in 5 days.']);
countSubtextingOccur(['your', 'No one heard a single word you said. They should have seen it in your eyes. What was going around your head.']);
countSubtextingOccur(['but', 'But you were living in another world tryin\' to get your message through.']); 