# extension1
very simple chrome extension that stores a string to local storage

To install extension:
1: clone or download files
2: go to: chrome://extensions
3: toggle "Developer mode" switch in upper right hand corner
4: click "Load unpacked" button and navigate to the folder containing the files you cloned

A new extension should appear called "String Extension 1.0"

Once loaded click the "background views" link and navigate to the console.

copy and paste into the console and hit enter: set("This is the default string")

close the entire window and return to chrome://extensions and type: ret()

you should see "This is the default string" returned.

You can run the set() function with what ever string you would like and it gets stored over the previous string
and will be returned with the ret() function
