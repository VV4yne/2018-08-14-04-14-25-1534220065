module.exports = function main(input) {
	var code = [
	['._.','...','._.','._.','...','._.','._.','._.','._.','._.'],
	['|.|','..|','._|','._|','|_|','|_.','|_.','..|','|_|','|_|'],
	['|_|','..|','|_.','._|','..|','._|','|_|','..|','|_|','..|']];
	var line1 = "";
	var line2 = "";
	var line3 = "";
	for (var i = 0;i<input.length;i++){
		var pick_num = input[i]; 
		line1 = line1 + code[0][pick_num] + ' ';
		line2 = line2 + code[1][pick_num] + ' ';
		line3 = line3 + code[2][pick_num] + ' ';
	}
	
	line1 = line1.substr(0, line1.length - 1) + '\n';
	line2 = line2.substr(0, line2.length - 1) + '\n';
	line3 = line3.substr(0, line3.length - 1) + '\n';

	return line1 + line2 + line3;
};