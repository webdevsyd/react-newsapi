const MAX_LENGTH = 100;
class TextUtil {
	static limitText(text){
		if(text.length > MAX_LENGTH){
			return text.substring(0,MAX_LENGTH) + " ...";
		}
		else {
			return text;
		}
	}
}

export default TextUtil;