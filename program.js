process.stdin.setEncoding('utf-8');

process.stdin.on('readable', function() {
    var input = process.stdin.read();

    if(input !== null) {
    	var instruction = input.toString().trim();
    	switch (instruction) {
	    	case '/exit':
	    		process.stdout.write('Quitting app!\n');
	    		process.exit();
	    	case '/node':
			process.stdout.write(process.versions.node);
			break;
	    	case '/sysLang':
	    		process.stdout.write(process.env.LANG);
	    		break;
	    	default:
	    		process.stderr.write('Wrong instruction!\n')
	    }
    }
});
