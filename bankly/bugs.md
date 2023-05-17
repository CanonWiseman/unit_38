-BUG #1: deleted duplicate of module exports in app.js

-BUG #2: removed params from getAll due to being unnecessary

-BUG #3: get all users route should return only basic information but returns phone and email in addition to needed info 

-BUG #4: removed auth in the beginning of users edit route because the middleware auth is already covering it.

-BUG #5: changed how update field gets variables from req.body so only necessary fields will be passed in for changes

-BUG #6: Changed jwt.decode() to jwt.verify() to ensure more security